<script setup>
// Previous part of the script remains the same

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
        src="https://via.placeholder.com/700x200?text=Profile+Banner"
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
              <v-img 
                :src="`https://avatars.dicebear.com/api/initials/${userProfile.name || 'User'}.svg`" 
                :alt="userProfile.name"
                class="avatar-image"
              />
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
          to="/payment" 
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

.min-height-100 {
  min-height: 80vh;
}
</style>