<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/user';
import { useNuxtApp } from '#app';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { parseFirebaseError } from '~/utils/firebaseErrorParser';

const router = useRouter();
const nuxtApp = useNuxtApp();
const auth = nuxtApp.$firebaseAuth;
const userStore = useUserStore();

const name = ref('');
const email = ref('');
const password = ref('');
const number = ref('');
const agreeToTerms = ref(false);
const error = ref('');
const emailError = ref('');
const passwordError = ref('');

const isFormValid = computed(() => {
  return name.value && email.value && password.value && number.value && 
         !emailError.value && !passwordError.value && agreeToTerms.value;
});

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(email.value) ? '' : 'Please enter a valid email address';
};

const validatePassword = () => {
  passwordError.value = password.value.length >= 6 ? '' : 'Password must be at least 6 characters long';
};

const handleSignUp = async () => {
  if (!isFormValid.value) return;

  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email.value, 
        password: password.value, 
        name: name.value,
        number: number.value
      }),
    });

    const data = await response.json();

    if (data.success) {
      const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
      await sendEmailVerification(userCredential.user);
      router.push('/verify-email');
      userStore.setUser({ ...data.user, uid: userCredential.user.uid, email: userCredential.user.email });
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    error.value = parseFirebaseError(err);
  }
};

const goToLogin = () => {
  router.push('/login');
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
          class="pa-6 rounded-xl sign-up-card w-100"
          max-width="450"
        >
          <v-card-title>
            <h1 class="text-3xl md:text-4xl font-bold mb-6">
              Create an Account
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleSignUp">
              <v-text-field
                v-model="name"
                label="Full Name"
                type="text"
                outlined
                dense
                required
                class="mb-4"
              />
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
              <v-text-field
                v-model="number"
                label="Phone Number"
                type="tel"
                outlined
                dense
                required
                class="mb-4"
              />
              <v-checkbox
                v-model="agreeToTerms"
                :rules="[v => !!v || 'You must agree to continue!']"
                required
                class="mb-4"
              >
                <template #label>
                  <p class="text-sm">
                    I agree to the 
                    <a
                      href="/terms-and-conditions"
                      target="_blank"
                    >Terms of Use</a>
                    and
                    <a
                      href="/privacy-policy"
                      target="_blank"
                    >Privacy Policy</a>
                  </p>
                </template>
              </v-checkbox>
              <v-btn
                type="submit"
                color="primary"
                block
                x-large
                :disabled="!isFormValid"
                class="mt-4 mb-2 px-6 py-3 text-lg font-semibold rounded-xl"
              >
                Sign up
              </v-btn>
            </v-form>
            <p class="text-center mt-6">
              Already have an account? 
              <a
                class="text-primary font-bold cursor-pointer"
                @click="goToLogin"
              >Log in</a>
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
          src="https://via.placeholder.com/500x400?text=Signup+Illustration"
          alt="Sign up Illustration"
          class="max-w-full h-auto object-contain illustration"
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.sign-up-card {
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