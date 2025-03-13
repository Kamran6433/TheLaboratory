import { a7 as defineNuxtRouteMiddleware, a3 as auth$1, a8 as executeAsync, a as navigateTo } from './server.mjs';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import 'vue';
import '../runtime.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';

const auth = defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const userStore = useUserStore();
  const publicPages = ["/login", "/sign-up", "/verify-email"];
  const isPublicPage = publicPages.includes(to.path);
  const user = auth$1.currentUser;
  if (user) {
    if (!userStore.isAuthenticated) {
      [__temp, __restore] = executeAsync(() => user.reload()), await __temp, __restore();
      userStore.setUser({
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified
      });
    }
    if (isPublicPage) {
      return navigateTo("/");
    }
    if (!user.emailVerified && to.path !== "/verify-email") {
      return navigateTo("/verify-email");
    }
  } else {
    userStore.clearUser();
    if (isPublicPage) {
      return;
    }
    return navigateTo("/login");
  }
  if (!userStore.isAuthenticated && !isPublicPage) {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-unTVLAse.mjs.map
