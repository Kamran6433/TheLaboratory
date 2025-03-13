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
const subscriptionType = ref('Monthly');

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

const subscriptions = ref([]);

onMounted(async () => {
  loading.value = true;
  try {
    product.value = await fetchSpecificProduct('prod_Qtxpa3XD4w5HiB');
    
    // Create 3 subscription tiers based on the fetched product
    subscriptions.value = [
      {
        name: 'Basic Tier',
        price: product.value.price / 100,
        colorClass: '#eb634b',
        features: [
          { text: 'Feature 1', included: true },
          { text: 'Feature 2', included: false },
          { text: 'Feature 3', included: false },
        ],      
      },
      {
        name: 'Pro Tier',
        price: (product.value.price / 100) * 1.5,
        colorClass: '#41a8e3',
        mostPopular: true,
        features: [
          { text: 'Feature 1', included: true },
          { text: 'Feature 2', included: true },
          { text: 'Feature 3', included: false },
        ],
      },
      {
        name: 'Premium Tier',
        price: (product.value.price / 100) * 2,
        colorClass: '#17ad91',
        features: [
          { text: 'Feature 1', included: true },
          { text: 'Feature 2', included: true },
          { text: 'Feature 3', included: true },
        ],
      },
    ];
  } catch (err) {
    console.error('Error:', err);
    error.value = 'Failed to load subscription options. Please refresh the page.';
  } finally {
    loading.value = false;
  }
});

const createStripeSubscriptionCheckoutSession = async (subscription) => {
  if (!getIsAuthenticated.value) {
    // error.value = 'Please log in to subscribe.';
    router.push('/login');
    return;
  }

  if (!getUser.value.emailVerified) {
    // error.value = 'Please verify your email before subscribing.';
    router.push('/verify-email');
    return;
  }

  try {
    const payload = { 
      productId: 'prod_Qtxpa3XD4w5HiB',
      priceId: 'price_1Q29u6HzvxYuMIIZHw2LErMM',
      user_id: getUser.value.uid,
      subscriptionName: subscription.name,
      subscriptionPrice: Math.round(subscription.price * 100),
      subscriptionType: subscriptionType.value
    };

    console.log('Sending payload:', JSON.stringify(payload, null, 2));

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
    console.log('SUBSCRIPTION Data: ', session);

    userStore.updateUser({
      subscriptionStatus: 'active',
      subscriptionId: session.subscriptionId,
      subscriptionType: subscriptionType.value,
      subscriptionName: subscription.name,
      subscriptionPrice: subscription.price,
    });

    window.location = session.url;
  } catch (err) {
    console.error('Error creating subscription:', err);
    error.value = 'Failed to create subscription. Please try again.';
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
        class="text-center mb-6"
      >
        <h1 class="text-4xl md:text-5xl font-weight-bold mb-8">
          Choose a subscription that works for you
        </h1>
        <v-btn-toggle
          v-model="subscriptionType"
          mandatory
          class="d-flex justify-center mb-4"
        >
          <v-btn
            value="Monthly"
            class="px-8 py-4 text-lg font-semibold"
          >
            Monthly
          </v-btn>
          <v-btn
            value="Yearly"
            class="px-8 py-4 text-lg font-semibold"
          >
            Yearly
          </v-btn>
        </v-btn-toggle>
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
        />
      </v-col>
    </v-row>
    <v-row
      v-else-if="error"
      justify="center"
    >
      <v-col
        cols="12"
        class="text-center"
      >
        <v-alert type="error">
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="(subscription) in subscriptions"
        :key="subscription.name"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="subscription-card mb-4 d-flex flex-column"
          :class="{ 'most-popular': subscription.mostPopular }"
        >
          <div
            class="color-block"
            :style="{ backgroundColor: subscription.colorClass }"
          >
            <v-card-title class="text-center py-4 text-white">
              <h1 class="text-xl md:text-2xl font-bold">
                {{ subscription.name }}
              </h1>
            </v-card-title>
            <div class="text-center pb-4">
              <h1 class="text-3xl md:text-4xl font-bold text-white">
                £{{ subscription.price.toFixed(2) }}
                <span class="text-sm md:text-base">/ {{ subscriptionType.toLowerCase() }}</span>
              </h1>
            </div>
          </div>
          <v-card-text class="flex-grow-1 bg-white">
            <v-list dense>
              <v-list-item
                v-for="(feature, index) in subscription.features"
                :key="index"
              >
                <v-list-item-icon>
                  <v-icon color="success">
                    {{ feature.included ? 'mdi-check-circle' : 'mdi-circle-outline' }}
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
            <v-card-actions class="pa-4">
              <v-btn
                block
                color="primary"
                class="px-6 py-2 text-base md:text-lg"
                @click="createStripeSubscriptionCheckoutSession(subscription)"
              >
                Subscribe
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.subscription-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px #0000001a;
}

.subscription-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px #0000001a !important;
}

.tier-1 {
  background-color: #ebc7fd;
}

.tier-2 {
  background-color: #ceedfb;
}

.tier-3 {
  background-color: #ffeab5;
}

.most-popular {
  border: 2px solid #ffd700;
  position: relative;
}

.most-popular::before {
  content: 'Most popular';
  position: absolute;
  top: 12px;
  right: -30px;
  background-color: #ffd700;
  color: #000;
  padding: 4px 30px;
  font-size: 0.75rem;
  font-weight: bold;
  transform: rotate(45deg);
  z-index: 1;
}


.v-card-title {
  font-weight: bold;
}

.v-list.transparent {
  background-color: transparent !important;
}

.v-chip {
  font-weight: bold;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}
</style>