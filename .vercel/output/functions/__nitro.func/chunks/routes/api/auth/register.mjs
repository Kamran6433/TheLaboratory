import { d as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import { a as auth, d as db } from '../../../_/firebase.mjs';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { setDoc, doc } from '@firebase/firestore';
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
import '@firebase/storage';

const register = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password, name, number, school } = body;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userData = {
      email,
      password,
      name,
      number,
      school,
      subscriptionStatus: "inactive",
      // Default value
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      emailVerified: false
    };
    try {
      await setDoc(doc(db, "users", user.uid), userData);
    } catch (error) {
      console.error("Firestore error:", error);
      return {
        success: false,
        message: error.message || "An error occurred during setDoc()"
      };
    }
    const idToken = await user.getIdToken();
    return {
      success: true,
      message: "User registered successfully",
      user: {
        uid: user.uid,
        email: user.email,
        ...userData
      },
      idToken
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      message: error.message || "An error occurred during registration"
    };
  }
});

export { register as default };
//# sourceMappingURL=register.mjs.map
