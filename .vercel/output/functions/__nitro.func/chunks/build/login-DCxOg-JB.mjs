import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext, ref, computed, createTextVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import { V as VContainer, _ as _export_sfc, b as useNuxtApp, e as VRow, f as VCol, j as VCard, v as VCardTitle, k as VCardText, D as VForm, E as VTextField, t as VBtn, L as signInWithEmailAndPassword, M as getDoc, N as doc, O as db, K as sendPasswordResetEmail } from './server.mjs';
import { p as parseFirebaseError } from './firebaseErrorParser--QNGMjHC.mjs';
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

const _imports_0 = "" + buildAssetsURL("Saly-8.CDa3sLp8.png");
const _sfc_main$1 = {
  __name: "LogIn",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const nuxtApp = useNuxtApp();
    const auth = nuxtApp.$firebaseAuth;
    const userStore = useUserStore();
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const isFormValid = computed(() => {
      return email.value && password.value && !emailError.value && !passwordError.value;
    });
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      emailError.value = emailRegex.test(email.value) ? "" : "Please enter a valid email address";
    };
    const validatePassword = () => {
      passwordError.value = password.value.length >= 6 ? "" : "Password must be at least 6 characters long";
    };
    const handleSignIn = async () => {
      if (!isFormValid.value)
        return;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
        if (!user.emailVerified) {
          error.value = "Please verify your email before logging in.";
          router.push("/verify-email");
          return;
        }
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          userStore.setUser({
            ...userDoc.data(),
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified
          });
        } else {
          userStore.setUser({
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified
          });
        }
        router.push("/");
      } catch (err) {
        error.value = parseFirebaseError(err);
      }
    };
    const handleForgotPassword = async () => {
      if (!email.value) {
        error.value = "Please enter your email address.";
        return;
      }
      try {
        await sendPasswordResetEmail(auth, email.value);
        error.value = "Password reset email sent. Please check your inbox.";
      } catch (err) {
        error.value = parseFirebaseError(err);
      }
    };
    const goToSignUp = () => {
      router.push("/sign-up");
    };
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
                          class: "pa-6 rounded-xl login-card w-100"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-3xl md:text-4xl font-bold mb-6" data-v-937dab1b${_scopeId5}> Log in to Studybyte </h1>`);
                                  } else {
                                    return [createVNode("h1", {
                                      class: "text-3xl md:text-4xl font-bold mb-6"
                                    }, " Log in to Studybyte ")];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VForm, {
                                      onSubmit: handleSignIn
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: email.value,
                                            "onUpdate:modelValue": ($event) => email.value = $event,
                                            label: "Email",
                                            type: "email",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            "error-messages": emailError.value,
                                            class: "mb-4",
                                            onBlur: validateEmail
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: password.value,
                                            "onUpdate:modelValue": ($event) => password.value = $event,
                                            label: "Password",
                                            type: "password",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            "error-messages": passwordError.value,
                                            class: "mb-4",
                                            onBlur: validatePassword
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            type: "submit",
                                            color: "#7C3AED",
                                            block: "",
                                            "x-large": "",
                                            disabled: !isFormValid.value,
                                            class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Log in `);
                                              } else {
                                                return [createTextVNode(" Log in ")];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [createVNode(VTextField, {
                                            modelValue: email.value,
                                            "onUpdate:modelValue": ($event) => email.value = $event,
                                            label: "Email",
                                            type: "email",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            "error-messages": emailError.value,
                                            class: "mb-4",
                                            onBlur: validateEmail
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                            modelValue: password.value,
                                            "onUpdate:modelValue": ($event) => password.value = $event,
                                            label: "Password",
                                            type: "password",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            "error-messages": passwordError.value,
                                            class: "mb-4",
                                            onBlur: validatePassword
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VBtn, {
                                            type: "submit",
                                            color: "#7C3AED",
                                            block: "",
                                            "x-large": "",
                                            disabled: !isFormValid.value,
                                            class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                                          }, {
                                            default: withCtx(() => [createTextVNode(" Log in ")]),
                                            _: 1
                                          }, 8, ["disabled"])];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="text-right mt-2" data-v-937dab1b${_scopeId5}><a class="text-primary cursor-pointer" data-v-937dab1b${_scopeId5}><p data-v-937dab1b${_scopeId5}> Forgot password? </p></a></div><p class="text-center mt-6" data-v-937dab1b${_scopeId5}> Don&#39;t have an account? <a class="text-primary font-bold cursor-pointer" data-v-937dab1b${_scopeId5}> Sign up </a></p>`);
                                    if (error.value) {
                                      _push6(`<p class="error-message mt-4 text-center text-red-500" data-v-937dab1b${_scopeId5}>${ssrInterpolate(error.value)}</p>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [createVNode(VForm, {
                                      onSubmit: withModifiers(handleSignIn, ["prevent"])
                                    }, {
                                      default: withCtx(() => [createVNode(VTextField, {
                                        modelValue: email.value,
                                        "onUpdate:modelValue": ($event) => email.value = $event,
                                        label: "Email",
                                        type: "email",
                                        outlined: "",
                                        dense: "",
                                        required: "",
                                        "error-messages": emailError.value,
                                        class: "mb-4",
                                        onBlur: validateEmail
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                        modelValue: password.value,
                                        "onUpdate:modelValue": ($event) => password.value = $event,
                                        label: "Password",
                                        type: "password",
                                        outlined: "",
                                        dense: "",
                                        required: "",
                                        "error-messages": passwordError.value,
                                        class: "mb-4",
                                        onBlur: validatePassword
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VBtn, {
                                        type: "submit",
                                        color: "#7C3AED",
                                        block: "",
                                        "x-large": "",
                                        disabled: !isFormValid.value,
                                        class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                                      }, {
                                        default: withCtx(() => [createTextVNode(" Log in ")]),
                                        _: 1
                                      }, 8, ["disabled"])]),
                                      _: 1
                                    }), createVNode("div", {
                                      class: "text-right mt-2"
                                    }, [createVNode("a", {
                                      class: "text-primary cursor-pointer",
                                      onClick: handleForgotPassword
                                    }, [createVNode("p", null, " Forgot password? ")])]), createVNode("p", {
                                      class: "text-center mt-6"
                                    }, [createTextVNode(" Don't have an account? "), createVNode("a", {
                                      class: "text-primary font-bold cursor-pointer",
                                      onClick: goToSignUp
                                    }, " Sign up ")]), error.value ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "error-message mt-4 text-center text-red-500"
                                    }, toDisplayString(error.value), 1)) : createCommentVNode("", true)];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [createVNode(VCardTitle, null, {
                                default: withCtx(() => [createVNode("h1", {
                                  class: "text-3xl md:text-4xl font-bold mb-6"
                                }, " Log in to Studybyte ")]),
                                _: 1
                              }), createVNode(VCardText, null, {
                                default: withCtx(() => [createVNode(VForm, {
                                  onSubmit: withModifiers(handleSignIn, ["prevent"])
                                }, {
                                  default: withCtx(() => [createVNode(VTextField, {
                                    modelValue: email.value,
                                    "onUpdate:modelValue": ($event) => email.value = $event,
                                    label: "Email",
                                    type: "email",
                                    outlined: "",
                                    dense: "",
                                    required: "",
                                    "error-messages": emailError.value,
                                    class: "mb-4",
                                    onBlur: validateEmail
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                    modelValue: password.value,
                                    "onUpdate:modelValue": ($event) => password.value = $event,
                                    label: "Password",
                                    type: "password",
                                    outlined: "",
                                    dense: "",
                                    required: "",
                                    "error-messages": passwordError.value,
                                    class: "mb-4",
                                    onBlur: validatePassword
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VBtn, {
                                    type: "submit",
                                    color: "#7C3AED",
                                    block: "",
                                    "x-large": "",
                                    disabled: !isFormValid.value,
                                    class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                                  }, {
                                    default: withCtx(() => [createTextVNode(" Log in ")]),
                                    _: 1
                                  }, 8, ["disabled"])]),
                                  _: 1
                                }), createVNode("div", {
                                  class: "text-right mt-2"
                                }, [createVNode("a", {
                                  class: "text-primary cursor-pointer",
                                  onClick: handleForgotPassword
                                }, [createVNode("p", null, " Forgot password? ")])]), createVNode("p", {
                                  class: "text-center mt-6"
                                }, [createTextVNode(" Don't have an account? "), createVNode("a", {
                                  class: "text-primary font-bold cursor-pointer",
                                  onClick: goToSignUp
                                }, " Sign up ")]), error.value ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "error-message mt-4 text-center text-red-500"
                                }, toDisplayString(error.value), 1)) : createCommentVNode("", true)]),
                                _: 1
                              })];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [createVNode(VCard, {
                          class: "pa-6 rounded-xl login-card w-100"
                        }, {
                          default: withCtx(() => [createVNode(VCardTitle, null, {
                            default: withCtx(() => [createVNode("h1", {
                              class: "text-3xl md:text-4xl font-bold mb-6"
                            }, " Log in to Studybyte ")]),
                            _: 1
                          }), createVNode(VCardText, null, {
                            default: withCtx(() => [createVNode(VForm, {
                              onSubmit: withModifiers(handleSignIn, ["prevent"])
                            }, {
                              default: withCtx(() => [createVNode(VTextField, {
                                modelValue: email.value,
                                "onUpdate:modelValue": ($event) => email.value = $event,
                                label: "Email",
                                type: "email",
                                outlined: "",
                                dense: "",
                                required: "",
                                "error-messages": emailError.value,
                                class: "mb-4",
                                onBlur: validateEmail
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                modelValue: password.value,
                                "onUpdate:modelValue": ($event) => password.value = $event,
                                label: "Password",
                                type: "password",
                                outlined: "",
                                dense: "",
                                required: "",
                                "error-messages": passwordError.value,
                                class: "mb-4",
                                onBlur: validatePassword
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VBtn, {
                                type: "submit",
                                color: "#7C3AED",
                                block: "",
                                "x-large": "",
                                disabled: !isFormValid.value,
                                class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                              }, {
                                default: withCtx(() => [createTextVNode(" Log in ")]),
                                _: 1
                              }, 8, ["disabled"])]),
                              _: 1
                            }), createVNode("div", {
                              class: "text-right mt-2"
                            }, [createVNode("a", {
                              class: "text-primary cursor-pointer",
                              onClick: handleForgotPassword
                            }, [createVNode("p", null, " Forgot password? ")])]), createVNode("p", {
                              class: "text-center mt-6"
                            }, [createTextVNode(" Don't have an account? "), createVNode("a", {
                              class: "text-primary font-bold cursor-pointer",
                              onClick: goToSignUp
                            }, " Sign up ")]), error.value ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "error-message mt-4 text-center text-red-500"
                            }, toDisplayString(error.value), 1)) : createCommentVNode("", true)]),
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
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Login Illustration" class="max-w-full h-auto object-contain illustration" data-v-937dab1b${_scopeId3}>`);
                      } else {
                        return [createVNode("img", {
                          src: _imports_0,
                          alt: "Login Illustration",
                          class: "max-w-full h-auto object-contain illustration"
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
                      class: "pa-6 rounded-xl login-card w-100"
                    }, {
                      default: withCtx(() => [createVNode(VCardTitle, null, {
                        default: withCtx(() => [createVNode("h1", {
                          class: "text-3xl md:text-4xl font-bold mb-6"
                        }, " Log in to Studybyte ")]),
                        _: 1
                      }), createVNode(VCardText, null, {
                        default: withCtx(() => [createVNode(VForm, {
                          onSubmit: withModifiers(handleSignIn, ["prevent"])
                        }, {
                          default: withCtx(() => [createVNode(VTextField, {
                            modelValue: email.value,
                            "onUpdate:modelValue": ($event) => email.value = $event,
                            label: "Email",
                            type: "email",
                            outlined: "",
                            dense: "",
                            required: "",
                            "error-messages": emailError.value,
                            class: "mb-4",
                            onBlur: validateEmail
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                            modelValue: password.value,
                            "onUpdate:modelValue": ($event) => password.value = $event,
                            label: "Password",
                            type: "password",
                            outlined: "",
                            dense: "",
                            required: "",
                            "error-messages": passwordError.value,
                            class: "mb-4",
                            onBlur: validatePassword
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VBtn, {
                            type: "submit",
                            color: "#7C3AED",
                            block: "",
                            "x-large": "",
                            disabled: !isFormValid.value,
                            class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                          }, {
                            default: withCtx(() => [createTextVNode(" Log in ")]),
                            _: 1
                          }, 8, ["disabled"])]),
                          _: 1
                        }), createVNode("div", {
                          class: "text-right mt-2"
                        }, [createVNode("a", {
                          class: "text-primary cursor-pointer",
                          onClick: handleForgotPassword
                        }, [createVNode("p", null, " Forgot password? ")])]), createVNode("p", {
                          class: "text-center mt-6"
                        }, [createTextVNode(" Don't have an account? "), createVNode("a", {
                          class: "text-primary font-bold cursor-pointer",
                          onClick: goToSignUp
                        }, " Sign up ")]), error.value ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "error-message mt-4 text-center text-red-500"
                        }, toDisplayString(error.value), 1)) : createCommentVNode("", true)]),
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
                      alt: "Login Illustration",
                      class: "max-w-full h-auto object-contain illustration"
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
                  class: "pa-6 rounded-xl login-card w-100"
                }, {
                  default: withCtx(() => [createVNode(VCardTitle, null, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-6"
                    }, " Log in to Studybyte ")]),
                    _: 1
                  }), createVNode(VCardText, null, {
                    default: withCtx(() => [createVNode(VForm, {
                      onSubmit: withModifiers(handleSignIn, ["prevent"])
                    }, {
                      default: withCtx(() => [createVNode(VTextField, {
                        modelValue: email.value,
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        label: "Email",
                        type: "email",
                        outlined: "",
                        dense: "",
                        required: "",
                        "error-messages": emailError.value,
                        class: "mb-4",
                        onBlur: validateEmail
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                        modelValue: password.value,
                        "onUpdate:modelValue": ($event) => password.value = $event,
                        label: "Password",
                        type: "password",
                        outlined: "",
                        dense: "",
                        required: "",
                        "error-messages": passwordError.value,
                        class: "mb-4",
                        onBlur: validatePassword
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VBtn, {
                        type: "submit",
                        color: "#7C3AED",
                        block: "",
                        "x-large": "",
                        disabled: !isFormValid.value,
                        class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                      }, {
                        default: withCtx(() => [createTextVNode(" Log in ")]),
                        _: 1
                      }, 8, ["disabled"])]),
                      _: 1
                    }), createVNode("div", {
                      class: "text-right mt-2"
                    }, [createVNode("a", {
                      class: "text-primary cursor-pointer",
                      onClick: handleForgotPassword
                    }, [createVNode("p", null, " Forgot password? ")])]), createVNode("p", {
                      class: "text-center mt-6"
                    }, [createTextVNode(" Don't have an account? "), createVNode("a", {
                      class: "text-primary font-bold cursor-pointer",
                      onClick: goToSignUp
                    }, " Sign up ")]), error.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "error-message mt-4 text-center text-red-500"
                    }, toDisplayString(error.value), 1)) : createCommentVNode("", true)]),
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
                  alt: "Login Illustration",
                  class: "max-w-full h-auto object-contain illustration"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LogIn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LogIn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-937dab1b"]]);
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "full-width"
      }, _attrs))}><section class="landing">`);
      _push(ssrRenderComponent(VContainer, {
        class: "pa-0",
        fluid: "",
        "data-aos": "fade-up",
        "data-aos-duration": "300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(LogIn, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(LogIn)];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DCxOg-JB.mjs.map
