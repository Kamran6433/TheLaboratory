import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc, V as VContainer, e as VRow, f as VCol, j as VCard, k as VCardText } from './server.mjs';

const _sfc_main = {
  __name: "GetInTouch",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const getInTouch = () => {
      router.push("/company");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "max-width-1600 py-12 px-4 px-lg-12",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              justify: "center",
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "8",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "help-card pa-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, {
                                class: "d-flex flex-column justify-center align-center text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-lg md:text-xl font-bold" data-v-e410dd6f${_scopeId5}> Have any questions? <span class="font-semibold underline text-red-300 cursor-pointer hover:text-red-600 transition duration-300" data-v-e410dd6f${_scopeId5}> Get in Touch </span></h1>`);
                                  } else {
                                    return [createVNode("h1", {
                                      class: "text-lg md:text-xl font-bold"
                                    }, [createTextVNode(" Have any questions? "), createVNode("span", {
                                      class: "font-semibold underline text-red-300 cursor-pointer hover:text-red-600 transition duration-300",
                                      onClick: getInTouch
                                    }, " Get in Touch ")])];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [createVNode(VCardText, {
                                class: "d-flex flex-column justify-center align-center text-center"
                              }, {
                                default: withCtx(() => [createVNode("h1", {
                                  class: "text-lg md:text-xl font-bold"
                                }, [createTextVNode(" Have any questions? "), createVNode("span", {
                                  class: "font-semibold underline text-red-300 cursor-pointer hover:text-red-600 transition duration-300",
                                  onClick: getInTouch
                                }, " Get in Touch ")])]),
                                _: 1
                              })];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [createVNode(VCard, {
                          class: "help-card pa-4"
                        }, {
                          default: withCtx(() => [createVNode(VCardText, {
                            class: "d-flex flex-column justify-center align-center text-center"
                          }, {
                            default: withCtx(() => [createVNode("h1", {
                              class: "text-lg md:text-xl font-bold"
                            }, [createTextVNode(" Have any questions? "), createVNode("span", {
                              class: "font-semibold underline text-red-300 cursor-pointer hover:text-red-600 transition duration-300",
                              onClick: getInTouch
                            }, " Get in Touch ")])]),
                            _: 1
                          })]),
                          _: 1
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VCol, {
                    cols: "12",
                    sm: "8",
                    md: "6"
                  }, {
                    default: withCtx(() => [createVNode(VCard, {
                      class: "help-card pa-4"
                    }, {
                      default: withCtx(() => [createVNode(VCardText, {
                        class: "d-flex flex-column justify-center align-center text-center"
                      }, {
                        default: withCtx(() => [createVNode("h1", {
                          class: "text-lg md:text-xl font-bold"
                        }, [createTextVNode(" Have any questions? "), createVNode("span", {
                          class: "font-semibold underline text-red-300 cursor-pointer hover:text-red-600 transition duration-300",
                          onClick: getInTouch
                        }, " Get in Touch ")])]),
                        _: 1
                      })]),
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
              justify: "center",
              align: "center"
            }, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12",
                sm: "8",
                md: "6"
              }, {
                default: withCtx(() => [createVNode(VCard, {
                  class: "help-card pa-4"
                }, {
                  default: withCtx(() => [createVNode(VCardText, {
                    class: "d-flex flex-column justify-center align-center text-center"
                  }, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-lg md:text-xl font-bold"
                    }, [createTextVNode(" Have any questions? "), createVNode("span", {
                      class: "font-semibold underline text-red-300 cursor-pointer hover:text-red-600 transition duration-300",
                      onClick: getInTouch
                    }, " Get in Touch ")])]),
                    _: 1
                  })]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GetInTouch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GetInTouch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e410dd6f"]]);

export { GetInTouch as G };
//# sourceMappingURL=GetInTouch-CNVAZ0YB.mjs.map
