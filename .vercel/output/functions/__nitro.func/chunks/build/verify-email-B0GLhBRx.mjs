import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, ref, computed, watch, createTextVNode, withModifiers, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import { _ as _export_sfc, V as VContainer, a3 as auth, e as VRow, f as VCol, j as VCard, v as VCardTitle, k as VCardText, t as VBtn, I as VDialog, D as VForm, E as VTextField, q as VCardActions, $ as VSpacer, g as VProgressCircular, a4 as EmailAuthProvider, a5 as reauthenticateWithCredential, a6 as updateEmail, a0 as updateDoc, N as doc, O as db, a2 as sendEmailVerification } from './server.mjs';
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
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';

const _imports_0 = "" + buildAssetsURL("Saly-13.lZlfU7hi.png");
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main$1 = {
  __name: "EmailVerification",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const userStore = useUserStore();
    const resendDisabled = ref(false);
    const resendTimer = ref(60);
    const currentUser = computed(() => auth.currentUser);
    const isLoading = ref(true);
    const showChangeEmail = ref(false);
    const newEmail = ref("");
    const password = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const isChangingEmail = ref(false);
    const pollingInterval = ref(null);
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      emailError.value = emailRegex.test(newEmail.value) ? "" : "Please enter a valid email address";
    };
    const isEmailChangeValid = computed(() => {
      return newEmail.value && password.value && !emailError.value;
    });
    const handleEmailChange = async () => {
      if (!isEmailChangeValid.value)
        return;
      isChangingEmail.value = true;
      try {
        const credential = EmailAuthProvider.credential(currentUser.value.email, password.value);
        await reauthenticateWithCredential(currentUser.value, credential);
        await updateEmail(currentUser.value, newEmail.value);
        await updateDoc(doc(db, "users", currentUser.value.uid), {
          email: newEmail.value,
          emailVerified: false
        });
        await sendEmailVerification(currentUser.value);
        await updateUserStore();
        showChangeEmail.value = false;
        newEmail.value = "";
        password.value = "";
        alert("Email updated successfully. Please check your new email for verification.");
      } catch (error) {
        console.error("Error changing email:", error);
        if (error.code === "auth/wrong-password") {
          passwordError.value = "Incorrect password";
        } else if (error.code === "auth/email-already-in-use") {
          emailError.value = "Email already in use";
        } else {
          alert(error.message);
        }
      } finally {
        isChangingEmail.value = false;
      }
    };
    const updateUserStore = async () => {
      if (currentUser.value) {
        await currentUser.value.reload();
        userStore.updateUser({
          uid: currentUser.value.uid,
          email: currentUser.value.email,
          emailVerified: currentUser.value.emailVerified
        });
      }
    };
    const resendVerificationEmail = async () => {
      if (resendDisabled.value || !currentUser.value)
        return;
      try {
        await sendEmailVerification(currentUser.value);
        alert("Verification email resent. Please check your inbox.");
        startResendTimer();
      } catch (error) {
        console.error("Error resending verification email:", error);
        alert(error.message);
      }
    };
    const startResendTimer = () => {
      resendDisabled.value = true;
      resendTimer.value = 60;
      setInterval();
    };
    const stopPollingVerification = () => {
      if (pollingInterval.value) {
        clearInterval(pollingInterval.value);
        pollingInterval.value = null;
      }
    };
    const checkVerificationStatus = async () => {
      if (!currentUser.value)
        return;
      isLoading.value = true;
      try {
        await currentUser.value.reload();
        if (currentUser.value.emailVerified) {
          await updateDoc(doc(db, "users", currentUser.value.uid), {
            emailVerified: true,
            email: currentUser.value.email
          });
          userStore.updateUser({
            emailVerified: true,
            email: currentUser.value.email
          });
          stopPollingVerification();
          alert("Email verified successfully!");
          goToProfile();
        } else {
          alert("Email not yet verified. Please check your inbox and click the verification link.");
        }
      } catch (error) {
        console.error("Error checking verification status:", error);
        alert("Error checking verification status. Please try again.");
      } finally {
        isLoading.value = false;
      }
    };
    const goToProfile = () => {
      router.push("/profile/user");
    };
    const goToLogin = () => {
      router.push("/login");
    };
    watch(showChangeEmail, (newValue) => {
      if (!newValue) {
        newEmail.value = "";
        password.value = "";
        emailError.value = "";
        passwordError.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "max-width-1600 py-24 px-4 px-lg-12 d-flex align-center min-height-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              class: "justify-center align-center"
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
                        _push4(ssrRenderComponent(VCard, {
                          class: "pa-6 rounded-xl verification-card w-100"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-3xl md:text-4xl font-bold mb-6" data-v-feb29c7a${_scopeId5}> Verify Your Email </h1>`);
                                  } else {
                                    return [createVNode("h1", {
                                      class: "text-3xl md:text-4xl font-bold mb-6"
                                    }, " Verify Your Email ")];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (!currentUser.value) {
                                      _push6(`<div class="text-center" data-v-feb29c7a${_scopeId5}><p class="text-lg mb-6" data-v-feb29c7a${_scopeId5}> No authenticated user found. Please log in first. </p>`);
                                      _push6(ssrRenderComponent(VBtn, {
                                        color: "#7C3AED",
                                        "x-large": "",
                                        block: "",
                                        class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                                        onClick: goToLogin
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Go to Login `);
                                          } else {
                                            return [createTextVNode(" Go to Login ")];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else if (currentUser.value.emailVerified) {
                                      _push6(`<div class="text-center" data-v-feb29c7a${_scopeId5}><p class="text-lg mb-6" data-v-feb29c7a${_scopeId5}> Your email has been verified. You can now access your profile. </p>`);
                                      _push6(ssrRenderComponent(VBtn, {
                                        color: "#7C3AED",
                                        "x-large": "",
                                        block: "",
                                        class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                                        onClick: goToProfile
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Go to Profile `);
                                          } else {
                                            return [createTextVNode(" Go to Profile ")];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      _push6(`<div class="text-center" data-v-feb29c7a${_scopeId5}><p class="text-lg mb-4" data-v-feb29c7a${_scopeId5}> Please check your inbox and click the verification link to complete your registration. </p><div class="d-flex align-center justify-center mb-6" data-v-feb29c7a${_scopeId5}><p class="text-md text-gray-600 me-2" data-v-feb29c7a${_scopeId5}> Email sent to: ${ssrInterpolate(currentUser.value.email)}</p>`);
                                      _push6(ssrRenderComponent(VBtn, {
                                        color: "secondary",
                                        size: "small",
                                        variant: "text",
                                        onClick: ($event) => showChangeEmail.value = true
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Change `);
                                          } else {
                                            return [createTextVNode(" Change ")];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                      _push6(ssrRenderComponent(VDialog, {
                                        modelValue: showChangeEmail.value,
                                        "onUpdate:modelValue": ($event) => showChangeEmail.value = $event,
                                        "max-width": "500px"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, {
                                              class: "pa-4"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VCardTitle, {
                                                    class: "text-h5 mb-4"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(` Change Email Address `);
                                                      } else {
                                                        return [createTextVNode(" Change Email Address ")];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VCardText, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VForm, {
                                                          onSubmit: handleEmailChange
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(VTextField, {
                                                                modelValue: newEmail.value,
                                                                "onUpdate:modelValue": ($event) => newEmail.value = $event,
                                                                label: "New Email",
                                                                type: "email",
                                                                "error-messages": emailError.value,
                                                                required: "",
                                                                outlined: "",
                                                                dense: "",
                                                                onBlur: validateEmail
                                                              }, null, _parent10, _scopeId9));
                                                              _push10(ssrRenderComponent(VTextField, {
                                                                modelValue: password.value,
                                                                "onUpdate:modelValue": ($event) => password.value = $event,
                                                                label: "Confirm Password",
                                                                type: "password",
                                                                "error-messages": passwordError.value,
                                                                required: "",
                                                                outlined: "",
                                                                dense: ""
                                                              }, null, _parent10, _scopeId9));
                                                            } else {
                                                              return [createVNode(VTextField, {
                                                                modelValue: newEmail.value,
                                                                "onUpdate:modelValue": ($event) => newEmail.value = $event,
                                                                label: "New Email",
                                                                type: "email",
                                                                "error-messages": emailError.value,
                                                                required: "",
                                                                outlined: "",
                                                                dense: "",
                                                                onBlur: validateEmail
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                                                modelValue: password.value,
                                                                "onUpdate:modelValue": ($event) => password.value = $event,
                                                                label: "Confirm Password",
                                                                type: "password",
                                                                "error-messages": passwordError.value,
                                                                required: "",
                                                                outlined: "",
                                                                dense: ""
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [createVNode(VForm, {
                                                          onSubmit: withModifiers(handleEmailChange, ["prevent"])
                                                        }, {
                                                          default: withCtx(() => [createVNode(VTextField, {
                                                            modelValue: newEmail.value,
                                                            "onUpdate:modelValue": ($event) => newEmail.value = $event,
                                                            label: "New Email",
                                                            type: "email",
                                                            "error-messages": emailError.value,
                                                            required: "",
                                                            outlined: "",
                                                            dense: "",
                                                            onBlur: validateEmail
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                                            modelValue: password.value,
                                                            "onUpdate:modelValue": ($event) => password.value = $event,
                                                            label: "Confirm Password",
                                                            type: "password",
                                                            "error-messages": passwordError.value,
                                                            required: "",
                                                            outlined: "",
                                                            dense: ""
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])]),
                                                          _: 1
                                                        })];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VCardActions, null, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VSpacer, null, null, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(VBtn, {
                                                          color: "grey",
                                                          variant: "text",
                                                          onClick: ($event) => showChangeEmail.value = false
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` Cancel `);
                                                            } else {
                                                              return [createTextVNode(" Cancel ")];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(VBtn, {
                                                          color: "#7C3AED",
                                                          loading: isChangingEmail.value,
                                                          disabled: !isEmailChangeValid.value,
                                                          onClick: handleEmailChange
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(` Change Email `);
                                                            } else {
                                                              return [createTextVNode(" Change Email ")];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [createVNode(VSpacer), createVNode(VBtn, {
                                                          color: "grey",
                                                          variant: "text",
                                                          onClick: ($event) => showChangeEmail.value = false
                                                        }, {
                                                          default: withCtx(() => [createTextVNode(" Cancel ")]),
                                                          _: 1
                                                        }, 8, ["onClick"]), createVNode(VBtn, {
                                                          color: "#7C3AED",
                                                          loading: isChangingEmail.value,
                                                          disabled: !isEmailChangeValid.value,
                                                          onClick: handleEmailChange
                                                        }, {
                                                          default: withCtx(() => [createTextVNode(" Change Email ")]),
                                                          _: 1
                                                        }, 8, ["loading", "disabled"])];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [createVNode(VCardTitle, {
                                                    class: "text-h5 mb-4"
                                                  }, {
                                                    default: withCtx(() => [createTextVNode(" Change Email Address ")]),
                                                    _: 1
                                                  }), createVNode(VCardText, null, {
                                                    default: withCtx(() => [createVNode(VForm, {
                                                      onSubmit: withModifiers(handleEmailChange, ["prevent"])
                                                    }, {
                                                      default: withCtx(() => [createVNode(VTextField, {
                                                        modelValue: newEmail.value,
                                                        "onUpdate:modelValue": ($event) => newEmail.value = $event,
                                                        label: "New Email",
                                                        type: "email",
                                                        "error-messages": emailError.value,
                                                        required: "",
                                                        outlined: "",
                                                        dense: "",
                                                        onBlur: validateEmail
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                                        modelValue: password.value,
                                                        "onUpdate:modelValue": ($event) => password.value = $event,
                                                        label: "Confirm Password",
                                                        type: "password",
                                                        "error-messages": passwordError.value,
                                                        required: "",
                                                        outlined: "",
                                                        dense: ""
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])]),
                                                      _: 1
                                                    })]),
                                                    _: 1
                                                  }), createVNode(VCardActions, null, {
                                                    default: withCtx(() => [createVNode(VSpacer), createVNode(VBtn, {
                                                      color: "grey",
                                                      variant: "text",
                                                      onClick: ($event) => showChangeEmail.value = false
                                                    }, {
                                                      default: withCtx(() => [createTextVNode(" Cancel ")]),
                                                      _: 1
                                                    }, 8, ["onClick"]), createVNode(VBtn, {
                                                      color: "#7C3AED",
                                                      loading: isChangingEmail.value,
                                                      disabled: !isEmailChangeValid.value,
                                                      onClick: handleEmailChange
                                                    }, {
                                                      default: withCtx(() => [createTextVNode(" Change Email ")]),
                                                      _: 1
                                                    }, 8, ["loading", "disabled"])]),
                                                    _: 1
                                                  })];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [createVNode(VCard, {
                                              class: "pa-4"
                                            }, {
                                              default: withCtx(() => [createVNode(VCardTitle, {
                                                class: "text-h5 mb-4"
                                              }, {
                                                default: withCtx(() => [createTextVNode(" Change Email Address ")]),
                                                _: 1
                                              }), createVNode(VCardText, null, {
                                                default: withCtx(() => [createVNode(VForm, {
                                                  onSubmit: withModifiers(handleEmailChange, ["prevent"])
                                                }, {
                                                  default: withCtx(() => [createVNode(VTextField, {
                                                    modelValue: newEmail.value,
                                                    "onUpdate:modelValue": ($event) => newEmail.value = $event,
                                                    label: "New Email",
                                                    type: "email",
                                                    "error-messages": emailError.value,
                                                    required: "",
                                                    outlined: "",
                                                    dense: "",
                                                    onBlur: validateEmail
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                                    modelValue: password.value,
                                                    "onUpdate:modelValue": ($event) => password.value = $event,
                                                    label: "Confirm Password",
                                                    type: "password",
                                                    "error-messages": passwordError.value,
                                                    required: "",
                                                    outlined: "",
                                                    dense: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])]),
                                                  _: 1
                                                })]),
                                                _: 1
                                              }), createVNode(VCardActions, null, {
                                                default: withCtx(() => [createVNode(VSpacer), createVNode(VBtn, {
                                                  color: "grey",
                                                  variant: "text",
                                                  onClick: ($event) => showChangeEmail.value = false
                                                }, {
                                                  default: withCtx(() => [createTextVNode(" Cancel ")]),
                                                  _: 1
                                                }, 8, ["onClick"]), createVNode(VBtn, {
                                                  color: "#7C3AED",
                                                  loading: isChangingEmail.value,
                                                  disabled: !isEmailChangeValid.value,
                                                  onClick: handleEmailChange
                                                }, {
                                                  default: withCtx(() => [createTextVNode(" Change Email ")]),
                                                  _: 1
                                                }, 8, ["loading", "disabled"])]),
                                                _: 1
                                              })]),
                                              _: 1
                                            })];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VBtn, {
                                        disabled: resendDisabled.value,
                                        color: "#7C3AED",
                                        "x-large": "",
                                        block: "",
                                        class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                                        onClick: resendVerificationEmail
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(resendDisabled.value ? `Resend in ${resendTimer.value}s` : "Resend Verification Email")}`);
                                          } else {
                                            return [createTextVNode(toDisplayString(resendDisabled.value ? `Resend in ${resendTimer.value}s` : "Resend Verification Email"), 1)];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VBtn, {
                                        color: "info",
                                        "x-large": "",
                                        block: "",
                                        variant: "outlined",
                                        class: "mb-6 px-6 py-3 text-lg font-semibold rounded-xl",
                                        onClick: checkVerificationStatus
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
                                      _push6(`<p class="" data-v-feb29c7a${_scopeId5}> Once verified, you can go back to your profile. </p></div>`);
                                    }
                                    if (isLoading.value) {
                                      _push6(ssrRenderComponent(VProgressCircular, {
                                        indeterminate: "",
                                        color: "#7C3AED",
                                        class: "mt-4"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [!currentUser.value ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-center"
                                    }, [createVNode("p", {
                                      class: "text-lg mb-6"
                                    }, " No authenticated user found. Please log in first. "), createVNode(VBtn, {
                                      color: "#7C3AED",
                                      "x-large": "",
                                      block: "",
                                      class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                                      onClick: goToLogin
                                    }, {
                                      default: withCtx(() => [createTextVNode(" Go to Login ")]),
                                      _: 1
                                    })])) : currentUser.value.emailVerified ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "text-center"
                                    }, [createVNode("p", {
                                      class: "text-lg mb-6"
                                    }, " Your email has been verified. You can now access your profile. "), createVNode(VBtn, {
                                      color: "#7C3AED",
                                      "x-large": "",
                                      block: "",
                                      class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                                      onClick: goToProfile
                                    }, {
                                      default: withCtx(() => [createTextVNode(" Go to Profile ")]),
                                      _: 1
                                    })])) : (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "text-center"
                                    }, [createVNode("p", {
                                      class: "text-lg mb-4"
                                    }, " Please check your inbox and click the verification link to complete your registration. "), createVNode("div", {
                                      class: "d-flex align-center justify-center mb-6"
                                    }, [createVNode("p", {
                                      class: "text-md text-gray-600 me-2"
                                    }, " Email sent to: " + toDisplayString(currentUser.value.email), 1), createVNode(VBtn, {
                                      color: "secondary",
                                      size: "small",
                                      variant: "text",
                                      onClick: ($event) => showChangeEmail.value = true
                                    }, {
                                      default: withCtx(() => [createTextVNode(" Change ")]),
                                      _: 1
                                    }, 8, ["onClick"])]), createVNode(VDialog, {
                                      modelValue: showChangeEmail.value,
                                      "onUpdate:modelValue": ($event) => showChangeEmail.value = $event,
                                      "max-width": "500px"
                                    }, {
                                      default: withCtx(() => [createVNode(VCard, {
                                        class: "pa-4"
                                      }, {
                                        default: withCtx(() => [createVNode(VCardTitle, {
                                          class: "text-h5 mb-4"
                                        }, {
                                          default: withCtx(() => [createTextVNode(" Change Email Address ")]),
                                          _: 1
                                        }), createVNode(VCardText, null, {
                                          default: withCtx(() => [createVNode(VForm, {
                                            onSubmit: withModifiers(handleEmailChange, ["prevent"])
                                          }, {
                                            default: withCtx(() => [createVNode(VTextField, {
                                              modelValue: newEmail.value,
                                              "onUpdate:modelValue": ($event) => newEmail.value = $event,
                                              label: "New Email",
                                              type: "email",
                                              "error-messages": emailError.value,
                                              required: "",
                                              outlined: "",
                                              dense: "",
                                              onBlur: validateEmail
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                              modelValue: password.value,
                                              "onUpdate:modelValue": ($event) => password.value = $event,
                                              label: "Confirm Password",
                                              type: "password",
                                              "error-messages": passwordError.value,
                                              required: "",
                                              outlined: "",
                                              dense: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])]),
                                            _: 1
                                          })]),
                                          _: 1
                                        }), createVNode(VCardActions, null, {
                                          default: withCtx(() => [createVNode(VSpacer), createVNode(VBtn, {
                                            color: "grey",
                                            variant: "text",
                                            onClick: ($event) => showChangeEmail.value = false
                                          }, {
                                            default: withCtx(() => [createTextVNode(" Cancel ")]),
                                            _: 1
                                          }, 8, ["onClick"]), createVNode(VBtn, {
                                            color: "#7C3AED",
                                            loading: isChangingEmail.value,
                                            disabled: !isEmailChangeValid.value,
                                            onClick: handleEmailChange
                                          }, {
                                            default: withCtx(() => [createTextVNode(" Change Email ")]),
                                            _: 1
                                          }, 8, ["loading", "disabled"])]),
                                          _: 1
                                        })]),
                                        _: 1
                                      })]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VBtn, {
                                      disabled: resendDisabled.value,
                                      color: "#7C3AED",
                                      "x-large": "",
                                      block: "",
                                      class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                                      onClick: resendVerificationEmail
                                    }, {
                                      default: withCtx(() => [createTextVNode(toDisplayString(resendDisabled.value ? `Resend in ${resendTimer.value}s` : "Resend Verification Email"), 1)]),
                                      _: 1
                                    }, 8, ["disabled"]), createVNode(VBtn, {
                                      color: "info",
                                      "x-large": "",
                                      block: "",
                                      variant: "outlined",
                                      class: "mb-6 px-6 py-3 text-lg font-semibold rounded-xl",
                                      onClick: checkVerificationStatus
                                    }, {
                                      default: withCtx(() => [createTextVNode(" Check Verification Status ")]),
                                      _: 1
                                    }), createVNode("p", {
                                      class: ""
                                    }, " Once verified, you can go back to your profile. ")])), isLoading.value ? (openBlock(), createBlock(VProgressCircular, {
                                      key: 3,
                                      indeterminate: "",
                                      color: "#7C3AED",
                                      class: "mt-4"
                                    })) : createCommentVNode("", true)];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [createVNode(VCardTitle, null, {
                                default: withCtx(() => [createVNode("h1", {
                                  class: "text-3xl md:text-4xl font-bold mb-6"
                                }, " Verify Your Email ")]),
                                _: 1
                              }), createVNode(VCardText, null, {
                                default: withCtx(() => [!currentUser.value ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-center"
                                }, [createVNode("p", {
                                  class: "text-lg mb-6"
                                }, " No authenticated user found. Please log in first. "), createVNode(VBtn, {
                                  color: "#7C3AED",
                                  "x-large": "",
                                  block: "",
                                  class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                                  onClick: goToLogin
                                }, {
                                  default: withCtx(() => [createTextVNode(" Go to Login ")]),
                                  _: 1
                                })])) : currentUser.value.emailVerified ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "text-center"
                                }, [createVNode("p", {
                                  class: "text-lg mb-6"
                                }, " Your email has been verified. You can now access your profile. "), createVNode(VBtn, {
                                  color: "#7C3AED",
                                  "x-large": "",
                                  block: "",
                                  class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                                  onClick: goToProfile
                                }, {
                                  default: withCtx(() => [createTextVNode(" Go to Profile ")]),
                                  _: 1
                                })])) : (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: "text-center"
                                }, [createVNode("p", {
                                  class: "text-lg mb-4"
                                }, " Please check your inbox and click the verification link to complete your registration. "), createVNode("div", {
                                  class: "d-flex align-center justify-center mb-6"
                                }, [createVNode("p", {
                                  class: "text-md text-gray-600 me-2"
                                }, " Email sent to: " + toDisplayString(currentUser.value.email), 1), createVNode(VBtn, {
                                  color: "secondary",
                                  size: "small",
                                  variant: "text",
                                  onClick: ($event) => showChangeEmail.value = true
                                }, {
                                  default: withCtx(() => [createTextVNode(" Change ")]),
                                  _: 1
                                }, 8, ["onClick"])]), createVNode(VDialog, {
                                  modelValue: showChangeEmail.value,
                                  "onUpdate:modelValue": ($event) => showChangeEmail.value = $event,
                                  "max-width": "500px"
                                }, {
                                  default: withCtx(() => [createVNode(VCard, {
                                    class: "pa-4"
                                  }, {
                                    default: withCtx(() => [createVNode(VCardTitle, {
                                      class: "text-h5 mb-4"
                                    }, {
                                      default: withCtx(() => [createTextVNode(" Change Email Address ")]),
                                      _: 1
                                    }), createVNode(VCardText, null, {
                                      default: withCtx(() => [createVNode(VForm, {
                                        onSubmit: withModifiers(handleEmailChange, ["prevent"])
                                      }, {
                                        default: withCtx(() => [createVNode(VTextField, {
                                          modelValue: newEmail.value,
                                          "onUpdate:modelValue": ($event) => newEmail.value = $event,
                                          label: "New Email",
                                          type: "email",
                                          "error-messages": emailError.value,
                                          required: "",
                                          outlined: "",
                                          dense: "",
                                          onBlur: validateEmail
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                          modelValue: password.value,
                                          "onUpdate:modelValue": ($event) => password.value = $event,
                                          label: "Confirm Password",
                                          type: "password",
                                          "error-messages": passwordError.value,
                                          required: "",
                                          outlined: "",
                                          dense: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])]),
                                        _: 1
                                      })]),
                                      _: 1
                                    }), createVNode(VCardActions, null, {
                                      default: withCtx(() => [createVNode(VSpacer), createVNode(VBtn, {
                                        color: "grey",
                                        variant: "text",
                                        onClick: ($event) => showChangeEmail.value = false
                                      }, {
                                        default: withCtx(() => [createTextVNode(" Cancel ")]),
                                        _: 1
                                      }, 8, ["onClick"]), createVNode(VBtn, {
                                        color: "#7C3AED",
                                        loading: isChangingEmail.value,
                                        disabled: !isEmailChangeValid.value,
                                        onClick: handleEmailChange
                                      }, {
                                        default: withCtx(() => [createTextVNode(" Change Email ")]),
                                        _: 1
                                      }, 8, ["loading", "disabled"])]),
                                      _: 1
                                    })]),
                                    _: 1
                                  })]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VBtn, {
                                  disabled: resendDisabled.value,
                                  color: "#7C3AED",
                                  "x-large": "",
                                  block: "",
                                  class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                                  onClick: resendVerificationEmail
                                }, {
                                  default: withCtx(() => [createTextVNode(toDisplayString(resendDisabled.value ? `Resend in ${resendTimer.value}s` : "Resend Verification Email"), 1)]),
                                  _: 1
                                }, 8, ["disabled"]), createVNode(VBtn, {
                                  color: "info",
                                  "x-large": "",
                                  block: "",
                                  variant: "outlined",
                                  class: "mb-6 px-6 py-3 text-lg font-semibold rounded-xl",
                                  onClick: checkVerificationStatus
                                }, {
                                  default: withCtx(() => [createTextVNode(" Check Verification Status ")]),
                                  _: 1
                                }), createVNode("p", {
                                  class: ""
                                }, " Once verified, you can go back to your profile. ")])), isLoading.value ? (openBlock(), createBlock(VProgressCircular, {
                                  key: 3,
                                  indeterminate: "",
                                  color: "#7C3AED",
                                  class: "mt-4"
                                })) : createCommentVNode("", true)]),
                                _: 1
                              })];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [createVNode(VCard, {
                          class: "pa-6 rounded-xl verification-card w-100"
                        }, {
                          default: withCtx(() => [createVNode(VCardTitle, null, {
                            default: withCtx(() => [createVNode("h1", {
                              class: "text-3xl md:text-4xl font-bold mb-6"
                            }, " Verify Your Email ")]),
                            _: 1
                          }), createVNode(VCardText, null, {
                            default: withCtx(() => [!currentUser.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center"
                            }, [createVNode("p", {
                              class: "text-lg mb-6"
                            }, " No authenticated user found. Please log in first. "), createVNode(VBtn, {
                              color: "#7C3AED",
                              "x-large": "",
                              block: "",
                              class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                              onClick: goToLogin
                            }, {
                              default: withCtx(() => [createTextVNode(" Go to Login ")]),
                              _: 1
                            })])) : currentUser.value.emailVerified ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "text-center"
                            }, [createVNode("p", {
                              class: "text-lg mb-6"
                            }, " Your email has been verified. You can now access your profile. "), createVNode(VBtn, {
                              color: "#7C3AED",
                              "x-large": "",
                              block: "",
                              class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                              onClick: goToProfile
                            }, {
                              default: withCtx(() => [createTextVNode(" Go to Profile ")]),
                              _: 1
                            })])) : (openBlock(), createBlock("div", {
                              key: 2,
                              class: "text-center"
                            }, [createVNode("p", {
                              class: "text-lg mb-4"
                            }, " Please check your inbox and click the verification link to complete your registration. "), createVNode("div", {
                              class: "d-flex align-center justify-center mb-6"
                            }, [createVNode("p", {
                              class: "text-md text-gray-600 me-2"
                            }, " Email sent to: " + toDisplayString(currentUser.value.email), 1), createVNode(VBtn, {
                              color: "secondary",
                              size: "small",
                              variant: "text",
                              onClick: ($event) => showChangeEmail.value = true
                            }, {
                              default: withCtx(() => [createTextVNode(" Change ")]),
                              _: 1
                            }, 8, ["onClick"])]), createVNode(VDialog, {
                              modelValue: showChangeEmail.value,
                              "onUpdate:modelValue": ($event) => showChangeEmail.value = $event,
                              "max-width": "500px"
                            }, {
                              default: withCtx(() => [createVNode(VCard, {
                                class: "pa-4"
                              }, {
                                default: withCtx(() => [createVNode(VCardTitle, {
                                  class: "text-h5 mb-4"
                                }, {
                                  default: withCtx(() => [createTextVNode(" Change Email Address ")]),
                                  _: 1
                                }), createVNode(VCardText, null, {
                                  default: withCtx(() => [createVNode(VForm, {
                                    onSubmit: withModifiers(handleEmailChange, ["prevent"])
                                  }, {
                                    default: withCtx(() => [createVNode(VTextField, {
                                      modelValue: newEmail.value,
                                      "onUpdate:modelValue": ($event) => newEmail.value = $event,
                                      label: "New Email",
                                      type: "email",
                                      "error-messages": emailError.value,
                                      required: "",
                                      outlined: "",
                                      dense: "",
                                      onBlur: validateEmail
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                      modelValue: password.value,
                                      "onUpdate:modelValue": ($event) => password.value = $event,
                                      label: "Confirm Password",
                                      type: "password",
                                      "error-messages": passwordError.value,
                                      required: "",
                                      outlined: "",
                                      dense: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])]),
                                    _: 1
                                  })]),
                                  _: 1
                                }), createVNode(VCardActions, null, {
                                  default: withCtx(() => [createVNode(VSpacer), createVNode(VBtn, {
                                    color: "grey",
                                    variant: "text",
                                    onClick: ($event) => showChangeEmail.value = false
                                  }, {
                                    default: withCtx(() => [createTextVNode(" Cancel ")]),
                                    _: 1
                                  }, 8, ["onClick"]), createVNode(VBtn, {
                                    color: "#7C3AED",
                                    loading: isChangingEmail.value,
                                    disabled: !isEmailChangeValid.value,
                                    onClick: handleEmailChange
                                  }, {
                                    default: withCtx(() => [createTextVNode(" Change Email ")]),
                                    _: 1
                                  }, 8, ["loading", "disabled"])]),
                                  _: 1
                                })]),
                                _: 1
                              })]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VBtn, {
                              disabled: resendDisabled.value,
                              color: "#7C3AED",
                              "x-large": "",
                              block: "",
                              class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                              onClick: resendVerificationEmail
                            }, {
                              default: withCtx(() => [createTextVNode(toDisplayString(resendDisabled.value ? `Resend in ${resendTimer.value}s` : "Resend Verification Email"), 1)]),
                              _: 1
                            }, 8, ["disabled"]), createVNode(VBtn, {
                              color: "info",
                              "x-large": "",
                              block: "",
                              variant: "outlined",
                              class: "mb-6 px-6 py-3 text-lg font-semibold rounded-xl",
                              onClick: checkVerificationStatus
                            }, {
                              default: withCtx(() => [createTextVNode(" Check Verification Status ")]),
                              _: 1
                            }), createVNode("p", {
                              class: ""
                            }, " Once verified, you can go back to your profile. ")])), isLoading.value ? (openBlock(), createBlock(VProgressCircular, {
                              key: 3,
                              indeterminate: "",
                              color: "#7C3AED",
                              class: "mt-4"
                            })) : createCommentVNode("", true)]),
                            _: 1
                          })]),
                          _: 1
                        })];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Email Verification Illustration" class="max-w-full h-auto object-contain illustration" style="${ssrRenderStyle({
                          "max-width": "400px"
                        })}" data-v-feb29c7a${_scopeId3}>`);
                      } else {
                        return [createVNode("img", {
                          src: _imports_0,
                          alt: "Email Verification Illustration",
                          class: "max-w-full h-auto object-contain illustration",
                          style: {
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
                    md: "6",
                    class: "d-flex justify-center"
                  }, {
                    default: withCtx(() => [createVNode(VCard, {
                      class: "pa-6 rounded-xl verification-card w-100"
                    }, {
                      default: withCtx(() => [createVNode(VCardTitle, null, {
                        default: withCtx(() => [createVNode("h1", {
                          class: "text-3xl md:text-4xl font-bold mb-6"
                        }, " Verify Your Email ")]),
                        _: 1
                      }), createVNode(VCardText, null, {
                        default: withCtx(() => [!currentUser.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-center"
                        }, [createVNode("p", {
                          class: "text-lg mb-6"
                        }, " No authenticated user found. Please log in first. "), createVNode(VBtn, {
                          color: "#7C3AED",
                          "x-large": "",
                          block: "",
                          class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                          onClick: goToLogin
                        }, {
                          default: withCtx(() => [createTextVNode(" Go to Login ")]),
                          _: 1
                        })])) : currentUser.value.emailVerified ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-center"
                        }, [createVNode("p", {
                          class: "text-lg mb-6"
                        }, " Your email has been verified. You can now access your profile. "), createVNode(VBtn, {
                          color: "#7C3AED",
                          "x-large": "",
                          block: "",
                          class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                          onClick: goToProfile
                        }, {
                          default: withCtx(() => [createTextVNode(" Go to Profile ")]),
                          _: 1
                        })])) : (openBlock(), createBlock("div", {
                          key: 2,
                          class: "text-center"
                        }, [createVNode("p", {
                          class: "text-lg mb-4"
                        }, " Please check your inbox and click the verification link to complete your registration. "), createVNode("div", {
                          class: "d-flex align-center justify-center mb-6"
                        }, [createVNode("p", {
                          class: "text-md text-gray-600 me-2"
                        }, " Email sent to: " + toDisplayString(currentUser.value.email), 1), createVNode(VBtn, {
                          color: "secondary",
                          size: "small",
                          variant: "text",
                          onClick: ($event) => showChangeEmail.value = true
                        }, {
                          default: withCtx(() => [createTextVNode(" Change ")]),
                          _: 1
                        }, 8, ["onClick"])]), createVNode(VDialog, {
                          modelValue: showChangeEmail.value,
                          "onUpdate:modelValue": ($event) => showChangeEmail.value = $event,
                          "max-width": "500px"
                        }, {
                          default: withCtx(() => [createVNode(VCard, {
                            class: "pa-4"
                          }, {
                            default: withCtx(() => [createVNode(VCardTitle, {
                              class: "text-h5 mb-4"
                            }, {
                              default: withCtx(() => [createTextVNode(" Change Email Address ")]),
                              _: 1
                            }), createVNode(VCardText, null, {
                              default: withCtx(() => [createVNode(VForm, {
                                onSubmit: withModifiers(handleEmailChange, ["prevent"])
                              }, {
                                default: withCtx(() => [createVNode(VTextField, {
                                  modelValue: newEmail.value,
                                  "onUpdate:modelValue": ($event) => newEmail.value = $event,
                                  label: "New Email",
                                  type: "email",
                                  "error-messages": emailError.value,
                                  required: "",
                                  outlined: "",
                                  dense: "",
                                  onBlur: validateEmail
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                  modelValue: password.value,
                                  "onUpdate:modelValue": ($event) => password.value = $event,
                                  label: "Confirm Password",
                                  type: "password",
                                  "error-messages": passwordError.value,
                                  required: "",
                                  outlined: "",
                                  dense: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])]),
                                _: 1
                              })]),
                              _: 1
                            }), createVNode(VCardActions, null, {
                              default: withCtx(() => [createVNode(VSpacer), createVNode(VBtn, {
                                color: "grey",
                                variant: "text",
                                onClick: ($event) => showChangeEmail.value = false
                              }, {
                                default: withCtx(() => [createTextVNode(" Cancel ")]),
                                _: 1
                              }, 8, ["onClick"]), createVNode(VBtn, {
                                color: "#7C3AED",
                                loading: isChangingEmail.value,
                                disabled: !isEmailChangeValid.value,
                                onClick: handleEmailChange
                              }, {
                                default: withCtx(() => [createTextVNode(" Change Email ")]),
                                _: 1
                              }, 8, ["loading", "disabled"])]),
                              _: 1
                            })]),
                            _: 1
                          })]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VBtn, {
                          disabled: resendDisabled.value,
                          color: "#7C3AED",
                          "x-large": "",
                          block: "",
                          class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                          onClick: resendVerificationEmail
                        }, {
                          default: withCtx(() => [createTextVNode(toDisplayString(resendDisabled.value ? `Resend in ${resendTimer.value}s` : "Resend Verification Email"), 1)]),
                          _: 1
                        }, 8, ["disabled"]), createVNode(VBtn, {
                          color: "info",
                          "x-large": "",
                          block: "",
                          variant: "outlined",
                          class: "mb-6 px-6 py-3 text-lg font-semibold rounded-xl",
                          onClick: checkVerificationStatus
                        }, {
                          default: withCtx(() => [createTextVNode(" Check Verification Status ")]),
                          _: 1
                        }), createVNode("p", {
                          class: ""
                        }, " Once verified, you can go back to your profile. ")])), isLoading.value ? (openBlock(), createBlock(VProgressCircular, {
                          key: 3,
                          indeterminate: "",
                          color: "#7C3AED",
                          class: "mt-4"
                        })) : createCommentVNode("", true)]),
                        _: 1
                      })]),
                      _: 1
                    })]),
                    _: 1
                  }), createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "d-flex justify-center align-center"
                  }, {
                    default: withCtx(() => [createVNode("img", {
                      src: _imports_0,
                      alt: "Email Verification Illustration",
                      class: "max-w-full h-auto object-contain illustration",
                      style: {
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
            return [createVNode(VRow, {
              class: "justify-center align-center"
            }, {
              default: withCtx(() => [createVNode(VCol, {
                cols: "12",
                md: "6",
                class: "d-flex justify-center"
              }, {
                default: withCtx(() => [createVNode(VCard, {
                  class: "pa-6 rounded-xl verification-card w-100"
                }, {
                  default: withCtx(() => [createVNode(VCardTitle, null, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-6"
                    }, " Verify Your Email ")]),
                    _: 1
                  }), createVNode(VCardText, null, {
                    default: withCtx(() => [!currentUser.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-center"
                    }, [createVNode("p", {
                      class: "text-lg mb-6"
                    }, " No authenticated user found. Please log in first. "), createVNode(VBtn, {
                      color: "#7C3AED",
                      "x-large": "",
                      block: "",
                      class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                      onClick: goToLogin
                    }, {
                      default: withCtx(() => [createTextVNode(" Go to Login ")]),
                      _: 1
                    })])) : currentUser.value.emailVerified ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-center"
                    }, [createVNode("p", {
                      class: "text-lg mb-6"
                    }, " Your email has been verified. You can now access your profile. "), createVNode(VBtn, {
                      color: "#7C3AED",
                      "x-large": "",
                      block: "",
                      class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                      onClick: goToProfile
                    }, {
                      default: withCtx(() => [createTextVNode(" Go to Profile ")]),
                      _: 1
                    })])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-center"
                    }, [createVNode("p", {
                      class: "text-lg mb-4"
                    }, " Please check your inbox and click the verification link to complete your registration. "), createVNode("div", {
                      class: "d-flex align-center justify-center mb-6"
                    }, [createVNode("p", {
                      class: "text-md text-gray-600 me-2"
                    }, " Email sent to: " + toDisplayString(currentUser.value.email), 1), createVNode(VBtn, {
                      color: "secondary",
                      size: "small",
                      variant: "text",
                      onClick: ($event) => showChangeEmail.value = true
                    }, {
                      default: withCtx(() => [createTextVNode(" Change ")]),
                      _: 1
                    }, 8, ["onClick"])]), createVNode(VDialog, {
                      modelValue: showChangeEmail.value,
                      "onUpdate:modelValue": ($event) => showChangeEmail.value = $event,
                      "max-width": "500px"
                    }, {
                      default: withCtx(() => [createVNode(VCard, {
                        class: "pa-4"
                      }, {
                        default: withCtx(() => [createVNode(VCardTitle, {
                          class: "text-h5 mb-4"
                        }, {
                          default: withCtx(() => [createTextVNode(" Change Email Address ")]),
                          _: 1
                        }), createVNode(VCardText, null, {
                          default: withCtx(() => [createVNode(VForm, {
                            onSubmit: withModifiers(handleEmailChange, ["prevent"])
                          }, {
                            default: withCtx(() => [createVNode(VTextField, {
                              modelValue: newEmail.value,
                              "onUpdate:modelValue": ($event) => newEmail.value = $event,
                              label: "New Email",
                              type: "email",
                              "error-messages": emailError.value,
                              required: "",
                              outlined: "",
                              dense: "",
                              onBlur: validateEmail
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                              modelValue: password.value,
                              "onUpdate:modelValue": ($event) => password.value = $event,
                              label: "Confirm Password",
                              type: "password",
                              "error-messages": passwordError.value,
                              required: "",
                              outlined: "",
                              dense: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])]),
                            _: 1
                          })]),
                          _: 1
                        }), createVNode(VCardActions, null, {
                          default: withCtx(() => [createVNode(VSpacer), createVNode(VBtn, {
                            color: "grey",
                            variant: "text",
                            onClick: ($event) => showChangeEmail.value = false
                          }, {
                            default: withCtx(() => [createTextVNode(" Cancel ")]),
                            _: 1
                          }, 8, ["onClick"]), createVNode(VBtn, {
                            color: "#7C3AED",
                            loading: isChangingEmail.value,
                            disabled: !isEmailChangeValid.value,
                            onClick: handleEmailChange
                          }, {
                            default: withCtx(() => [createTextVNode(" Change Email ")]),
                            _: 1
                          }, 8, ["loading", "disabled"])]),
                          _: 1
                        })]),
                        _: 1
                      })]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VBtn, {
                      disabled: resendDisabled.value,
                      color: "#7C3AED",
                      "x-large": "",
                      block: "",
                      class: "mb-4 px-6 py-3 text-lg font-semibold rounded-xl",
                      onClick: resendVerificationEmail
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(resendDisabled.value ? `Resend in ${resendTimer.value}s` : "Resend Verification Email"), 1)]),
                      _: 1
                    }, 8, ["disabled"]), createVNode(VBtn, {
                      color: "info",
                      "x-large": "",
                      block: "",
                      variant: "outlined",
                      class: "mb-6 px-6 py-3 text-lg font-semibold rounded-xl",
                      onClick: checkVerificationStatus
                    }, {
                      default: withCtx(() => [createTextVNode(" Check Verification Status ")]),
                      _: 1
                    }), createVNode("p", {
                      class: ""
                    }, " Once verified, you can go back to your profile. ")])), isLoading.value ? (openBlock(), createBlock(VProgressCircular, {
                      key: 3,
                      indeterminate: "",
                      color: "#7C3AED",
                      class: "mt-4"
                    })) : createCommentVNode("", true)]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), createVNode(VCol, {
                cols: "12",
                md: "6",
                class: "d-flex justify-center align-center"
              }, {
                default: withCtx(() => [createVNode("img", {
                  src: _imports_0,
                  alt: "Email Verification Illustration",
                  class: "max-w-full h-auto object-contain illustration",
                  style: {
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EmailVerification.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-feb29c7a"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_EmailVerification = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "full-width"
  }, _attrs))}><section class="">`);
  _push(ssrRenderComponent(VContainer, {
    class: "pa-0",
    fluid: "",
    "data-aos": "fade-up",
    "data-aos-duration": "300"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_EmailVerification, null, null, _parent2, _scopeId));
      } else {
        return [createVNode(_component_EmailVerification)];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verify-email.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const verifyEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { verifyEmail as default };
//# sourceMappingURL=verify-email-B0GLhBRx.mjs.map
