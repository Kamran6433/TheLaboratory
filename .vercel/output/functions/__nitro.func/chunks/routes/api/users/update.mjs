import { d as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import { d as db } from '../../../_/firebase.mjs';
import { doc, updateDoc } from '@firebase/firestore';
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

const update = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { uid, isSubscribed } = body;
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      isSubscribed
    });
    return { success: true, message: "You Are Now Subscribed to Studybyte!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
});

export { update as default };
//# sourceMappingURL=update.mjs.map
