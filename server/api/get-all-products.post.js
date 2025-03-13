import { defineEventHandler } from "h3";
import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
  const stripe = new Stripe(useRuntimeConfig().private.STRIPE_SECRET_KEY);

  try {
    const products = await stripe.products.list({
      expand: ['data.default_price']
    });

    return {
      products: products.data.map(product => ({
        id: product.id,
        name: product.name,
        default_price: product.default_price.unit_amount,
      }))
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { error: 'Failed to fetch products' };
  }
});