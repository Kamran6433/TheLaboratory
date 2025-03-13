import { d as defineEventHandler, u as useRuntimeConfig, r as readBody, c as createError } from '../../runtime.mjs';
import Stripe from 'stripe';
import { d as db } from '../../_/firebase.mjs';
import { g as getApps, i as initializeApp, c as cert } from '../../_/index.mjs';
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
import 'fs';
import 'os';
import 'path';
import 'url';
import 'http';
import 'https';
import 'http2';
import 'events';
import '@fastify/busboy';
import 'zlib';
import 'jsonwebtoken';
import 'node-forge';

const stripePaymentCheckoutSession = defineEventHandler(async (event) => {
  var _a;
  const config = useRuntimeConfig();
  const stripe = new Stripe(config.private.STRIPE_SECRET_KEY);
  if (getApps().length === 0) {
    initializeApp({
      credential: cert(config.private.FIREBASE_ADMIN_CREDENTIALS)
    });
  }
  const body = await readBody(event);
  const { user_id, productId, planTitle, planPrice } = body;
  console.log("Received payment request:", { user_id, productId, planTitle, planPrice });
  try {
    const userDoc = await getDoc(doc(db, "users", user_id));
    let stripeCustomerId = (_a = userDoc.data()) == null ? void 0 : _a.stripeCustomerId;
    console.log("CUSTOMER ALREADY HAS A stripeCustomerId:", stripeCustomerId);
    let sessionOptions = {
      cancel_url: "https://localhost:3000/checkout/payment-cancel",
      success_url: "https://localhost:3000/checkout/payment-success",
      mode: "payment",
      metadata: {
        userId: user_id,
        planTitle
      },
      client_reference_id: user_id,
      line_items: [{
        price_data: {
          currency: "gbp",
          product: productId,
          unit_amount: planPrice
        },
        quantity: 1
      }]
    };
    if (stripeCustomerId) {
      sessionOptions.customer = stripeCustomerId;
    } else {
      sessionOptions.customer_creation = "always";
    }
    const session = await stripe.checkout.sessions.create(sessionOptions);
    return session;
  } catch (error) {
    console.error("Detailed error:", error);
    if (error.code === 7) {
      console.error("This is likely a permissions issue. Check your Firebase Admin initialization and service account permissions.");
    }
    return createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});

export { stripePaymentCheckoutSession as default };
//# sourceMappingURL=stripe-payment-checkout-session.mjs.map
