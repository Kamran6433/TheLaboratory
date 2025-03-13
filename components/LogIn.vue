<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/user';
import { useNuxtApp } from '#app';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import { parseFirebaseError } from '~/utils/firebaseErrorParser';

const router = useRouter();
const nuxtApp = useNuxtApp();
const auth = nuxtApp.$firebaseAuth;
const userStore = useUserStore();

const email = ref('');
const password = ref('');
const error = ref('');
const emailError = ref('');
const passwordError = ref('');

const isFormValid = computed(() => {
  return email.value && password.value && !emailError.value && !passwordError.value;
});

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(email.value) ? '' : 'Please enter a valid email address';
};

const validatePassword = () => {
  passwordError.value = password.value.length >= 6 ? '' : 'Password must be at least 6 characters long';
};

const handleSignIn = async () => {
  if (!isFormValid.value) return;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    if (!user.emailVerified) {
      error.value = 'Please verify your email before logging in.';
      router.push('/verify-email');
      return;
    }

    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      userStore.setUser({ ...userDoc.data(), uid: user.uid, email: user.email, emailVerified: user.emailVerified });
    } else {
      userStore.setUser({ uid: user.uid, email: user.email, emailVerified: user.emailVerified });
    }

    router.push('/');
  } catch (err) {
    error.value = parseFirebaseError(err);
  }
};

const handleForgotPassword = async () => {
  if (!email.value) {
    error.value = 'Please enter your email address.';
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email.value);
    error.value = 'Password reset email sent. Please check your inbox.';
  } catch (err) {
    error.value = parseFirebaseError(err);
  }
};

const goToSignUp = () => {
  router.push('/sign-up');
};
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
          class="pa-6 rounded-xl login-card w-100"
        >
          <v-card-title>
            <h1 class="text-3xl md:text-4xl font-bold mb-6">
              Log in to Your Account
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleSignIn">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                outlined
                dense
                required
                :error-messages="emailError"
                class="mb-4"
                @blur="validateEmail"
              />
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                outlined
                dense
                required
                :error-messages="passwordError"
                class="mb-4"
                @blur="validatePassword"
              />
              <v-btn
                type="submit"
                color="primary"
                block
                x-large
                :disabled="!isFormValid"
                class="mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
              >
                Log in
              </v-btn>
            </v-form>
            <div class="text-right mt-2">
              <a
                class="text-primary cursor-pointer"
                @click="handleForgotPassword"
              >
                <p>
                  Forgot password?
                </p>
              </a>
            </div>
            <p class="text-center mt-6">
              Don't have an account? 
              <a
                class="text-primary font-bold cursor-pointer"
                @click="goToSignUp"
              >
                Sign up
              </a>
            </p>
            <p
              v-if="error"
              class="error-message mt-4 text-center text-red-500"
            >
              {{ error }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-none d-md-flex justify-center align-center"
      >
        <img
          src="https://via.placeholder.com/500x400?text=Login+Illustration"
          alt="Login Illustration"
          class="max-w-full h-auto object-contain illustration"
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.login-card {
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