import { mergeProps, withCtx, createVNode, useSSRContext, ref, computed, createTextVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './Saly-3-D8HFIBd8.mjs';
import { useRouter } from 'vue-router';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import { V as VContainer, _ as _export_sfc, b as useNuxtApp, e as VRow, f as VCol, j as VCard, v as VCardTitle, k as VCardText, D as VForm, E as VTextField, F as VCheckbox, t as VBtn, L as signInWithEmailAndPassword, a2 as sendEmailVerification } from './server.mjs';
import { p as parseFirebaseError } from './firebaseErrorParser--QNGMjHC.mjs';
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
import 'pinia-plugin-persistedstate';
import 'idb';
import 'tslib';
import 'undici';
import 'util';
import 'crypto';
import '@grpc/grpc-js';
import '@grpc/proto-loader';

const _sfc_main$1 = {
  __name: "SignUp",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const nuxtApp = useNuxtApp();
    const auth = nuxtApp.$firebaseAuth;
    const userStore = useUserStore();
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const number = ref("");
    const school = ref("");
    const agreeToTerms = ref(false);
    const error = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const isFormValid = computed(() => {
      return name.value && email.value && password.value && number.value && !emailError.value && !passwordError.value && agreeToTerms.value;
    });
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      emailError.value = emailRegex.test(email.value) ? "" : "Please enter a valid email address";
    };
    const validatePassword = () => {
      passwordError.value = password.value.length >= 6 ? "" : "Password must be at least 6 characters long";
    };
    const handleSignUp = async () => {
      if (!isFormValid.value)
        return;
      try {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
            name: name.value,
            number: number.value,
            school: school.value
          })
        });
        const data = await response.json();
        if (data.success) {
          const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
          await sendEmailVerification(userCredential.user);
          router.push("/verify-email");
          userStore.setUser({
            ...data.user,
            uid: userCredential.user.uid,
            email: userCredential.user.email
          });
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        error.value = parseFirebaseError(err);
      }
    };
    const goToLogin = () => {
      router.push("/login");
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
                          class: "pa-6 rounded-xl sign-up-card w-100",
                          "max-width": "450"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h1 class="text-3xl md:text-4xl font-bold mb-6" data-v-bdcfbfca${_scopeId5}> Sign up to Studybyte </h1>`);
                                  } else {
                                    return [createVNode("h1", {
                                      class: "text-3xl md:text-4xl font-bold mb-6"
                                    }, " Sign up to Studybyte ")];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VForm, {
                                      onSubmit: handleSignUp
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: name.value,
                                            "onUpdate:modelValue": ($event) => name.value = $event,
                                            label: "Full Name",
                                            type: "text",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            class: "mb-4"
                                          }, null, _parent7, _scopeId6));
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
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: number.value,
                                            "onUpdate:modelValue": ($event) => number.value = $event,
                                            label: "Phone Number",
                                            type: "tel",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            class: "mb-4"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: school.value,
                                            "onUpdate:modelValue": ($event) => school.value = $event,
                                            label: "School (optional)",
                                            type: "text",
                                            outlined: "",
                                            dense: "",
                                            class: "mb-4"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCheckbox, {
                                            modelValue: agreeToTerms.value,
                                            "onUpdate:modelValue": ($event) => agreeToTerms.value = $event,
                                            rules: [(v) => !!v || "You must agree to continue!"],
                                            required: "",
                                            class: "mb-4"
                                          }, {
                                            label: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<p class="text-sm" data-v-bdcfbfca${_scopeId7}> I agree to the <a href="/terms-and-conditions" target="_blank" data-v-bdcfbfca${_scopeId7}>Terms of Use</a> and <a href="/privacy-policy" target="_blank" data-v-bdcfbfca${_scopeId7}>Privacy Policy</a></p>`);
                                              } else {
                                                return [createVNode("p", {
                                                  class: "text-sm"
                                                }, [createTextVNode(" I agree to the "), createVNode("a", {
                                                  href: "/terms-and-conditions",
                                                  target: "_blank"
                                                }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                                                  href: "/privacy-policy",
                                                  target: "_blank"
                                                }, "Privacy Policy")])];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
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
                                                _push8(` Sign up `);
                                              } else {
                                                return [createTextVNode(" Sign up ")];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [createVNode(VTextField, {
                                            modelValue: name.value,
                                            "onUpdate:modelValue": ($event) => name.value = $event,
                                            label: "Full Name",
                                            type: "text",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            class: "mb-4"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
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
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                            modelValue: number.value,
                                            "onUpdate:modelValue": ($event) => number.value = $event,
                                            label: "Phone Number",
                                            type: "tel",
                                            outlined: "",
                                            dense: "",
                                            required: "",
                                            class: "mb-4"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
                                            modelValue: school.value,
                                            "onUpdate:modelValue": ($event) => school.value = $event,
                                            label: "School (optional)",
                                            type: "text",
                                            outlined: "",
                                            dense: "",
                                            class: "mb-4"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VCheckbox, {
                                            modelValue: agreeToTerms.value,
                                            "onUpdate:modelValue": ($event) => agreeToTerms.value = $event,
                                            rules: [(v) => !!v || "You must agree to continue!"],
                                            required: "",
                                            class: "mb-4"
                                          }, {
                                            label: withCtx(() => [createVNode("p", {
                                              class: "text-sm"
                                            }, [createTextVNode(" I agree to the "), createVNode("a", {
                                              href: "/terms-and-conditions",
                                              target: "_blank"
                                            }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                                              href: "/privacy-policy",
                                              target: "_blank"
                                            }, "Privacy Policy")])]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "rules"]), createVNode(VBtn, {
                                            type: "submit",
                                            color: "#7C3AED",
                                            block: "",
                                            "x-large": "",
                                            disabled: !isFormValid.value,
                                            class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                                          }, {
                                            default: withCtx(() => [createTextVNode(" Sign up ")]),
                                            _: 1
                                          }, 8, ["disabled"])];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<p class="text-center mt-4 text-sm" data-v-bdcfbfca${_scopeId5}> By signing up, you agree to our <a href="/terms-of-use" class="text-primary" data-v-bdcfbfca${_scopeId5}>Terms of Use</a> and <a href="/privacy-policy" class="text-primary" data-v-bdcfbfca${_scopeId5}>Privacy Policy</a>. </p><p class="text-center mt-6" data-v-bdcfbfca${_scopeId5}> Already have an account? <a class="text-primary font-bold cursor-pointer" data-v-bdcfbfca${_scopeId5}>Log in</a></p>`);
                                    if (error.value) {
                                      _push6(`<p class="error-message mt-4 text-center text-red-500" data-v-bdcfbfca${_scopeId5}>${ssrInterpolate(error.value)}</p>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [createVNode(VForm, {
                                      onSubmit: withModifiers(handleSignUp, ["prevent"])
                                    }, {
                                      default: withCtx(() => [createVNode(VTextField, {
                                        modelValue: name.value,
                                        "onUpdate:modelValue": ($event) => name.value = $event,
                                        label: "Full Name",
                                        type: "text",
                                        outlined: "",
                                        dense: "",
                                        required: "",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
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
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                        modelValue: number.value,
                                        "onUpdate:modelValue": ($event) => number.value = $event,
                                        label: "Phone Number",
                                        type: "tel",
                                        outlined: "",
                                        dense: "",
                                        required: "",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
                                        modelValue: school.value,
                                        "onUpdate:modelValue": ($event) => school.value = $event,
                                        label: "School (optional)",
                                        type: "text",
                                        outlined: "",
                                        dense: "",
                                        class: "mb-4"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VCheckbox, {
                                        modelValue: agreeToTerms.value,
                                        "onUpdate:modelValue": ($event) => agreeToTerms.value = $event,
                                        rules: [(v) => !!v || "You must agree to continue!"],
                                        required: "",
                                        class: "mb-4"
                                      }, {
                                        label: withCtx(() => [createVNode("p", {
                                          class: "text-sm"
                                        }, [createTextVNode(" I agree to the "), createVNode("a", {
                                          href: "/terms-and-conditions",
                                          target: "_blank"
                                        }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                                          href: "/privacy-policy",
                                          target: "_blank"
                                        }, "Privacy Policy")])]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "rules"]), createVNode(VBtn, {
                                        type: "submit",
                                        color: "#7C3AED",
                                        block: "",
                                        "x-large": "",
                                        disabled: !isFormValid.value,
                                        class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                                      }, {
                                        default: withCtx(() => [createTextVNode(" Sign up ")]),
                                        _: 1
                                      }, 8, ["disabled"])]),
                                      _: 1
                                    }), createVNode("p", {
                                      class: "text-center mt-4 text-sm"
                                    }, [createTextVNode(" By signing up, you agree to our "), createVNode("a", {
                                      href: "/terms-of-use",
                                      class: "text-primary"
                                    }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                                      href: "/privacy-policy",
                                      class: "text-primary"
                                    }, "Privacy Policy"), createTextVNode(". ")]), createVNode("p", {
                                      class: "text-center mt-6"
                                    }, [createTextVNode(" Already have an account? "), createVNode("a", {
                                      class: "text-primary font-bold cursor-pointer",
                                      onClick: goToLogin
                                    }, "Log in")]), error.value ? (openBlock(), createBlock("p", {
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
                                }, " Sign up to Studybyte ")]),
                                _: 1
                              }), createVNode(VCardText, null, {
                                default: withCtx(() => [createVNode(VForm, {
                                  onSubmit: withModifiers(handleSignUp, ["prevent"])
                                }, {
                                  default: withCtx(() => [createVNode(VTextField, {
                                    modelValue: name.value,
                                    "onUpdate:modelValue": ($event) => name.value = $event,
                                    label: "Full Name",
                                    type: "text",
                                    outlined: "",
                                    dense: "",
                                    required: "",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
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
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                    modelValue: number.value,
                                    "onUpdate:modelValue": ($event) => number.value = $event,
                                    label: "Phone Number",
                                    type: "tel",
                                    outlined: "",
                                    dense: "",
                                    required: "",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
                                    modelValue: school.value,
                                    "onUpdate:modelValue": ($event) => school.value = $event,
                                    label: "School (optional)",
                                    type: "text",
                                    outlined: "",
                                    dense: "",
                                    class: "mb-4"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VCheckbox, {
                                    modelValue: agreeToTerms.value,
                                    "onUpdate:modelValue": ($event) => agreeToTerms.value = $event,
                                    rules: [(v) => !!v || "You must agree to continue!"],
                                    required: "",
                                    class: "mb-4"
                                  }, {
                                    label: withCtx(() => [createVNode("p", {
                                      class: "text-sm"
                                    }, [createTextVNode(" I agree to the "), createVNode("a", {
                                      href: "/terms-and-conditions",
                                      target: "_blank"
                                    }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                                      href: "/privacy-policy",
                                      target: "_blank"
                                    }, "Privacy Policy")])]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue", "rules"]), createVNode(VBtn, {
                                    type: "submit",
                                    color: "#7C3AED",
                                    block: "",
                                    "x-large": "",
                                    disabled: !isFormValid.value,
                                    class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                                  }, {
                                    default: withCtx(() => [createTextVNode(" Sign up ")]),
                                    _: 1
                                  }, 8, ["disabled"])]),
                                  _: 1
                                }), createVNode("p", {
                                  class: "text-center mt-4 text-sm"
                                }, [createTextVNode(" By signing up, you agree to our "), createVNode("a", {
                                  href: "/terms-of-use",
                                  class: "text-primary"
                                }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                                  href: "/privacy-policy",
                                  class: "text-primary"
                                }, "Privacy Policy"), createTextVNode(". ")]), createVNode("p", {
                                  class: "text-center mt-6"
                                }, [createTextVNode(" Already have an account? "), createVNode("a", {
                                  class: "text-primary font-bold cursor-pointer",
                                  onClick: goToLogin
                                }, "Log in")]), error.value ? (openBlock(), createBlock("p", {
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
                          class: "pa-6 rounded-xl sign-up-card w-100",
                          "max-width": "450"
                        }, {
                          default: withCtx(() => [createVNode(VCardTitle, null, {
                            default: withCtx(() => [createVNode("h1", {
                              class: "text-3xl md:text-4xl font-bold mb-6"
                            }, " Sign up to Studybyte ")]),
                            _: 1
                          }), createVNode(VCardText, null, {
                            default: withCtx(() => [createVNode(VForm, {
                              onSubmit: withModifiers(handleSignUp, ["prevent"])
                            }, {
                              default: withCtx(() => [createVNode(VTextField, {
                                modelValue: name.value,
                                "onUpdate:modelValue": ($event) => name.value = $event,
                                label: "Full Name",
                                type: "text",
                                outlined: "",
                                dense: "",
                                required: "",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
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
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                                modelValue: number.value,
                                "onUpdate:modelValue": ($event) => number.value = $event,
                                label: "Phone Number",
                                type: "tel",
                                outlined: "",
                                dense: "",
                                required: "",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
                                modelValue: school.value,
                                "onUpdate:modelValue": ($event) => school.value = $event,
                                label: "School (optional)",
                                type: "text",
                                outlined: "",
                                dense: "",
                                class: "mb-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VCheckbox, {
                                modelValue: agreeToTerms.value,
                                "onUpdate:modelValue": ($event) => agreeToTerms.value = $event,
                                rules: [(v) => !!v || "You must agree to continue!"],
                                required: "",
                                class: "mb-4"
                              }, {
                                label: withCtx(() => [createVNode("p", {
                                  class: "text-sm"
                                }, [createTextVNode(" I agree to the "), createVNode("a", {
                                  href: "/terms-and-conditions",
                                  target: "_blank"
                                }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                                  href: "/privacy-policy",
                                  target: "_blank"
                                }, "Privacy Policy")])]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "rules"]), createVNode(VBtn, {
                                type: "submit",
                                color: "#7C3AED",
                                block: "",
                                "x-large": "",
                                disabled: !isFormValid.value,
                                class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                              }, {
                                default: withCtx(() => [createTextVNode(" Sign up ")]),
                                _: 1
                              }, 8, ["disabled"])]),
                              _: 1
                            }), createVNode("p", {
                              class: "text-center mt-4 text-sm"
                            }, [createTextVNode(" By signing up, you agree to our "), createVNode("a", {
                              href: "/terms-of-use",
                              class: "text-primary"
                            }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                              href: "/privacy-policy",
                              class: "text-primary"
                            }, "Privacy Policy"), createTextVNode(". ")]), createVNode("p", {
                              class: "text-center mt-6"
                            }, [createTextVNode(" Already have an account? "), createVNode("a", {
                              class: "text-primary font-bold cursor-pointer",
                              onClick: goToLogin
                            }, "Log in")]), error.value ? (openBlock(), createBlock("p", {
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
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} alt="Sign up Illustration" class="max-w-full h-auto object-contain illustration" data-v-bdcfbfca${_scopeId3}>`);
                      } else {
                        return [createVNode("img", {
                          src: _imports_0,
                          alt: "Sign up Illustration",
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
                      class: "pa-6 rounded-xl sign-up-card w-100",
                      "max-width": "450"
                    }, {
                      default: withCtx(() => [createVNode(VCardTitle, null, {
                        default: withCtx(() => [createVNode("h1", {
                          class: "text-3xl md:text-4xl font-bold mb-6"
                        }, " Sign up to Studybyte ")]),
                        _: 1
                      }), createVNode(VCardText, null, {
                        default: withCtx(() => [createVNode(VForm, {
                          onSubmit: withModifiers(handleSignUp, ["prevent"])
                        }, {
                          default: withCtx(() => [createVNode(VTextField, {
                            modelValue: name.value,
                            "onUpdate:modelValue": ($event) => name.value = $event,
                            label: "Full Name",
                            type: "text",
                            outlined: "",
                            dense: "",
                            required: "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
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
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                            modelValue: number.value,
                            "onUpdate:modelValue": ($event) => number.value = $event,
                            label: "Phone Number",
                            type: "tel",
                            outlined: "",
                            dense: "",
                            required: "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
                            modelValue: school.value,
                            "onUpdate:modelValue": ($event) => school.value = $event,
                            label: "School (optional)",
                            type: "text",
                            outlined: "",
                            dense: "",
                            class: "mb-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VCheckbox, {
                            modelValue: agreeToTerms.value,
                            "onUpdate:modelValue": ($event) => agreeToTerms.value = $event,
                            rules: [(v) => !!v || "You must agree to continue!"],
                            required: "",
                            class: "mb-4"
                          }, {
                            label: withCtx(() => [createVNode("p", {
                              class: "text-sm"
                            }, [createTextVNode(" I agree to the "), createVNode("a", {
                              href: "/terms-and-conditions",
                              target: "_blank"
                            }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                              href: "/privacy-policy",
                              target: "_blank"
                            }, "Privacy Policy")])]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "rules"]), createVNode(VBtn, {
                            type: "submit",
                            color: "#7C3AED",
                            block: "",
                            "x-large": "",
                            disabled: !isFormValid.value,
                            class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                          }, {
                            default: withCtx(() => [createTextVNode(" Sign up ")]),
                            _: 1
                          }, 8, ["disabled"])]),
                          _: 1
                        }), createVNode("p", {
                          class: "text-center mt-4 text-sm"
                        }, [createTextVNode(" By signing up, you agree to our "), createVNode("a", {
                          href: "/terms-of-use",
                          class: "text-primary"
                        }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                          href: "/privacy-policy",
                          class: "text-primary"
                        }, "Privacy Policy"), createTextVNode(". ")]), createVNode("p", {
                          class: "text-center mt-6"
                        }, [createTextVNode(" Already have an account? "), createVNode("a", {
                          class: "text-primary font-bold cursor-pointer",
                          onClick: goToLogin
                        }, "Log in")]), error.value ? (openBlock(), createBlock("p", {
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
                      alt: "Sign up Illustration",
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
                  class: "pa-6 rounded-xl sign-up-card w-100",
                  "max-width": "450"
                }, {
                  default: withCtx(() => [createVNode(VCardTitle, null, {
                    default: withCtx(() => [createVNode("h1", {
                      class: "text-3xl md:text-4xl font-bold mb-6"
                    }, " Sign up to Studybyte ")]),
                    _: 1
                  }), createVNode(VCardText, null, {
                    default: withCtx(() => [createVNode(VForm, {
                      onSubmit: withModifiers(handleSignUp, ["prevent"])
                    }, {
                      default: withCtx(() => [createVNode(VTextField, {
                        modelValue: name.value,
                        "onUpdate:modelValue": ($event) => name.value = $event,
                        label: "Full Name",
                        type: "text",
                        outlined: "",
                        dense: "",
                        required: "",
                        class: "mb-4"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
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
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]), createVNode(VTextField, {
                        modelValue: number.value,
                        "onUpdate:modelValue": ($event) => number.value = $event,
                        label: "Phone Number",
                        type: "tel",
                        outlined: "",
                        dense: "",
                        required: "",
                        class: "mb-4"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VTextField, {
                        modelValue: school.value,
                        "onUpdate:modelValue": ($event) => school.value = $event,
                        label: "School (optional)",
                        type: "text",
                        outlined: "",
                        dense: "",
                        class: "mb-4"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VCheckbox, {
                        modelValue: agreeToTerms.value,
                        "onUpdate:modelValue": ($event) => agreeToTerms.value = $event,
                        rules: [(v) => !!v || "You must agree to continue!"],
                        required: "",
                        class: "mb-4"
                      }, {
                        label: withCtx(() => [createVNode("p", {
                          class: "text-sm"
                        }, [createTextVNode(" I agree to the "), createVNode("a", {
                          href: "/terms-and-conditions",
                          target: "_blank"
                        }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                          href: "/privacy-policy",
                          target: "_blank"
                        }, "Privacy Policy")])]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "rules"]), createVNode(VBtn, {
                        type: "submit",
                        color: "#7C3AED",
                        block: "",
                        "x-large": "",
                        disabled: !isFormValid.value,
                        class: "mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
                      }, {
                        default: withCtx(() => [createTextVNode(" Sign up ")]),
                        _: 1
                      }, 8, ["disabled"])]),
                      _: 1
                    }), createVNode("p", {
                      class: "text-center mt-4 text-sm"
                    }, [createTextVNode(" By signing up, you agree to our "), createVNode("a", {
                      href: "/terms-of-use",
                      class: "text-primary"
                    }, "Terms of Use"), createTextVNode(" and "), createVNode("a", {
                      href: "/privacy-policy",
                      class: "text-primary"
                    }, "Privacy Policy"), createTextVNode(". ")]), createVNode("p", {
                      class: "text-center mt-6"
                    }, [createTextVNode(" Already have an account? "), createVNode("a", {
                      class: "text-primary font-bold cursor-pointer",
                      onClick: goToLogin
                    }, "Log in")]), error.value ? (openBlock(), createBlock("p", {
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
                  alt: "Sign up Illustration",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignUp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SignUp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bdcfbfca"]]);
const _sfc_main = {
  __name: "sign-up",
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
            _push2(ssrRenderComponent(SignUp, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(SignUp)];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sign-up.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-up-Cyy8ugi_.mjs.map
