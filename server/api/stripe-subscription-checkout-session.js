// server/api/stripe-subscription-checkout-session.js
import { defineEventHandler } from "h3";
import Stripe from 'stripe';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import { getApp, getApps, initializeApp, cert } from 'firebase-admin/app';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const stripe = new Stripe(useRuntimeConfig().private.STRIPE_SECRET_KEY);

  if (getApps().length === 0) {
    initializeApp({
      credential: cert(config.private.FIREBASE_ADMIN_CREDENTIALS),
    });
  }

  const body = await readBody(event);
  console.log('Received body:', JSON.stringify(body, null, 2));
  const { user_id, productId, priceId, subscriptionName, subscriptionPrice, subscriptionType } = body;

  console.log('Received request:', { user_id, priceId, subscriptionName, subscriptionPrice, subscriptionType });

  try {
    // Check if the user already has a Stripe customer ID
    const userDoc = await getDoc(doc(db, 'users', user_id));
    let stripeCustomerId = userDoc.data()?.stripeCustomerId;
    console.log('CUSTOMER ALREADY HAS A stripeCustomerId:', stripeCustomerId);

    let sessionOptions = {
      cancel_url: 'https://localhost:3000/checkout/subscription-cancel',
      success_url: 'https://localhost:3000/checkout/subscription-successful',
      mode: 'subscription',
      metadata: {
        userId: user_id,
      },
      client_reference_id: user_id,
      line_items: [{
        price_data: {
          currency: 'gbp',
          product: productId,  // Extract product ID from price ID
          unit_amount: subscriptionPrice,
          recurring: {
            interval: subscriptionType.toLowerCase() === 'yearly' ? 'year' : 'month'
          }
        },
        quantity: 1,
      }],
    };

    // The database is updated through the stripe-webhook.js file
    
    if (stripeCustomerId) {
      // If the user already has a Stripe customer ID, use it
      sessionOptions.customer = stripeCustomerId;
    }

    console.log('Creating session with options:', sessionOptions);
    const session = await stripe.checkout.sessions.create(sessionOptions);
    console.log('Session created:', session.id);
    return session;
  } catch (error) {
    console.error('Detailed error:', error);
    if (error.code === 7) {
      console.error('This is likely a permissions issue. Check your Firebase Admin initialization and service account permissions.');
    }
    return createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});