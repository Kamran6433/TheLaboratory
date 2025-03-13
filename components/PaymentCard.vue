<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '~/stores/user';
import { storeToRefs } from 'pinia';
import { useRouter } from '#app';

const router = useRouter();
const userStore = useUserStore();
const { getIsAuthenticated, getUser } = storeToRefs(userStore);

const error = ref(null);
const loading = ref(false);
const product = ref(null);

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

const plans = ref([]);


onMounted(async () => {
  loading.value = true;
  try {
    product.value = await fetchSpecificProduct('prod_QtxqqdEd0NBkAe');
    
    // Create 4 plans based on the fetched product
    plans.value = [
      {
        title: '1 hour University Consultation',
        price: product.value.price / 100,
        colorClass: 'blue white--text',
        features: [
          { text: '1h consultation', included: true },
          { text: 'Guidance from UCAS Special', included: true },
          { text: 'Help Choosing Universities', included: true },
          { text: 'Written report', included: false },
          { text: 'Data Analysis of your Scores', included: false },
        ],
      },
      {
        title: '1 hour University Consultation + Written Report',
        price: (product.value.price / 100) * 1.5,
        colorClass: 'green white--text',
        features: [
          { text: '1h consultation', included: true },
          { text: 'Guidance from UCAS Special', included: true },
          { text: 'Help Choosing Universities', included: true },
          { text: 'Written report', included: true },
          { text: 'Data Analysis of your Scores', included: true },
        ],
      },
      {
        title: '2 hour University Consultation',
        price: (product.value.price / 100) * 1.75,
        colorClass: 'amber white--text',
        features: [
          { text: '2h consultation', included: true },
          { text: 'Guidance from UCAS Special', included: true },
          { text: 'Help Choosing Universities', included: true },
          { text: 'Written report', included: false },
          { text: 'Data Analysis of your Scores', included: false },
        ],
      },
      {
        title: '2 hour University Consultation + Written Report',
        price: (product.value.price / 100) * 2,
        colorClass: 'deep-purple white--text',
        mostPopular: true,
        features: [
          { text: '2h consultation', included: true },
          { text: 'Guidance from UCAS Special', included: true },
          { text: 'Help Choosing Universities', included: true },
          { text: 'Written report', included: true },
          { text: 'Data Analysis of your Scores', included: true },
        ],
      },
    ];
  } catch (err) {
    console.error('Error:', err);
    error.value = 'Failed to load product. Please refresh the page.';
  } finally {
    loading.value = false;
  }
});


const createStripePaymentCheckoutSession = async (plan) => {
  if (!getIsAuthenticated.value) {
    // error.value = 'Please log in to make a purchase.';
    router.push('/login');
    return;
  }

  // Add email verification check
  if (!getUser.value.emailVerified) {
    // error.value = 'Please verify your email before making a purchase.';
    router.push('/verify-email');
    return;
  }

  try {
    const response = await fetch('/api/stripe-payment-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        user_id: getUser.value.uid,
        productId: 'prod_QtxqqdEd0NBkAe',
        planTitle: plan.title,
        planPrice: Math.round(plan.price * 100)
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const session = await response.json();
    console.log('PAYMENT Data: ', session);

    window.location = session.url;
  } catch (err) {
    console.error('Error creating payment session:', err);
    error.value = 'Failed to create payment session. Please try again.';
  }
};
</script>

<template>
  <v-container
    class="max-width-1600 py-12 px-4 px-lg-12"
    fluid
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        class="text-center"
      >
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Choose Your Plan
        </h1>
        <p class="text-xl md:text-2xl max-w-2xl mx-auto">
          Select the consultation package that best fits your needs. Our experts are ready to guide you through your university journey.
        </p>
      </v-col>
    </v-row>

    <v-row
      v-if="loading"
      justify="center"
    >
      <v-col
        cols="12"
        class="text-center"
      >
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        />
      </v-col>
    </v-row>

    <v-row
      v-else-if="error"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="6"
      >
        <v-alert
          type="error"
          elevation="2"
        >
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>

    <v-row
      v-else
      justify="center"
    >
      <v-col
        v-for="(plan, index) in plans"
        :key="plan.title"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card
          class="plan-card h-100 d-flex flex-column"
          :class="[`plan-${index + 1}`, { 'most-popular': plan.mostPopular }]"
        >
          <div class="plan-header pa-4">
            <h1 class="text-xl md:text-2xl font-bold text-center mb-4">
              {{ plan.title }}
            </h1>
            <div class="text-center">
              <h1 class="text-3xl md:text-4xl font-bold">
                £{{ plan.price.toFixed(2) }}
              </h1>
            </div>
          </div>
          <v-card-text class="flex-grow-1">
            <v-list
              dense
              class="plan-features"
            >
              <v-list-item
                v-for="(feature, index) in plan.features"
                :key="index"
                dense
              >
                <v-list-item-icon class="mr-2">
                  <v-icon color="success">
                    mdi-check-circle
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    <p class="text-lg font-bold">
                      {{ feature.text }}
                    </p>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions class="pa-4">
            <v-btn
              block
              color="primary"
              class="text-sm md:text-base font-semibold"
              @click="createStripePaymentCheckoutSession(plan)"
            >
              Purchase
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.plan-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px #0000001a;
}

.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px #0000001a !important;
}

.plan-header {
  color: white;
}

.plan-1 .plan-header { background-color: #3F51B5; }
.plan-2 .plan-header { background-color: #2196F3; }
.plan-3 .plan-header { background-color: #00BCD4; }
.plan-4 .plan-header { background-color: #009688; }

.plan-features {
  background-color: transparent !important;
}

.most-popular {
  border: 2px solid #FFC107;
  position: relative;
}

.most-popular::before {
  content: 'Most Popular';
  position: absolute;
  top: 12px;
  right: -30px;
  background-color: #FFC107;
  color: #000;
  padding: 4px 30px;
  font-size: 0.75rem;
  font-weight: bold;
  transform: rotate(45deg);
}

.v-list-item {
  min-height: 32px;
}

.max-w-2xl {
  max-width: 42rem;
}
</style>