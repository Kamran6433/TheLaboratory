import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "subscription-successful"
  }, _attrs))} data-v-7a035c4b><h1 data-v-7a035c4b>Subscription Successful!</h1><p data-v-7a035c4b>Thank you for subscribing. Your subscription was successful.</p>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Go to Home Page `);
      } else {
        return [createTextVNode(" Go to Home Page ")];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/subscription-successful.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const subscriptionSuccessful = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7a035c4b"]]);

export { subscriptionSuccessful as default };
//# sourceMappingURL=subscription-successful-BgD2iwK8.mjs.map
