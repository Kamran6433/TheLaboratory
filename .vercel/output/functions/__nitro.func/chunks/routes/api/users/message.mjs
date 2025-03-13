import { d as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import { d as db } from '../../../_/firebase.mjs';
import { addDoc, collection } from '@firebase/firestore';
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

const message = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, phone, message, queryTypes, userId } = body;
  try {
    const messageData = {
      name,
      email,
      phone,
      message,
      queryTypes,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (userId) {
      messageData.userId = userId;
    }
    try {
      const docRef = await addDoc(collection(db, "message"), messageData);
      return {
        success: true,
        message: "Message sent successfully",
        messageId: docRef.id
      };
    } catch (error) {
      console.error("Firestore error:", error);
      return {
        success: false,
        message: error.message || "An error occurred while saving the message"
      };
    }
  } catch (error) {
    console.error("Message sending error:", error);
    return {
      success: false,
      message: error.message || "An error occurred while processing the message"
    };
  }
});

export { message as default };
//# sourceMappingURL=message.mjs.map
