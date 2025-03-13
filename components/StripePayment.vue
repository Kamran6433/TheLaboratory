<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '~/stores/user';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const { getIsAuthenticated, getUser } = storeToRefs(userStore);

const stripe = ref(null);
const elements = ref(null);
const name = ref('');
const error = ref('');
const loading = ref(false);
const amount = 1000; // £10.00 in pence
const paymentIntentID = ref(null);
const productId = ref('prod_example'); // Replace with your actual product ID

const createStripePaymentCheckoutSession = async () => {
  if (!getIsAuthenticated.value) {
    router.push('/login');
    return;
  }

  // Add email verification check
  if (!getUser.value.emailVerified) {
    router.push('/verify-email');
    return;
  }

  try {
    const response = await fetch('/api/stripe-payment-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        user_id: getUser.value.uid,
        productId: productId.value,
        planTitle: 'Standard Plan',
        planPrice: amount
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const session = await response.json();
    console.log('Payment session created:', session);

    window.location = session.url;
  } catch (err) {
    console.error('Error creating payment session:', err);
    error.value = 'Failed to create payment session. Please try again.';
  }
};

const createStripeSubscriptionCheckoutSession = async () => {
  if (!getIsAuthenticated.value) {
    error.value = 'Please log in to subscribe.';
    router.push('/login');
    return;
  }

  if (!getUser.value.emailVerified) {
    error.value = 'Please verify your email before subscribing.';
    router.push('/verify-email');
    return;
  }

  try {
    const payload = { 
      productId: productId.value,
      priceId: 'price_example', // Replace with your actual price ID
      user_id: getUser.value.uid,
      subscriptionName: 'Premium Subscription',
      subscriptionPrice: amount,
      subscriptionType: 'Monthly'
    };

    const response = await fetch('/api/stripe-subscription-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create checkout session: ${errorText}`);
    }

    const session = await response.json();
    console.log('Subscription session created:', session);

    window.location = session.url;
  } catch (err) {
    console.error('Error creating subscription:', err);
    error.value = 'Failed to create subscription. Please try again.';
  }
};
</script>

<template>
  <v-container class="py-12 px-4 px-lg-12 max-width-1600">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="payment-card pa-6 rounded-xl">
          <v-card-title class="text-h4 font-weight-bold mb-6">
            Choose a Payment Option
          </v-card-title>
          
          <v-card-text>
            <p class="text-body-1 mb-6">
              Select one of our payment options below to get started with our services.
            </p>

            <v-alert
              v-if="error"
              type="error"
              class="mb-6"
            >
              {{ error }}
            </v-alert>
            
            <v-row class="mb-6">
              <v-col cols="12" md="6">
                <v-card
                  class="payment-option h-100 pa-4 rounded-xl"
                  elevation="2"
                  hover
                >
                  <v-card-title class="text-h6 font-weight-bold">
                    One-Time Payment
                  </v-card-title>
                  <v-card-text>
                    <p class="text-body-2">
                      Make a single payment for immediate access to our standard features.
                    </p>
                    <p class="text-h5 font-weight-bold mt-4">
                      £{{ (amount / 100).toFixed(2) }}
                    </p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      block
                      :loading="loading"
                      :disabled="loading"
                      @click="createStripePaymentCheckoutSession"
                    >
                      Pay Now
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              
              <v-col cols="12" md="6">
                <v-card
                  class="payment-option h-100 pa-4 rounded-xl"
                  elevation="2"
                  hover
                >
                  <v-card-title class="text-h6 font-weight-bold">
                    Monthly Subscription
                  </v-card-title>
                  <v-card-text>
                    <p class="text-body-2">
                      Subscribe for ongoing access to premium features and benefits.
                    </p>
                    <p class="text-h5 font-weight-bold mt-4">
                      £{{ (amount / 100).toFixed(2) }}/month
                    </p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="success"
                      block
                      :loading="loading"
                      :disabled="loading || !getIsAuthenticated"
                      @click="createStripeSubscriptionCheckoutSession"
                    >
                      Subscribe
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            
            <p class="text-body-2 text-center text-grey-darken-1">
              By proceeding with payment, you agree to our Terms and Conditions.
              <br>All payments are securely processed through Stripe.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.payment-card {
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.payment-option {
  transition: transform 0.3s ease;
  border: 1px solid #e0e0e0;
}

.payment-option:hover {
  transform: translateY(-5px);
}

.max-width-1600 {
  max-width: 1600px;
  margin: 0 auto;
}
</style>