// server/api/stripe-payment-checkout-session.js
import { defineEventHandler } from "h3";
import Stripe from 'stripe';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import { getApp, getApps, initializeApp, cert } from 'firebase-admin/app';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const stripe = new Stripe(config.private.STRIPE_SECRET_KEY);

  if (getApps().length === 0) {
    initializeApp({
      credential: cert(config.private.FIREBASE_ADMIN_CREDENTIALS),
    });
  }

  const body = await readBody(event);
  const { user_id, productId, planTitle, planPrice } = body;

  console.log('Received payment request:', { user_id, productId, planTitle, planPrice });

  try {
    // Check if the user already has a Stripe customer ID
    const userDoc = await getDoc(doc(db, 'users', user_id));
    let stripeCustomerId = userDoc.data()?.stripeCustomerId;
    console.log('CUSTOMER ALREADY HAS A stripeCustomerId:', stripeCustomerId);

    let sessionOptions = {
      cancel_url: 'https://localhost:3000/checkout/payment-cancel',
      success_url: 'https://localhost:3000/checkout/payment-success',
      mode: 'payment',
      metadata: {
        userId: user_id,
        planTitle: planTitle
      },
      client_reference_id: user_id,
      line_items: [{
        price_data: {
          currency: 'gbp',
          product: productId,
          unit_amount: planPrice,
        },
        quantity: 1,
      }],
    };

    // The database is updated through the stripe-webhook.js file

    if (stripeCustomerId) {
      sessionOptions.customer = stripeCustomerId;
    } else {
      sessionOptions.customer_creation = 'always';
    }

    const session = await stripe.checkout.sessions.create(sessionOptions);
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