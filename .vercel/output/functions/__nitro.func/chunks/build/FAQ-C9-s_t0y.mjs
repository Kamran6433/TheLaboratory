import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, V as VContainer, y as VExpansionPanels, z as VExpansionPanel, A as VExpansionPanelTitle, B as VExpansionPanelText } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VContainer, mergeProps({
    fluid: "",
    class: "max-width-1600 py-12 px-4 px-lg-12"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-center text-3xl md:text-4xl font-bold mb-6"${_scopeId}> Frequently Asked Questions </h1><p class="text-center text-base md:text-lg mb-8"${_scopeId}> Feel free to reach out if your question is not answered here. </p>`);
        _push2(ssrRenderComponent(VExpansionPanels, {
          multiple: "",
          variant: "popout",
          "collapse-icon": "mdi-minus",
          "expand-icon": "mdi-plus",
          elevation: "0"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VExpansionPanel, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VExpansionPanelTitle, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h1 class="text-lg md:text-xl"${_scopeId4}> What do I get with this? </h1>`);
                        } else {
                          return [createVNode("h1", {
                            class: "text-lg md:text-xl"
                          }, " What do I get with this? ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VExpansionPanelText, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-base md:text-lg"${_scopeId4}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>`);
                        } else {
                          return [createVNode("p", {
                            class: "text-base md:text-lg"
                          }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [createVNode(VExpansionPanelTitle, null, {
                      default: withCtx(() => [createVNode("h1", {
                        class: "text-lg md:text-xl"
                      }, " What do I get with this? ")]),
                      _: 1
                    }), createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-base md:text-lg"
                      }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VExpansionPanel, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VExpansionPanelTitle, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h1 class="text-lg md:text-xl"${_scopeId4}> Is it easy to setup? </h1>`);
                        } else {
                          return [createVNode("h1", {
                            class: "text-lg md:text-xl"
                          }, " Is it easy to setup? ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VExpansionPanelText, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-base md:text-lg"${_scopeId4}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>`);
                        } else {
                          return [createVNode("p", {
                            class: "text-base md:text-lg"
                          }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [createVNode(VExpansionPanelTitle, null, {
                      default: withCtx(() => [createVNode("h1", {
                        class: "text-lg md:text-xl"
                      }, " Is it easy to setup? ")]),
                      _: 1
                    }), createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-base md:text-lg"
                      }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VExpansionPanel, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VExpansionPanelTitle, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h1 class="text-lg md:text-xl"${_scopeId4}> Bla bla bla? </h1>`);
                        } else {
                          return [createVNode("h1", {
                            class: "text-lg md:text-xl"
                          }, " Bla bla bla? ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VExpansionPanelText, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-base md:text-lg"${_scopeId4}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>`);
                        } else {
                          return [createVNode("p", {
                            class: "text-base md:text-lg"
                          }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [createVNode(VExpansionPanelTitle, null, {
                      default: withCtx(() => [createVNode("h1", {
                        class: "text-lg md:text-xl"
                      }, " Bla bla bla? ")]),
                      _: 1
                    }), createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-base md:text-lg"
                      }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VExpansionPanel, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VExpansionPanelTitle, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h1 class="text-lg md:text-xl"${_scopeId4}> I have other questions! </h1>`);
                        } else {
                          return [createVNode("h1", {
                            class: "text-lg md:text-xl"
                          }, " I have other questions! ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VExpansionPanelText, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p class="text-base md:text-lg"${_scopeId4}> We&#39;re here to help! Please reach out to our support team for any additional questions or concerns. </p>`);
                        } else {
                          return [createVNode("p", {
                            class: "text-base md:text-lg"
                          }, " We're here to help! Please reach out to our support team for any additional questions or concerns. ")];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [createVNode(VExpansionPanelTitle, null, {
                      default: withCtx(() => [createVNode("h1", {
                        class: "text-lg md:text-xl"
                      }, " I have other questions! ")]),
                      _: 1
                    }), createVNode(VExpansionPanelText, null, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-base md:text-lg"
                      }, " We're here to help! Please reach out to our support team for any additional questions or concerns. ")]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [createVNode(VExpansionPanel, null, {
                default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
                  default: withCtx(() => [createVNode("h1", {
                    class: "text-lg md:text-xl"
                  }, " What do I get with this? ")]),
                  _: 1
                }), createVNode(VExpansionPanelText, null, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-base md:text-lg"
                  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
                  _: 1
                })]),
                _: 1
              }), createVNode(VExpansionPanel, null, {
                default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
                  default: withCtx(() => [createVNode("h1", {
                    class: "text-lg md:text-xl"
                  }, " Is it easy to setup? ")]),
                  _: 1
                }), createVNode(VExpansionPanelText, null, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-base md:text-lg"
                  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
                  _: 1
                })]),
                _: 1
              }), createVNode(VExpansionPanel, null, {
                default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
                  default: withCtx(() => [createVNode("h1", {
                    class: "text-lg md:text-xl"
                  }, " Bla bla bla? ")]),
                  _: 1
                }), createVNode(VExpansionPanelText, null, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-base md:text-lg"
                  }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
                  _: 1
                })]),
                _: 1
              }), createVNode(VExpansionPanel, null, {
                default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
                  default: withCtx(() => [createVNode("h1", {
                    class: "text-lg md:text-xl"
                  }, " I have other questions! ")]),
                  _: 1
                }), createVNode(VExpansionPanelText, null, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-base md:text-lg"
                  }, " We're here to help! Please reach out to our support team for any additional questions or concerns. ")]),
                  _: 1
                })]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [createVNode("h1", {
          class: "text-center text-3xl md:text-4xl font-bold mb-6"
        }, " Frequently Asked Questions "), createVNode("p", {
          class: "text-center text-base md:text-lg mb-8"
        }, " Feel free to reach out if your question is not answered here. "), createVNode(VExpansionPanels, {
          multiple: "",
          variant: "popout",
          "collapse-icon": "mdi-minus",
          "expand-icon": "mdi-plus",
          elevation: "0"
        }, {
          default: withCtx(() => [createVNode(VExpansionPanel, null, {
            default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
              default: withCtx(() => [createVNode("h1", {
                class: "text-lg md:text-xl"
              }, " What do I get with this? ")]),
              _: 1
            }), createVNode(VExpansionPanelText, null, {
              default: withCtx(() => [createVNode("p", {
                class: "text-base md:text-lg"
              }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
              _: 1
            })]),
            _: 1
          }), createVNode(VExpansionPanel, null, {
            default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
              default: withCtx(() => [createVNode("h1", {
                class: "text-lg md:text-xl"
              }, " Is it easy to setup? ")]),
              _: 1
            }), createVNode(VExpansionPanelText, null, {
              default: withCtx(() => [createVNode("p", {
                class: "text-base md:text-lg"
              }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
              _: 1
            })]),
            _: 1
          }), createVNode(VExpansionPanel, null, {
            default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
              default: withCtx(() => [createVNode("h1", {
                class: "text-lg md:text-xl"
              }, " Bla bla bla? ")]),
              _: 1
            }), createVNode(VExpansionPanelText, null, {
              default: withCtx(() => [createVNode("p", {
                class: "text-base md:text-lg"
              }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),
              _: 1
            })]),
            _: 1
          }), createVNode(VExpansionPanel, null, {
            default: withCtx(() => [createVNode(VExpansionPanelTitle, null, {
              default: withCtx(() => [createVNode("h1", {
                class: "text-lg md:text-xl"
              }, " I have other questions! ")]),
              _: 1
            }), createVNode(VExpansionPanelText, null, {
              default: withCtx(() => [createVNode("p", {
                class: "text-base md:text-lg"
              }, " We're here to help! Please reach out to our support team for any additional questions or concerns. ")]),
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FAQ.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FAQ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FAQ as F };
//# sourceMappingURL=FAQ-C9-s_t0y.mjs.map
