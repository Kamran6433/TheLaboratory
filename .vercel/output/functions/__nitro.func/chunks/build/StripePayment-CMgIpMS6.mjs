import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useUserStore } from './user-WKIwKJhJ.mjs';
import { s as storeToRefs, j as VCard, v as VCardTitle, D as VForm, E as VTextField, h as VAlert, t as VBtn } from './server.mjs';

const amount = 1e3;
const _sfc_main = {
  __name: "StripePayment",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const {
      getIsAuthenticated,
      getUser
    } = storeToRefs(userStore);
    const stripe = ref(true);
    const elements = ref(null);
    const name = ref("");
    const error = ref("");
    const loading = ref(false);
    const paymentIntentID = ref(null);
    const allProductsID = ref([]);
    const productsID = ref([]);
    const productsName = ref([]);
    const productsPrice = ref([]);
    const handleSubmit = async () => {
      const response = await fetch("/api/get-all-products", {
        method: "POST"
        // headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      allProductsID.value = data.products.map((product) => product.id);
      if (!stripe.value || !elements.value) {
        error.value = "Stripe has not loaded yet. Please try again.";
        return;
      }
      loading.value = true;
      error.value = "";
      try {
        const {
          error: stripeError
        } = await stripe.value.confirmPayment({
          elements: elements.value,
          confirmParams: {
            return_url: `${(void 0).location.origin}/payment-success?payment_intent=${paymentIntentID.value}`,
            payment_method_data: {
              billing_details: {
                name: name.value
              }
            }
          }
        });
        if (stripeError) {
          throw new Error(stripeError.message);
        }
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };
    const getProductsByIdPost = async () => {
      const response = await fetch("/api/get-products-by-id", {
        method: "POST",
        // headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productsID: productsID.value
        })
      });
      const data = await response.json();
      productsID.value = data.products.map((product) => product.id);
      productsName.value = data.products.map((product) => product.name);
      productsPrice.value = data.products.map((product) => product.default_price);
    };
    const createStripePaymentCheckoutSession = async () => {
      const response = await fetch("/api/stripe-payment-checkout-session", {
        method: "POST",
        // headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          default_price: productsPrice.value
        })
      });
      const data = await response.json();
      (void 0).location = data.url;
    };
    const createStripeSubscriptionCheckoutSession = async () => {
      if (!getIsAuthenticated.value) {
        error.value = "Please log in to subscribe.";
        return;
      }
      try {
        const response = await fetch("/api/stripe-subscription-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            // default_price: productsPrice.value,
            user_id: getUser.value.uid
            // Send the user ID
          })
        });
        if (!response.ok) {
          throw new Error("Failed to create checkout session");
        }
        const data = await response.json();
        (void 0).location = data.url;
      } catch (err) {
        console.error("Error creating subscription:", err);
        error.value = "Failed to create subscription. Please try again.";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VCard, mergeProps({
        class: "max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardTitle, {
              class: "text-2xl font-bold mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Checkout `);
                } else {
                  return [createTextVNode(" Checkout ")];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(productsID.value, (id) => {
              _push2(`<p${_scopeId}> Product ID: ${ssrInterpolate(id)}</p>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(VForm, {
              onSubmit: handleSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: name.value,
                    "onUpdate:modelValue": ($event) => name.value = $event,
                    label: "Name on Card",
                    required: "",
                    outlined: "",
                    class: "mb-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div id="payment-element"${_scopeId2}></div>`);
                  if (error.value) {
                    _push3(ssrRenderComponent(VAlert, {
                      type: "error",
                      class: "mb-16"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(error.value)}`);
                        } else {
                          return [createTextVNode(toDisplayString(error.value), 1)];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(VBtn, {
                    type: "submit",
                    color: "primary",
                    loading: loading.value,
                    disabled: !stripe.value || loading.value,
                    block: "",
                    "x-large": "",
                    class: "mt-4",
                    onClick: handleSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Pay \xA3${ssrInterpolate((amount / 100).toFixed(2))}`);
                      } else {
                        return [createTextVNode(" Pay \xA3" + toDisplayString((amount / 100).toFixed(2)), 1)];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(productsPrice.value, (price) => {
                    _push3(`<div${_scopeId2}><p${_scopeId2}>Pay: \xA3${ssrInterpolate(price)}</p></div>`);
                  });
                  _push3(`<!--]--><!--[-->`);
                  ssrRenderList(productsName.value, (name2) => {
                    _push3(`<div${_scopeId2}><p${_scopeId2}>Product Name: ${ssrInterpolate(name2)}</p></div>`);
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(VBtn, {
                    type: "submit",
                    color: "primary",
                    loading: loading.value,
                    disabled: !stripe.value || loading.value,
                    block: "",
                    "x-large": "",
                    class: "mt-4",
                    onClick: getProductsByIdPost
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` get Products By Id Post `);
                      } else {
                        return [createTextVNode(" get Products By Id Post ")];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    type: "submit",
                    color: "primary",
                    loading: loading.value,
                    disabled: !stripe.value || loading.value,
                    block: "",
                    "x-large": "",
                    class: "mt-4",
                    onClick: createStripePaymentCheckoutSession
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` payment `);
                      } else {
                        return [createTextVNode(" payment ")];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    type: "submit",
                    color: "primary",
                    loading: loading.value,
                    disabled: !stripe.value || loading.value || !unref(getIsAuthenticated),
                    block: "",
                    "x-large": "",
                    class: "mt-4",
                    onClick: createStripeSubscriptionCheckoutSession
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(getIsAuthenticated) ? "Subscribe" : "Log in to Subscribe")}`);
                      } else {
                        return [createTextVNode(toDisplayString(unref(getIsAuthenticated) ? "Subscribe" : "Log in to Subscribe"), 1)];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(VTextField, {
                    modelValue: name.value,
                    "onUpdate:modelValue": ($event) => name.value = $event,
                    label: "Name on Card",
                    required: "",
                    outlined: "",
                    class: "mb-4"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode("div", {
                    id: "payment-element"
                  }), error.value ? (openBlock(), createBlock(VAlert, {
                    key: 0,
                    type: "error",
                    class: "mb-16"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
                    _: 1
                  })) : createCommentVNode("", true), createVNode(VBtn, {
                    type: "submit",
                    color: "primary",
                    loading: loading.value,
                    disabled: !stripe.value || loading.value,
                    block: "",
                    "x-large": "",
                    class: "mt-4",
                    onClick: handleSubmit
                  }, {
                    default: withCtx(() => [createTextVNode(" Pay \xA3" + toDisplayString((amount / 100).toFixed(2)), 1)]),
                    _: 1
                  }, 8, ["loading", "disabled"]), (openBlock(true), createBlock(Fragment, null, renderList(productsPrice.value, (price) => {
                    return openBlock(), createBlock("div", {
                      key: price
                    }, [createVNode("p", null, "Pay: \xA3" + toDisplayString(price), 1)]);
                  }), 128)), (openBlock(true), createBlock(Fragment, null, renderList(productsName.value, (name2) => {
                    return openBlock(), createBlock("div", {
                      key: name2
                    }, [createVNode("p", null, "Product Name: " + toDisplayString(name2), 1)]);
                  }), 128)), createVNode(VBtn, {
                    type: "submit",
                    color: "primary",
                    loading: loading.value,
                    disabled: !stripe.value || loading.value,
                    block: "",
                    "x-large": "",
                    class: "mt-4",
                    onClick: getProductsByIdPost
                  }, {
                    default: withCtx(() => [createTextVNode(" get Products By Id Post ")]),
                    _: 1
                  }, 8, ["loading", "disabled"]), createVNode(VBtn, {
                    type: "submit",
                    color: "primary",
                    loading: loading.value,
                    disabled: !stripe.value || loading.value,
                    block: "",
                    "x-large": "",
                    class: "mt-4",
                    onClick: createStripePaymentCheckoutSession
                  }, {
                    default: withCtx(() => [createTextVNode(" payment ")]),
                    _: 1
                  }, 8, ["loading", "disabled"]), createVNode(VBtn, {
                    type: "submit",
                    color: "primary",
                    loading: loading.value,
                    disabled: !stripe.value || loading.value || !unref(getIsAuthenticated),
                    block: "",
                    "x-large": "",
                    class: "mt-4",
                    onClick: createStripeSubscriptionCheckoutSession
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(getIsAuthenticated) ? "Subscribe" : "Log in to Subscribe"), 1)]),
                    _: 1
                  }, 8, ["loading", "disabled"])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(VCardTitle, {
              class: "text-2xl font-bold mb-4"
            }, {
              default: withCtx(() => [createTextVNode(" Checkout ")]),
              _: 1
            }), (openBlock(true), createBlock(Fragment, null, renderList(productsID.value, (id) => {
              return openBlock(), createBlock("p", {
                key: id
              }, " Product ID: " + toDisplayString(id), 1);
            }), 128)), createVNode(VForm, {
              onSubmit: withModifiers(handleSubmit, ["prevent"])
            }, {
              default: withCtx(() => [createVNode(VTextField, {
                modelValue: name.value,
                "onUpdate:modelValue": ($event) => name.value = $event,
                label: "Name on Card",
                required: "",
                outlined: "",
                class: "mb-4"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode("div", {
                id: "payment-element"
              }), error.value ? (openBlock(), createBlock(VAlert, {
                key: 0,
                type: "error",
                class: "mb-16"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
                _: 1
              })) : createCommentVNode("", true), createVNode(VBtn, {
                type: "submit",
                color: "primary",
                loading: loading.value,
                disabled: !stripe.value || loading.value,
                block: "",
                "x-large": "",
                class: "mt-4",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [createTextVNode(" Pay \xA3" + toDisplayString((amount / 100).toFixed(2)), 1)]),
                _: 1
              }, 8, ["loading", "disabled"]), (openBlock(true), createBlock(Fragment, null, renderList(productsPrice.value, (price) => {
                return openBlock(), createBlock("div", {
                  key: price
                }, [createVNode("p", null, "Pay: \xA3" + toDisplayString(price), 1)]);
              }), 128)), (openBlock(true), createBlock(Fragment, null, renderList(productsName.value, (name2) => {
                return openBlock(), createBlock("div", {
                  key: name2
                }, [createVNode("p", null, "Product Name: " + toDisplayString(name2), 1)]);
              }), 128)), createVNode(VBtn, {
                type: "submit",
                color: "primary",
                loading: loading.value,
                disabled: !stripe.value || loading.value,
                block: "",
                "x-large": "",
                class: "mt-4",
                onClick: getProductsByIdPost
              }, {
                default: withCtx(() => [createTextVNode(" get Products By Id Post ")]),
                _: 1
              }, 8, ["loading", "disabled"]), createVNode(VBtn, {
                type: "submit",
                color: "primary",
                loading: loading.value,
                disabled: !stripe.value || loading.value,
                block: "",
                "x-large": "",
                class: "mt-4",
                onClick: createStripePaymentCheckoutSession
              }, {
                default: withCtx(() => [createTextVNode(" payment ")]),
                _: 1
              }, 8, ["loading", "disabled"]), createVNode(VBtn, {
                type: "submit",
                color: "primary",
                loading: loading.value,
                disabled: !stripe.value || loading.value || !unref(getIsAuthenticated),
                block: "",
                "x-large": "",
                class: "mt-4",
                onClick: createStripeSubscriptionCheckoutSession
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(getIsAuthenticated) ? "Subscribe" : "Log in to Subscribe"), 1)]),
                _: 1
              }, 8, ["loading", "disabled"])]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StripePayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=StripePayment-CMgIpMS6.mjs.map
