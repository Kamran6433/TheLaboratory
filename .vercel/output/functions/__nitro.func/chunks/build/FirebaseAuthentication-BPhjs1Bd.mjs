import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc, b as useNuxtApp, s as storeToRefs, E as VTextField, F as VCheckbox, t as VBtn, J as signOut, K as sendPasswordResetEmail } from './server.mjs';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import { p as parseFirebaseError } from './firebaseErrorParser--QNGMjHC.mjs';

const _sfc_main = {
  __name: "FirebaseAuthentication",
  __ssrInlineRender: true,
  props: {
    initialMode: {
      type: String,
      default: "signup",
      validator: (value) => ["signup", "login"].includes(value)
    }
  },
  emits: ["close"],
  setup(__props, {
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const nuxtApp = useNuxtApp();
    useRouter();
    const auth = nuxtApp.$firebaseAuth;
    const userStore = useUserStore();
    storeToRefs(userStore);
    const isSignUp = ref(props.initialMode === "signup");
    const verificationSent = ref(false);
    const email = ref("");
    const password = ref("");
    const name = ref("");
    const school = ref("");
    const number = ref("");
    const error = ref("");
    const emailError = ref("");
    const passwordError = ref("");
    const agreeToTerms = ref(false);
    const isFormValid = computed(() => {
      if (isSignUp.value) {
        return email.value && password.value && number.value && !emailError.value && !passwordError.value && agreeToTerms.value;
      } else {
        return email.value && password.value && !emailError.value && !passwordError.value;
      }
    });
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      emailError.value = emailRegex.test(email.value) ? "" : "Please enter a valid email address";
    };
    const validatePassword = () => {
      passwordError.value = password.value.length >= 6 ? "" : "Password must be at least 6 characters long";
    };
    const handleSignOut = async () => {
      try {
        await signOut(auth);
        userStore.clearUser();
        error.value = "";
        emit("close");
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
    const toggleMode = () => {
      isSignUp.value = !isSignUp.value;
      error.value = "";
      emailError.value = "";
      passwordError.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "auth-form"
      }, _attrs))} data-v-48e8c9a3><h1 class="text-h3" data-v-48e8c9a3>${ssrInterpolate(isSignUp.value ? "Sign Up" : "Login")}</h1>`);
      if (error.value) {
        _push(`<p class="error" data-v-48e8c9a3>${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (verificationSent.value) {
        _push(`<p class="info" data-v-48e8c9a3> A verification email has been sent. Please check your inbox and verify your email before logging in. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form data-v-48e8c9a3>`);
      _push(ssrRenderComponent(VTextField, {
        modelValue: email.value,
        "onUpdate:modelValue": ($event) => email.value = $event,
        label: "Email",
        type: "email",
        required: "",
        "error-messages": emailError.value,
        onBlur: validateEmail
      }, null, _parent));
      _push(ssrRenderComponent(VTextField, {
        modelValue: password.value,
        "onUpdate:modelValue": ($event) => password.value = $event,
        label: "Password",
        type: "password",
        required: "",
        "error-messages": passwordError.value,
        onBlur: validatePassword
      }, null, _parent));
      if (isSignUp.value) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(VTextField, {
          modelValue: name.value,
          "onUpdate:modelValue": ($event) => name.value = $event,
          label: "Full Name",
          type: "text"
        }, null, _parent));
        _push(ssrRenderComponent(VTextField, {
          modelValue: number.value,
          "onUpdate:modelValue": ($event) => number.value = $event,
          label: "Phone Number",
          type: "tel",
          required: ""
        }, null, _parent));
        _push(ssrRenderComponent(VTextField, {
          modelValue: school.value,
          "onUpdate:modelValue": ($event) => school.value = $event,
          label: "School (optional)",
          type: "text"
        }, null, _parent));
        _push(ssrRenderComponent(VCheckbox, {
          modelValue: agreeToTerms.value,
          "onUpdate:modelValue": ($event) => agreeToTerms.value = $event,
          rules: [(v) => !!v || "You must agree to continue!"],
          required: ""
        }, {
          label: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-caption" data-v-48e8c9a3${_scopeId}> I agree to the <a href="/terms-and-conditions" target="_blank" data-v-48e8c9a3${_scopeId}>Terms of Use</a> and <a href="/privacy-policy" target="_blank" data-v-48e8c9a3${_scopeId}>Privacy Policy</a></span>`);
            } else {
              return [createVNode("span", {
                class: "text-caption"
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
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VBtn, {
        type: "submit",
        disabled: !isFormValid.value,
        color: "primary",
        block: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(isSignUp.value ? "Sign Up" : "Login")}`);
          } else {
            return [createTextVNode(toDisplayString(isSignUp.value ? "Sign Up" : "Login"), 1)];
          }
        }),
        _: 1
      }, _parent));
      if (!isSignUp.value) {
        _push(ssrRenderComponent(VBtn, {
          text: "",
          class: "mt-2",
          onClick: handleForgotPassword
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Forgot Password `);
            } else {
              return [createTextVNode(" Forgot Password ")];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
      _push(ssrRenderComponent(VBtn, {
        text: "",
        class: "mt-4",
        onClick: toggleMode
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(isSignUp.value ? "Already a member? Login" : "Not a member? Sign Up")}`);
          } else {
            return [createTextVNode(toDisplayString(isSignUp.value ? "Already a member? Login" : "Not a member? Sign Up"), 1)];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.user) {
        _push(ssrRenderComponent(VBtn, {
          color: "error",
          class: "mt-4",
          onClick: handleSignOut
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Sign Out `);
            } else {
              return [createTextVNode(" Sign Out ")];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VBtn, {
        text: "",
        class: "mt-4",
        onClick: _ctx.handleCancel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cancel `);
          } else {
            return [createTextVNode(" Cancel ")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FirebaseAuthentication.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FirebaseAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-48e8c9a3"]]);

export { FirebaseAuthentication as F };
//# sourceMappingURL=FirebaseAuthentication-BPhjs1Bd.mjs.map
