import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, V as VContainer, e as VRow, f as VCol, t as VBtn } from './server.mjs';

const _imports_0 = "" + buildAssetsURL("Saly-15.I3n7vAXa.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VContainer, mergeProps({
    fluid: "",
    class: "max-width-1600 pt-12 pb-6 px-4 px-lg-12"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "7",
                class: "d-flex flex-column justify-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="banner-text text-4xl sm:text-5xl md:text-6xl font-bold mb-4" data-v-5053636a${_scopeId3}> Book one-to-one tuition with our highly-qualified tutors. </h1><p class="banner-subtext text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed mb-6" data-v-5053636a${_scopeId3}> Help your child achieve their full potential. </p>`);
                    _push4(ssrRenderComponent(VBtn, {
                      to: "/tutoring",
                      color: "#ca7ad4",
                      "x-large": "",
                      elevation: "0",
                      class: "align-self-start px-6 rounded-xl mb-4"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-lg md:text-xl" data-v-5053636a${_scopeId4}> Get Started </p>`);
                        } else {
                          return [createVNode("p", {
                            class: "text-lg md:text-xl"
                          }, " Get Started ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [createVNode("h1", {
                      class: "banner-text text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                    }, " Book one-to-one tuition with our highly-qualified tutors. "), createVNode("p", {
                      class: "banner-subtext text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed mb-6"
                    }, " Help your child achieve their full potential. "), createVNode(VBtn, {
                      to: "/tutoring",
                      color: "#ca7ad4",
                      "x-large": "",
                      elevation: "0",
                      class: "align-self-start px-6 rounded-xl mb-4"
                    }, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-lg md:text-xl"
                      }, " Get Started ")]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "5",
                class: "d-flex justify-center align-center"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Tutoring session" class="-my-16" style="${ssrRenderStyle({
                      "width": "100%",
                      "max-width": "400px"
                    })}" data-v-5053636a${_scopeId3}>`);
                  } else {
                    return [createVNode("img", {
                      src: _imports_0,
                      alt: "Tutoring session",
                      class: "-my-16",
                      style: {
                        "width": "100%",
                        "max-width": "400px"
                      }
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [createVNode(VCol, {
                cols: "12",
                md: "7",
                class: "d-flex flex-column justify-center"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "banner-text text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                }, " Book one-to-one tuition with our highly-qualified tutors. "), createVNode("p", {
                  class: "banner-subtext text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed mb-6"
                }, " Help your child achieve their full potential. "), createVNode(VBtn, {
                  to: "/tutoring",
                  color: "#ca7ad4",
                  "x-large": "",
                  elevation: "0",
                  class: "align-self-start px-6 rounded-xl mb-4"
                }, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-lg md:text-xl"
                  }, " Get Started ")]),
                  _: 1
                })]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                md: "5",
                class: "d-flex justify-center align-center"
              }, {
                default: withCtx(() => [createVNode("img", {
                  src: _imports_0,
                  alt: "Tutoring session",
                  class: "-my-16",
                  style: {
                    "width": "100%",
                    "max-width": "400px"
                  }
                })]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [createVNode(VRow, null, {
          default: withCtx(() => [createVNode(VCol, {
            cols: "12",
            md: "7",
            class: "d-flex flex-column justify-center"
          }, {
            default: withCtx(() => [createVNode("h1", {
              class: "banner-text text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            }, " Book one-to-one tuition with our highly-qualified tutors. "), createVNode("p", {
              class: "banner-subtext text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed mb-6"
            }, " Help your child achieve their full potential. "), createVNode(VBtn, {
              to: "/tutoring",
              color: "#ca7ad4",
              "x-large": "",
              elevation: "0",
              class: "align-self-start px-6 rounded-xl mb-4"
            }, {
              default: withCtx(() => [createVNode("p", {
                class: "text-lg md:text-xl"
              }, " Get Started ")]),
              _: 1
            })]),
            _: 1
          }), createVNode(VCol, {
            cols: "12",
            md: "5",
            class: "d-flex justify-center align-center"
          }, {
            default: withCtx(() => [createVNode("img", {
              src: _imports_0,
              alt: "Tutoring session",
              class: "-my-16",
              style: {
                "width": "100%",
                "max-width": "400px"
              }
            })]),
            _: 1
          })]),
          _: 1
        })];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BookTuition.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5053636a"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=BookTuition-DnszmD09.mjs.map
