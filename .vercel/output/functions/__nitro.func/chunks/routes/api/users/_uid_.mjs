import { d as defineEventHandler } from '../../../runtime.mjs';
import { d as db } from '../../../_/firebase.mjs';
import { doc, getDoc } from '@firebase/firestore';
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

const _uid_ = defineEventHandler(async (event) => {
  const { uid } = event.context.params;
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return { success: true, data: userSnap.data() };
    } else {
      return { success: false, message: "User not found" };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
});

export { _uid_ as default };
//# sourceMappingURL=_uid_.mjs.map
