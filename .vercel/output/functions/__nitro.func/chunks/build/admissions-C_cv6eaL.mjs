import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './CallToAction-KwccuGOk.mjs';
import { useSSRContext, computed, mergeProps, withCtx, createVNode, unref, ref, resolveComponent, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { F as FAQ } from './FAQ-C9-s_t0y.mjs';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import { _ as _export_sfc, V as VContainer, u as useRouter$1, s as storeToRefs, e as VRow, f as VCol, g as VProgressCircular, h as VAlert, j as VCard, k as VCardText, l as VList, m as VListItem, o as VIcon, p as VListItemTitle, q as VCardActions, t as VBtn, v as VCardTitle, w as VAvatar, x as VDivider } from './server.mjs';
import { G as GetInTouch } from './GetInTouch-CNVAZ0YB.mjs';
import { _ as _imports_0$1 } from './Saly-4-DiJTyKVP.mjs';
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
import './logo-Bfw0K8zp.mjs';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';

const _sfc_main$3 = {
  __name: "PaymentCard",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter$1();
    const userStore = useUserStore();
    const {
      getIsAuthenticated,
      getUser
    } = storeToRefs(userStore);
    const error = ref(null);
    const loading = ref(false);
    ref(null);
    const plans = ref([]);
    const createStripePaymentCheckoutSession = async (plan) => {
      if (!getIsAuthenticated.value) {
        router.push("/login");
        return;
      }
      if (!getUser.value.emailVerified) {
        router.push("/verify-email");
        return;
      }
      try {
        const response = await fetch("/api/stripe-payment-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_id: getUser.value.uid,
            productId: "prod_QtxqqdEd0NBkAe",
            planTitle: plan.title,
            planPrice: Math.round(plan.price * 100)
          })
        });
        if (!response.ok) {
          throw new Error("Failed to create checkout session");
        }
        const session = await response.json();
        (void 0).location = session.url;
      } catch (err) {
        console.error("Error creating payment session:", err);
        error.value = "Failed to create payment session. Please try again.";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list_item_icon = resolveComponent("v-list-item-icon");
      const _component_v_list_item_content = resolveComponent("v-list-item-content");
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
                    class: "text-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-4xl md:text-5xl font-bold mb-4" data-v-6de5888c${_scopeId3}> Choose Your Plan </h1><p class="text-xl md:text-2xl max-w-2xl mx-auto" data-v-6de5888c${_scopeId3}> Select the consultation package that best fits your needs. Our experts are ready to guide you through your university journey. </p>`);
                      } else {
                        return [createVNode("h1", {
                          class: "text-4xl md:text-5xl font-bold mb-4"
                        }, " Choose Your Plan "), createVNode("p", {
                          class: "text-xl md:text-2xl max-w-2xl mx-auto"
                        }, " Select the consultation package that best fits your needs. Our experts are ready to guide you through your university journey. ")];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VCol, {
                    cols: "12",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-4xl md:text-5xl font-bold mb-4"
                    }, " Choose Your Plan "), createVNode("p", {
                      class: "text-xl md:text-2xl max-w-2xl mx-auto"
                    }, " Select the consultation package that best fits your needs. Our experts are ready to guide you through your university journey. ")]),
                    _: 1
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (loading.value) {
              _push2(ssrRenderComponent(VRow, {
                justify: "center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      class: "text-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VProgressCircular, {
                            indeterminate: "",
                            color: "primary",
                            size: "64"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [createVNode(VProgressCircular, {
                            indeterminate: "",
                            color: "primary",
                            size: "64"
                          })];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [createVNode(VCol, {
                      cols: "12",
                      class: "text-center"
                    }, {
                      default: withCtx(() => [createVNode(VProgressCircular, {
                        indeterminate: "",
                        color: "primary",
                        size: "64"
                      })]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else if (error.value) {
              _push2(ssrRenderComponent(VRow, {
                justify: "center"
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
                          _push4(ssrRenderComponent(VAlert, {
                            type: "error",
                            elevation: "2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(error.value)}`);
                              } else {
                                return [createTextVNode(toDisplayString(error.value), 1)];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [createVNode(VAlert, {
                            type: "error",
                            elevation: "2"
                          }, {
                            default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
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
                      default: withCtx(() => [createVNode(VAlert, {
                        type: "error",
                        elevation: "2"
                      }, {
                        default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
                        _: 1
                      })]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(VRow, {
                justify: "center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(plans.value, (plan, index) => {
                      _push3(ssrRenderComponent(VCol, {
                        key: plan.title,
                        cols: "12",
                        sm: "6",
                        md: "3"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCard, {
                              class: ["plan-card h-100 d-flex flex-column", [`plan-${index + 1}`, {
                                "most-popular": plan.mostPopular
                              }]]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="plan-header pa-4" data-v-6de5888c${_scopeId4}><h1 class="text-xl md:text-2xl font-bold text-center mb-4" data-v-6de5888c${_scopeId4}>${ssrInterpolate(plan.title)}</h1><div class="text-center" data-v-6de5888c${_scopeId4}><h1 class="text-3xl md:text-4xl font-bold" data-v-6de5888c${_scopeId4}> \xA3${ssrInterpolate(plan.price.toFixed(2))}</h1></div></div>`);
                                  _push5(ssrRenderComponent(VCardText, {
                                    class: "flex-grow-1"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VList, {
                                          dense: "",
                                          class: "plan-features"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<!--[-->`);
                                              ssrRenderList(plan.features, (feature, index2) => {
                                                _push7(ssrRenderComponent(VListItem, {
                                                  key: index2,
                                                  dense: ""
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(ssrRenderComponent(_component_v_list_item_icon, {
                                                        class: "mr-2"
                                                      }, {
                                                        default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(ssrRenderComponent(VIcon, {
                                                              color: "success"
                                                            }, {
                                                              default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                if (_push10) {
                                                                  _push10(` mdi-check-circle `);
                                                                } else {
                                                                  return [createTextVNode(" mdi-check-circle ")];
                                                                }
                                                              }),
                                                              _: 2
                                                            }, _parent9, _scopeId8));
                                                          } else {
                                                            return [createVNode(VIcon, {
                                                              color: "success"
                                                            }, {
                                                              default: withCtx(() => [createTextVNode(" mdi-check-circle ")]),
                                                              _: 1
                                                            })];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                      _push8(ssrRenderComponent(_component_v_list_item_content, null, {
                                                        default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(ssrRenderComponent(VListItemTitle, null, {
                                                              default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                if (_push10) {
                                                                  _push10(`<p class="text-lg font-bold" data-v-6de5888c${_scopeId9}>${ssrInterpolate(feature.text)}</p>`);
                                                                } else {
                                                                  return [createVNode("p", {
                                                                    class: "text-lg font-bold"
                                                                  }, toDisplayString(feature.text), 1)];
                                                                }
                                                              }),
                                                              _: 2
                                                            }, _parent9, _scopeId8));
                                                          } else {
                                                            return [createVNode(VListItemTitle, null, {
                                                              default: withCtx(() => [createVNode("p", {
                                                                class: "text-lg font-bold"
                                                              }, toDisplayString(feature.text), 1)]),
                                                              _: 2
                                                            }, 1024)];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                    } else {
                                                      return [createVNode(_component_v_list_item_icon, {
                                                        class: "mr-2"
                                                      }, {
                                                        default: withCtx(() => [createVNode(VIcon, {
                                                          color: "success"
                                                        }, {
                                                          default: withCtx(() => [createTextVNode(" mdi-check-circle ")]),
                                                          _: 1
                                                        })]),
                                                        _: 1
                                                      }), createVNode(_component_v_list_item_content, null, {
                                                        default: withCtx(() => [createVNode(VListItemTitle, null, {
                                                          default: withCtx(() => [createVNode("p", {
                                                            class: "text-lg font-bold"
                                                          }, toDisplayString(feature.text), 1)]),
                                                          _: 2
                                                        }, 1024)]),
                                                        _: 2
                                                      }, 1024)];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              });
                                              _push7(`<!--]-->`);
                                            } else {
                                              return [(openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature, index2) => {
                                                return openBlock(), createBlock(VListItem, {
                                                  key: index2,
                                                  dense: ""
                                                }, {
                                                  default: withCtx(() => [createVNode(_component_v_list_item_icon, {
                                                    class: "mr-2"
                                                  }, {
                                                    default: withCtx(() => [createVNode(VIcon, {
                                                      color: "success"
                                                    }, {
                                                      default: withCtx(() => [createTextVNode(" mdi-check-circle ")]),
                                                      _: 1
                                                    })]),
                                                    _: 1
                                                  }), createVNode(_component_v_list_item_content, null, {
                                                    default: withCtx(() => [createVNode(VListItemTitle, null, {
                                                      default: withCtx(() => [createVNode("p", {
                                                        class: "text-lg font-bold"
                                                      }, toDisplayString(feature.text), 1)]),
                                                      _: 2
                                                    }, 1024)]),
                                                    _: 2
                                                  }, 1024)]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [createVNode(VList, {
                                          dense: "",
                                          class: "plan-features"
                                        }, {
                                          default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature, index2) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: index2,
                                              dense: ""
                                            }, {
                                              default: withCtx(() => [createVNode(_component_v_list_item_icon, {
                                                class: "mr-2"
                                              }, {
                                                default: withCtx(() => [createVNode(VIcon, {
                                                  color: "success"
                                                }, {
                                                  default: withCtx(() => [createTextVNode(" mdi-check-circle ")]),
                                                  _: 1
                                                })]),
                                                _: 1
                                              }), createVNode(_component_v_list_item_content, null, {
                                                default: withCtx(() => [createVNode(VListItemTitle, null, {
                                                  default: withCtx(() => [createVNode("p", {
                                                    class: "text-lg font-bold"
                                                  }, toDisplayString(feature.text), 1)]),
                                                  _: 2
                                                }, 1024)]),
                                                _: 2
                                              }, 1024)]),
                                              _: 2
                                            }, 1024);
                                          }), 128))]),
                                          _: 2
                                        }, 1024)];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VCardActions, {
                                    class: "pa-4"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VBtn, {
                                          block: "",
                                          color: "primary",
                                          class: "text-sm md:text-base font-semibold",
                                          onClick: ($event) => createStripePaymentCheckoutSession(plan)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` Purchase `);
                                            } else {
                                              return [createTextVNode(" Purchase ")];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [createVNode(VBtn, {
                                          block: "",
                                          color: "primary",
                                          class: "text-sm md:text-base font-semibold",
                                          onClick: ($event) => createStripePaymentCheckoutSession(plan)
                                        }, {
                                          default: withCtx(() => [createTextVNode(" Purchase ")]),
                                          _: 2
                                        }, 1032, ["onClick"])];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [createVNode("div", {
                                    class: "plan-header pa-4"
                                  }, [createVNode("h1", {
                                    class: "text-xl md:text-2xl font-bold text-center mb-4"
                                  }, toDisplayString(plan.title), 1), createVNode("div", {
                                    class: "text-center"
                                  }, [createVNode("h1", {
                                    class: "text-3xl md:text-4xl font-bold"
                                  }, " \xA3" + toDisplayString(plan.price.toFixed(2)), 1)])]), createVNode(VCardText, {
                                    class: "flex-grow-1"
                                  }, {
                                    default: withCtx(() => [createVNode(VList, {
                                      dense: "",
                                      class: "plan-features"
                                    }, {
                                      default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature, index2) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: index2,
                                          dense: ""
                                        }, {
                                          default: withCtx(() => [createVNode(_component_v_list_item_icon, {
                                            class: "mr-2"
                                          }, {
                                            default: withCtx(() => [createVNode(VIcon, {
                                              color: "success"
                                            }, {
                                              default: withCtx(() => [createTextVNode(" mdi-check-circle ")]),
                                              _: 1
                                            })]),
                                            _: 1
                                          }), createVNode(_component_v_list_item_content, null, {
                                            default: withCtx(() => [createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [createVNode("p", {
                                                class: "text-lg font-bold"
                                              }, toDisplayString(feature.text), 1)]),
                                              _: 2
                                            }, 1024)]),
                                            _: 2
                                          }, 1024)]),
                                          _: 2
                                        }, 1024);
                                      }), 128))]),
                                      _: 2
                                    }, 1024)]),
                                    _: 2
                                  }, 1024), createVNode(VCardActions, {
                                    class: "pa-4"
                                  }, {
                                    default: withCtx(() => [createVNode(VBtn, {
                                      block: "",
                                      color: "primary",
                                      class: "text-sm md:text-base font-semibold",
                                      onClick: ($event) => createStripePaymentCheckoutSession(plan)
                                    }, {
                                      default: withCtx(() => [createTextVNode(" Purchase ")]),
                                      _: 2
                                    }, 1032, ["onClick"])]),
                                    _: 2
                                  }, 1024)];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [createVNode(VCard, {
                              class: ["plan-card h-100 d-flex flex-column", [`plan-${index + 1}`, {
                                "most-popular": plan.mostPopular
                              }]]
                            }, {
                              default: withCtx(() => [createVNode("div", {
                                class: "plan-header pa-4"
                              }, [createVNode("h1", {
                                class: "text-xl md:text-2xl font-bold text-center mb-4"
                              }, toDisplayString(plan.title), 1), createVNode("div", {
                                class: "text-center"
                              }, [createVNode("h1", {
                                class: "text-3xl md:text-4xl font-bold"
                              }, " \xA3" + toDisplayString(plan.price.toFixed(2)), 1)])]), createVNode(VCardText, {
                                class: "flex-grow-1"
                              }, {
                                default: withCtx(() => [createVNode(VList, {
                                  dense: "",
                                  class: "plan-features"
                                }, {
                                  default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature, index2) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: index2,
                                      dense: ""
                                    }, {
                                      default: withCtx(() => [createVNode(_component_v_list_item_icon, {
                                        class: "mr-2"
                                      }, {
                                        default: withCtx(() => [createVNode(VIcon, {
                                          color: "success"
                                        }, {
                                          default: withCtx(() => [createTextVNode(" mdi-check-circle ")]),
                                          _: 1
                                        })]),
                                        _: 1
                                      }), createVNode(_component_v_list_item_content, null, {
                                        default: withCtx(() => [createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [createVNode("p", {
                                            class: "text-lg font-bold"
                                          }, toDisplayString(feature.text), 1)]),
                                          _: 2
                                        }, 1024)]),
                                        _: 2
                                      }, 1024)]),
                                      _: 2
                                    }, 1024);
                                  }), 128))]),
                                  _: 2
                                }, 1024)]),
                                _: 2
                              }, 1024), createVNode(VCardActions, {
                                class: "pa-4"
                              }, {
                                default: withCtx(() => [createVNode(VBtn, {
                                  block: "",
                                  color: "primary",
                                  class: "text-sm md:text-base font-semibold",
                                  onClick: ($event) => createStripePaymentCheckoutSession(plan)
                                }, {
                                  default: withCtx(() => [createTextVNode(" Purchase ")]),
                                  _: 2
                                }, 1032, ["onClick"])]),
                                _: 2
                              }, 1024)]),
                              _: 2
                            }, 1032, ["class"])];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [(openBlock(true), createBlock(Fragment, null, renderList(plans.value, (plan, index) => {
                      return openBlock(), createBlock(VCol, {
                        key: plan.title,
                        cols: "12",
                        sm: "6",
                        md: "3"
                      }, {
                        default: withCtx(() => [createVNode(VCard, {
                          class: ["plan-card h-100 d-flex flex-column", [`plan-${index + 1}`, {
                            "most-popular": plan.mostPopular
                          }]]
                        }, {
                          default: withCtx(() => [createVNode("div", {
                            class: "plan-header pa-4"
                          }, [createVNode("h1", {
                            class: "text-xl md:text-2xl font-bold text-center mb-4"
                          }, toDisplayString(plan.title), 1), createVNode("div", {
                            class: "text-center"
                          }, [createVNode("h1", {
                            class: "text-3xl md:text-4xl font-bold"
                          }, " \xA3" + toDisplayString(plan.price.toFixed(2)), 1)])]), createVNode(VCardText, {
                            class: "flex-grow-1"
                          }, {
                            default: withCtx(() => [createVNode(VList, {
                              dense: "",
                              class: "plan-features"
                            }, {
                              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature, index2) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: index2,
                                  dense: ""
                                }, {
                                  default: withCtx(() => [createVNode(_component_v_list_item_icon, {
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [createVNode(VIcon, {
                                      color: "success"
                                    }, {
                                      default: withCtx(() => [createTextVNode(" mdi-check-circle ")]),
                                      _: 1
                                    })]),
                                    _: 1
                                  }), createVNode(_component_v_list_item_content, null, {
                                    default: withCtx(() => [createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [createVNode("p", {
                                        class: "text-lg font-bold"
                                      }, toDisplayString(feature.text), 1)]),
                                      _: 2
                                    }, 1024)]),
                                    _: 2
                                  }, 1024)]),
                                  _: 2
                                }, 1024);
                              }), 128))]),
                              _: 2
                            }, 1024)]),
                            _: 2
                          }, 1024), createVNode(VCardActions, {
                            class: "pa-4"
                          }, {
                            default: withCtx(() => [createVNode(VBtn, {
                              block: "",
                              color: "primary",
                              class: "text-sm md:text-base font-semibold",
                              onClick: ($event) => createStripePaymentCheckoutSession(plan)
                            }, {
                              default: withCtx(() => [createTextVNode(" Purchase ")]),
                              _: 2
                            }, 1032, ["onClick"])]),
                            _: 2
                          }, 1024)]),
                          _: 2
                        }, 1032, ["class"])]),
                        _: 2
                      }, 1024);
                    }), 128))];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [createVNode(VRow, {
              justify: "center",
              align: "center"
            }, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12",
                class: "text-center"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-4xl md:text-5xl font-bold mb-4"
                }, " Choose Your Plan "), createVNode("p", {
                  class: "text-xl md:text-2xl max-w-2xl mx-auto"
                }, " Select the consultation package that best fits your needs. Our experts are ready to guide you through your university journey. ")]),
                _: 1
              })]),
              _: 1
            }), loading.value ? (openBlock(), createBlock(VRow, {
              key: 0,
              justify: "center"
            }, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12",
                class: "text-center"
              }, {
                default: withCtx(() => [createVNode(VProgressCircular, {
                  indeterminate: "",
                  color: "primary",
                  size: "64"
                })]),
                _: 1
              })]),
              _: 1
            })) : error.value ? (openBlock(), createBlock(VRow, {
              key: 1,
              justify: "center"
            }, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12",
                sm: "8",
                md: "6"
              }, {
                default: withCtx(() => [createVNode(VAlert, {
                  type: "error",
                  elevation: "2"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })) : (openBlock(), createBlock(VRow, {
              key: 2,
              justify: "center"
            }, {
              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(plans.value, (plan, index) => {
                return openBlock(), createBlock(VCol, {
                  key: plan.title,
                  cols: "12",
                  sm: "6",
                  md: "3"
                }, {
                  default: withCtx(() => [createVNode(VCard, {
                    class: ["plan-card h-100 d-flex flex-column", [`plan-${index + 1}`, {
                      "most-popular": plan.mostPopular
                    }]]
                  }, {
                    default: withCtx(() => [createVNode("div", {
                      class: "plan-header pa-4"
                    }, [createVNode("h1", {
                      class: "text-xl md:text-2xl font-bold text-center mb-4"
                    }, toDisplayString(plan.title), 1), createVNode("div", {
                      class: "text-center"
                    }, [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold"
                    }, " \xA3" + toDisplayString(plan.price.toFixed(2)), 1)])]), createVNode(VCardText, {
                      class: "flex-grow-1"
                    }, {
                      default: withCtx(() => [createVNode(VList, {
                        dense: "",
                        class: "plan-features"
                      }, {
                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature, index2) => {
                          return openBlock(), createBlock(VListItem, {
                            key: index2,
                            dense: ""
                          }, {
                            default: withCtx(() => [createVNode(_component_v_list_item_icon, {
                              class: "mr-2"
                            }, {
                              default: withCtx(() => [createVNode(VIcon, {
                                color: "success"
                              }, {
                                default: withCtx(() => [createTextVNode(" mdi-check-circle ")]),
                                _: 1
                              })]),
                              _: 1
                            }), createVNode(_component_v_list_item_content, null, {
                              default: withCtx(() => [createVNode(VListItemTitle, null, {
                                default: withCtx(() => [createVNode("p", {
                                  class: "text-lg font-bold"
                                }, toDisplayString(feature.text), 1)]),
                                _: 2
                              }, 1024)]),
                              _: 2
                            }, 1024)]),
                            _: 2
                          }, 1024);
                        }), 128))]),
                        _: 2
                      }, 1024)]),
                      _: 2
                    }, 1024), createVNode(VCardActions, {
                      class: "pa-4"
                    }, {
                      default: withCtx(() => [createVNode(VBtn, {
                        block: "",
                        color: "primary",
                        class: "text-sm md:text-base font-semibold",
                        onClick: ($event) => createStripePaymentCheckoutSession(plan)
                      }, {
                        default: withCtx(() => [createTextVNode(" Purchase ")]),
                        _: 2
                      }, 1032, ["onClick"])]),
                      _: 2
                    }, 1024)]),
                    _: 2
                  }, 1032, ["class"])]),
                  _: 2
                }, 1024);
              }), 128))]),
              _: 1
            }))];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaymentCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PaymentCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6de5888c"]]);
const _imports_0 = "" + buildAssetsURL("Saly-11.CNoNAd7P.png");
const _sfc_main$2 = {
  __name: "AdmissionsServices",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [{
      icon: "mdi-school",
      iconColor: "#2196F3",
      title: "Academic Guidance Sessions",
      description: "Connect with our education specialists to explore your academic path options. We offer insights into various courses and institutions, highlighting key differences. Our team covers a wide range of disciplines, providing comprehensive knowledge about educational opportunities."
    }, {
      icon: "mdi-compass-outline",
      iconColor: "#9C27B0",
      title: "Admission Support 2024",
      description: "Receive expert guidance on the 2024 admission process, including strategies for dealing with unexpected results. We'll help you navigate your options and find the best path forward, regardless of your current academic standing."
    }, {
      icon: "mdi-rocket-launch",
      iconColor: "#FF9800",
      title: "Boost Your Academic Potential",
      description: "Our personalized approach offers you a customized roadmap for your academic journey. Get step-by-step guidance on application processes and targeted advice on achieving your required grades, enhancing your chances of success."
    }];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "max-width-1600 py-24 px-4 px-lg-12",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-3ef17044${_scopeId}><h1 class="text-3xl md:text-5xl font-bold text-center mb-10" data-v-3ef17044${_scopeId}> What Studybyte will provide... </h1>`);
            _push2(ssrRenderComponent(VRow, {
              justify: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(services, (item, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: index,
                      cols: "12",
                      md: "4",
                      class: "mb-4 md:mb-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, {
                            class: "service-card blur-effect h-100 d-flex flex-column pa-6 rounded-xl"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardTitle, {
                                  class: "d-flex align-center pb-0"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VAvatar, {
                                        color: item.iconColor,
                                        size: "48",
                                        class: "mr-4"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              dark: ""
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(item.icon)}`);
                                                } else {
                                                  return [createTextVNode(toDisplayString(item.icon), 1)];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [createVNode(VIcon, {
                                              dark: ""
                                            }, {
                                              default: withCtx(() => [createTextVNode(toDisplayString(item.icon), 1)]),
                                              _: 2
                                            }, 1024)];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<h1 class="text-lg md:text-xl font-semibold" data-v-3ef17044${_scopeId5}>${ssrInterpolate(item.title)}</h1>`);
                                    } else {
                                      return [createVNode(VAvatar, {
                                        color: item.iconColor,
                                        size: "48",
                                        class: "mr-4"
                                      }, {
                                        default: withCtx(() => [createVNode(VIcon, {
                                          dark: ""
                                        }, {
                                          default: withCtx(() => [createTextVNode(toDisplayString(item.icon), 1)]),
                                          _: 2
                                        }, 1024)]),
                                        _: 2
                                      }, 1032, ["color"]), createVNode("h1", {
                                        class: "text-lg md:text-xl font-semibold"
                                      }, toDisplayString(item.title), 1)];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCardText, {
                                  class: "flex-grow-1 mt-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<p class="text-base md:text-lg" data-v-3ef17044${_scopeId5}>${ssrInterpolate(item.description)}</p>`);
                                    } else {
                                      return [createVNode("p", {
                                        class: "text-base md:text-lg"
                                      }, toDisplayString(item.description), 1)];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [createVNode(VCardTitle, {
                                  class: "d-flex align-center pb-0"
                                }, {
                                  default: withCtx(() => [createVNode(VAvatar, {
                                    color: item.iconColor,
                                    size: "48",
                                    class: "mr-4"
                                  }, {
                                    default: withCtx(() => [createVNode(VIcon, {
                                      dark: ""
                                    }, {
                                      default: withCtx(() => [createTextVNode(toDisplayString(item.icon), 1)]),
                                      _: 2
                                    }, 1024)]),
                                    _: 2
                                  }, 1032, ["color"]), createVNode("h1", {
                                    class: "text-lg md:text-xl font-semibold"
                                  }, toDisplayString(item.title), 1)]),
                                  _: 2
                                }, 1024), createVNode(VCardText, {
                                  class: "flex-grow-1 mt-4"
                                }, {
                                  default: withCtx(() => [createVNode("p", {
                                    class: "text-base md:text-lg"
                                  }, toDisplayString(item.description), 1)]),
                                  _: 2
                                }, 1024)];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [createVNode(VCard, {
                            class: "service-card blur-effect h-100 d-flex flex-column pa-6 rounded-xl"
                          }, {
                            default: withCtx(() => [createVNode(VCardTitle, {
                              class: "d-flex align-center pb-0"
                            }, {
                              default: withCtx(() => [createVNode(VAvatar, {
                                color: item.iconColor,
                                size: "48",
                                class: "mr-4"
                              }, {
                                default: withCtx(() => [createVNode(VIcon, {
                                  dark: ""
                                }, {
                                  default: withCtx(() => [createTextVNode(toDisplayString(item.icon), 1)]),
                                  _: 2
                                }, 1024)]),
                                _: 2
                              }, 1032, ["color"]), createVNode("h1", {
                                class: "text-lg md:text-xl font-semibold"
                              }, toDisplayString(item.title), 1)]),
                              _: 2
                            }, 1024), createVNode(VCardText, {
                              class: "flex-grow-1 mt-4"
                            }, {
                              default: withCtx(() => [createVNode("p", {
                                class: "text-base md:text-lg"
                              }, toDisplayString(item.description), 1)]),
                              _: 2
                            }, 1024)]),
                            _: 2
                          }, 1024)];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [(openBlock(), createBlock(Fragment, null, renderList(services, (item, index) => {
                    return createVNode(VCol, {
                      key: index,
                      cols: "12",
                      md: "4",
                      class: "mb-4 md:mb-0"
                    }, {
                      default: withCtx(() => [createVNode(VCard, {
                        class: "service-card blur-effect h-100 d-flex flex-column pa-6 rounded-xl"
                      }, {
                        default: withCtx(() => [createVNode(VCardTitle, {
                          class: "d-flex align-center pb-0"
                        }, {
                          default: withCtx(() => [createVNode(VAvatar, {
                            color: item.iconColor,
                            size: "48",
                            class: "mr-4"
                          }, {
                            default: withCtx(() => [createVNode(VIcon, {
                              dark: ""
                            }, {
                              default: withCtx(() => [createTextVNode(toDisplayString(item.icon), 1)]),
                              _: 2
                            }, 1024)]),
                            _: 2
                          }, 1032, ["color"]), createVNode("h1", {
                            class: "text-lg md:text-xl font-semibold"
                          }, toDisplayString(item.title), 1)]),
                          _: 2
                        }, 1024), createVNode(VCardText, {
                          class: "flex-grow-1 mt-4"
                        }, {
                          default: withCtx(() => [createVNode("p", {
                            class: "text-base md:text-lg"
                          }, toDisplayString(item.description), 1)]),
                          _: 2
                        }, 1024)]),
                        _: 2
                      }, 1024)]),
                      _: 2
                    }, 1024);
                  }), 64))];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, {
              align: "center",
              justify: "space-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "service-card-second blur-effect pa-6 rounded-xl"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="text-base md:text-lg text-center" data-v-3ef17044${_scopeId3}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime iste velit mollitia perferendis dolore, tempora debitis pariatur facere expedita voluptatibus ipsum, voluptatem veniam recusandae. Veritatis sit quas perspiciatis nemo. </p>`);
                      } else {
                        return [createVNode("p", {
                          class: "text-base md:text-lg text-center"
                        }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime iste velit mollitia perferendis dolore, tempora debitis pariatur facere expedita voluptatibus ipsum, voluptatem veniam recusandae. Veritatis sit quas perspiciatis nemo. ")];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Tutoring session" class="rounded-circle max-width-100 -my-16" data-v-3ef17044${_scopeId3}>`);
                      } else {
                        return [createVNode("img", {
                          src: _imports_0,
                          alt: "Tutoring session",
                          class: "rounded-circle max-width-100 -my-16"
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "service-card-second blur-effect pa-6 rounded-xl"
                  }, {
                    default: withCtx(() => [createVNode("p", {
                      class: "text-base md:text-lg text-center"
                    }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime iste velit mollitia perferendis dolore, tempora debitis pariatur facere expedita voluptatibus ipsum, voluptatem veniam recusandae. Veritatis sit quas perspiciatis nemo. ")]),
                    _: 1
                  }), createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [createVNode("img", {
                      src: _imports_0,
                      alt: "Tutoring session",
                      class: "rounded-circle max-width-100 -my-16"
                    })]),
                    _: 1
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", null, [createVNode("h1", {
              class: "text-3xl md:text-5xl font-bold text-center mb-10"
            }, " What Studybyte will provide... "), createVNode(VRow, {
              justify: "center"
            }, {
              default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList(services, (item, index) => {
                return createVNode(VCol, {
                  key: index,
                  cols: "12",
                  md: "4",
                  class: "mb-4 md:mb-0"
                }, {
                  default: withCtx(() => [createVNode(VCard, {
                    class: "service-card blur-effect h-100 d-flex flex-column pa-6 rounded-xl"
                  }, {
                    default: withCtx(() => [createVNode(VCardTitle, {
                      class: "d-flex align-center pb-0"
                    }, {
                      default: withCtx(() => [createVNode(VAvatar, {
                        color: item.iconColor,
                        size: "48",
                        class: "mr-4"
                      }, {
                        default: withCtx(() => [createVNode(VIcon, {
                          dark: ""
                        }, {
                          default: withCtx(() => [createTextVNode(toDisplayString(item.icon), 1)]),
                          _: 2
                        }, 1024)]),
                        _: 2
                      }, 1032, ["color"]), createVNode("h1", {
                        class: "text-lg md:text-xl font-semibold"
                      }, toDisplayString(item.title), 1)]),
                      _: 2
                    }, 1024), createVNode(VCardText, {
                      class: "flex-grow-1 mt-4"
                    }, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-base md:text-lg"
                      }, toDisplayString(item.description), 1)]),
                      _: 2
                    }, 1024)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024);
              }), 64))]),
              _: 1
            }), createVNode(VRow, {
              align: "center",
              justify: "space-between"
            }, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12",
                md: "6",
                class: "service-card-second blur-effect pa-6 rounded-xl"
              }, {
                default: withCtx(() => [createVNode("p", {
                  class: "text-base md:text-lg text-center"
                }, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime iste velit mollitia perferendis dolore, tempora debitis pariatur facere expedita voluptatibus ipsum, voluptatem veniam recusandae. Veritatis sit quas perspiciatis nemo. ")]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                md: "6"
              }, {
                default: withCtx(() => [createVNode("img", {
                  src: _imports_0,
                  alt: "Tutoring session",
                  class: "rounded-circle max-width-100 -my-16"
                })]),
                _: 1
              })]),
              _: 1
            })])];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdmissionsServices.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AdmissionsServices = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3ef17044"]]);
const _imports_1 = "" + buildAssetsURL("Saly-9.BPAysrAf.png");
const _imports_2 = "" + buildAssetsURL("Saly-10.CyW0W2JD.png");
const _sfc_main$1 = {
  data: () => ({
    rating: 4.5
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VContainer, mergeProps({
    class: "max-width-1600 py-24 px-4 px-lg-12"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, {
          align: "center",
          justify: "space-between",
          class: "mb-12",
          "no-gutters": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "5",
                order: "md1",
                "order-md": "2",
                class: "text-center mb-6 mb-md-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Tutoring session" class="rounded-circle max-width-100" data-v-f16e54ae${_scopeId3}>`);
                  } else {
                    return [createVNode("img", {
                      src: _imports_0$1,
                      alt: "Tutoring session",
                      class: "rounded-circle max-width-100"
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6",
                order: "md2",
                "order-md": "1",
                class: "admission-info rounded-xl pa-8 text-center text-md-right"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="text-3xl md:text-4xl font-bold mb-4" data-v-f16e54ae${_scopeId3}> Exciting learning experiences </h1><p class="text-base md:text-lg" data-v-f16e54ae${_scopeId3}> Our tutoring experience focuses on fostering curiosity and engagement. We strive to create ideal matches between students and educators to maximize learning potential. </p>`);
                  } else {
                    return [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-4"
                    }, " Exciting learning experiences "), createVNode("p", {
                      class: "text-base md:text-lg"
                    }, " Our tutoring experience focuses on fostering curiosity and engagement. We strive to create ideal matches between students and educators to maximize learning potential. ")];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [createVNode(VCol, {
                cols: "12",
                md: "5",
                order: "md1",
                "order-md": "2",
                class: "text-center mb-6 mb-md-0"
              }, {
                default: withCtx(() => [createVNode("img", {
                  src: _imports_0$1,
                  alt: "Tutoring session",
                  class: "rounded-circle max-width-100"
                })]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                md: "6",
                order: "md2",
                "order-md": "1",
                class: "admission-info rounded-xl pa-8 text-center text-md-right"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold mb-4"
                }, " Exciting learning experiences "), createVNode("p", {
                  class: "text-base md:text-lg"
                }, " Our tutoring experience focuses on fostering curiosity and engagement. We strive to create ideal matches between students and educators to maximize learning potential. ")]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, {
          class: "my-12"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, {
          align: "center",
          justify: "space-between",
          class: "mb-12",
          "no-gutters": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "5",
                class: "text-center mb-6 mb-md-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_1)} alt="Happy students" class="max-width-100" data-v-f16e54ae${_scopeId3}>`);
                  } else {
                    return [createVNode("img", {
                      src: _imports_1,
                      alt: "Happy students",
                      class: "max-width-100"
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6",
                class: "admission-info rounded-xl pa-8 text-center text-md-left"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="text-3xl md:text-4xl font-bold mb-4" data-v-f16e54ae${_scopeId3}> Trusted by Educational Institutions </h1><p class="text-base md:text-lg" data-v-f16e54ae${_scopeId3}> Our tutors come highly recommended by numerous schools, colleges, and universities, solidifying our reputation as a trusted educational partner. </p>`);
                  } else {
                    return [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-4"
                    }, " Trusted by Educational Institutions "), createVNode("p", {
                      class: "text-base md:text-lg"
                    }, " Our tutors come highly recommended by numerous schools, colleges, and universities, solidifying our reputation as a trusted educational partner. ")];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [createVNode(VCol, {
                cols: "12",
                md: "5",
                class: "text-center mb-6 mb-md-0"
              }, {
                default: withCtx(() => [createVNode("img", {
                  src: _imports_1,
                  alt: "Happy students",
                  class: "max-width-100"
                })]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                md: "6",
                class: "admission-info rounded-xl pa-8 text-center text-md-left"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold mb-4"
                }, " Trusted by Educational Institutions "), createVNode("p", {
                  class: "text-base md:text-lg"
                }, " Our tutors come highly recommended by numerous schools, colleges, and universities, solidifying our reputation as a trusted educational partner. ")]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, {
          class: "my-0"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, {
          align: "center",
          justify: "space-between",
          "no-gutters": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "5",
                order: "md1",
                "order-md": "2",
                class: "text-center mb-6 mb-md-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _imports_2)} alt="Happy students" class="max-width-100" data-v-f16e54ae${_scopeId3}>`);
                  } else {
                    return [createVNode("img", {
                      src: _imports_2,
                      alt: "Happy students",
                      class: "max-width-100"
                    })];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "6",
                order: "md2",
                "order-md": "1",
                class: "admission-info rounded-xl pa-8 text-center text-md-right"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h1 class="text-3xl md:text-4xl font-bold mb-4" data-v-f16e54ae${_scopeId3}> Trusted by Educational Institutions </h1><p class="text-base md:text-lg" data-v-f16e54ae${_scopeId3}> Our tutors come highly recommended by numerous schools, colleges, and universities, solidifying our reputation as a trusted educational partner. </p>`);
                  } else {
                    return [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-4"
                    }, " Trusted by Educational Institutions "), createVNode("p", {
                      class: "text-base md:text-lg"
                    }, " Our tutors come highly recommended by numerous schools, colleges, and universities, solidifying our reputation as a trusted educational partner. ")];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [createVNode(VCol, {
                cols: "12",
                md: "5",
                order: "md1",
                "order-md": "2",
                class: "text-center mb-6 mb-md-0"
              }, {
                default: withCtx(() => [createVNode("img", {
                  src: _imports_2,
                  alt: "Happy students",
                  class: "max-width-100"
                })]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                md: "6",
                order: "md2",
                "order-md": "1",
                class: "admission-info rounded-xl pa-8 text-center text-md-right"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-3xl md:text-4xl font-bold mb-4"
                }, " Trusted by Educational Institutions "), createVNode("p", {
                  class: "text-base md:text-lg"
                }, " Our tutors come highly recommended by numerous schools, colleges, and universities, solidifying our reputation as a trusted educational partner. ")]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [createVNode(VRow, {
          align: "center",
          justify: "space-between",
          class: "mb-12",
          "no-gutters": ""
        }, {
          default: withCtx(() => [createVNode(VCol, {
            cols: "12",
            md: "5",
            order: "md1",
            "order-md": "2",
            class: "text-center mb-6 mb-md-0"
          }, {
            default: withCtx(() => [createVNode("img", {
              src: _imports_0$1,
              alt: "Tutoring session",
              class: "rounded-circle max-width-100"
            })]),
            _: 1
          }), createVNode(VCol, {
            cols: "12",
            md: "6",
            order: "md2",
            "order-md": "1",
            class: "admission-info rounded-xl pa-8 text-center text-md-right"
          }, {
            default: withCtx(() => [createVNode("h1", {
              class: "text-3xl md:text-4xl font-bold mb-4"
            }, " Exciting learning experiences "), createVNode("p", {
              class: "text-base md:text-lg"
            }, " Our tutoring experience focuses on fostering curiosity and engagement. We strive to create ideal matches between students and educators to maximize learning potential. ")]),
            _: 1
          })]),
          _: 1
        }), createVNode(VDivider, {
          class: "my-12"
        }), createVNode(VRow, {
          align: "center",
          justify: "space-between",
          class: "mb-12",
          "no-gutters": ""
        }, {
          default: withCtx(() => [createVNode(VCol, {
            cols: "12",
            md: "5",
            class: "text-center mb-6 mb-md-0"
          }, {
            default: withCtx(() => [createVNode("img", {
              src: _imports_1,
              alt: "Happy students",
              class: "max-width-100"
            })]),
            _: 1
          }), createVNode(VCol, {
            cols: "12",
            md: "6",
            class: "admission-info rounded-xl pa-8 text-center text-md-left"
          }, {
            default: withCtx(() => [createVNode("h1", {
              class: "text-3xl md:text-4xl font-bold mb-4"
            }, " Trusted by Educational Institutions "), createVNode("p", {
              class: "text-base md:text-lg"
            }, " Our tutors come highly recommended by numerous schools, colleges, and universities, solidifying our reputation as a trusted educational partner. ")]),
            _: 1
          })]),
          _: 1
        }), createVNode(VDivider, {
          class: "my-0"
        }), createVNode(VRow, {
          align: "center",
          justify: "space-between",
          "no-gutters": ""
        }, {
          default: withCtx(() => [createVNode(VCol, {
            cols: "12",
            md: "5",
            order: "md1",
            "order-md": "2",
            class: "text-center mb-6 mb-md-0"
          }, {
            default: withCtx(() => [createVNode("img", {
              src: _imports_2,
              alt: "Happy students",
              class: "max-width-100"
            })]),
            _: 1
          }), createVNode(VCol, {
            cols: "12",
            md: "6",
            order: "md2",
            "order-md": "1",
            class: "admission-info rounded-xl pa-8 text-center text-md-right"
          }, {
            default: withCtx(() => [createVNode("h1", {
              class: "text-3xl md:text-4xl font-bold mb-4"
            }, " Trusted by Educational Institutions "), createVNode("p", {
              class: "text-base md:text-lg"
            }, " Our tutors come highly recommended by numerous schools, colleges, and universities, solidifying our reputation as a trusted educational partner. ")]),
            _: 1
          })]),
          _: 1
        })];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdmissionsInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AdmissionsInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f16e54ae"]]);
const _sfc_main = {
  __name: "admissions",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const isLoggedIn = computed(() => !!userStore.getUser);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CallToAction = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "full-width"
      }, _attrs))} data-v-07c971a9><section class="landing" data-v-07c971a9>`);
      _push(ssrRenderComponent(VContainer, {
        class: "pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content-wrapper px-4" data-v-07c971a9${_scopeId}>`);
            _push2(ssrRenderComponent(AdmissionsServices, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", {
              class: "content-wrapper px-4"
            }, [createVNode(AdmissionsServices)])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="payment" data-v-07c971a9>`);
      _push(ssrRenderComponent(VContainer, {
        class: "box1 pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PaymentCard, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(PaymentCard)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="info" data-v-07c971a9>`);
      _push(ssrRenderComponent(VContainer, {
        class: "box1 pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AdmissionsInfo, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(AdmissionsInfo)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      if (!unref(isLoggedIn)) {
        _push(`<section data-v-07c971a9>`);
        _push(ssrRenderComponent(VContainer, {
          class: "pa-0",
          fluid: "",
          "data-aos": "fade-up",
          "data-aos-duration": "300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="content-wrapper" data-v-07c971a9${_scopeId}>`);
              _push2(ssrRenderComponent(_component_CallToAction, {
                startColor: "#ffefd4",
                endColor: "#ffe1ae"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [createVNode("div", {
                class: "content-wrapper"
              }, [createVNode(_component_CallToAction, {
                startColor: "#ffefd4",
                endColor: "#ffe1ae"
              })])];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="" data-v-07c971a9>`);
      _push(ssrRenderComponent(VContainer, {
        class: "box1 pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FAQ, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(FAQ)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="" data-v-07c971a9>`);
      _push(ssrRenderComponent(VContainer, {
        class: "box1 pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(GetInTouch, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(GetInTouch)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admissions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admissions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07c971a9"]]);

export { admissions as default };
//# sourceMappingURL=admissions-C_cv6eaL.mjs.map
