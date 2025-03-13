import { useSSRContext, computed, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-Bfw0K8zp.mjs';
import { _ as _export_sfc, V as VContainer, e as VRow, f as VCol, t as VBtn } from './server.mjs';

const _sfc_main = {
  __name: "CallToAction",
  __ssrInlineRender: true,
  props: {
    startColor: {
      type: String,
      default: "#ffc3b6"
    },
    endColor: {
      type: String,
      default: "#fa9066"
    }
  },
  setup(__props) {
    const props = __props;
    const gradientStyle = computed(() => ({
      background: `linear-gradient(to right, ${props.startColor}, ${props.endColor})`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        style: gradientStyle.value,
        class: "px-4 md:px-12"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              align: "center",
              justify: "center",
              class: "max-width-1600 mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex justify-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Tutoring session" class="max-w-full h-auto object-contain" style="${ssrRenderStyle({
                          "max-width": "400px"
                        })}" data-v-e9ac3e6d${_scopeId3}>`);
                      } else {
                        return [createVNode("img", {
                          src: _imports_0,
                          alt: "Tutoring session",
                          class: "max-w-full h-auto object-contain",
                          style: {
                            "max-width": "400px"
                          }
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex flex-column justify-center mb-8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-3xl md:text-4xl font-bold text-black mb-4" data-v-e9ac3e6d${_scopeId3}> Sign-up to Studybyte today for FREE </h1><p class="text-lg md:text-xl mb-6" data-v-e9ac3e6d${_scopeId3}> We are here to help you get the best grades and achieve your academic goals. </p>`);
                        _push4(ssrRenderComponent(VBtn, {
                          to: "/sign-up",
                          size: "x-large",
                          color: "#000000",
                          variant: "elevated",
                          elevation: "0",
                          "prepend-icon": "mdi-checkbox-marked-circle",
                          class: "px-6 py-3 text-lg font-semibold rounded-xl align-self-start"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Sign up for Free `);
                            } else {
                              return [createTextVNode(" Sign up for Free ")];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [createVNode("h1", {
                          class: "text-3xl md:text-4xl font-bold text-black mb-4"
                        }, " Sign-up to Studybyte today for FREE "), createVNode("p", {
                          class: "text-lg md:text-xl mb-6"
                        }, " We are here to help you get the best grades and achieve your academic goals. "), createVNode(VBtn, {
                          to: "/sign-up",
                          size: "x-large",
                          color: "#000000",
                          variant: "elevated",
                          elevation: "0",
                          "prepend-icon": "mdi-checkbox-marked-circle",
                          class: "px-6 py-3 text-lg font-semibold rounded-xl align-self-start"
                        }, {
                          default: withCtx(() => [createTextVNode(" Sign up for Free ")]),
                          _: 1
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex justify-center"
                  }, {
                    default: withCtx(() => [createVNode("img", {
                      src: _imports_0,
                      alt: "Tutoring session",
                      class: "max-w-full h-auto object-contain",
                      style: {
                        "max-width": "400px"
                      }
                    })]),
                    _: 1
                  }), createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex flex-column justify-center mb-8"
                  }, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold text-black mb-4"
                    }, " Sign-up to Studybyte today for FREE "), createVNode("p", {
                      class: "text-lg md:text-xl mb-6"
                    }, " We are here to help you get the best grades and achieve your academic goals. "), createVNode(VBtn, {
                      to: "/sign-up",
                      size: "x-large",
                      color: "#000000",
                      variant: "elevated",
                      elevation: "0",
                      "prepend-icon": "mdi-checkbox-marked-circle",
                      class: "px-6 py-3 text-lg font-semibold rounded-xl align-self-start"
                    }, {
                      default: withCtx(() => [createTextVNode(" Sign up for Free ")]),
                      _: 1
                    })]),
                    _: 1
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(VRow, {
              align: "center",
              justify: "center",
              class: "max-width-1600 mx-auto"
            }, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12",
                md: "6",
                class: "d-flex justify-center"
              }, {
                default: withCtx(() => [createVNode("img", {
                  src: _imports_0,
                  alt: "Tutoring session",
                  class: "max-w-full h-auto object-contain",
                  style: {
                    "max-width": "400px"
                  }
                })]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                md: "6",
                class: "d-flex flex-column justify-center mb-8"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold text-black mb-4"
                }, " Sign-up to Studybyte today for FREE "), createVNode("p", {
                  class: "text-lg md:text-xl mb-6"
                }, " We are here to help you get the best grades and achieve your academic goals. "), createVNode(VBtn, {
                  to: "/sign-up",
                  size: "x-large",
                  color: "#000000",
                  variant: "elevated",
                  elevation: "0",
                  "prepend-icon": "mdi-checkbox-marked-circle",
                  class: "px-6 py-3 text-lg font-semibold rounded-xl align-self-start"
                }, {
                  default: withCtx(() => [createTextVNode(" Sign up for Free ")]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9ac3e6d"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=CallToAction-KwccuGOk.mjs.map
