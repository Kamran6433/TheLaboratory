import { mergeProps, withCtx, createVNode, useSSRContext, ref, computed, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import { V as VContainer, _ as _export_sfc, s as storeToRefs, j as VCard, k as VCardText, g as VProgressCircular, H as VImg, w as VAvatar, e as VRow, f as VCol, x as VDivider, h as VAlert, t as VBtn, q as VCardActions } from './server.mjs';
import { useRouter } from 'vue-router';
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
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';

const _sfc_main$1 = {
  __name: "UserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const {
      getUser,
      getIsCustomer,
      getStripeCustomerId,
      getEmail,
      getEmailVerified
    } = storeToRefs(userStore);
    useRouter();
    const userProfile = ref({
      name: "",
      email: "",
      number: "",
      school: "",
      isCustomer: false
    });
    const stripeCustomerData = ref({
      subscriptionId: null,
      subscriptionStatus: null,
      subscriptionEndDate: null,
      lastPaymentDate: null,
      lastPaymentAmount: null
    });
    const loading = ref(true);
    const error = ref(null);
    const cancelSubscription = async () => {
      loading.value = true;
      try {
        const response = await fetch("/api/stripe-subscription-cancel-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: getUser.value.uid,
            subscriptionId: stripeCustomerData.value.subscriptionId
          })
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        const data = await response.json();
        if (data.success) {
          stripeCustomerData.value.subscriptionStatus = "cancelling";
          stripeCustomerData.value.subscriptionEndDate = data.endDate;
          stripeCustomerData.value.cancellationScheduledAt = data.cancellationScheduledAt;
          userStore.updateUser({
            subscriptionStatus: "cancelling",
            subscriptionEndDate: data.endDate,
            cancellationScheduledAt: data.cancellationScheduledAt
          });
          alert(data.message);
        } else {
          throw new Error(data.message || "Failed to cancel subscription");
        }
      } catch (err) {
        console.error("Error cancelling subscription:", err);
        error.value = `Failed to cancel subscription: ${err.message}`;
      } finally {
        loading.value = false;
      }
    };
    const userProfileDisplay = computed(() => ({
      Email: userProfile.value.email,
      Phone: userProfile.value.number,
      School: userProfile.value.school,
      "Customer Status": userProfile.value.isCustomer ? "Stripe Customer" : "Not a Stripe Customer"
    }));
    const subscriptionDisplay = computed(() => {
      const displayData = {
        Status: stripeCustomerData.value.subscriptionStatus,
        "Subscription ID": stripeCustomerData.value.subscriptionId,
        "Plan Name": stripeCustomerData.value.subscriptionPlanName || "Default Plan",
        "Plan Amount": stripeCustomerData.value.planAmount ? `\xA3${(stripeCustomerData.value.planAmount / 100).toFixed(2)}` : "N/A",
        "Billing Interval": stripeCustomerData.value.planInterval || "Monthly"
      };
      if (stripeCustomerData.value.lastPaymentDate) {
        displayData["Last Payment Date"] = new Date(stripeCustomerData.value.lastPaymentDate.seconds * 1e3).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
        displayData["Last Payment Amount"] = `\xA3${(stripeCustomerData.value.lastPaymentAmount / 100).toFixed(2)}`;
      }
      if (stripeCustomerData.value.subscriptionStatus === "cancelling") {
        if (stripeCustomerData.value.cancellationScheduledAt) {
          displayData["Cancellation Date"] = new Date(stripeCustomerData.value.cancellationScheduledAt.seconds * 1e3).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          });
        }
        if (stripeCustomerData.value.subscriptionEndDate) {
          displayData["Access Until"] = new Date(stripeCustomerData.value.subscriptionEndDate.seconds * 1e3).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          });
        }
      }
      return displayData;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "max-width-1600 py-24 px-4 px-lg-12 d-flex align-center min-height-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "user-profile mx-auto rounded-lg overflow-hidden",
              "max-width": "700"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (loading.value) {
                    _push3(ssrRenderComponent(VCardText, {
                      class: "text-center py-12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VProgressCircular, {
                            indeterminate: "",
                            color: "primary",
                            size: "64"
                          }, null, _parent4, _scopeId3));
                          _push4(`<p class="mt-4 text-lg text-gray-600" data-v-7095e7e4${_scopeId3}> Loading profile... </p>`);
                        } else {
                          return [createVNode(VProgressCircular, {
                            indeterminate: "",
                            color: "primary",
                            size: "64"
                          }), createVNode("p", {
                            class: "mt-4 text-lg text-gray-600"
                          }, " Loading profile... ")];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else if (!error.value) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(VImg, {
                      height: "200",
                      src: "https://picsum.photos/700/200?random",
                      class: "bg-gray-100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VAvatar, {
                            class: "mt-32 ml-6",
                            size: "128",
                            style: {
                              "border": "4px solid white"
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VImg, {
                                  src: `https://avatars.dicebear.com/api/initials/${userProfile.value.name}.svg`
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [createVNode(VImg, {
                                  src: `https://avatars.dicebear.com/api/initials/${userProfile.value.name}.svg`
                                }, null, 8, ["src"])];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [createVNode(VAvatar, {
                            class: "mt-32 ml-6",
                            size: "128",
                            style: {
                              "border": "4px solid white"
                            }
                          }, {
                            default: withCtx(() => [createVNode(VImg, {
                              src: `https://avatars.dicebear.com/api/initials/${userProfile.value.name}.svg`
                            }, null, 8, ["src"])]),
                            _: 1
                          })];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<h1 class="text-4xl md:text-5xl font-bold ml-8 mt-16 mb-4" data-v-7095e7e4${_scopeId2}>${ssrInterpolate(userProfile.value.name)}</h1>`);
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VRow, {
                            class: "px-4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(userProfileDisplay.value, (value, key) => {
                                  _push5(ssrRenderComponent(VCol, {
                                    key,
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="mb-4" data-v-7095e7e4${_scopeId5}><p class="text-sm font-medium text-gray-500 uppercase" data-v-7095e7e4${_scopeId5}>${ssrInterpolate(key)}</p><p class="mt-1 text-base md:text-lg font-semibold text-gray-900" data-v-7095e7e4${_scopeId5}>${ssrInterpolate(value)}</p></div>`);
                                      } else {
                                        return [createVNode("div", {
                                          class: "mb-4"
                                        }, [createVNode("p", {
                                          class: "text-sm font-medium text-gray-500 uppercase"
                                        }, toDisplayString(key), 1), createVNode("p", {
                                          class: "mt-1 text-base md:text-lg font-semibold text-gray-900"
                                        }, toDisplayString(value), 1)])];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [(openBlock(true), createBlock(Fragment, null, renderList(userProfileDisplay.value, (value, key) => {
                                  return openBlock(), createBlock(VCol, {
                                    key,
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [createVNode("div", {
                                      class: "mb-4"
                                    }, [createVNode("p", {
                                      class: "text-sm font-medium text-gray-500 uppercase"
                                    }, toDisplayString(key), 1), createVNode("p", {
                                      class: "mt-1 text-base md:text-lg font-semibold text-gray-900"
                                    }, toDisplayString(value), 1)])]),
                                    _: 2
                                  }, 1024);
                                }), 128))];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VDivider, {
                            class: "my-6"
                          }, null, _parent4, _scopeId3));
                          if (userProfile.value.isCustomer) {
                            _push4(`<div class="px-4" data-v-7095e7e4${_scopeId3}><h1 class="text-2xl md:text-3xl font-bold mb-4" data-v-7095e7e4${_scopeId3}> Subscription Information </h1>`);
                            _push4(ssrRenderComponent(VAlert, {
                              type: stripeCustomerData.value.subscriptionStatus === "active" ? "success" : "warning",
                              class: "mb-4"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex align-center" data-v-7095e7e4${_scopeId4}><p class="text-xl font-bold" data-v-7095e7e4${_scopeId4}>${ssrInterpolate(stripeCustomerData.value.subscriptionStatus === "active" ? "Active Subscription" : "Subscription Cancelling")}</p></div>`);
                                } else {
                                  return [createVNode("div", {
                                    class: "d-flex align-center"
                                  }, [createVNode("p", {
                                    class: "text-xl font-bold"
                                  }, toDisplayString(stripeCustomerData.value.subscriptionStatus === "active" ? "Active Subscription" : "Subscription Cancelling"), 1)])];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VRow, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(subscriptionDisplay.value, (value, key) => {
                                    _push5(ssrRenderComponent(VCol, {
                                      key,
                                      cols: "12",
                                      sm: "6",
                                      class: "subscription-info"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div class="mb-4" data-v-7095e7e4${_scopeId5}><p class="text-sm font-medium text-gray-500 uppercase" data-v-7095e7e4${_scopeId5}>${ssrInterpolate(key)}</p><p class="mt-1 text-base md:text-lg font-semibold text-gray-900" data-v-7095e7e4${_scopeId5}>${ssrInterpolate(value)}</p></div>`);
                                        } else {
                                          return [createVNode("div", {
                                            class: "mb-4"
                                          }, [createVNode("p", {
                                            class: "text-sm font-medium text-gray-500 uppercase"
                                          }, toDisplayString(key), 1), createVNode("p", {
                                            class: "mt-1 text-base md:text-lg font-semibold text-gray-900"
                                          }, toDisplayString(value), 1)])];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [(openBlock(true), createBlock(Fragment, null, renderList(subscriptionDisplay.value, (value, key) => {
                                    return openBlock(), createBlock(VCol, {
                                      key,
                                      cols: "12",
                                      sm: "6",
                                      class: "subscription-info"
                                    }, {
                                      default: withCtx(() => [createVNode("div", {
                                        class: "mb-4"
                                      }, [createVNode("p", {
                                        class: "text-sm font-medium text-gray-500 uppercase"
                                      }, toDisplayString(key), 1), createVNode("p", {
                                        class: "mt-1 text-base md:text-lg font-semibold text-gray-900"
                                      }, toDisplayString(value), 1)])]),
                                      _: 2
                                    }, 1024);
                                  }), 128))];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            if (stripeCustomerData.value.subscriptionStatus === "active") {
                              _push4(`<div class="mt-6" data-v-7095e7e4${_scopeId3}>`);
                              _push4(ssrRenderComponent(VBtn, {
                                color: "error",
                                class: "text-base",
                                onClick: cancelSubscription
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(` Cancel Subscription `);
                                  } else {
                                    return [createTextVNode(" Cancel Subscription ")];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (stripeCustomerData.value.subscriptionStatus === "cancelling") {
                              _push4(ssrRenderComponent(VAlert, {
                                type: "info",
                                class: "mt-4"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<p class="text-xl font-bold" data-v-7095e7e4${_scopeId4}> Your subscription will remain active until the end date. You&#39;ll continue to have full access to all features until then. </p>`);
                                  } else {
                                    return [createVNode("p", {
                                      class: "text-xl font-bold"
                                    }, " Your subscription will remain active until the end date. You'll continue to have full access to all features until then. ")];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [createVNode(VRow, {
                            class: "px-4"
                          }, {
                            default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(userProfileDisplay.value, (value, key) => {
                              return openBlock(), createBlock(VCol, {
                                key,
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [createVNode("div", {
                                  class: "mb-4"
                                }, [createVNode("p", {
                                  class: "text-sm font-medium text-gray-500 uppercase"
                                }, toDisplayString(key), 1), createVNode("p", {
                                  class: "mt-1 text-base md:text-lg font-semibold text-gray-900"
                                }, toDisplayString(value), 1)])]),
                                _: 2
                              }, 1024);
                            }), 128))]),
                            _: 1
                          }), createVNode(VDivider, {
                            class: "my-6"
                          }), userProfile.value.isCustomer ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "px-4"
                          }, [createVNode("h1", {
                            class: "text-2xl md:text-3xl font-bold mb-4"
                          }, " Subscription Information "), createVNode(VAlert, {
                            type: stripeCustomerData.value.subscriptionStatus === "active" ? "success" : "warning",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [createVNode("div", {
                              class: "d-flex align-center"
                            }, [createVNode("p", {
                              class: "text-xl font-bold"
                            }, toDisplayString(stripeCustomerData.value.subscriptionStatus === "active" ? "Active Subscription" : "Subscription Cancelling"), 1)])]),
                            _: 1
                          }, 8, ["type"]), createVNode(VRow, null, {
                            default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(subscriptionDisplay.value, (value, key) => {
                              return openBlock(), createBlock(VCol, {
                                key,
                                cols: "12",
                                sm: "6",
                                class: "subscription-info"
                              }, {
                                default: withCtx(() => [createVNode("div", {
                                  class: "mb-4"
                                }, [createVNode("p", {
                                  class: "text-sm font-medium text-gray-500 uppercase"
                                }, toDisplayString(key), 1), createVNode("p", {
                                  class: "mt-1 text-base md:text-lg font-semibold text-gray-900"
                                }, toDisplayString(value), 1)])]),
                                _: 2
                              }, 1024);
                            }), 128))]),
                            _: 1
                          }), stripeCustomerData.value.subscriptionStatus === "active" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-6"
                          }, [createVNode(VBtn, {
                            color: "error",
                            class: "text-base",
                            onClick: cancelSubscription
                          }, {
                            default: withCtx(() => [createTextVNode(" Cancel Subscription ")]),
                            _: 1
                          })])) : createCommentVNode("", true), stripeCustomerData.value.subscriptionStatus === "cancelling" ? (openBlock(), createBlock(VAlert, {
                            key: 1,
                            type: "info",
                            class: "mt-4"
                          }, {
                            default: withCtx(() => [createVNode("p", {
                              class: "text-xl font-bold"
                            }, " Your subscription will remain active until the end date. You'll continue to have full access to all features until then. ")]),
                            _: 1
                          })) : createCommentVNode("", true)])) : createCommentVNode("", true)];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardActions, {
                      class: "px-6 pb-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBtn, {
                            color: "primary",
                            to: "/profile/update",
                            class: "mr-2 text-base"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Manage Profile `);
                              } else {
                                return [createTextVNode(" Manage Profile ")];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if (userProfile.value.isCustomer && stripeCustomerData.value.subscriptionStatus === "active") {
                            _push4(ssrRenderComponent(VBtn, {
                              color: "error",
                              class: "text-base",
                              onClick: cancelSubscription
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` Cancel Subscription `);
                                } else {
                                  return [createTextVNode(" Cancel Subscription ")];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [createVNode(VBtn, {
                            color: "primary",
                            to: "/profile/update",
                            class: "mr-2 text-base"
                          }, {
                            default: withCtx(() => [createTextVNode(" Manage Profile ")]),
                            _: 1
                          }), userProfile.value.isCustomer && stripeCustomerData.value.subscriptionStatus === "active" ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            color: "error",
                            class: "text-base",
                            onClick: cancelSubscription
                          }, {
                            default: withCtx(() => [createTextVNode(" Cancel Subscription ")]),
                            _: 1
                          })) : createCommentVNode("", true)];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VAlert, {
                            type: "error",
                            class: "mb-0"
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
                            class: "mb-0"
                          }, {
                            default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
                            _: 1
                          })];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [loading.value ? (openBlock(), createBlock(VCardText, {
                    key: 0,
                    class: "text-center py-12"
                  }, {
                    default: withCtx(() => [createVNode(VProgressCircular, {
                      indeterminate: "",
                      color: "primary",
                      size: "64"
                    }), createVNode("p", {
                      class: "mt-4 text-lg text-gray-600"
                    }, " Loading profile... ")]),
                    _: 1
                  })) : !error.value ? (openBlock(), createBlock(Fragment, {
                    key: 1
                  }, [createVNode(VImg, {
                    height: "200",
                    src: "https://picsum.photos/700/200?random",
                    class: "bg-gray-100"
                  }, {
                    default: withCtx(() => [createVNode(VAvatar, {
                      class: "mt-32 ml-6",
                      size: "128",
                      style: {
                        "border": "4px solid white"
                      }
                    }, {
                      default: withCtx(() => [createVNode(VImg, {
                        src: `https://avatars.dicebear.com/api/initials/${userProfile.value.name}.svg`
                      }, null, 8, ["src"])]),
                      _: 1
                    })]),
                    _: 1
                  }), createVNode("h1", {
                    class: "text-4xl md:text-5xl font-bold ml-8 mt-16 mb-4"
                  }, toDisplayString(userProfile.value.name), 1), createVNode(VCardText, null, {
                    default: withCtx(() => [createVNode(VRow, {
                      class: "px-4"
                    }, {
                      default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(userProfileDisplay.value, (value, key) => {
                        return openBlock(), createBlock(VCol, {
                          key,
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [createVNode("div", {
                            class: "mb-4"
                          }, [createVNode("p", {
                            class: "text-sm font-medium text-gray-500 uppercase"
                          }, toDisplayString(key), 1), createVNode("p", {
                            class: "mt-1 text-base md:text-lg font-semibold text-gray-900"
                          }, toDisplayString(value), 1)])]),
                          _: 2
                        }, 1024);
                      }), 128))]),
                      _: 1
                    }), createVNode(VDivider, {
                      class: "my-6"
                    }), userProfile.value.isCustomer ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "px-4"
                    }, [createVNode("h1", {
                      class: "text-2xl md:text-3xl font-bold mb-4"
                    }, " Subscription Information "), createVNode(VAlert, {
                      type: stripeCustomerData.value.subscriptionStatus === "active" ? "success" : "warning",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [createVNode("div", {
                        class: "d-flex align-center"
                      }, [createVNode("p", {
                        class: "text-xl font-bold"
                      }, toDisplayString(stripeCustomerData.value.subscriptionStatus === "active" ? "Active Subscription" : "Subscription Cancelling"), 1)])]),
                      _: 1
                    }, 8, ["type"]), createVNode(VRow, null, {
                      default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(subscriptionDisplay.value, (value, key) => {
                        return openBlock(), createBlock(VCol, {
                          key,
                          cols: "12",
                          sm: "6",
                          class: "subscription-info"
                        }, {
                          default: withCtx(() => [createVNode("div", {
                            class: "mb-4"
                          }, [createVNode("p", {
                            class: "text-sm font-medium text-gray-500 uppercase"
                          }, toDisplayString(key), 1), createVNode("p", {
                            class: "mt-1 text-base md:text-lg font-semibold text-gray-900"
                          }, toDisplayString(value), 1)])]),
                          _: 2
                        }, 1024);
                      }), 128))]),
                      _: 1
                    }), stripeCustomerData.value.subscriptionStatus === "active" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-6"
                    }, [createVNode(VBtn, {
                      color: "error",
                      class: "text-base",
                      onClick: cancelSubscription
                    }, {
                      default: withCtx(() => [createTextVNode(" Cancel Subscription ")]),
                      _: 1
                    })])) : createCommentVNode("", true), stripeCustomerData.value.subscriptionStatus === "cancelling" ? (openBlock(), createBlock(VAlert, {
                      key: 1,
                      type: "info",
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [createVNode("p", {
                        class: "text-xl font-bold"
                      }, " Your subscription will remain active until the end date. You'll continue to have full access to all features until then. ")]),
                      _: 1
                    })) : createCommentVNode("", true)])) : createCommentVNode("", true)]),
                    _: 1
                  }), createVNode(VCardActions, {
                    class: "px-6 pb-6"
                  }, {
                    default: withCtx(() => [createVNode(VBtn, {
                      color: "primary",
                      to: "/profile/update",
                      class: "mr-2 text-base"
                    }, {
                      default: withCtx(() => [createTextVNode(" Manage Profile ")]),
                      _: 1
                    }), userProfile.value.isCustomer && stripeCustomerData.value.subscriptionStatus === "active" ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      color: "error",
                      class: "text-base",
                      onClick: cancelSubscription
                    }, {
                      default: withCtx(() => [createTextVNode(" Cancel Subscription ")]),
                      _: 1
                    })) : createCommentVNode("", true)]),
                    _: 1
                  })], 64)) : (openBlock(), createBlock(VCardText, {
                    key: 2
                  }, {
                    default: withCtx(() => [createVNode(VAlert, {
                      type: "error",
                      class: "mb-0"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
                      _: 1
                    })]),
                    _: 1
                  }))];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(VCard, {
              class: "user-profile mx-auto rounded-lg overflow-hidden",
              "max-width": "700"
            }, {
              default: withCtx(() => [loading.value ? (openBlock(), createBlock(VCardText, {
                key: 0,
                class: "text-center py-12"
              }, {
                default: withCtx(() => [createVNode(VProgressCircular, {
                  indeterminate: "",
                  color: "primary",
                  size: "64"
                }), createVNode("p", {
                  class: "mt-4 text-lg text-gray-600"
                }, " Loading profile... ")]),
                _: 1
              })) : !error.value ? (openBlock(), createBlock(Fragment, {
                key: 1
              }, [createVNode(VImg, {
                height: "200",
                src: "https://picsum.photos/700/200?random",
                class: "bg-gray-100"
              }, {
                default: withCtx(() => [createVNode(VAvatar, {
                  class: "mt-32 ml-6",
                  size: "128",
                  style: {
                    "border": "4px solid white"
                  }
                }, {
                  default: withCtx(() => [createVNode(VImg, {
                    src: `https://avatars.dicebear.com/api/initials/${userProfile.value.name}.svg`
                  }, null, 8, ["src"])]),
                  _: 1
                })]),
                _: 1
              }), createVNode("h1", {
                class: "text-4xl md:text-5xl font-bold ml-8 mt-16 mb-4"
              }, toDisplayString(userProfile.value.name), 1), createVNode(VCardText, null, {
                default: withCtx(() => [createVNode(VRow, {
                  class: "px-4"
                }, {
                  default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(userProfileDisplay.value, (value, key) => {
                    return openBlock(), createBlock(VCol, {
                      key,
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [createVNode("div", {
                        class: "mb-4"
                      }, [createVNode("p", {
                        class: "text-sm font-medium text-gray-500 uppercase"
                      }, toDisplayString(key), 1), createVNode("p", {
                        class: "mt-1 text-base md:text-lg font-semibold text-gray-900"
                      }, toDisplayString(value), 1)])]),
                      _: 2
                    }, 1024);
                  }), 128))]),
                  _: 1
                }), createVNode(VDivider, {
                  class: "my-6"
                }), userProfile.value.isCustomer ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "px-4"
                }, [createVNode("h1", {
                  class: "text-2xl md:text-3xl font-bold mb-4"
                }, " Subscription Information "), createVNode(VAlert, {
                  type: stripeCustomerData.value.subscriptionStatus === "active" ? "success" : "warning",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [createVNode("div", {
                    class: "d-flex align-center"
                  }, [createVNode("p", {
                    class: "text-xl font-bold"
                  }, toDisplayString(stripeCustomerData.value.subscriptionStatus === "active" ? "Active Subscription" : "Subscription Cancelling"), 1)])]),
                  _: 1
                }, 8, ["type"]), createVNode(VRow, null, {
                  default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(subscriptionDisplay.value, (value, key) => {
                    return openBlock(), createBlock(VCol, {
                      key,
                      cols: "12",
                      sm: "6",
                      class: "subscription-info"
                    }, {
                      default: withCtx(() => [createVNode("div", {
                        class: "mb-4"
                      }, [createVNode("p", {
                        class: "text-sm font-medium text-gray-500 uppercase"
                      }, toDisplayString(key), 1), createVNode("p", {
                        class: "mt-1 text-base md:text-lg font-semibold text-gray-900"
                      }, toDisplayString(value), 1)])]),
                      _: 2
                    }, 1024);
                  }), 128))]),
                  _: 1
                }), stripeCustomerData.value.subscriptionStatus === "active" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-6"
                }, [createVNode(VBtn, {
                  color: "error",
                  class: "text-base",
                  onClick: cancelSubscription
                }, {
                  default: withCtx(() => [createTextVNode(" Cancel Subscription ")]),
                  _: 1
                })])) : createCommentVNode("", true), stripeCustomerData.value.subscriptionStatus === "cancelling" ? (openBlock(), createBlock(VAlert, {
                  key: 1,
                  type: "info",
                  class: "mt-4"
                }, {
                  default: withCtx(() => [createVNode("p", {
                    class: "text-xl font-bold"
                  }, " Your subscription will remain active until the end date. You'll continue to have full access to all features until then. ")]),
                  _: 1
                })) : createCommentVNode("", true)])) : createCommentVNode("", true)]),
                _: 1
              }), createVNode(VCardActions, {
                class: "px-6 pb-6"
              }, {
                default: withCtx(() => [createVNode(VBtn, {
                  color: "primary",
                  to: "/profile/update",
                  class: "mr-2 text-base"
                }, {
                  default: withCtx(() => [createTextVNode(" Manage Profile ")]),
                  _: 1
                }), userProfile.value.isCustomer && stripeCustomerData.value.subscriptionStatus === "active" ? (openBlock(), createBlock(VBtn, {
                  key: 0,
                  color: "error",
                  class: "text-base",
                  onClick: cancelSubscription
                }, {
                  default: withCtx(() => [createTextVNode(" Cancel Subscription ")]),
                  _: 1
                })) : createCommentVNode("", true)]),
                _: 1
              })], 64)) : (openBlock(), createBlock(VCardText, {
                key: 2
              }, {
                default: withCtx(() => [createVNode(VAlert, {
                  type: "error",
                  class: "mb-0"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
                  _: 1
                })]),
                _: 1
              }))]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserProfile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UserProfile = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7095e7e4"]]);
const _sfc_main = {
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "max-width-1600 py-0 py-lg-8"
      }, _attrs))}><section class="box3 hero">`);
      _push(ssrRenderComponent(VContainer, {
        class: "box1 pa-2",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(UserProfile, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(UserProfile)];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=user-MJlDqcdn.mjs.map
