import { d as defineEventHandler, u as useRuntimeConfig, r as readBody, c as createError } from '../../runtime.mjs';
import Stripe from 'stripe';
import { d as db } from '../../_/firebase.mjs';
import { getDoc, doc } from '@firebase/firestore';
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

const stripeSubscriptionCancelSession = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const stripe = new Stripe(config.private.STRIPE_SECRET_KEY);
  const body = await readBody(event);
  const { userId, subscriptionId } = body;
  console.log("Received cancellation request:", { userId, subscriptionId });
  if (!userId || !subscriptionId) {
    return createError({
      statusCode: 400,
      statusMessage: "Missing userId or subscriptionId"
    });
  }
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (!userDoc.exists()) {
      throw new Error("User not found");
    }
    const userData = userDoc.data();
    if (!userData.stripeCustomerId) {
      throw new Error("User is not a Stripe customer");
    }
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    if (subscription.customer !== userData.stripeCustomerId) {
      throw new Error("Subscription does not belong to this user");
    }
    const cancelledSubscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true
    });
    return {
      success: true,
      message: "Subscription cancellation scheduled",
      subscriptionStatus: cancelledSubscription.status,
      cancelAtPeriodEnd: cancelledSubscription.cancel_at_period_end,
      currentPeriodEnd: new Date(cancelledSubscription.current_period_end * 1e3)
    };
  } catch (error) {
    console.error("Error cancelling subscription:", error);
    return createError({
      statusCode: 500,
      statusMessage: `Error cancelling subscription: ${error.message}`
    });
  }
});

export { stripeSubscriptionCancelSession as default };
//# sourceMappingURL=stripe-subscription-cancel-session.mjs.map
