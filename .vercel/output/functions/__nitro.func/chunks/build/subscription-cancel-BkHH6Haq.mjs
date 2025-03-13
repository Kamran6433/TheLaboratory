import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "subscription-cancel"
  }, _attrs))} data-v-cf6294fe><h1 data-v-cf6294fe>Your order was unsuccessful</h1><p data-v-cf6294fe>Don&#39;t worry, you have not been charged anything.</p><a href="/tutoring" class="tutoring-link" data-v-cf6294fe>Go to Tutoring Page</a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/subscription-cancel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const subscriptionCancel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cf6294fe"]]);

export { subscriptionCancel as default };
//# sourceMappingURL=subscription-cancel-BkHH6Haq.mjs.map
