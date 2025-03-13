// server/api/stripe-subscription-cancel-session.js
import { defineEventHandler } from "h3";
import Stripe from 'stripe';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const stripe = new Stripe(config.private.STRIPE_SECRET_KEY);

  const body = await readBody(event);
  const { userId, subscriptionId } = body;

  console.log('Received cancellation request:', { userId, subscriptionId });

  if (!userId || !subscriptionId) {
    return createError({
      statusCode: 400,
      statusMessage: 'Missing userId or subscriptionId'
    });
  }

  try {
    // Fetch the user document to get the Stripe customer ID
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }
    const userData = userDoc.data();
    if (!userData.stripeCustomerId) {
      throw new Error('User is not a Stripe customer');
    }

    // Fetch the subscription from Stripe
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    if (subscription.customer !== userData.stripeCustomerId) {
      throw new Error('Subscription does not belong to this user');
    }

    // Cancel the subscription at the end of the current period
    const cancelledSubscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true
    });
    
    // The database is updated through the stripe-webhook.js file

    return {
      success: true,
      message: 'Subscription cancellation scheduled',
      subscriptionStatus: cancelledSubscription.status,
      cancelAtPeriodEnd: cancelledSubscription.cancel_at_period_end,
      currentPeriodEnd: new Date(cancelledSubscription.current_period_end * 1000)
    };
  } catch (error) {
    console.error('Error cancelling subscription:', error);
    return createError({
      statusCode: 500,
      statusMessage: `Error cancelling subscription: ${error.message}`
    });
  }
});