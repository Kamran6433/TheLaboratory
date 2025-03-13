import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, V as VContainer, e as VRow } from './server.mjs';
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
    class: "max-width-1600"
  }, _attrs))}><section class="box3 hero">`);
  _push(ssrRenderComponent(VContainer, {
    class: "box1 pa-2",
    "data-aos": "fade-up",
    "data-aos-duration": "300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, {
          class: "box5 py-20",
          justify: "center",
          "justify-md": "space-between",
          "justify-xl": "center",
          align: "center",
          "align-lg": "start",
          "no-gutters": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>This page will be displayed at the /alevel route.</p>`);
            } else {
              return [createVNode("p", null, "This page will be displayed at the /alevel route.")];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [createVNode(VRow, {
          class: "box5 py-20",
          justify: "center",
          "justify-md": "space-between",
          "justify-xl": "center",
          align: "center",
          "align-lg": "start",
          "no-gutters": ""
        }, {
          default: withCtx(() => [createVNode("p", null, "This page will be displayed at the /alevel route.")]),
          _: 1
        })];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/alevel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alevel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { alevel as default };
//# sourceMappingURL=alevel-_pX9x89U.mjs.map
