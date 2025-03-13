<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '~/stores/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { getIsAuthenticated, getUser } = storeToRefs(userStore);


const stripe = ref(true);
// const config = useRuntimeConfig();
const elements = ref(null);
const name = ref('');
const error = ref('');
const loading = ref(false);
const amount = 1000; // £10.00 in pence
const paymentIntentID = ref(null);

const allProductsID = ref([]);  // Store ALL the products ID

const productsID = ref([]);  // Store the products ID

const productsName = ref([]);  // Store the products name

const productsPrice = ref([]);  // Store the products price 

// onMounted(async () => {
//   console.log('Stripe publishable key:', config.public.STRIPE_PUBLISHABLE_KEY);

//   try {
//     stripe.value = await useClientStripe();

//     console.log('Stripe loaded:', stripe.value);

//     // const response = await fetch('/api/create-payment-intent-stripe', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify({ amount })
//     // });

//     const { data, error: fetchError } = await useFetch('/api/create-nuxt-payment-intent', {
//       method: 'POST',
//       body: { amount: 1000 } // $10.00
//     });

//     if (fetchError.value) throw new Error('Failed to create payment intent');
    
//     const { clientSecret, paymentIntentID: intentID } = data.value;

//     console.log('Client secret:', clientSecret);
//     console.log('Payment Intent ID:', intentID);

//     paymentIntentID.value = intentID; // Store the paymentIntentID

//     // elements.value = stripe.value.elements({ clientSecret: clientSecret });

//     // const paymentElement = elements.value.create('payment');
//     // console.log('Payment element created:', paymentElement);
//     // paymentElement.mount('#payment-element');
//     // console.log('Payment element mounted');

//     const paymentElement = elements.value.create('payment', clientSecret);
//     paymentElement.mount('#payment-element');
//   } catch (err) {
//     console.error('Error:', err);
//     error.value = 'Failed to load payment form. Please refresh the page.';
//   }
// });

const handleSubmit = async () => {

  // Get the product data and store
  const response = await fetch('/api/get-all-products', {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' },

  });

  // fetch the response from the server using .json()
  const data = await response.json();

  allProductsID.value = data.products.map((product) => product.id);

  console.log('Data: ', data);

  if (!stripe.value || !elements.value) {
    error.value = 'Stripe has not loaded yet. Please try again.';
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    const { error: stripeError } = await stripe.value.confirmPayment({
      elements: elements.value,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success?payment_intent=${paymentIntentID.value}`,
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
    // If successful, Stripe will redirect to the return_url
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const fetchProducts = async () => {
  try {
    const response = await fetch('/api/get-all-products', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const fetchSpecificProduct = async (productId) => {
  try {
    const response = await fetch(`/api/get-product/${productId}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    const data = await response.json();
    return data.product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

const getProductsByIdPost = async () => {
  // Get the product data and store
  const response = await fetch('/api/get-products-by-id', {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productsID: productsID.value })
  });

  // fetch the response from the server using .json()
  const data = await response.json();

  productsID.value = data.products.map((product) => product.id);
  // store the name of the product
  productsName.value = data.products.map((product) => product.name);

  // store the price of the product
  productsPrice.value = data.products.map((product) => product.default_price);

  console.log('Data: ', data);
};

const createStripePaymentCheckoutSession = async () => {
  // Get the product price data data and send it to the server
  const response = await fetch('/api/stripe-payment-checkout-session', {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ default_price: productsPrice.value })
  });

  // fetch the response from the server using .json()
  const data = await response.json();
  console.log('PAYMENT Data: ', data);

  // Redirect to the checkout session
  window.location = data.url;
};

const createStripeSubscriptionCheckoutSession = async () => {
  if (!getIsAuthenticated.value) {
    error.value = 'Please log in to subscribe.';
    return;
  }

  try {
    // Get the product price data and send it to the server
    const response = await fetch('/api/stripe-subscription-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        // default_price: productsPrice.value,
        user_id: getUser.value.uid  // Send the user ID
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();
    console.log('SUBSCRIPTION Data: ', data);

    // Redirect to the checkout session
    window.location = data.url;
  } catch (err) {
    console.error('Error creating subscription:', err);
    error.value = 'Failed to create subscription. Please try again.';
  }
};
</script>

<template>
  <v-card class="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
    <v-card-title class="text-2xl font-bold mb-4">
      Checkout
    </v-card-title>
    <p
      v-for="id in productsID"
      :key="id"
    >
      Product ID: {{ id }}
    </p>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="name"
        label="Name on Card"
        required
        outlined
        class="mb-4"
      />
      
      <div id="payment-element" />

      <v-alert
        v-if="error"
        type="error"
        class="mb-16"
      >
        {{ error }}
      </v-alert>
      
      <v-btn
        type="submit"
        color="primary"
        :loading="loading"
        :disabled="!stripe || loading"
        block
        x-large
        class="mt-4"
        @click="handleSubmit"
      >
        Pay £{{ (amount / 100).toFixed(2) }}
      </v-btn>
      <div
        v-for="price in productsPrice"
        :key="price"
      >
        <p>Pay: £{{ price }}</p>
      </div>
      <!-- Loop through productsName and display each product name -->
      <div
        v-for="name in productsName"
        :key="name"
      >
        <p>Product Name: {{ name }}</p>
      </div>
      <v-btn
        type="submit"
        color="primary"
        :loading="loading"
        :disabled="!stripe || loading"
        block
        x-large
        class="mt-4"
        @click="getProductsByIdPost"
      >
        get Products By Id Post
      </v-btn>
      <v-btn
        type="submit"
        color="primary"
        :loading="loading"
        :disabled="!stripe || loading"
        block
        x-large
        class="mt-4"
        @click="createStripePaymentCheckoutSession"
      >
        payment
      </v-btn>
      <v-btn
        type="submit"
        color="primary"
        :loading="loading"
        :disabled="!stripe || loading || !getIsAuthenticated"
        block
        x-large
        class="mt-4"
        @click="createStripeSubscriptionCheckoutSession"
      >
        {{ getIsAuthenticated ? 'Subscribe' : 'Log in to Subscribe' }}
      </v-btn>
    </v-form>
  </v-card>
</template>