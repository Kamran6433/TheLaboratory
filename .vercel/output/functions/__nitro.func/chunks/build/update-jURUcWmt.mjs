import { mergeProps, withCtx, createVNode, useSSRContext, ref, computed, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import { V as VContainer, _ as _export_sfc, s as storeToRefs, j as VCard, H as VImg, e as VRow, f as VCol, w as VAvatar, k as VCardText, D as VForm, E as VTextField, t as VBtn, h as VAlert, x as VDivider, q as VCardActions, $ as VSpacer, a0 as updateDoc, N as doc, O as db, a1 as getAuth } from './server.mjs';
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
  __name: "UpdateUserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const {
      getUser,
      getIsCustomer,
      getStripeCustomerId,
      getEmail,
      getEmailVerified
    } = storeToRefs(userStore);
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
      subscriptionEndDate: null
    });
    const isLoading = ref(true);
    ref(null);
    const isSubscribed = computed(() => stripeCustomerData.value.subscriptionStatus === "active" || stripeCustomerData.value.subscriptionStatus === "cancelling");
    const formattedEndDate = computed(() => {
      const timestamp = stripeCustomerData.value.subscriptionEndDate;
      if (timestamp && timestamp.seconds) {
        const date = new Date(timestamp.seconds * 1e3);
        return date.toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });
      }
      return "Invalid Date";
    });
    const updateProfile = async () => {
      if (!getUser.value)
        return;
      isLoading.value = true;
      try {
        await updateDoc(doc(db, "users", getUser.value.uid), {
          name: userProfile.value.name,
          number: userProfile.value.number,
          school: userProfile.value.school
        });
        userStore.updateUser(userProfile.value);
        alert("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
      } finally {
        isLoading.value = false;
      }
    };
    const updateUserEmail = async () => {
      const auth = getAuth();
      if (!auth.currentUser)
        return;
      try {
        await auth.currentUser.verifyBeforeUpdateEmail(userProfile.value.email);
        alert("A verification email has been sent to your new email address. Please check your inbox and verify before the change takes effect.");
        await updateDoc(doc(db, "users", getUser.value.uid), {
          pendingEmail: userProfile.value.email
        });
        userProfile.value.pendingEmail = userProfile.value.email;
        userStore.updateUser({
          pendingEmail: userProfile.value.email
        });
      } catch (error) {
        console.error("Error updating email:", error);
        alert("Failed to update email. Please try again.");
      }
    };
    const checkPendingEmailChange = async () => {
      const auth = getAuth();
      if (!auth.currentUser)
        return;
      if (userProfile.value.pendingEmail && auth.currentUser.email === userProfile.value.pendingEmail) {
        await finalizeEmailUpdate();
      }
    };
    const finalizeEmailUpdate = async () => {
      const auth = getAuth();
      if (!auth.currentUser)
        return;
      try {
        await updateDoc(doc(db, "users", getUser.value.uid), {
          email: auth.currentUser.email,
          pendingEmail: null
        });
        userStore.updateUser({
          email: auth.currentUser.email,
          pendingEmail: null
        });
        userProfile.value.email = auth.currentUser.email;
        userProfile.value.pendingEmail = null;
        alert("Email updated successfully!");
      } catch (error) {
        console.error("Error finalizing email update:", error);
        alert("Failed to finalize email update. Please try again.");
      }
    };
    const cancelSubscription = async () => {
      isLoading.value = true;
      if (!stripeCustomerData.value.subscriptionId) {
        alert("No active subscription found");
        isLoading.value = false;
        return;
      }
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
          userStore.updateUser({
            subscriptionStatus: "cancelling",
            subscriptionEndDate: data.endDate
          });
          alert(data.message);
        } else {
          throw new Error(data.message || "Failed to cancel subscription");
        }
      } catch (err) {
        console.error("Error cancelling subscription:", err);
        alert(`Failed to cancel subscription: ${err.message}`);
      } finally {
        isLoading.value = false;
      }
    };
    const goBackToProfile = () => {
      router.push("/profile/user");
    };
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
                  _push3(ssrRenderComponent(VImg, {
                    height: "200",
                    src: "https://picsum.photos/700/200?random",
                    class: "bg-gray-100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          class: "fill-height ma-0",
                          align: "end"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VAvatar, {
                                      size: "128",
                                      class: "ml-6 mb-n8 avatar-border",
                                      style: {
                                        "border": "4px solid white"
                                      }
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [createVNode(VAvatar, {
                                      size: "128",
                                      class: "ml-6 mb-n8 avatar-border",
                                      style: {
                                        "border": "4px solid white"
                                      }
                                    })];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [createVNode(VCol, {
                                cols: "12"
                              }, {
                                default: withCtx(() => [createVNode(VAvatar, {
                                  size: "128",
                                  class: "ml-6 mb-n8 avatar-border",
                                  style: {
                                    "border": "4px solid white"
                                  }
                                })]),
                                _: 1
                              })];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [createVNode(VRow, {
                          class: "fill-height ma-0",
                          align: "end"
                        }, {
                          default: withCtx(() => [createVNode(VCol, {
                            cols: "12"
                          }, {
                            default: withCtx(() => [createVNode(VAvatar, {
                              size: "128",
                              class: "ml-6 mb-n8 avatar-border",
                              style: {
                                "border": "4px solid white"
                              }
                            })]),
                            _: 1
                          })]),
                          _: 1
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<h1 class="text-4xl md:text-5xl font-bold ml-4 mt-10 mb-4" data-v-d817899e${_scopeId2}> Update Profile </h1>`);
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          class: "px-6",
                          onSubmit: updateProfile
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: userProfile.value.name,
                                            "onUpdate:modelValue": ($event) => userProfile.value.name = $event,
                                            label: "Name",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            class: "text-base md:text-lg"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [createVNode(VTextField, {
                                            modelValue: userProfile.value.name,
                                            "onUpdate:modelValue": ($event) => userProfile.value.name = $event,
                                            label: "Name",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            class: "text-base md:text-lg"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: userProfile.value.number,
                                            "onUpdate:modelValue": ($event) => userProfile.value.number = $event,
                                            label: "Phone Number",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            class: "text-base md:text-lg"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [createVNode(VTextField, {
                                            modelValue: userProfile.value.number,
                                            "onUpdate:modelValue": ($event) => userProfile.value.number = $event,
                                            label: "Phone Number",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            class: "text-base md:text-lg"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: userProfile.value.school,
                                            "onUpdate:modelValue": ($event) => userProfile.value.school = $event,
                                            label: "School",
                                            outlined: "",
                                            dense: "",
                                            class: "text-base md:text-lg"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [createVNode(VTextField, {
                                            modelValue: userProfile.value.school,
                                            "onUpdate:modelValue": ($event) => userProfile.value.school = $event,
                                            label: "School",
                                            outlined: "",
                                            dense: "",
                                            class: "text-base md:text-lg"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: userProfile.value.email,
                                            "onUpdate:modelValue": ($event) => userProfile.value.email = $event,
                                            label: "Email",
                                            type: "email",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            class: "text-base md:text-lg"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [createVNode(VTextField, {
                                            modelValue: userProfile.value.email,
                                            "onUpdate:modelValue": ($event) => userProfile.value.email = $event,
                                            label: "Email",
                                            type: "email",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            class: "text-base md:text-lg"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [createVNode(VTextField, {
                                        modelValue: userProfile.value.name,
                                        "onUpdate:modelValue": ($event) => userProfile.value.name = $event,
                                        label: "Name",
                                        outlined: "",
                                        dense: "",
                                        required: "",
                                        class: "text-base md:text-lg"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                      _: 1
                                    }), createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [createVNode(VTextField, {
                                        modelValue: userProfile.value.number,
                                        "onUpdate:modelValue": ($event) => userProfile.value.number = $event,
                                        label: "Phone Number",
                                        outlined: "",
                                        dense: "",
                                        required: "",
                                        class: "text-base md:text-lg"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                      _: 1
                                    }), createVNode(VCol, {
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [createVNode(VTextField, {
                                        modelValue: userProfile.value.school,
                                        "onUpdate:modelValue": ($event) => userProfile.value.school = $event,
                                        label: "School",
                                        outlined: "",
                                        dense: "",
                                        class: "text-base md:text-lg"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                      _: 1
                                    }), createVNode(VCol, {
                                      cols: "12"
                                    }, {
                                      default: withCtx(() => [createVNode(VTextField, {
                                        modelValue: userProfile.value.email,
                                        "onUpdate:modelValue": ($event) => userProfile.value.email = $event,
                                        label: "Email",
                                        type: "email",
                                        outlined: "",
                                        dense: "",
                                        required: "",
                                        class: "text-base md:text-lg"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                      _: 1
                                    })];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="d-flex justify-space-between align-center mt-4" data-v-d817899e${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "primary",
                                type: "submit",
                                loading: isLoading.value,
                                class: "text-base"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Update Profile `);
                                  } else {
                                    return [createTextVNode(" Update Profile ")];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "secondary",
                                disabled: isLoading.value,
                                class: "text-base",
                                onClick: updateUserEmail
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Update Email `);
                                  } else {
                                    return [createTextVNode(" Update Email ")];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              if (userProfile.value.pendingEmail) {
                                _push5(ssrRenderComponent(VAlert, {
                                  type: "info",
                                  class: "mt-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Pending email change to: ${ssrInterpolate(userProfile.value.pendingEmail)} `);
                                      _push6(ssrRenderComponent(VBtn, {
                                        text: "",
                                        color: "info",
                                        class: "text-base ml-2",
                                        onClick: checkPendingEmailChange
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Check Verification Status `);
                                          } else {
                                            return [createTextVNode(" Check Verification Status ")];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [createTextVNode(" Pending email change to: " + toDisplayString(userProfile.value.pendingEmail) + " ", 1), createVNode(VBtn, {
                                        text: "",
                                        color: "info",
                                        class: "text-base ml-2",
                                        onClick: checkPendingEmailChange
                                      }, {
                                        default: withCtx(() => [createTextVNode(" Check Verification Status ")]),
                                        _: 1
                                      })];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [createVNode(VRow, null, {
                                default: withCtx(() => [createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [createVNode(VTextField, {
                                    modelValue: userProfile.value.name,
                                    "onUpdate:modelValue": ($event) => userProfile.value.name = $event,
                                    label: "Name",
                                    outlined: "",
                                    dense: "",
                                    required: "",
                                    class: "text-base md:text-lg"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                  _: 1
                                }), createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [createVNode(VTextField, {
                                    modelValue: userProfile.value.number,
                                    "onUpdate:modelValue": ($event) => userProfile.value.number = $event,
                                    label: "Phone Number",
                                    outlined: "",
                                    dense: "",
                                    required: "",
                                    class: "text-base md:text-lg"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                  _: 1
                                }), createVNode(VCol, {
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [createVNode(VTextField, {
                                    modelValue: userProfile.value.school,
                                    "onUpdate:modelValue": ($event) => userProfile.value.school = $event,
                                    label: "School",
                                    outlined: "",
                                    dense: "",
                                    class: "text-base md:text-lg"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                  _: 1
                                }), createVNode(VCol, {
                                  cols: "12"
                                }, {
                                  default: withCtx(() => [createVNode(VTextField, {
                                    modelValue: userProfile.value.email,
                                    "onUpdate:modelValue": ($event) => userProfile.value.email = $event,
                                    label: "Email",
                                    type: "email",
                                    outlined: "",
                                    dense: "",
                                    required: "",
                                    class: "text-base md:text-lg"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                  _: 1
                                })]),
                                _: 1
                              }), createVNode("div", {
                                class: "d-flex justify-space-between align-center mt-4"
                              }, [createVNode(VBtn, {
                                color: "primary",
                                type: "submit",
                                loading: isLoading.value,
                                class: "text-base"
                              }, {
                                default: withCtx(() => [createTextVNode(" Update Profile ")]),
                                _: 1
                              }, 8, ["loading"]), createVNode(VBtn, {
                                color: "secondary",
                                disabled: isLoading.value,
                                class: "text-base",
                                onClick: updateUserEmail
                              }, {
                                default: withCtx(() => [createTextVNode(" Update Email ")]),
                                _: 1
                              }, 8, ["disabled"])]), userProfile.value.pendingEmail ? (openBlock(), createBlock(VAlert, {
                                key: 0,
                                type: "info",
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [createTextVNode(" Pending email change to: " + toDisplayString(userProfile.value.pendingEmail) + " ", 1), createVNode(VBtn, {
                                  text: "",
                                  color: "info",
                                  class: "text-base ml-2",
                                  onClick: checkPendingEmailChange
                                }, {
                                  default: withCtx(() => [createTextVNode(" Check Verification Status ")]),
                                  _: 1
                                })]),
                                _: 1
                              })) : createCommentVNode("", true)];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [createVNode(VForm, {
                          class: "px-6",
                          onSubmit: withModifiers(updateProfile, ["prevent"])
                        }, {
                          default: withCtx(() => [createVNode(VRow, null, {
                            default: withCtx(() => [createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [createVNode(VTextField, {
                                modelValue: userProfile.value.name,
                                "onUpdate:modelValue": ($event) => userProfile.value.name = $event,
                                label: "Name",
                                outlined: "",
                                dense: "",
                                required: "",
                                class: "text-base md:text-lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                              _: 1
                            }), createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [createVNode(VTextField, {
                                modelValue: userProfile.value.number,
                                "onUpdate:modelValue": ($event) => userProfile.value.number = $event,
                                label: "Phone Number",
                                outlined: "",
                                dense: "",
                                required: "",
                                class: "text-base md:text-lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                              _: 1
                            }), createVNode(VCol, {
                              cols: "12"
                            }, {
                              default: withCtx(() => [createVNode(VTextField, {
                                modelValue: userProfile.value.school,
                                "onUpdate:modelValue": ($event) => userProfile.value.school = $event,
                                label: "School",
                                outlined: "",
                                dense: "",
                                class: "text-base md:text-lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                              _: 1
                            }), createVNode(VCol, {
                              cols: "12"
                            }, {
                              default: withCtx(() => [createVNode(VTextField, {
                                modelValue: userProfile.value.email,
                                "onUpdate:modelValue": ($event) => userProfile.value.email = $event,
                                label: "Email",
                                type: "email",
                                outlined: "",
                                dense: "",
                                required: "",
                                class: "text-base md:text-lg"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                              _: 1
                            })]),
                            _: 1
                          }), createVNode("div", {
                            class: "d-flex justify-space-between align-center mt-4"
                          }, [createVNode(VBtn, {
                            color: "primary",
                            type: "submit",
                            loading: isLoading.value,
                            class: "text-base"
                          }, {
                            default: withCtx(() => [createTextVNode(" Update Profile ")]),
                            _: 1
                          }, 8, ["loading"]), createVNode(VBtn, {
                            color: "secondary",
                            disabled: isLoading.value,
                            class: "text-base",
                            onClick: updateUserEmail
                          }, {
                            default: withCtx(() => [createTextVNode(" Update Email ")]),
                            _: 1
                          }, 8, ["disabled"])]), userProfile.value.pendingEmail ? (openBlock(), createBlock(VAlert, {
                            key: 0,
                            type: "info",
                            class: "mt-4"
                          }, {
                            default: withCtx(() => [createTextVNode(" Pending email change to: " + toDisplayString(userProfile.value.pendingEmail) + " ", 1), createVNode(VBtn, {
                              text: "",
                              color: "info",
                              class: "text-base ml-2",
                              onClick: checkPendingEmailChange
                            }, {
                              default: withCtx(() => [createTextVNode(" Check Verification Status ")]),
                              _: 1
                            })]),
                            _: 1
                          })) : createCommentVNode("", true)]),
                          _: 1
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, {
                    class: "my-4"
                  }, null, _parent3, _scopeId2));
                  if (userProfile.value.isCustomer) {
                    _push3(ssrRenderComponent(VCardText, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h1 class="text-2xl md:text-3xl font-bold mb-4" data-v-d817899e${_scopeId3}> Subscription Information </h1>`);
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<p class="text-sm font-medium text-gray-500 uppercase" data-v-d817899e${_scopeId5}> Status </p><p class="mt-1 text-base md:text-lg font-semibold" data-v-d817899e${_scopeId5}>${ssrInterpolate(stripeCustomerData.value.subscriptionStatus)}</p>`);
                                    } else {
                                      return [createVNode("p", {
                                        class: "text-sm font-medium text-gray-500 uppercase"
                                      }, " Status "), createVNode("p", {
                                        class: "mt-1 text-base md:text-lg font-semibold"
                                      }, toDisplayString(stripeCustomerData.value.subscriptionStatus), 1)];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                if (stripeCustomerData.value.subscriptionStatus === "cancelling") {
                                  _push5(ssrRenderComponent(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<p class="text-sm font-medium text-gray-500 uppercase" data-v-d817899e${_scopeId5}> Cancels on </p><p class="mt-1 text-base md:text-lg font-semibold" data-v-d817899e${_scopeId5}>${ssrInterpolate(formattedEndDate.value)}</p>`);
                                      } else {
                                        return [createVNode("p", {
                                          class: "text-sm font-medium text-gray-500 uppercase"
                                        }, " Cancels on "), createVNode("p", {
                                          class: "mt-1 text-base md:text-lg font-semibold"
                                        }, toDisplayString(formattedEndDate.value), 1)];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [createVNode("p", {
                                    class: "text-sm font-medium text-gray-500 uppercase"
                                  }, " Status "), createVNode("p", {
                                    class: "mt-1 text-base md:text-lg font-semibold"
                                  }, toDisplayString(stripeCustomerData.value.subscriptionStatus), 1)]),
                                  _: 1
                                }), stripeCustomerData.value.subscriptionStatus === "cancelling" ? (openBlock(), createBlock(VCol, {
                                  key: 0,
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [createVNode("p", {
                                    class: "text-sm font-medium text-gray-500 uppercase"
                                  }, " Cancels on "), createVNode("p", {
                                    class: "mt-1 text-base md:text-lg font-semibold"
                                  }, toDisplayString(formattedEndDate.value), 1)]),
                                  _: 1
                                })) : createCommentVNode("", true)];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [createVNode("h1", {
                            class: "text-2xl md:text-3xl font-bold mb-4"
                          }, " Subscription Information "), createVNode(VRow, null, {
                            default: withCtx(() => [createVNode(VCol, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [createVNode("p", {
                                class: "text-sm font-medium text-gray-500 uppercase"
                              }, " Status "), createVNode("p", {
                                class: "mt-1 text-base md:text-lg font-semibold"
                              }, toDisplayString(stripeCustomerData.value.subscriptionStatus), 1)]),
                              _: 1
                            }), stripeCustomerData.value.subscriptionStatus === "cancelling" ? (openBlock(), createBlock(VCol, {
                              key: 0,
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [createVNode("p", {
                                class: "text-sm font-medium text-gray-500 uppercase"
                              }, " Cancels on "), createVNode("p", {
                                class: "mt-1 text-base md:text-lg font-semibold"
                              }, toDisplayString(formattedEndDate.value), 1)]),
                              _: 1
                            })) : createCommentVNode("", true)]),
                            _: 1
                          })];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(VCardActions, {
                    class: "px-6 pb-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (isSubscribed.value && stripeCustomerData.value.subscriptionStatus !== "cancelling") {
                          _push4(ssrRenderComponent(VBtn, {
                            color: "error",
                            loading: isLoading.value,
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
                        if (!isSubscribed.value) {
                          _push4(ssrRenderComponent(VBtn, {
                            color: "success",
                            to: "/tutoring",
                            class: "text-base"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Subscribe `);
                              } else {
                                return [createTextVNode(" Subscribe ")];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          color: "primary",
                          text: "",
                          class: "text-base",
                          onClick: goBackToProfile
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Back to Profile `);
                            } else {
                              return [createTextVNode(" Back to Profile ")];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [isSubscribed.value && stripeCustomerData.value.subscriptionStatus !== "cancelling" ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          color: "error",
                          loading: isLoading.value,
                          class: "text-base",
                          onClick: cancelSubscription
                        }, {
                          default: withCtx(() => [createTextVNode(" Cancel Subscription ")]),
                          _: 1
                        }, 8, ["loading"])) : createCommentVNode("", true), !isSubscribed.value ? (openBlock(), createBlock(VBtn, {
                          key: 1,
                          color: "success",
                          to: "/tutoring",
                          class: "text-base"
                        }, {
                          default: withCtx(() => [createTextVNode(" Subscribe ")]),
                          _: 1
                        })) : createCommentVNode("", true), createVNode(VSpacer), createVNode(VBtn, {
                          color: "primary",
                          text: "",
                          class: "text-base",
                          onClick: goBackToProfile
                        }, {
                          default: withCtx(() => [createTextVNode(" Back to Profile ")]),
                          _: 1
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VImg, {
                    height: "200",
                    src: "https://picsum.photos/700/200?random",
                    class: "bg-gray-100"
                  }, {
                    default: withCtx(() => [createVNode(VRow, {
                      class: "fill-height ma-0",
                      align: "end"
                    }, {
                      default: withCtx(() => [createVNode(VCol, {
                        cols: "12"
                      }, {
                        default: withCtx(() => [createVNode(VAvatar, {
                          size: "128",
                          class: "ml-6 mb-n8 avatar-border",
                          style: {
                            "border": "4px solid white"
                          }
                        })]),
                        _: 1
                      })]),
                      _: 1
                    })]),
                    _: 1
                  }), createVNode("h1", {
                    class: "text-4xl md:text-5xl font-bold ml-4 mt-10 mb-4"
                  }, " Update Profile "), createVNode(VCardText, null, {
                    default: withCtx(() => [createVNode(VForm, {
                      class: "px-6",
                      onSubmit: withModifiers(updateProfile, ["prevent"])
                    }, {
                      default: withCtx(() => [createVNode(VRow, null, {
                        default: withCtx(() => [createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [createVNode(VTextField, {
                            modelValue: userProfile.value.name,
                            "onUpdate:modelValue": ($event) => userProfile.value.name = $event,
                            label: "Name",
                            outlined: "",
                            dense: "",
                            required: "",
                            class: "text-base md:text-lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                          _: 1
                        }), createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [createVNode(VTextField, {
                            modelValue: userProfile.value.number,
                            "onUpdate:modelValue": ($event) => userProfile.value.number = $event,
                            label: "Phone Number",
                            outlined: "",
                            dense: "",
                            required: "",
                            class: "text-base md:text-lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                          _: 1
                        }), createVNode(VCol, {
                          cols: "12"
                        }, {
                          default: withCtx(() => [createVNode(VTextField, {
                            modelValue: userProfile.value.school,
                            "onUpdate:modelValue": ($event) => userProfile.value.school = $event,
                            label: "School",
                            outlined: "",
                            dense: "",
                            class: "text-base md:text-lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                          _: 1
                        }), createVNode(VCol, {
                          cols: "12"
                        }, {
                          default: withCtx(() => [createVNode(VTextField, {
                            modelValue: userProfile.value.email,
                            "onUpdate:modelValue": ($event) => userProfile.value.email = $event,
                            label: "Email",
                            type: "email",
                            outlined: "",
                            dense: "",
                            required: "",
                            class: "text-base md:text-lg"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                          _: 1
                        })]),
                        _: 1
                      }), createVNode("div", {
                        class: "d-flex justify-space-between align-center mt-4"
                      }, [createVNode(VBtn, {
                        color: "primary",
                        type: "submit",
                        loading: isLoading.value,
                        class: "text-base"
                      }, {
                        default: withCtx(() => [createTextVNode(" Update Profile ")]),
                        _: 1
                      }, 8, ["loading"]), createVNode(VBtn, {
                        color: "secondary",
                        disabled: isLoading.value,
                        class: "text-base",
                        onClick: updateUserEmail
                      }, {
                        default: withCtx(() => [createTextVNode(" Update Email ")]),
                        _: 1
                      }, 8, ["disabled"])]), userProfile.value.pendingEmail ? (openBlock(), createBlock(VAlert, {
                        key: 0,
                        type: "info",
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [createTextVNode(" Pending email change to: " + toDisplayString(userProfile.value.pendingEmail) + " ", 1), createVNode(VBtn, {
                          text: "",
                          color: "info",
                          class: "text-base ml-2",
                          onClick: checkPendingEmailChange
                        }, {
                          default: withCtx(() => [createTextVNode(" Check Verification Status ")]),
                          _: 1
                        })]),
                        _: 1
                      })) : createCommentVNode("", true)]),
                      _: 1
                    })]),
                    _: 1
                  }), createVNode(VDivider, {
                    class: "my-4"
                  }), userProfile.value.isCustomer ? (openBlock(), createBlock(VCardText, {
                    key: 0
                  }, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-2xl md:text-3xl font-bold mb-4"
                    }, " Subscription Information "), createVNode(VRow, null, {
                      default: withCtx(() => [createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [createVNode("p", {
                          class: "text-sm font-medium text-gray-500 uppercase"
                        }, " Status "), createVNode("p", {
                          class: "mt-1 text-base md:text-lg font-semibold"
                        }, toDisplayString(stripeCustomerData.value.subscriptionStatus), 1)]),
                        _: 1
                      }), stripeCustomerData.value.subscriptionStatus === "cancelling" ? (openBlock(), createBlock(VCol, {
                        key: 0,
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [createVNode("p", {
                          class: "text-sm font-medium text-gray-500 uppercase"
                        }, " Cancels on "), createVNode("p", {
                          class: "mt-1 text-base md:text-lg font-semibold"
                        }, toDisplayString(formattedEndDate.value), 1)]),
                        _: 1
                      })) : createCommentVNode("", true)]),
                      _: 1
                    })]),
                    _: 1
                  })) : createCommentVNode("", true), createVNode(VCardActions, {
                    class: "px-6 pb-6"
                  }, {
                    default: withCtx(() => [isSubscribed.value && stripeCustomerData.value.subscriptionStatus !== "cancelling" ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      color: "error",
                      loading: isLoading.value,
                      class: "text-base",
                      onClick: cancelSubscription
                    }, {
                      default: withCtx(() => [createTextVNode(" Cancel Subscription ")]),
                      _: 1
                    }, 8, ["loading"])) : createCommentVNode("", true), !isSubscribed.value ? (openBlock(), createBlock(VBtn, {
                      key: 1,
                      color: "success",
                      to: "/tutoring",
                      class: "text-base"
                    }, {
                      default: withCtx(() => [createTextVNode(" Subscribe ")]),
                      _: 1
                    })) : createCommentVNode("", true), createVNode(VSpacer), createVNode(VBtn, {
                      color: "primary",
                      text: "",
                      class: "text-base",
                      onClick: goBackToProfile
                    }, {
                      default: withCtx(() => [createTextVNode(" Back to Profile ")]),
                      _: 1
                    })]),
                    _: 1
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(VCard, {
              class: "user-profile mx-auto rounded-lg overflow-hidden",
              "max-width": "700"
            }, {
              default: withCtx(() => [createVNode(VImg, {
                height: "200",
                src: "https://picsum.photos/700/200?random",
                class: "bg-gray-100"
              }, {
                default: withCtx(() => [createVNode(VRow, {
                  class: "fill-height ma-0",
                  align: "end"
                }, {
                  default: withCtx(() => [createVNode(VCol, {
                    cols: "12"
                  }, {
                    default: withCtx(() => [createVNode(VAvatar, {
                      size: "128",
                      class: "ml-6 mb-n8 avatar-border",
                      style: {
                        "border": "4px solid white"
                      }
                    })]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), createVNode("h1", {
                class: "text-4xl md:text-5xl font-bold ml-4 mt-10 mb-4"
              }, " Update Profile "), createVNode(VCardText, null, {
                default: withCtx(() => [createVNode(VForm, {
                  class: "px-6",
                  onSubmit: withModifiers(updateProfile, ["prevent"])
                }, {
                  default: withCtx(() => [createVNode(VRow, null, {
                    default: withCtx(() => [createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [createVNode(VTextField, {
                        modelValue: userProfile.value.name,
                        "onUpdate:modelValue": ($event) => userProfile.value.name = $event,
                        label: "Name",
                        outlined: "",
                        dense: "",
                        required: "",
                        class: "text-base md:text-lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                      _: 1
                    }), createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [createVNode(VTextField, {
                        modelValue: userProfile.value.number,
                        "onUpdate:modelValue": ($event) => userProfile.value.number = $event,
                        label: "Phone Number",
                        outlined: "",
                        dense: "",
                        required: "",
                        class: "text-base md:text-lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                      _: 1
                    }), createVNode(VCol, {
                      cols: "12"
                    }, {
                      default: withCtx(() => [createVNode(VTextField, {
                        modelValue: userProfile.value.school,
                        "onUpdate:modelValue": ($event) => userProfile.value.school = $event,
                        label: "School",
                        outlined: "",
                        dense: "",
                        class: "text-base md:text-lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                      _: 1
                    }), createVNode(VCol, {
                      cols: "12"
                    }, {
                      default: withCtx(() => [createVNode(VTextField, {
                        modelValue: userProfile.value.email,
                        "onUpdate:modelValue": ($event) => userProfile.value.email = $event,
                        label: "Email",
                        type: "email",
                        outlined: "",
                        dense: "",
                        required: "",
                        class: "text-base md:text-lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                      _: 1
                    })]),
                    _: 1
                  }), createVNode("div", {
                    class: "d-flex justify-space-between align-center mt-4"
                  }, [createVNode(VBtn, {
                    color: "primary",
                    type: "submit",
                    loading: isLoading.value,
                    class: "text-base"
                  }, {
                    default: withCtx(() => [createTextVNode(" Update Profile ")]),
                    _: 1
                  }, 8, ["loading"]), createVNode(VBtn, {
                    color: "secondary",
                    disabled: isLoading.value,
                    class: "text-base",
                    onClick: updateUserEmail
                  }, {
                    default: withCtx(() => [createTextVNode(" Update Email ")]),
                    _: 1
                  }, 8, ["disabled"])]), userProfile.value.pendingEmail ? (openBlock(), createBlock(VAlert, {
                    key: 0,
                    type: "info",
                    class: "mt-4"
                  }, {
                    default: withCtx(() => [createTextVNode(" Pending email change to: " + toDisplayString(userProfile.value.pendingEmail) + " ", 1), createVNode(VBtn, {
                      text: "",
                      color: "info",
                      class: "text-base ml-2",
                      onClick: checkPendingEmailChange
                    }, {
                      default: withCtx(() => [createTextVNode(" Check Verification Status ")]),
                      _: 1
                    })]),
                    _: 1
                  })) : createCommentVNode("", true)]),
                  _: 1
                })]),
                _: 1
              }), createVNode(VDivider, {
                class: "my-4"
              }), userProfile.value.isCustomer ? (openBlock(), createBlock(VCardText, {
                key: 0
              }, {
                default: withCtx(() => [createVNode("h1", {
                  class: "text-2xl md:text-3xl font-bold mb-4"
                }, " Subscription Information "), createVNode(VRow, null, {
                  default: withCtx(() => [createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [createVNode("p", {
                      class: "text-sm font-medium text-gray-500 uppercase"
                    }, " Status "), createVNode("p", {
                      class: "mt-1 text-base md:text-lg font-semibold"
                    }, toDisplayString(stripeCustomerData.value.subscriptionStatus), 1)]),
                    _: 1
                  }), stripeCustomerData.value.subscriptionStatus === "cancelling" ? (openBlock(), createBlock(VCol, {
                    key: 0,
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [createVNode("p", {
                      class: "text-sm font-medium text-gray-500 uppercase"
                    }, " Cancels on "), createVNode("p", {
                      class: "mt-1 text-base md:text-lg font-semibold"
                    }, toDisplayString(formattedEndDate.value), 1)]),
                    _: 1
                  })) : createCommentVNode("", true)]),
                  _: 1
                })]),
                _: 1
              })) : createCommentVNode("", true), createVNode(VCardActions, {
                class: "px-6 pb-6"
              }, {
                default: withCtx(() => [isSubscribed.value && stripeCustomerData.value.subscriptionStatus !== "cancelling" ? (openBlock(), createBlock(VBtn, {
                  key: 0,
                  color: "error",
                  loading: isLoading.value,
                  class: "text-base",
                  onClick: cancelSubscription
                }, {
                  default: withCtx(() => [createTextVNode(" Cancel Subscription ")]),
                  _: 1
                }, 8, ["loading"])) : createCommentVNode("", true), !isSubscribed.value ? (openBlock(), createBlock(VBtn, {
                  key: 1,
                  color: "success",
                  to: "/tutoring",
                  class: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(" Subscribe ")]),
                  _: 1
                })) : createCommentVNode("", true), createVNode(VSpacer), createVNode(VBtn, {
                  color: "primary",
                  text: "",
                  class: "text-base",
                  onClick: goBackToProfile
                }, {
                  default: withCtx(() => [createTextVNode(" Back to Profile ")]),
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpdateUserProfile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UpdateUserProfile = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d817899e"]]);
const _sfc_main = {
  __name: "update",
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
            _push2(ssrRenderComponent(UpdateUserProfile, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(UpdateUserProfile)];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/update.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=update-jURUcWmt.mjs.map
