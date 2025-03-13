import { d as defineEventHandler, u as useRuntimeConfig, c as createError } from '../../runtime.mjs';
import Stripe from 'stripe';
import { d as db } from '../../_/firebase.mjs';
import { getDoc, doc, runTransaction, serverTimestamp } from '@firebase/firestore';
import 'node:http';
import 'node:https';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'xss';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:url';
import 'ipx';
import '@firebase/app';
import '@firebase/auth';
import '@firebase/storage';

async function storeStripeCustomerId(userId, stripeCustomerId) {
  try {
    await runTransaction(db, async (transaction) => {
      const userRef = doc(db, "users", userId);
      const stripeCustomerRef = doc(db, "stripeCustomers", stripeCustomerId);
      transaction.update(userRef, {
        stripeCustomerId,
        isCustomer: true,
        server_timestamp: serverTimestamp()
      });
      transaction.set(stripeCustomerRef, {
        userId,
        server_timestamp: serverTimestamp()
      }, { merge: true });
    });
    console.log(`Stored Stripe customer ID ${stripeCustomerId} for user ${userId}`);
  } catch (error) {
    console.error(`Error storing Stripe customer ID: ${error}`);
    throw error;
  }
}
async function updateUserData(stripeCustomerId, updateData, retries = 3) {
  console.log(`Updating data for Stripe customer ${stripeCustomerId}:`, updateData);
  for (let i = 0; i < retries; i++) {
    try {
      await runTransaction(db, async (transaction) => {
        const stripeCustomerRef = doc(db, "stripeCustomers", stripeCustomerId);
        const stripeCustomerDoc = await transaction.get(stripeCustomerRef);
        let userId;
        if (stripeCustomerDoc.exists()) {
          userId = stripeCustomerDoc.data().userId;
        } else {
          userId = updateData.userId;
        }
        if (!userId) {
          throw new Error(`No user found for Stripe customer ID: ${stripeCustomerId}`);
        }
        const userRef = doc(db, "users", userId);
        const userDoc = await transaction.get(userRef);
        const userUpdateData = {
          isCustomer: true,
          stripeCustomerId,
          server_timestamp: serverTimestamp()
        };
        if (updateData.subscriptionStatus)
          userUpdateData.subscriptionStatus = updateData.subscriptionStatus;
        if (updateData.subscriptionId)
          userUpdateData.subscriptionId = updateData.subscriptionId;
        if (updateData.subscriptionEndDate)
          userUpdateData.subscriptionEndDate = updateData.subscriptionEndDate;
        if (updateData.lastPaymentDate)
          userUpdateData.lastPaymentDate = updateData.lastPaymentDate;
        if (updateData.lastPaymentAmount)
          userUpdateData.lastPaymentAmount = updateData.lastPaymentAmount;
        if (updateData.lastPaymentStatus)
          userUpdateData.lastPaymentStatus = updateData.lastPaymentStatus;
        if (userDoc.exists()) {
          const existingData = userDoc.data();
          Object.assign(userUpdateData, existingData, updateData);
        } else {
          Object.assign(userUpdateData, updateData);
        }
        transaction.set(userRef, userUpdateData, { merge: true });
        transaction.set(stripeCustomerRef, {
          userId,
          ...updateData,
          server_timestamp: serverTimestamp()
        }, { merge: true });
        console.log(`Updated data for Stripe customer ${stripeCustomerId} and user ${userId}`);
      });
      return;
    } catch (error) {
      console.error(`Attempt ${i + 1}: Error updating data for Stripe customer ${stripeCustomerId}:`, error);
      if (i === retries - 1)
        throw error;
      await new Promise((resolve) => setTimeout(resolve, 1e3));
    }
  }
}
const stripeWebhook = defineEventHandler(async (event) => {
  var _a;
  const config = useRuntimeConfig();
  const stripe = new Stripe(config.private.STRIPE_SECRET_KEY);
  const rawBody = event.context.rawBody;
  const sig = event.node.req.headers["stripe-signature"];
  if (!sig) {
    console.error("No stripe-signature header found");
    return createError({ statusCode: 400, message: "No stripe-signature header found" });
  }
  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      config.private.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return createError({ statusCode: 400, message: `Webhook Error: ${err.message}` });
  }
  switch (stripeEvent.type) {
    case "checkout.session.completed":
      const session = stripeEvent.data.object;
      const checkoutCustomerId = session.customer;
      const userId = session.client_reference_id;
      console.log(`Received checkout.session.completed event for customer ${checkoutCustomerId} and user ${userId}`);
      if (userId && checkoutCustomerId) {
        const userDoc = await getDoc(doc(db, "users", userId));
        const existingStripeCustomerId = (_a = userDoc.data()) == null ? void 0 : _a.stripeCustomerId;
        if (!existingStripeCustomerId) {
          await storeStripeCustomerId(userId, checkoutCustomerId);
        } else if (existingStripeCustomerId !== checkoutCustomerId) {
          console.log(`Updating Stripe customer ID for user ${userId} from ${existingStripeCustomerId} to ${checkoutCustomerId}`);
          await storeStripeCustomerId(userId, checkoutCustomerId);
        }
        await new Promise((resolve) => setTimeout(resolve, 2e3));
        if (session.mode === "subscription") {
          const subscriptionId = session.subscription;
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
          const subscriptionData = {
            subscriptionId: subscription.id,
            subscriptionStatus: subscription.status,
            subscriptionEndDate: new Date(subscription.current_period_end * 1e3),
            subscriptionStartDate: new Date(subscription.start_date * 1e3),
            subscriptionPlanId: subscription.plan.id,
            subscriptionPlanName: subscription.plan.nickname || "Default Plan",
            stripeCustomerId: checkoutCustomerId,
            planAmount: subscription.plan.amount,
            planCurrency: subscription.plan.currency,
            planInterval: subscription.plan.interval
          };
          await updateUserData(checkoutCustomerId, subscriptionData);
        } else if (session.mode === "payment") {
          const paymentData = {
            userId,
            lastPaymentDate: new Date(session.created * 1e3),
            lastPaymentAmount: session.amount_total,
            lastPaymentStatus: "succeeded",
            paymentIntentId: session.payment_intent,
            planTitle: session.metadata.planTitle
          };
          await updateUserData(checkoutCustomerId, paymentData);
        }
      } else {
        console.error("Missing userId or customerId in checkout.session.completed event");
      }
      break;
    case "customer.subscription.updated":
      const updateSubscription = stripeEvent.data.object;
      const updateCustomerId = updateSubscription.customer;
      let updateSubscriptionData = {
        subscriptionId: updateSubscription.id,
        subscriptionStatus: updateSubscription.status,
        subscriptionEndDate: new Date(updateSubscription.current_period_end * 1e3),
        subscriptionStartDate: new Date(updateSubscription.start_date * 1e3),
        subscriptionPlanId: updateSubscription.plan.id,
        subscriptionPlanName: updateSubscription.plan.nickname || "Default Plan"
      };
      if (updateSubscription.cancel_at_period_end) {
        updateSubscriptionData.cancelAtPeriodEnd = updateSubscription.cancel_at_period_end, updateSubscriptionData.cancellationScheduledAt = /* @__PURE__ */ new Date();
        updateSubscriptionData.subscriptionStatus = "cancelling";
      }
      await updateUserData(updateCustomerId, updateSubscriptionData);
      break;
    case "customer.subscription.deleted":
      const deletedSubscription = stripeEvent.data.object;
      const deletedCustomerId = deletedSubscription.customer;
      let deletedSubscriptionData = {
        subscriptionId: deletedSubscription.id,
        subscriptionStatus: "inactive",
        subscriptionEndDate: new Date(deletedSubscription.current_period_end * 1e3),
        subscriptionStartDate: new Date(deletedSubscription.start_date * 1e3),
        subscriptionPlanId: deletedSubscription.plan.id,
        subscriptionPlanName: deletedSubscription.plan.nickname || "Default Plan"
      };
      await updateUserData(deletedCustomerId, deletedSubscriptionData);
      break;
    case "invoice.payment_succeeded":
      const invoice = stripeEvent.data.object;
      const invoiceCustomerId = invoice.customer;
      await updateUserData(invoiceCustomerId, {
        lastPaymentDate: new Date(invoice.created * 1e3),
        lastPaymentAmount: invoice.amount_paid,
        subscriptionStatus: stripeEvent.type === "invoice.payment_succeeded" ? "active" : "past_due"
      });
      break;
    case "invoice.payment_failed":
      const failedInvoice = stripeEvent.data.object;
      const failedInvoiceCustomerId = failedInvoice.customer;
      await updateUserData(failedInvoiceCustomerId, {
        subscriptionStatus: "past_due",
        lastFailedPaymentDate: new Date(failedInvoice.created * 1e3)
      });
      break;
    default:
      console.log(`Received event`);
  }
  return { received: true };
});

export { stripeWebhook as default };
//# sourceMappingURL=stripe-webhook.mjs.map
