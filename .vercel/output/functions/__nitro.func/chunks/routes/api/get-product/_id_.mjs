import { d as defineEventHandler, u as useRuntimeConfig } from '../../../runtime.mjs';
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

const _id_ = defineEventHandler(async (event) => {
  const productId = event.context.params.id;
  const stripe = new Stripe(useRuntimeConfig().private.STRIPE_SECRET_KEY);
  try {
    const product = await stripe.products.retrieve(productId, {
      expand: ["default_price"]
    });
    return {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.default_price.unit_amount
      }
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { error: "Failed to fetch product" };
  }
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
