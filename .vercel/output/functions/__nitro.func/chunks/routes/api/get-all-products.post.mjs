import { d as defineEventHandler, u as useRuntimeConfig } from '../../runtime.mjs';
import Stripe from 'stripe';
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

const getAllProducts_post = defineEventHandler(async (event) => {
  const stripe = new Stripe(useRuntimeConfig().private.STRIPE_SECRET_KEY);
  try {
    const products = await stripe.products.list({
      expand: ["data.default_price"]
    });
    return {
      products: products.data.map((product) => ({
        id: product.id,
        name: product.name,
        default_price: product.default_price.unit_amount
      }))
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { error: "Failed to fetch products" };
  }
});

export { getAllProducts_post as default };
//# sourceMappingURL=get-all-products.post.mjs.map
