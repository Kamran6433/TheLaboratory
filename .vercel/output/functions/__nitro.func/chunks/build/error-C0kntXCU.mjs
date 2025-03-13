import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './MainFooter-BNGkDk0i.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DRGY1ko4.mjs';
import { withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, V as VContainer } from './server.mjs';
import './logo-Bfw0K8zp.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './user-WKIwKJhJ.mjs';
import './FirebaseAuthentication-BPhjs1Bd.mjs';
import 'vue-router';
import './firebaseErrorParser--QNGMjHC.mjs';
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';

const _sfc_main = {
  components: {
    NavBar: __nuxt_component_0,
    MainFooter: __nuxt_component_2
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_MainFooter = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(ssrRenderComponent(VContainer, {
    id: "error-container",
    class: "text-center py-15"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mb-10 py-15"${_scopeId}>`);
        if (_ctx.error.statusCode === 404) {
          _push2(`<div${_scopeId}><h1${_scopeId}>Page not found :(</h1><p${_scopeId}>We&#39;re sorry, this page is not available. Error 404.</p></div>`);
        } else {
          _push2(`<div${_scopeId}><h1${_scopeId}>Something weird happened</h1><p${_scopeId}>We will fix this.</p></div>`);
        }
        _push2(`</div><span${_scopeId}>Go back to `);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Home page`);
            } else {
              return [createTextVNode("Home page")];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</span>`);
      } else {
        return [createVNode("div", {
          class: "mb-10 py-15"
        }, [_ctx.error.statusCode === 404 ? (openBlock(), createBlock("div", {
          key: 0
        }, [createVNode("h1", null, "Page not found :("), createVNode("p", null, "We're sorry, this page is not available. Error 404.")])) : (openBlock(), createBlock("div", {
          key: 1
        }, [createVNode("h1", null, "Something weird happened"), createVNode("p", null, "We will fix this.")]))]), createVNode("span", null, [createTextVNode("Go back to "), createVNode(_component_NuxtLink, {
          to: "/"
        }, {
          default: withCtx(() => [createTextVNode("Home page")]),
          _: 1
        })])];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_MainFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { error as default };
//# sourceMappingURL=error-C0kntXCU.mjs.map
