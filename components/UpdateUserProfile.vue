<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/user';
import { storeToRefs } from 'pinia';
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth, updateEmail } from 'firebase/auth';
import { db } from '~/utils/firebase';

const router = useRouter();
const userStore = useUserStore();
const { getUser, getIsCustomer, getStripeCustomerId, getEmail, getEmailVerified } = storeToRefs(userStore);

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
});

const isLoading = ref(true);
const error = ref(null);

const isSubscribed = computed(() => 
  stripeCustomerData.value.subscriptionStatus === 'active' || 
  stripeCustomerData.value.subscriptionStatus === 'cancelling'
);

const formattedEndDate = computed(() => {
  const timestamp = stripeCustomerData.value.subscriptionEndDate;
  if (timestamp && timestamp.seconds) {
    // Convert Firestore Timestamp to JavaScript Date
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  return 'Invalid Date';
});

onMounted(async () => {
  isLoading.value = true;
  try {
    if (getUser.value) {
      const userDoc = await getDoc(doc(db, 'users', getUser.value.uid));
      if (userDoc.exists()) {
        userProfile.value = userDoc.data();
        userProfile.value.email = getEmail.value;
        userProfile.value.emailVerified = getEmailVerified.value;
        await checkPendingEmailChange();

        if (userProfile.value.isCustomer) {
          const stripeCustomerDocs = await getDocs(
            query(collection(db, 'stripeCustomers'), 
            where('userId', '==', getUser.value.uid))
          );
          
          if (!stripeCustomerDocs.empty) {
            const customerData = stripeCustomerDocs.docs[0].data();
            // console.log('Customer data:', customerData);
            stripeCustomerData.value = {
              subscriptionId: customerData.subscriptionId,
              subscriptionStatus: customerData.subscriptionStatus,
              subscriptionEndDate: customerData.subscriptionEndDate,
            };
          }
        }
      }
    }
  } catch (error) {
    console.error('Error loading user profile:', error);
  } finally {
    isLoading.value = false;
  }
});

const updateProfile = async () => {
  if (!getUser.value) return;

  isLoading.value = true;
  try {
    await updateDoc(doc(db, 'users', getUser.value.uid), {
      name: userProfile.value.name,
      number: userProfile.value.number,
      school: userProfile.value.school,
    });
    userStore.updateUser(userProfile.value);
    alert('Profile updated successfully!');
  } catch (error) {
    console.error('Error updating profile:', error);
    alert('Failed to update profile. Please try again.');
  } finally {
    isLoading.value = false;
  }
};

const updateUserEmail = async () => {
  const auth = getAuth();
  if (!auth.currentUser) return;

  try {
    await auth.currentUser.verifyBeforeUpdateEmail(userProfile.value.email);
    alert('A verification email has been sent to your new email address. Please check your inbox and verify before the change takes effect.');
    
    await updateDoc(doc(db, 'users', getUser.value.uid), {
      pendingEmail: userProfile.value.email,
    });

    userProfile.value.pendingEmail = userProfile.value.email;
    userStore.updateUser({ pendingEmail: userProfile.value.email });
  } catch (error) {
    console.error('Error updating email:', error);
    alert('Failed to update email. Please try again.');
  }
};

const checkPendingEmailChange = async () => {
  const auth = getAuth();
  if (!auth.currentUser) return;

  if (userProfile.value.pendingEmail && auth.currentUser.email === userProfile.value.pendingEmail) {
    await finalizeEmailUpdate();
  }
};

const finalizeEmailUpdate = async () => {
  const auth = getAuth();
  if (!auth.currentUser) return;

  try {
    await updateDoc(doc(db, 'users', getUser.value.uid), {
      email: auth.currentUser.email,
      pendingEmail: null,
    });

    userStore.updateUser({ email: auth.currentUser.email, pendingEmail: null });
    userProfile.value.email = auth.currentUser.email;
    userProfile.value.pendingEmail = null;

    alert('Email updated successfully!');
  } catch (error) {
    console.error('Error finalizing email update:', error);
    alert('Failed to finalize email update. Please try again.');
  }
};

const cancelSubscription = async () => {
  isLoading.value = true;

  if (!stripeCustomerData.value.subscriptionId) {
    alert('No active subscription found');
    isLoading.value = false;
    return;
  }

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
      userStore.updateUser({
        subscriptionStatus: 'cancelling',
        subscriptionEndDate: data.endDate,
      });
      alert(data.message);
    } else {
      throw new Error(data.message || 'Failed to cancel subscription');
    }
  } catch (err) {
    console.error('Error cancelling subscription:', err);
    alert(`Failed to cancel subscription: ${err.message}`);
  } finally {
    isLoading.value = false;
  }
};

const goBackToProfile = () => {
  router.push('/profile/user');
};
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
      <v-img
        height="200"
        src="https://picsum.photos/700/200?random"
        class="bg-gray-100"
      >
        <v-row
          class="fill-height ma-0"
          align="end"
        >
          <v-col cols="12">
            <v-avatar
              size="128"
              class="ml-6 mb-n8 avatar-border"
              style="border: 4px solid white;"
            >
              <!-- <img 
                :src="avatarSvg" 
                :alt="userProfile.name"
                class="avatar-image"
              > -->
            </v-avatar>
          </v-col>
        </v-row>
      </v-img>

      <h1 class="text-4xl md:text-5xl font-bold ml-4 mt-10 mb-4">
        Update Profile
      </h1>

      <v-card-text>
        <v-form
          class="px-6"
          @submit.prevent="updateProfile"
        >
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="userProfile.name"
                label="Name"
                outlined
                dense
                required
                class="text-base md:text-lg"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="userProfile.number"
                label="Phone Number"
                outlined
                dense
                required
                class="text-base md:text-lg"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="userProfile.school"
                label="School"
                outlined
                dense
                class="text-base md:text-lg"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="userProfile.email"
                label="Email"
                type="email"
                outlined
                dense
                required
                class="text-base md:text-lg"
              />
            </v-col>
          </v-row>

          <div class="d-flex justify-space-between align-center mt-4">
            <v-btn
              color="primary"
              type="submit"
              :loading="isLoading"
              class="text-base"
            >
              Update Profile
            </v-btn>
            <v-btn
              color="secondary"
              :disabled="isLoading"
              class="text-base"
              @click="updateUserEmail"
            >
              Update Email
            </v-btn>
          </div>

          <v-alert
            v-if="userProfile.pendingEmail"
            type="info"
            class="mt-4"
          >
            Pending email change to: {{ userProfile.pendingEmail }}
            <v-btn
              text
              color="info"
              class="text-base ml-2"
              @click="checkPendingEmailChange"
            >
              Check Verification Status
            </v-btn>
          </v-alert>
        </v-form>
      </v-card-text>

      <v-divider class="my-4" />

      <v-card-text v-if="userProfile.isCustomer">
        <h1 class="text-2xl md:text-3xl font-bold mb-4">
          Subscription Information
        </h1>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <p class="text-sm font-medium text-gray-500 uppercase">
              Status
            </p>
            <p class="mt-1 text-base md:text-lg font-semibold">
              {{ stripeCustomerData.subscriptionStatus }}
            </p>
          </v-col>
          <v-col
            v-if="stripeCustomerData.subscriptionStatus === 'cancelling'"
            cols="12"
            sm="6"
          >
            <p class="text-sm font-medium text-gray-500 uppercase">
              Cancels on
            </p>
            <p class="mt-1 text-base md:text-lg font-semibold">
              {{ formattedEndDate }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="px-6 pb-6">
        <v-btn 
          v-if="isSubscribed && stripeCustomerData.subscriptionStatus !== 'cancelling'"
          color="error" 
          :loading="isLoading" 
          class="text-base"
          @click="cancelSubscription"
        >
          Cancel Subscription
        </v-btn>
        <v-btn 
          v-if="!isSubscribed"
          color="success" 
          to="/tutoring" 
          class="text-base"
        >
          Subscribe
        </v-btn>
        <v-spacer />
        <v-btn
          color="primary"
          text
          class="text-base"
          @click="goBackToProfile"
        >
          Back to Profile
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
.user-profile {
  box-shadow: 0 4px 6px #0000001a;
}

.avatar-border {
  border: 4px solid white;
  box-shadow: 0 2px 4px #0000001a;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 1rem;
}
</style>