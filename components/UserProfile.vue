<script setup>
import { ref, onMounted, computed } from 'vue';
import { useUserStore } from '~/stores/user';
import { storeToRefs } from 'pinia';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '~/utils/firebase';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const { getUser, getIsCustomer, getStripeCustomerId, getEmail, getEmailVerified } = storeToRefs(userStore);
const router = useRouter();

const userProfile = ref({
  name: '',
  email: '',
  number: '',
  school: '',
  isCustomer: false,
});

const stripeCustomerData = ref({
  subscriptionId: null,
  subscriptionStatus: null,
  subscriptionEndDate: null,
  lastPaymentDate: null,
  lastPaymentAmount: null,
});

const loading = ref(true);
const error = ref(null);

// const formattedEndDate = computed(() => {
//   if (stripeCustomerData.value.subscriptionEndDate) {
//     return new Date(stripeCustomerData.value.subscriptionEndDate).toLocaleDateString();
//   }
//   return 'N/A';
// });

// const formattedLastPaymentDate = computed(() => {
//   if (stripeCustomerData.value.lastPaymentDate) {
//     return new Date(stripeCustomerData.value.lastPaymentDate).toLocaleDateString();
//   }
//   return 'N/A';
// });

onMounted(async () => {
  try {
    let currentUser = auth.currentUser;
    if (currentUser) {
      await currentUser.reload();
      currentUser = auth.currentUser;

      if (!currentUser.emailVerified) {
        router.push('/verify-email');
        return;
      }

      try {
        // Fetch user data
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          userProfile.value = userDoc.data();
          userProfile.value.email = getEmail.value;
          userProfile.value.emailVerified = getEmailVerified.value;
          userStore.updateUser(userProfile.value);

          // If user is a customer, fetch Stripe customer data
          if (userProfile.value.isCustomer) {
            const stripeCustomerDocs = await getDocs(query(collection(db, 'stripeCustomers'), where('userId', '==', currentUser.uid)));
            if (!stripeCustomerDocs.empty) {
              stripeCustomerData.value = stripeCustomerDocs.docs[0].data();
              userStore.updateUser(stripeCustomerData.value);
            }
          }
        } else {
          error.value = 'User profile not found';
        }
      } catch (err) {
        if (err.code === 'permission-denied') {
          router.push('/verify-email');
        } else {
          throw err;
        }
      }
    } else {
      error.value = 'User not authenticated';
      router.push('/login');
    }
  } catch (err) {
    console.error('Error fetching user profile:', err);
    error.value = 'Error loading profile. Please try again.';
  } finally {
    loading.value = false;
  }
});

const cancelSubscription = async () => {
  loading.value = true;
  try {
    const response = await fetch('/api/stripe-subscription-cancel-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: getUser.value.uid,
        subscriptionId: stripeCustomerData.value.subscriptionId,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();

    if (data.success) {
      stripeCustomerData.value.subscriptionStatus = 'cancelling';
      stripeCustomerData.value.subscriptionEndDate = data.endDate;
      stripeCustomerData.value.cancellationScheduledAt = data.cancellationScheduledAt;
      userStore.updateUser({
        subscriptionStatus: 'cancelling',
        subscriptionEndDate: data.endDate,
        cancellationScheduledAt: data.cancellationScheduledAt,
      });
      alert(data.message);
    } else {
      throw new Error(data.message || 'Failed to cancel subscription');
    }
  } catch (err) {
    console.error('Error cancelling subscription:', err);
    error.value = `Failed to cancel subscription: ${err.message}`;
  } finally {
    loading.value = false;
  }
};


const userProfileDisplay = computed(() => ({
  Email: userProfile.value.email,
  Phone: userProfile.value.number,
  School: userProfile.value.school,
  'Customer Status': userProfile.value.isCustomer ? 'Stripe Customer' : 'Not a Stripe Customer'
}));

const subscriptionDisplay = computed(() => {
  const displayData = {
    Status: stripeCustomerData.value.subscriptionStatus,
    'Subscription ID': stripeCustomerData.value.subscriptionId,
    'Plan Name': stripeCustomerData.value.subscriptionPlanName || 'Default Plan',
    'Plan Amount': stripeCustomerData.value.planAmount ? 
      `£${(stripeCustomerData.value.planAmount / 100).toFixed(2)}` : 'N/A',
    'Billing Interval': stripeCustomerData.value.planInterval || 'Monthly',
  };

  // Add last payment information
  if (stripeCustomerData.value.lastPaymentDate) {
    displayData['Last Payment Date'] = new Date(stripeCustomerData.value.lastPaymentDate.seconds * 1000)
      .toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    displayData['Last Payment Amount'] = 
      `£${(stripeCustomerData.value.lastPaymentAmount / 100).toFixed(2)}`;
  }

  // Add cancellation information if subscription is cancelling
  if (stripeCustomerData.value.subscriptionStatus === 'cancelling') {
    if (stripeCustomerData.value.cancellationScheduledAt) {
      displayData['Cancellation Date'] = new Date(stripeCustomerData.value.cancellationScheduledAt.seconds * 1000)
        .toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
    }
    if (stripeCustomerData.value.subscriptionEndDate) {
      displayData['Access Until'] = new Date(stripeCustomerData.value.subscriptionEndDate.seconds * 1000)
        .toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
    }
  }

  return displayData;
});
</script>

<template>
  <v-container
    fluid
    class="max-width-1600 py-24 px-4 px-lg-12 d-flex align-center min-height-100"
  >
    <v-card 
      class="user-profile mx-auto rounded-lg overflow-hidden"
      max-width="700"
    >
      <v-card-text
        v-if="loading"
        class="text-center py-12"
      >
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        />
        <p class="mt-4 text-lg text-gray-600">
          Loading profile...
        </p>
      </v-card-text>
      
      <template v-else-if="!error">
        <v-img
          height="200"
          src="https://picsum.photos/700/200?random"
          class="bg-gray-100"
        >
          <v-avatar
            class="mt-32 ml-6"
            size="128"
            style="border: 4px solid white;"
          >
            <v-img :src="`https://avatars.dicebear.com/api/initials/${userProfile.name}.svg`" />
          </v-avatar>
        </v-img>
        
        <h1 class="text-4xl md:text-5xl font-bold ml-8 mt-16 mb-4">
          {{ userProfile.name }}
        </h1>

        <v-card-text>
          <v-row class="px-4">
            <v-col
              v-for="(value, key) in userProfileDisplay"
              :key="key"
              cols="12"
              sm="6"
            >
              <div class="mb-4">
                <p class="text-sm font-medium text-gray-500 uppercase">
                  {{ key }}
                </p>
                <p class="mt-1 text-base md:text-lg font-semibold text-gray-900">
                  {{ value }}
                </p>
              </div>
            </v-col>
          </v-row>

          <v-divider class="my-6" />

          <div
            v-if="userProfile.isCustomer"
            class="px-4"
          >
            <h1 class="text-2xl md:text-3xl font-bold mb-4">
              Subscription Information
            </h1>
  
            <!-- Subscription Status Banner -->
            <v-alert
              :type="stripeCustomerData.subscriptionStatus === 'active' ? 'success' : 'warning'"
              class="mb-4"
            >
              <div class="d-flex align-center">
                <p class="text-xl font-bold">
                  {{ stripeCustomerData.subscriptionStatus === 'active' ? 
                    'Active Subscription' : 
                    'Subscription Cancelling' 
                  }}
                </p>
              </div>
            </v-alert>

            <v-row>
              <v-col
                v-for="(value, key) in subscriptionDisplay"
                :key="key"
                cols="12"
                sm="6"
                class="subscription-info"
              >
                <div class="mb-4">
                  <p class="text-sm font-medium text-gray-500 uppercase">
                    {{ key }}
                  </p>
                  <p class="mt-1 text-base md:text-lg font-semibold text-gray-900">
                    {{ value }}
                  </p>
                </div>
              </v-col>
            </v-row>

            <!-- Subscription Actions -->
            <div
              v-if="stripeCustomerData.subscriptionStatus === 'active'"
              class="mt-6"
            >
              <v-btn
                color="error"
                class="text-base"
                @click="cancelSubscription"
              >
                Cancel Subscription
              </v-btn>
            </div>

            <!-- Cancellation Notice -->
            <v-alert
              v-if="stripeCustomerData.subscriptionStatus === 'cancelling'"
              type="info"
              class="mt-4"
            >
              <p class="text-xl font-bold">
                Your subscription will remain active until the end date. You'll continue to have full access to all features until then.
              </p>
            </v-alert>
          </div>
        </v-card-text>

        <v-card-actions class="px-6 pb-6">
          <v-btn
            color="primary"
            to="/profile/update"
            class="mr-2 text-base"
          >
            Manage Profile
          </v-btn>
          <v-btn 
            v-if="userProfile.isCustomer && stripeCustomerData.subscriptionStatus === 'active'"
            color="error" 
            class="text-base"
            @click="cancelSubscription"
          >
            Cancel Subscription
          </v-btn>
        </v-card-actions>
      </template>

      <v-card-text v-else>
        <v-alert
          type="error"
          class="mb-0"
        >
          {{ error }}
        </v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.user-profile {
  box-shadow: 0 4px 6px #0000001a;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 1rem;
}
</style>