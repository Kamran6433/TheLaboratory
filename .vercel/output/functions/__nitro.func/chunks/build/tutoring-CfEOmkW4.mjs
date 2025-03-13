import { _ as __nuxt_component_0 } from './CallToAction-KwccuGOk.mjs';
import { useSSRContext, computed, mergeProps, withCtx, createVNode, unref, ref, resolveComponent, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import { _ as _export_sfc, V as VContainer, e as VRow, u as useRouter$1, s as storeToRefs, f as VCol, P as VBtnToggle, t as VBtn, g as VProgressCircular, h as VAlert, j as VCard, v as VCardTitle, k as VCardText, l as VList, m as VListItem, o as VIcon, p as VListItemTitle, q as VCardActions, w as VAvatar } from './server.mjs';
import { F as FAQ } from './FAQ-C9-s_t0y.mjs';
import { G as GetInTouch } from './GetInTouch-CNVAZ0YB.mjs';
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
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';

const _sfc_main$2 = {
  __name: "SubscriptionCard",
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
    const subscriptionType = ref("Monthly");
    const subscriptions = ref([]);
    const createStripeSubscriptionCheckoutSession = async (subscription) => {
      if (!getIsAuthenticated.value) {
        router.push("/login");
        return;
      }
      if (!getUser.value.emailVerified) {
        router.push("/verify-email");
        return;
      }
      try {
        const payload = {
          productId: "prod_Qtxpa3XD4w5HiB",
          priceId: "price_1Q29u6HzvxYuMIIZHw2LErMM",
          user_id: getUser.value.uid,
          subscriptionName: subscription.name,
          subscriptionPrice: Math.round(subscription.price * 100),
          subscriptionType: subscriptionType.value
        };
        const response = await fetch("/api/stripe-subscription-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to create checkout session: ${errorText}`);
        }
        const session = await response.json();
        userStore.updateUser({
          subscriptionStatus: "active",
          subscriptionId: session.subscriptionId,
          subscriptionType: subscriptionType.value,
          subscriptionName: subscription.name,
          subscriptionPrice: subscription.price
        });
        (void 0).location = session.url;
      } catch (err) {
        console.error("Error creating subscription:", err);
        error.value = "Failed to create subscription. Please try again.";
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
                    class: "text-center mb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="text-4xl md:text-5xl font-weight-bold mb-8" data-v-e6f1e9c2${_scopeId3}> Choose a subscription that works for you </h1>`);
                        _push4(ssrRenderComponent(VBtnToggle, {
                          modelValue: subscriptionType.value,
                          "onUpdate:modelValue": ($event) => subscriptionType.value = $event,
                          mandatory: "",
                          class: "d-flex justify-center mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                value: "Monthly",
                                class: "px-8 py-4 text-lg font-semibold"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Monthly `);
                                  } else {
                                    return [createTextVNode(" Monthly ")];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                value: "Yearly",
                                class: "px-8 py-4 text-lg font-semibold"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Yearly `);
                                  } else {
                                    return [createTextVNode(" Yearly ")];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [createVNode(VBtn, {
                                value: "Monthly",
                                class: "px-8 py-4 text-lg font-semibold"
                              }, {
                                default: withCtx(() => [createTextVNode(" Monthly ")]),
                                _: 1
                              }), createVNode(VBtn, {
                                value: "Yearly",
                                class: "px-8 py-4 text-lg font-semibold"
                              }, {
                                default: withCtx(() => [createTextVNode(" Yearly ")]),
                                _: 1
                              })];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [createVNode("h1", {
                          class: "text-4xl md:text-5xl font-weight-bold mb-8"
                        }, " Choose a subscription that works for you "), createVNode(VBtnToggle, {
                          modelValue: subscriptionType.value,
                          "onUpdate:modelValue": ($event) => subscriptionType.value = $event,
                          mandatory: "",
                          class: "d-flex justify-center mb-4"
                        }, {
                          default: withCtx(() => [createVNode(VBtn, {
                            value: "Monthly",
                            class: "px-8 py-4 text-lg font-semibold"
                          }, {
                            default: withCtx(() => [createTextVNode(" Monthly ")]),
                            _: 1
                          }), createVNode(VBtn, {
                            value: "Yearly",
                            class: "px-8 py-4 text-lg font-semibold"
                          }, {
                            default: withCtx(() => [createTextVNode(" Yearly ")]),
                            _: 1
                          })]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VCol, {
                    cols: "12",
                    class: "text-center mb-6"
                  }, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-4xl md:text-5xl font-weight-bold mb-8"
                    }, " Choose a subscription that works for you "), createVNode(VBtnToggle, {
                      modelValue: subscriptionType.value,
                      "onUpdate:modelValue": ($event) => subscriptionType.value = $event,
                      mandatory: "",
                      class: "d-flex justify-center mb-4"
                    }, {
                      default: withCtx(() => [createVNode(VBtn, {
                        value: "Monthly",
                        class: "px-8 py-4 text-lg font-semibold"
                      }, {
                        default: withCtx(() => [createTextVNode(" Monthly ")]),
                        _: 1
                      }), createVNode(VBtn, {
                        value: "Yearly",
                        class: "px-8 py-4 text-lg font-semibold"
                      }, {
                        default: withCtx(() => [createTextVNode(" Yearly ")]),
                        _: 1
                      })]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])]),
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
                            color: "primary"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [createVNode(VProgressCircular, {
                            indeterminate: "",
                            color: "primary"
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
                        color: "primary"
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
                      class: "text-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VAlert, {
                            type: "error"
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
                            type: "error"
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
                      class: "text-center"
                    }, {
                      default: withCtx(() => [createVNode(VAlert, {
                        type: "error"
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
              _push2(ssrRenderComponent(VRow, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(subscriptions.value, (subscription) => {
                      _push3(ssrRenderComponent(VCol, {
                        key: subscription.name,
                        cols: "12",
                        sm: "6",
                        md: "4"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCard, {
                              class: ["subscription-card mb-4 d-flex flex-column", {
                                "most-popular": subscription.mostPopular
                              }]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="color-block" style="${ssrRenderStyle({
                                    backgroundColor: subscription.colorClass
                                  })}" data-v-e6f1e9c2${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VCardTitle, {
                                    class: "text-center py-4 text-white"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<h1 class="text-xl md:text-2xl font-bold" data-v-e6f1e9c2${_scopeId5}>${ssrInterpolate(subscription.name)}</h1>`);
                                      } else {
                                        return [createVNode("h1", {
                                          class: "text-xl md:text-2xl font-bold"
                                        }, toDisplayString(subscription.name), 1)];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`<div class="text-center pb-4" data-v-e6f1e9c2${_scopeId4}><h1 class="text-3xl md:text-4xl font-bold text-white" data-v-e6f1e9c2${_scopeId4}> \xA3${ssrInterpolate(subscription.price.toFixed(2))} <span class="text-sm md:text-base" data-v-e6f1e9c2${_scopeId4}>/ ${ssrInterpolate(subscriptionType.value.toLowerCase())}</span></h1></div></div>`);
                                  _push5(ssrRenderComponent(VCardText, {
                                    class: "flex-grow-1 bg-white"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VList, {
                                          dense: ""
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<!--[-->`);
                                              ssrRenderList(subscription.features, (feature, index) => {
                                                _push7(ssrRenderComponent(VListItem, {
                                                  key: index
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(ssrRenderComponent(_component_v_list_item_icon, null, {
                                                        default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(ssrRenderComponent(VIcon, {
                                                              color: "success"
                                                            }, {
                                                              default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                if (_push10) {
                                                                  _push10(`${ssrInterpolate(feature.included ? "mdi-check-circle" : "mdi-circle-outline")}`);
                                                                } else {
                                                                  return [createTextVNode(toDisplayString(feature.included ? "mdi-check-circle" : "mdi-circle-outline"), 1)];
                                                                }
                                                              }),
                                                              _: 2
                                                            }, _parent9, _scopeId8));
                                                          } else {
                                                            return [createVNode(VIcon, {
                                                              color: "success"
                                                            }, {
                                                              default: withCtx(() => [createTextVNode(toDisplayString(feature.included ? "mdi-check-circle" : "mdi-circle-outline"), 1)]),
                                                              _: 2
                                                            }, 1024)];
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
                                                                  _push10(`<p class="text-lg font-bold" data-v-e6f1e9c2${_scopeId9}>${ssrInterpolate(feature.text)}</p>`);
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
                                                      return [createVNode(_component_v_list_item_icon, null, {
                                                        default: withCtx(() => [createVNode(VIcon, {
                                                          color: "success"
                                                        }, {
                                                          default: withCtx(() => [createTextVNode(toDisplayString(feature.included ? "mdi-check-circle" : "mdi-circle-outline"), 1)]),
                                                          _: 2
                                                        }, 1024)]),
                                                        _: 2
                                                      }, 1024), createVNode(_component_v_list_item_content, null, {
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
                                              return [(openBlock(true), createBlock(Fragment, null, renderList(subscription.features, (feature, index) => {
                                                return openBlock(), createBlock(VListItem, {
                                                  key: index
                                                }, {
                                                  default: withCtx(() => [createVNode(_component_v_list_item_icon, null, {
                                                    default: withCtx(() => [createVNode(VIcon, {
                                                      color: "success"
                                                    }, {
                                                      default: withCtx(() => [createTextVNode(toDisplayString(feature.included ? "mdi-check-circle" : "mdi-circle-outline"), 1)]),
                                                      _: 2
                                                    }, 1024)]),
                                                    _: 2
                                                  }, 1024), createVNode(_component_v_list_item_content, null, {
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
                                        _push6(ssrRenderComponent(VCardActions, {
                                          class: "pa-4"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VBtn, {
                                                block: "",
                                                color: "primary",
                                                class: "px-6 py-2 text-base md:text-lg",
                                                onClick: ($event) => createStripeSubscriptionCheckoutSession(subscription)
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` Subscribe `);
                                                  } else {
                                                    return [createTextVNode(" Subscribe ")];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [createVNode(VBtn, {
                                                block: "",
                                                color: "primary",
                                                class: "px-6 py-2 text-base md:text-lg",
                                                onClick: ($event) => createStripeSubscriptionCheckoutSession(subscription)
                                              }, {
                                                default: withCtx(() => [createTextVNode(" Subscribe ")]),
                                                _: 2
                                              }, 1032, ["onClick"])];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [createVNode(VList, {
                                          dense: ""
                                        }, {
                                          default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(subscription.features, (feature, index) => {
                                            return openBlock(), createBlock(VListItem, {
                                              key: index
                                            }, {
                                              default: withCtx(() => [createVNode(_component_v_list_item_icon, null, {
                                                default: withCtx(() => [createVNode(VIcon, {
                                                  color: "success"
                                                }, {
                                                  default: withCtx(() => [createTextVNode(toDisplayString(feature.included ? "mdi-check-circle" : "mdi-circle-outline"), 1)]),
                                                  _: 2
                                                }, 1024)]),
                                                _: 2
                                              }, 1024), createVNode(_component_v_list_item_content, null, {
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
                                        }, 1024), createVNode(VCardActions, {
                                          class: "pa-4"
                                        }, {
                                          default: withCtx(() => [createVNode(VBtn, {
                                            block: "",
                                            color: "primary",
                                            class: "px-6 py-2 text-base md:text-lg",
                                            onClick: ($event) => createStripeSubscriptionCheckoutSession(subscription)
                                          }, {
                                            default: withCtx(() => [createTextVNode(" Subscribe ")]),
                                            _: 2
                                          }, 1032, ["onClick"])]),
                                          _: 2
                                        }, 1024)];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [createVNode("div", {
                                    class: "color-block",
                                    style: {
                                      backgroundColor: subscription.colorClass
                                    }
                                  }, [createVNode(VCardTitle, {
                                    class: "text-center py-4 text-white"
                                  }, {
                                    default: withCtx(() => [createVNode("h1", {
                                      class: "text-xl md:text-2xl font-bold"
                                    }, toDisplayString(subscription.name), 1)]),
                                    _: 2
                                  }, 1024), createVNode("div", {
                                    class: "text-center pb-4"
                                  }, [createVNode("h1", {
                                    class: "text-3xl md:text-4xl font-bold text-white"
                                  }, [createTextVNode(" \xA3" + toDisplayString(subscription.price.toFixed(2)) + " ", 1), createVNode("span", {
                                    class: "text-sm md:text-base"
                                  }, "/ " + toDisplayString(subscriptionType.value.toLowerCase()), 1)])])], 4), createVNode(VCardText, {
                                    class: "flex-grow-1 bg-white"
                                  }, {
                                    default: withCtx(() => [createVNode(VList, {
                                      dense: ""
                                    }, {
                                      default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(subscription.features, (feature, index) => {
                                        return openBlock(), createBlock(VListItem, {
                                          key: index
                                        }, {
                                          default: withCtx(() => [createVNode(_component_v_list_item_icon, null, {
                                            default: withCtx(() => [createVNode(VIcon, {
                                              color: "success"
                                            }, {
                                              default: withCtx(() => [createTextVNode(toDisplayString(feature.included ? "mdi-check-circle" : "mdi-circle-outline"), 1)]),
                                              _: 2
                                            }, 1024)]),
                                            _: 2
                                          }, 1024), createVNode(_component_v_list_item_content, null, {
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
                                    }, 1024), createVNode(VCardActions, {
                                      class: "pa-4"
                                    }, {
                                      default: withCtx(() => [createVNode(VBtn, {
                                        block: "",
                                        color: "primary",
                                        class: "px-6 py-2 text-base md:text-lg",
                                        onClick: ($event) => createStripeSubscriptionCheckoutSession(subscription)
                                      }, {
                                        default: withCtx(() => [createTextVNode(" Subscribe ")]),
                                        _: 2
                                      }, 1032, ["onClick"])]),
                                      _: 2
                                    }, 1024)]),
                                    _: 2
                                  }, 1024)];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [createVNode(VCard, {
                              class: ["subscription-card mb-4 d-flex flex-column", {
                                "most-popular": subscription.mostPopular
                              }]
                            }, {
                              default: withCtx(() => [createVNode("div", {
                                class: "color-block",
                                style: {
                                  backgroundColor: subscription.colorClass
                                }
                              }, [createVNode(VCardTitle, {
                                class: "text-center py-4 text-white"
                              }, {
                                default: withCtx(() => [createVNode("h1", {
                                  class: "text-xl md:text-2xl font-bold"
                                }, toDisplayString(subscription.name), 1)]),
                                _: 2
                              }, 1024), createVNode("div", {
                                class: "text-center pb-4"
                              }, [createVNode("h1", {
                                class: "text-3xl md:text-4xl font-bold text-white"
                              }, [createTextVNode(" \xA3" + toDisplayString(subscription.price.toFixed(2)) + " ", 1), createVNode("span", {
                                class: "text-sm md:text-base"
                              }, "/ " + toDisplayString(subscriptionType.value.toLowerCase()), 1)])])], 4), createVNode(VCardText, {
                                class: "flex-grow-1 bg-white"
                              }, {
                                default: withCtx(() => [createVNode(VList, {
                                  dense: ""
                                }, {
                                  default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(subscription.features, (feature, index) => {
                                    return openBlock(), createBlock(VListItem, {
                                      key: index
                                    }, {
                                      default: withCtx(() => [createVNode(_component_v_list_item_icon, null, {
                                        default: withCtx(() => [createVNode(VIcon, {
                                          color: "success"
                                        }, {
                                          default: withCtx(() => [createTextVNode(toDisplayString(feature.included ? "mdi-check-circle" : "mdi-circle-outline"), 1)]),
                                          _: 2
                                        }, 1024)]),
                                        _: 2
                                      }, 1024), createVNode(_component_v_list_item_content, null, {
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
                                }, 1024), createVNode(VCardActions, {
                                  class: "pa-4"
                                }, {
                                  default: withCtx(() => [createVNode(VBtn, {
                                    block: "",
                                    color: "primary",
                                    class: "px-6 py-2 text-base md:text-lg",
                                    onClick: ($event) => createStripeSubscriptionCheckoutSession(subscription)
                                  }, {
                                    default: withCtx(() => [createTextVNode(" Subscribe ")]),
                                    _: 2
                                  }, 1032, ["onClick"])]),
                                  _: 2
                                }, 1024)]),
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
                    return [(openBlock(true), createBlock(Fragment, null, renderList(subscriptions.value, (subscription) => {
                      return openBlock(), createBlock(VCol, {
                        key: subscription.name,
                        cols: "12",
                        sm: "6",
                        md: "4"
                      }, {
                        default: withCtx(() => [createVNode(VCard, {
                          class: ["subscription-card mb-4 d-flex flex-column", {
                            "most-popular": subscription.mostPopular
                          }]
                        }, {
                          default: withCtx(() => [createVNode("div", {
                            class: "color-block",
                            style: {
                              backgroundColor: subscription.colorClass
                            }
                          }, [createVNode(VCardTitle, {
                            class: "text-center py-4 text-white"
                          }, {
                            default: withCtx(() => [createVNode("h1", {
                              class: "text-xl md:text-2xl font-bold"
                            }, toDisplayString(subscription.name), 1)]),
                            _: 2
                          }, 1024), createVNode("div", {
                            class: "text-center pb-4"
                          }, [createVNode("h1", {
                            class: "text-3xl md:text-4xl font-bold text-white"
                          }, [createTextVNode(" \xA3" + toDisplayString(subscription.price.toFixed(2)) + " ", 1), createVNode("span", {
                            class: "text-sm md:text-base"
                          }, "/ " + toDisplayString(subscriptionType.value.toLowerCase()), 1)])])], 4), createVNode(VCardText, {
                            class: "flex-grow-1 bg-white"
                          }, {
                            default: withCtx(() => [createVNode(VList, {
                              dense: ""
                            }, {
                              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(subscription.features, (feature, index) => {
                                return openBlock(), createBlock(VListItem, {
                                  key: index
                                }, {
                                  default: withCtx(() => [createVNode(_component_v_list_item_icon, null, {
                                    default: withCtx(() => [createVNode(VIcon, {
                                      color: "success"
                                    }, {
                                      default: withCtx(() => [createTextVNode(toDisplayString(feature.included ? "mdi-check-circle" : "mdi-circle-outline"), 1)]),
                                      _: 2
                                    }, 1024)]),
                                    _: 2
                                  }, 1024), createVNode(_component_v_list_item_content, null, {
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
                            }, 1024), createVNode(VCardActions, {
                              class: "pa-4"
                            }, {
                              default: withCtx(() => [createVNode(VBtn, {
                                block: "",
                                color: "primary",
                                class: "px-6 py-2 text-base md:text-lg",
                                onClick: ($event) => createStripeSubscriptionCheckoutSession(subscription)
                              }, {
                                default: withCtx(() => [createTextVNode(" Subscribe ")]),
                                _: 2
                              }, 1032, ["onClick"])]),
                              _: 2
                            }, 1024)]),
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
                class: "text-center mb-6"
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-4xl md:text-5xl font-weight-bold mb-8"
                }, " Choose a subscription that works for you "), createVNode(VBtnToggle, {
                  modelValue: subscriptionType.value,
                  "onUpdate:modelValue": ($event) => subscriptionType.value = $event,
                  mandatory: "",
                  class: "d-flex justify-center mb-4"
                }, {
                  default: withCtx(() => [createVNode(VBtn, {
                    value: "Monthly",
                    class: "px-8 py-4 text-lg font-semibold"
                  }, {
                    default: withCtx(() => [createTextVNode(" Monthly ")]),
                    _: 1
                  }), createVNode(VBtn, {
                    value: "Yearly",
                    class: "px-8 py-4 text-lg font-semibold"
                  }, {
                    default: withCtx(() => [createTextVNode(" Yearly ")]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])]),
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
                  color: "primary"
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
                class: "text-center"
              }, {
                default: withCtx(() => [createVNode(VAlert, {
                  type: "error"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })) : (openBlock(), createBlock(VRow, {
              key: 2
            }, {
              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(subscriptions.value, (subscription) => {
                return openBlock(), createBlock(VCol, {
                  key: subscription.name,
                  cols: "12",
                  sm: "6",
                  md: "4"
                }, {
                  default: withCtx(() => [createVNode(VCard, {
                    class: ["subscription-card mb-4 d-flex flex-column", {
                      "most-popular": subscription.mostPopular
                    }]
                  }, {
                    default: withCtx(() => [createVNode("div", {
                      class: "color-block",
                      style: {
                        backgroundColor: subscription.colorClass
                      }
                    }, [createVNode(VCardTitle, {
                      class: "text-center py-4 text-white"
                    }, {
                      default: withCtx(() => [createVNode("h1", {
                        class: "text-xl md:text-2xl font-bold"
                      }, toDisplayString(subscription.name), 1)]),
                      _: 2
                    }, 1024), createVNode("div", {
                      class: "text-center pb-4"
                    }, [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold text-white"
                    }, [createTextVNode(" \xA3" + toDisplayString(subscription.price.toFixed(2)) + " ", 1), createVNode("span", {
                      class: "text-sm md:text-base"
                    }, "/ " + toDisplayString(subscriptionType.value.toLowerCase()), 1)])])], 4), createVNode(VCardText, {
                      class: "flex-grow-1 bg-white"
                    }, {
                      default: withCtx(() => [createVNode(VList, {
                        dense: ""
                      }, {
                        default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(subscription.features, (feature, index) => {
                          return openBlock(), createBlock(VListItem, {
                            key: index
                          }, {
                            default: withCtx(() => [createVNode(_component_v_list_item_icon, null, {
                              default: withCtx(() => [createVNode(VIcon, {
                                color: "success"
                              }, {
                                default: withCtx(() => [createTextVNode(toDisplayString(feature.included ? "mdi-check-circle" : "mdi-circle-outline"), 1)]),
                                _: 2
                              }, 1024)]),
                              _: 2
                            }, 1024), createVNode(_component_v_list_item_content, null, {
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
                      }, 1024), createVNode(VCardActions, {
                        class: "pa-4"
                      }, {
                        default: withCtx(() => [createVNode(VBtn, {
                          block: "",
                          color: "primary",
                          class: "px-6 py-2 text-base md:text-lg",
                          onClick: ($event) => createStripeSubscriptionCheckoutSession(subscription)
                        }, {
                          default: withCtx(() => [createTextVNode(" Subscribe ")]),
                          _: 2
                        }, 1032, ["onClick"])]),
                        _: 2
                      }, 1024)]),
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubscriptionCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SubscriptionCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e6f1e9c2"]]);
const _sfc_main$1 = {
  data() {
    return {
      features: [{
        icon: "mdi-shield-check",
        color: "purple",
        title: "Enhanced DBS background checks",
        description: "We conduct thorough background checks and identity verification for all our tutors to ensure the safety and security of our students."
      }, {
        icon: "mdi-account-group",
        color: "light-green",
        title: "Two references required",
        description: "Each tutor must provide two references from past students or parents, ensuring a track record of successful teaching experiences."
      }, {
        icon: "mdi-eye",
        color: "yellow darken-2",
        title: "AI-based quality monitoring",
        description: "Our advanced AI system continuously monitors tutor performance, analyzing reviews, ratings, and booking patterns to maintain high-quality standards."
      }]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VContainer, mergeProps({
    class: "max-width-1600 py-24 px-4 px-lg-12",
    fluid: ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-v-1df0fbc7${_scopeId}><h1 class="text-4xl md:text-5xl font-bold text-center mb-10" data-v-1df0fbc7${_scopeId}> Learn safely with handpicked and highly-rated tutors. </h1><p class="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto" data-v-1df0fbc7${_scopeId}> As well as performing background checks and getting references, we monitor all our tutors based on reviews, ratings, repeat bookings and more - to keep quality high. </p>`);
        _push2(ssrRenderComponent(VRow, {
          justify: "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.features, (item, index) => {
                _push3(ssrRenderComponent(VCol, {
                  key: index,
                  cols: "12",
                  sm: "6",
                  md: "4"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VCard, {
                        class: "tutoring-card h-100 d-flex flex-column pa-6 rounded-xl"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(VAvatar, {
                              color: item.color,
                              size: "48",
                              class: "mb-6"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VIcon, {
                                    dark: ""
                                  }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`${ssrInterpolate(item.icon)}`);
                                      } else {
                                        return [createTextVNode(toDisplayString(item.icon), 1)];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
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
                            }, _parent5, _scopeId4));
                            _push5(`<h1 class="text-xl md:text-2xl font-bold mb-6" data-v-1df0fbc7${_scopeId4}>${ssrInterpolate(item.title)}</h1><p class="text-lg md:text-xl" data-v-1df0fbc7${_scopeId4}>${ssrInterpolate(item.description)}</p>`);
                          } else {
                            return [createVNode(VAvatar, {
                              color: item.color,
                              size: "48",
                              class: "mb-6"
                            }, {
                              default: withCtx(() => [createVNode(VIcon, {
                                dark: ""
                              }, {
                                default: withCtx(() => [createTextVNode(toDisplayString(item.icon), 1)]),
                                _: 2
                              }, 1024)]),
                              _: 2
                            }, 1032, ["color"]), createVNode("h1", {
                              class: "text-xl md:text-2xl font-bold mb-6"
                            }, toDisplayString(item.title), 1), createVNode("p", {
                              class: "text-lg md:text-xl"
                            }, toDisplayString(item.description), 1)];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [createVNode(VCard, {
                        class: "tutoring-card h-100 d-flex flex-column pa-6 rounded-xl"
                      }, {
                        default: withCtx(() => [createVNode(VAvatar, {
                          color: item.color,
                          size: "48",
                          class: "mb-6"
                        }, {
                          default: withCtx(() => [createVNode(VIcon, {
                            dark: ""
                          }, {
                            default: withCtx(() => [createTextVNode(toDisplayString(item.icon), 1)]),
                            _: 2
                          }, 1024)]),
                          _: 2
                        }, 1032, ["color"]), createVNode("h1", {
                          class: "text-xl md:text-2xl font-bold mb-6"
                        }, toDisplayString(item.title), 1), createVNode("p", {
                          class: "text-lg md:text-xl"
                        }, toDisplayString(item.description), 1)]),
                        _: 2
                      }, 1024)];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [(openBlock(true), createBlock(Fragment, null, renderList($data.features, (item, index) => {
                return openBlock(), createBlock(VCol, {
                  key: index,
                  cols: "12",
                  sm: "6",
                  md: "4"
                }, {
                  default: withCtx(() => [createVNode(VCard, {
                    class: "tutoring-card h-100 d-flex flex-column pa-6 rounded-xl"
                  }, {
                    default: withCtx(() => [createVNode(VAvatar, {
                      color: item.color,
                      size: "48",
                      class: "mb-6"
                    }, {
                      default: withCtx(() => [createVNode(VIcon, {
                        dark: ""
                      }, {
                        default: withCtx(() => [createTextVNode(toDisplayString(item.icon), 1)]),
                        _: 2
                      }, 1024)]),
                      _: 2
                    }, 1032, ["color"]), createVNode("h1", {
                      class: "text-xl md:text-2xl font-bold mb-6"
                    }, toDisplayString(item.title), 1), createVNode("p", {
                      class: "text-lg md:text-xl"
                    }, toDisplayString(item.description), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024);
              }), 128))];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [createVNode("div", null, [createVNode("h1", {
          class: "text-4xl md:text-5xl font-bold text-center mb-10"
        }, " Learn safely with handpicked and highly-rated tutors. "), createVNode("p", {
          class: "text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto"
        }, " As well as performing background checks and getting references, we monitor all our tutors based on reviews, ratings, repeat bookings and more - to keep quality high. "), createVNode(VRow, {
          justify: "center"
        }, {
          default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($data.features, (item, index) => {
            return openBlock(), createBlock(VCol, {
              key: index,
              cols: "12",
              sm: "6",
              md: "4"
            }, {
              default: withCtx(() => [createVNode(VCard, {
                class: "tutoring-card h-100 d-flex flex-column pa-6 rounded-xl"
              }, {
                default: withCtx(() => [createVNode(VAvatar, {
                  color: item.color,
                  size: "48",
                  class: "mb-6"
                }, {
                  default: withCtx(() => [createVNode(VIcon, {
                    dark: ""
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(item.icon), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1032, ["color"]), createVNode("h1", {
                  class: "text-xl md:text-2xl font-bold mb-6"
                }, toDisplayString(item.title), 1), createVNode("p", {
                  class: "text-lg md:text-xl"
                }, toDisplayString(item.description), 1)]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1024);
          }), 128))]),
          _: 1
        })])];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TutorInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TutorInfo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1df0fbc7"]]);
const _sfc_main = {
  __name: "tutoring",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const isLoggedIn = computed(() => !!userStore.getUser);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CallToAction = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "full-width"
      }, _attrs))} data-v-c01e396a><section class="landing" data-v-c01e396a>`);
      _push(ssrRenderComponent(VContainer, {
        class: "pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(TutorInfo, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(TutorInfo)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="payment" data-v-c01e396a>`);
      _push(ssrRenderComponent(VContainer, {
        class: "box1 pa-0",
        fluid: "",
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
                  _push3(ssrRenderComponent(SubscriptionCard, null, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(SubscriptionCard)];
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
              default: withCtx(() => [createVNode(SubscriptionCard)]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      if (!unref(isLoggedIn)) {
        _push(`<section data-v-c01e396a>`);
        _push(ssrRenderComponent(VContainer, {
          class: "pa-0",
          fluid: "",
          "data-aos": "fade-up",
          "data-aos-duration": "300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="content-wrapper" data-v-c01e396a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_CallToAction, {
                startColor: "#edf3f8",
                endColor: "#dceefd"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [createVNode("div", {
                class: "content-wrapper"
              }, [createVNode(_component_CallToAction, {
                startColor: "#edf3f8",
                endColor: "#dceefd"
              })])];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="" data-v-c01e396a>`);
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
      _push(`</section><section class="" data-v-c01e396a>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tutoring.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tutoring = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c01e396a"]]);

export { tutoring as default };
//# sourceMappingURL=tutoring-CfEOmkW4.mjs.map
