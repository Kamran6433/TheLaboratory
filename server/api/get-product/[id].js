// /api/get-product/[id].js
import { defineEventHandler } from "h3";
import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
  const productId = event.context.params.id;
  const stripe = new Stripe(useRuntimeConfig().private.STRIPE_SECRET_KEY);

  try {
    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price']
    });

    return {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.default_price.unit_amount,
      }
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return { error: 'Failed to fetch product' };
  }
});