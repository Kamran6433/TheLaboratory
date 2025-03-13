// server/api/stripe-webhook.js
import { defineEventHandler } from "h3";
import Stripe from 'stripe';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, collection, query, where, getDocs, runTransaction } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import update from "./users/update";

// async function getUserIdByStripeCustomerId(stripeCustomerId) {
//   const customerDoc = await getDoc(doc(db, 'stripeCustomers', stripeCustomerId));
//   if (!customerDoc.exists()) {
//     console.error(`No user found with Stripe customer ID: ${stripeCustomerId}`);
//     return null;
//   }
//   return customerDoc.data().userId;
// }
async function getUserIdByStripeCustomerId(stripeCustomerId, retries = 3) {
  for (let i = 0; i < retries; i++) {
    const customerDoc = await getDoc(doc(db, 'stripeCustomers', stripeCustomerId));
    if (customerDoc.exists()) {
      return customerDoc.data().userId;
    }
    console.log(`Retry ${i + 1}: No user found with Stripe customer ID: ${stripeCustomerId}`);
    if (i < retries - 1) await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retrying
  }
  console.error(`No user found with Stripe customer ID: ${stripeCustomerId} after ${retries} attempts`);
  return null;
}

// async function getUserIdByStripeCustomerId(stripeCustomerId, retries = 3) {
//   for (let i = 0; i < retries; i++) {
//     const usersRef = collection(db, 'users');
//     const q = query(usersRef, where('stripeCustomerId', '==', stripeCustomerId));
//     const querySnapshot = await getDocs(q);
//     if (!querySnapshot.empty) {
//       console.log(`Found user with Stripe customer ID: ${stripeCustomerId}`);
//       return querySnapshot.docs[0].id;
//     }
//     if (i < retries - 1) await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retrying
//   }
//   console.error(`No user found with Stripe customer ID: ${stripeCustomerId} after ${retries} attempts`);
//   return null;
// }

// async function storeStripeCustomerId(userId, stripeCustomerId) {
//   try {
//     // Update users collection
//     await updateDoc(doc(db, 'users', userId), { 
//       stripeCustomerId: stripeCustomerId,
//       isCustomer: true,
//       server_timestamp: serverTimestamp()
//     });

//     // Create or update stripeCustomers document
//     await setDoc(doc(db, 'stripeCustomers', stripeCustomerId), { 
//       userId: userId,
//       server_timestamp: serverTimestamp()
//     }, { merge: true });

//     console.log(`Stored Stripe customer ID ${stripeCustomerId} for user ${userId}`);
//   } catch (error) {
//     console.error(`Error storing Stripe customer ID: ${error}`);
//     throw error;
//   }
// }
async function storeStripeCustomerId(userId, stripeCustomerId) {
  try {
    await runTransaction(db, async (transaction) => {
      const userRef = doc(db, 'users', userId);
      const stripeCustomerRef = doc(db, 'stripeCustomers', stripeCustomerId);

      transaction.update(userRef, { 
        stripeCustomerId: stripeCustomerId,
        isCustomer: true,
        server_timestamp: serverTimestamp()
      });

      transaction.set(stripeCustomerRef, { 
        userId: userId,
        server_timestamp: serverTimestamp()
      }, { merge: true });
    });

    console.log(`Stored Stripe customer ID ${stripeCustomerId} for user ${userId}`);
  } catch (error) {
    console.error(`Error storing Stripe customer ID: ${error}`);
    throw error;
  }
}


// async function updateUserSubscription(stripeCustomerId, subscriptionData) {
//   try {
//     const userId = await getUserIdByStripeCustomerId(stripeCustomerId);
//     if (!userId) {
//       console.error(`No user found for Stripe customer ID: ${stripeCustomerId}`);
//       return;
//     }

//     // Update stripeCustomers collection
//     await updateDoc(doc(db, 'stripeCustomers', stripeCustomerId), {
//       ...subscriptionData,
//       server_timestamp: serverTimestamp()
//     });

//     // Prepare user update data, only including defined fields
//     const userUpdateData = {
//       isCustomer: true,
//       server_timestamp: serverTimestamp()
//     };

//     if (subscriptionData.subscriptionStatus !== undefined) {
//       userUpdateData.subscriptionStatus = subscriptionData.subscriptionStatus;
//     }
//     if (subscriptionData.subscriptionId !== undefined) {
//       userUpdateData.subscriptionId = subscriptionData.subscriptionId;
//     }
//     if (subscriptionData.subscriptionEndDate !== undefined) {
//       userUpdateData.subscriptionEndDate = subscriptionData.subscriptionEndDate;
//     }

//     // Update users collection
//     await updateDoc(doc(db, 'users', userId), userUpdateData);
    
//     console.log(`Updated subscription for Stripe customer ${stripeCustomerId} and user ${userId}`);
//   } catch (error) {
//     console.error(`Error updating subscription for Stripe customer ${stripeCustomerId}:`, error);
//     throw error;
//   }
// }

// async function updateUserPayment(stripeCustomerId, paymentData) {
//   try {
//     const userId = await getUserIdByStripeCustomerId(stripeCustomerId);
//     if (!userId) {
//       console.error(`No user found for Stripe customer ID: ${stripeCustomerId}`);
//       return;
//     }

//     // Update stripeCustomers collection
//     await updateDoc(doc(db, 'stripeCustomers', stripeCustomerId), {
//       ...paymentData,
//       server_timestamp: serverTimestamp()
//     });

//     // Update users collection
//     const userUpdateData = {
//       isCustomer: true,
//       lastPaymentDate: paymentData.lastPaymentDate,
//       lastPaymentAmount: paymentData.lastPaymentAmount,
//       lastPaymentStatus: paymentData.lastPaymentStatus,
//       server_timestamp: serverTimestamp()
//     };

//     await updateDoc(doc(db, 'users', userId), userUpdateData);
    
//     console.log(`Updated payment for Stripe customer ${stripeCustomerId} and user ${userId}`);
//   } catch (error) {
//     console.error(`Error updating payment for Stripe customer ${stripeCustomerId}:`, error);
//     throw error;
//   }
// }
// async function updateUserData(stripeCustomerId, updateData) {
//   return runTransaction(db, async (transaction) => {
//     const userId = await getUserIdByStripeCustomerId(stripeCustomerId);
//     if (!userId) {
//       throw new Error(`No user found for Stripe customer ID: ${stripeCustomerId}`);
//     }

//     const userRef = doc(db, 'users', userId);
//     transaction.update(userRef, {
//       ...updateData,
//       server_timestamp: serverTimestamp()
//     });

//     console.log(`Updated data for Stripe customer ${stripeCustomerId} and user ${userId}`);
//   });
// }
async function updateUserData(stripeCustomerId, updateData, retries = 3) {
  console.log(`Updating data for Stripe customer ${stripeCustomerId}:`, updateData);
  for (let i = 0; i < retries; i++) {
    try {
      await runTransaction(db, async (transaction) => {
        const stripeCustomerRef = doc(db, 'stripeCustomers', stripeCustomerId);
        const stripeCustomerDoc = await transaction.get(stripeCustomerRef);
        
        let userId;
        if (stripeCustomerDoc.exists()) {
          userId = stripeCustomerDoc.data().userId;
        } else {
          userId = updateData.userId; // Assuming userId is passed in updateData for new customers
        }

        if (!userId) {
          throw new Error(`No user found for Stripe customer ID: ${stripeCustomerId}`);
        }

        const userRef = doc(db, 'users', userId);
        const userDoc = await transaction.get(userRef);

        // Prepare user update data
        const userUpdateData = {
          isCustomer: true,
          stripeCustomerId: stripeCustomerId,
          server_timestamp: serverTimestamp()
        };

        // Add subscription fields only if they exist
        if (updateData.subscriptionStatus) userUpdateData.subscriptionStatus = updateData.subscriptionStatus;
        if (updateData.subscriptionId) userUpdateData.subscriptionId = updateData.subscriptionId;
        if (updateData.subscriptionEndDate) userUpdateData.subscriptionEndDate = updateData.subscriptionEndDate;

        // Add payment fields
        if (updateData.lastPaymentDate) userUpdateData.lastPaymentDate = updateData.lastPaymentDate;
        if (updateData.lastPaymentAmount) userUpdateData.lastPaymentAmount = updateData.lastPaymentAmount;
        if (updateData.lastPaymentStatus) userUpdateData.lastPaymentStatus = updateData.lastPaymentStatus;

        // Merge existing data with new data
        if (userDoc.exists()) {
          const existingData = userDoc.data();
          Object.assign(userUpdateData, existingData, updateData);
        } else {
          Object.assign(userUpdateData, updateData);
        }
        
        // Update user document
        transaction.set(userRef, userUpdateData, { merge: true });

        // Update stripeCustomers document
        transaction.set(stripeCustomerRef, {
          userId: userId,
          ...updateData,
          server_timestamp: serverTimestamp()
        }, { merge: true });

        console.log(`Updated data for Stripe customer ${stripeCustomerId} and user ${userId}`);
      });
      return; // Success, exit the function
    } catch (error) {
      console.error(`Attempt ${i + 1}: Error updating data for Stripe customer ${stripeCustomerId}:`, error);
      if (i === retries - 1) throw error; // Throw on last attempt
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before retrying
    }
  }
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const stripe = new Stripe(config.private.STRIPE_SECRET_KEY);

  // console.log('Webhook Secret:', config.private.STRIPE_WEBHOOK_SECRET);
  // console.log('All headers:', event.node.req.headers);

  const rawBody = event.context.rawBody;

  // console.log('Raw body:', rawBody);
  // console.log('Raw body length:', rawBody.length);

  const sig = event.node.req.headers['stripe-signature'];
  // console.log('Stripe signature:', sig);

  if (!sig) {
    console.error('No stripe-signature header found');
    return createError({ statusCode: 400, message: 'No stripe-signature header found' });
  }

  let stripeEvent;


  try {
    stripeEvent = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      config.private.STRIPE_WEBHOOK_SECRET
    );
    // console.log('Stripe event constructed:', stripeEvent.type);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return createError({ statusCode: 400, message: `Webhook Error: ${err.message}` });
  }

  // Handle the events
  switch (stripeEvent.type) {

    // ---------------------- Handle customer creation ----------------------
    // This event is triggered when a new customer is created in Stripe.
    // case 'customer.created':
    //   const body = await readBody(event);
    //   console.log('Received body:', body);
    //   const customer = stripeEvent.data.object;
    //   console.log(`Received customer.created event:`, JSON.stringify(customer, null, 2));
    //   // const userId = await getUserIdByStripeCustomerId(customer.id);
    //   console.log(`Received customer.created event userId:`, userId);
      
    //   if (userId && customer.id) {
    //     await storeStripeCustomerId(userId, customer.id);
    //   } else {
    //     console.error('customer.created event received without userId in metadata');
    //   }
    //   break;

    case 'checkout.session.completed':
      const session = stripeEvent.data.object;
      const checkoutCustomerId = session.customer;
      const userId = session.client_reference_id;
    
      console.log(`Received checkout.session.completed event for customer ${checkoutCustomerId} and user ${userId}`);
    
      if (userId && checkoutCustomerId) {
        // Check if this customer ID is already associated with the user
        const userDoc = await getDoc(doc(db, 'users', userId));
        const existingStripeCustomerId = userDoc.data()?.stripeCustomerId;
    
        if (!existingStripeCustomerId) {
          // If the user doesn't have a Stripe customer ID, store the new one
          await storeStripeCustomerId(userId, checkoutCustomerId);
        } else if (existingStripeCustomerId !== checkoutCustomerId) {
          // If the user has a different Stripe customer ID, update it
          console.log(`Updating Stripe customer ID for user ${userId} from ${existingStripeCustomerId} to ${checkoutCustomerId}`);
          await storeStripeCustomerId(userId, checkoutCustomerId);
        }

        // Add a small delay before updating user data
        await new Promise(resolve => setTimeout(resolve, 2000));
    
        if (session.mode === 'subscription') {
          const subscriptionId = session.subscription;
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    
          const subscriptionData = {
            subscriptionId: subscription.id,
            subscriptionStatus: subscription.status,
            subscriptionEndDate: new Date(subscription.current_period_end * 1000),
            subscriptionStartDate: new Date(subscription.start_date * 1000),
            subscriptionPlanId: subscription.plan.id,
            subscriptionPlanName: subscription.plan.nickname || 'Default Plan',
            stripeCustomerId: checkoutCustomerId,
            planAmount: subscription.plan.amount,
            planCurrency: subscription.plan.currency,
            planInterval: subscription.plan.interval,
          };
    
          await updateUserData(checkoutCustomerId, subscriptionData);
        } else if (session.mode === 'payment') {
          const paymentData = {
            userId: userId,
            lastPaymentDate: new Date(session.created * 1000),
            lastPaymentAmount: session.amount_total,
            lastPaymentStatus: 'succeeded',
            paymentIntentId: session.payment_intent,
            planTitle: session.metadata.planTitle
          };
    
          await updateUserData(checkoutCustomerId, paymentData);
        }
      } else {
        console.error('Missing userId or customerId in checkout.session.completed event');
      }
      break;

    // ---------------------- Handle subscription creation ----------------------
    // This is the key event to handle when a new subscription is started.
    // case 'customer.subscription.created':
    //   const createSubscription = stripeEvent.data.object;
    //   const createCustomerId = createSubscription.customer;
    //   // console.log(`Received customer.subscription.created event:`, JSON.stringify(createCustomerId, null, 2));
      
    //   let createSubscriptionData = {
    //     subscriptionId: createSubscription.id,
    //     subscriptionStatus: createSubscription.status,
    //     subscriptionEndDate: new Date(createSubscription.current_period_end * 1000),
    //     subscriptionStartDate: new Date(createSubscription.start_date * 1000),
    //     subscriptionPlanId: createSubscription.plan.id,
    //     subscriptionPlanName: createSubscription.plan.nickname || 'Default Plan',
    //   };

    //   // Update database based on the subscription status
    //   await updateUserSubscription(createCustomerId, createSubscriptionData);

    // ---------------------- Handle subscription update ----------------------
    // This event is useful for tracking changes to the subscription, such as upgrades, downgrades, or cancellations.
    case 'customer.subscription.updated':
      const updateSubscription = stripeEvent.data.object;
      const updateCustomerId = updateSubscription.customer;
      
      let updateSubscriptionData = {
        subscriptionId: updateSubscription.id,
        subscriptionStatus: updateSubscription.status,
        subscriptionEndDate: new Date(updateSubscription.current_period_end * 1000),
        subscriptionStartDate: new Date(updateSubscription.start_date * 1000),
        subscriptionPlanId: updateSubscription.plan.id,
        subscriptionPlanName: updateSubscription.plan.nickname || 'Default Plan',
      };

      // If the subscription is scheduled to be canceled at the period end
      if (updateSubscription.cancel_at_period_end) {
        updateSubscriptionData.cancelAtPeriodEnd = updateSubscription.cancel_at_period_end,
        updateSubscriptionData.cancellationScheduledAt = new Date();
        updateSubscriptionData.subscriptionStatus = 'cancelling';
      }

      // Update database based on the subscription status
      await updateUserData(updateCustomerId, updateSubscriptionData);
      break;

    // ---------------------- Handle subscription cancellation ----------------------
    // When a subscription is immediately canceled (ends now).
    // When a subscription that was set to cancel at the end of the billing period finally reaches that end date.
    case 'customer.subscription.deleted':
      const deletedSubscription = stripeEvent.data.object;
      const deletedCustomerId = deletedSubscription.customer;
      
      let deletedSubscriptionData = {
        subscriptionId: deletedSubscription.id,
        subscriptionStatus: 'inactive',
        subscriptionEndDate: new Date(deletedSubscription.current_period_end * 1000),
        subscriptionStartDate: new Date(deletedSubscription.start_date * 1000),
        subscriptionPlanId: deletedSubscription.plan.id,
        subscriptionPlanName: deletedSubscription.plan.nickname || 'Default Plan',
      };

      // Update database based on the subscription status
      await updateUserData(deletedCustomerId, deletedSubscriptionData);

      // Optionally, trigger any necessary actions in your app
      // e.g., send an email, revoke access to premium features, etc.
      //---------------- await handleSubscriptionCancellation(customerId); ----------------
      break;

    // This event is triggered every time a recurring subscription payment is successful
    case 'invoice.payment_succeeded':
      const invoice = stripeEvent.data.object;
      const invoiceCustomerId = invoice.customer;

      await updateUserData(invoiceCustomerId, {
        lastPaymentDate: new Date(invoice.created * 1000),
        lastPaymentAmount: invoice.amount_paid,
        subscriptionStatus: stripeEvent.type === 'invoice.payment_succeeded' ? 'active' : 'past_due',
      });
      break;

    case 'invoice.payment_failed':
      const failedInvoice = stripeEvent.data.object;
      const failedInvoiceCustomerId = failedInvoice.customer

      await updateUserData(failedInvoiceCustomerId, {
        subscriptionStatus: 'past_due',
        lastFailedPaymentDate: new Date(failedInvoice.created * 1000),
      });
      // might want to notify the user, update order status, etc.
      break;


      // case 'payment_intent.succeeded':
      // case 'payment_intent.payment_failed':
      //   const paymentIntent = stripeEvent.data.object;
      //   const paymentIntentCustomerId = paymentIntent.customer;
        
      //   const paymentData = {
      //     lastPaymentIntentId: paymentIntent.id,
      //     lastPaymentAmount: paymentIntent.amount,
      //     lastPaymentDate: new Date(paymentIntent.created * 1000),
      //     lastPaymentStatus: stripeEvent.type === 'payment_intent.succeeded' ? 'succeeded' : 'failed',
      //   };
      
      //   await updateUserData(paymentIntentCustomerId, paymentData);
      //   break;
  
    default:
      // console.log(`Received event ${stripeEvent.type}: ${JSON.stringify(stripeEvent.data.object)}`);
      console.log(`Received event`);
    }

  return { received: true };
});