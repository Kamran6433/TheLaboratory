<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/user';
import { 
  sendEmailVerification,
  reauthenticateWithCredential,
  EmailAuthProvider
} from 'firebase/auth';
import { auth, db } from '~/utils/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const router = useRouter();
const userStore = useUserStore();

const resendDisabled = ref(false);
const resendTimer = ref(60);
const currentUser = computed(() => auth.currentUser);
const isLoading = ref(true);

const showChangeEmail = ref(false);
const newEmail = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');
const isChangingEmail = ref(false);

const pollingInterval = ref(null);

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(newEmail.value) ? '' : 'Please enter a valid email address';
};

const isEmailChangeValid = computed(() => {
  return newEmail.value && password.value && !emailError.value;
});

const handleEmailChange = async () => {
  if (!isEmailChangeValid.value) return;
  
  isChangingEmail.value = true;
  try {
    // Re-authenticate user
    const credential = EmailAuthProvider.credential(
      currentUser.value.email,
      password.value
    );
    await reauthenticateWithCredential(currentUser.value, credential);

    // Update email in Firebase Auth
    await updateEmail(currentUser.value, newEmail.value);

    // Update email in Firestore
    await updateDoc(doc(db, 'users', currentUser.value.uid), {
      email: newEmail.value,
      emailVerified: false
    });

    // Send verification email to new address
    await sendEmailVerification(currentUser.value);

    // Update local store
    await updateUserStore();

    showChangeEmail.value = false;
    newEmail.value = '';
    password.value = '';
    
    // Show success message
    alert('Email updated successfully. Please check your new email for verification.');
  } catch (error) {
    console.error('Error changing email:', error);
    if (error.code === 'auth/wrong-password') {
      passwordError.value = 'Incorrect password';
    } else if (error.code === 'auth/email-already-in-use') {
      emailError.value = 'Email already in use';
    } else {
      alert(error.message);
    }
  } finally {
    isChangingEmail.value = false;
  }
};

const updateUserStore = async () => {
  if (currentUser.value) {
    await currentUser.value.reload();
    userStore.updateUser({
      uid: currentUser.value.uid,
      email: currentUser.value.email,
      emailVerified: currentUser.value.emailVerified
    });
  }
};

const resendVerificationEmail = async () => {
  if (resendDisabled.value || !currentUser.value) return;

  try {
    await sendEmailVerification(currentUser.value);
    alert('Verification email resent. Please check your inbox.');
    startResendTimer();
  } catch (error) {
    console.error('Error resending verification email:', error);
    alert(error.message);
  }
};

const startResendTimer = () => {
  resendDisabled.value = true;
  resendTimer.value = 60;
  const interval = setInterval(() => {
    resendTimer.value--;
    if (resendTimer.value <= 0) {
      clearInterval(interval);
      resendDisabled.value = false;
    }
  }, 1000);
};

// Function to start polling for verification status
const startPollingVerification = () => {
  // Check every 3 seconds
  pollingInterval.value = setInterval(async () => {
    if (currentUser.value) {
      try {
        await currentUser.value.reload();
        
        if (currentUser.value.emailVerified) {
          // Update Firestore
          await updateDoc(doc(db, 'users', currentUser.value.uid), {
            emailVerified: true,
            email: currentUser.value.email
          });

          // Update user store
          userStore.updateUser({
            emailVerified: true,
            email: currentUser.value.email
          });

          // Stop polling since email is verified
          stopPollingVerification();
          
          // Show success message and redirect
          alert('Email verified successfully!');
          goToProfile();
        }
      } catch (error) {
        console.error('Error in verification polling:', error);
      }
    }
  }, 3000); // Poll every 3 seconds
};

// Function to stop polling
const stopPollingVerification = () => {
  if (pollingInterval.value) {
    clearInterval(pollingInterval.value);
    pollingInterval.value = null;
  }
};

const checkVerificationStatus = async () => {
  if (!currentUser.value) return;

  isLoading.value = true;
  try {
    await currentUser.value.reload();
    
    if (currentUser.value.emailVerified) {
      // Update Firestore
      await updateDoc(doc(db, 'users', currentUser.value.uid), {
        emailVerified: true,
        email: currentUser.value.email
      });

      // Update user store
      userStore.updateUser({
        emailVerified: true,
        email: currentUser.value.email
      });

      // Stop polling since email is verified
      stopPollingVerification();

      // Show success message and redirect
      alert('Email verified successfully!');
      goToProfile();
    } else {
      alert('Email not yet verified. Please check your inbox and click the verification link.');
    }
  } catch (error) {
    console.error('Error checking verification status:', error);
    alert('Error checking verification status. Please try again.');
  } finally {
    isLoading.value = false;
  }
};

const goToProfile = () => {
  router.push('/profile/user');
};

const goToLogin = () => {
  router.push('/login');
};

watch(showChangeEmail, (newValue) => {
  if (!newValue) {
    newEmail.value = '';
    password.value = '';
    emailError.value = '';
    passwordError.value = '';
  }
});

onMounted(async () => {
  isLoading.value = true;
  try {
    await updateUserStore();
    if (!currentUser.value) {
      goToLogin();
    } else if (!currentUser.value.emailVerified) {
      startPollingVerification();
    }
  } catch (error) {
    console.error('Error in mounted hook:', error);
  } finally {
    isLoading.value = false;
  }
});

onUnmounted(() => {
  stopPollingVerification();
});
</script>

<template>
  <v-container
    fluid
    class="max-width-1600 py-24 px-4 px-lg-12 d-flex align-center min-height-100"
  >
    <v-row class="justify-center align-center">
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center"
      >
        <v-card
          class="pa-6 rounded-xl verification-card w-100"
        >
          <v-card-title>
            <h1 class="text-3xl md:text-4xl font-bold mb-6">
              Verify Your Email
            </h1>
          </v-card-title>
          <v-card-text>
            <div
              v-if="!currentUser"
              class="text-center"
            >
              <p class="text-lg mb-6">
                No authenticated user found. Please log in first.
              </p>
              <v-btn
                color="primary"
                x-large
                block
                class="mb-4 px-6 py-3 text-lg font-semibold rounded-xl"
                @click="goToLogin"
              >
                Go to Login
              </v-btn>
            </div>
            
            <div
              v-else-if="currentUser.emailVerified"
              class="text-center"
            >
              <p class="text-lg mb-6">
                Your email has been verified. You can now access your profile.
              </p>
              <v-btn
                color="primary"
                x-large
                block
                class="mb-4 px-6 py-3 text-lg font-semibold rounded-xl"
                @click="goToProfile"
              >
                Go to Profile
              </v-btn>
            </div>
            
            <div
              v-else
              class="text-center"
            >
              <p class="text-lg mb-4">
                Please check your inbox and click the verification link to complete your registration.
              </p>
              <div class="d-flex align-center justify-center mb-6">
                <p class="text-md text-gray-600 me-2">
                  Email sent to: {{ currentUser.email }}
                </p>
                <v-btn
                  color="secondary"
                  size="small"
                  variant="text"
                  @click="showChangeEmail = true"
                >
                  Change
                </v-btn>
              </div>

              <!-- Change Email Dialog -->
              <v-dialog
                v-model="showChangeEmail"
                max-width="500px"
              >
                <v-card class="pa-4">
                  <v-card-title class="text-h5 mb-4">
                    Change Email Address
                  </v-card-title>
                  <v-card-text>
                    <v-form @submit.prevent="handleEmailChange">
                      <v-text-field
                        v-model="newEmail"
                        label="New Email"
                        type="email"
                        :error-messages="emailError"
                        required
                        outlined
                        dense
                        @blur="validateEmail"
                      />
                      <v-text-field
                        v-model="password"
                        label="Confirm Password"
                        type="password"
                        :error-messages="passwordError"
                        required
                        outlined
                        dense
                      />
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="grey"
                      variant="text"
                      @click="showChangeEmail = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="primary"
                      :loading="isChangingEmail"
                      :disabled="!isEmailChangeValid"
                      @click="handleEmailChange"
                    >
                      Change Email
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              
              <v-btn
                :disabled="resendDisabled"
                color="primary"
                x-large
                block
                class="mb-4 px-6 py-3 text-lg font-semibold rounded-xl"
                @click="resendVerificationEmail"
              >
                {{ resendDisabled ? `Resend in ${resendTimer}s` : 'Resend Verification Email' }}
              </v-btn>
              
              <v-btn
                color="info"
                x-large
                block
                variant="outlined"
                class="mb-6 px-6 py-3 text-lg font-semibold rounded-xl"
                @click="checkVerificationStatus"
              >
                Check Verification Status
              </v-btn>
              
              <p class="">
                Once verified, you can go back to your profile.
              </p>
            </div>

            <v-progress-circular
              v-if="isLoading"
              indeterminate
              color="primary"
              class="mt-4"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-none d-md-flex justify-center align-center"
      >
        <img
          src="https://via.placeholder.com/400x500?text=Email+Verification"
          alt="Email Verification Illustration"
          class="max-w-full h-auto object-contain illustration"
          style="max-width: 400px"
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.verification-card {
  box-shadow: 0 4px 6px #0000001a;
}

.py-24 {
  padding-top: 8rem;
  padding-bottom: 3rem;
}

.min-height-100 {
  min-height: 80vh;
}
</style>