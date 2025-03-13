<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/user';
import { useNuxtApp } from '#app';
import { 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { parseFirebaseError } from '~/utils/firebaseErrorParser';

const props = defineProps({
  initialMode: {
    type: String,
    default: 'signup',
    validator: (value) => ['signup', 'login'].includes(value)
  }
});

const emit = defineEmits(['close']);

const nuxtApp = useNuxtApp();
const router = useRouter();
const auth = nuxtApp.$firebaseAuth;
const userStore = useUserStore();
const { getLoading, getIsAuthenticated, getUser, getEmailVerified } = storeToRefs(userStore);

const isSignUp = ref(props.initialMode === 'signup');
const verificationSent = ref(false);
const email = ref('');
const password = ref('');
const name = ref('');
const number = ref('');
const error = ref('');
const emailError = ref('');
const passwordError = ref('');
const agreeToTerms = ref(false);

const isFormValid = computed(() => {
  if (isSignUp.value) {
    return email.value && password.value && number.value && !emailError.value && !passwordError.value && agreeToTerms.value;
  } else {
    return email.value && password.value && !emailError.value && !passwordError.value;
  }
});

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(email.value) ? '' : 'Please enter a valid email address';
};

const validatePassword = () => {
  passwordError.value = password.value.length >= 6 ? '' : 'Password must be at least 6 characters long';
};

const validateNumber = () => {
  // You can add more sophisticated phone number validation if needed
  if (!number.value) {
    error.value = 'Phone number is required';
  } else {
    error.value = '';
  }
};

const handleSubmit = async () => {
  try {
    if (isSignUp.value) {
      await handleSignUp(); // Call the Sign Up logic
    } else {
      await handleSignIn(); // Call the Login logic
    }
    error.value = ''; // Clear error if successful
  } catch (err) {
    error.value = parseFirebaseError(err); // Display any Firebase errors
  }
};

const handleSignUp = async () => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.value, password: password.value, name: name.value, number: number.value }),
  });

  const data = await response.json();

  if (data.success) {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    await sendEmailVerification(userCredential.user);
    alert('A verification email has been sent. Please check your inbox and verify your email before logging in.');
    await signOut(auth);
    router.push('/verify-email');
    userStore.setUser({ ...data.user, uid: userCredential.user.uid, email: userCredential.user.email });
  } else {
    throw new Error(data.message);
  }
};

const handleSignIn = async () => {
  const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
  const user = userCredential.user;

  if (!user.emailVerified) {
    error.value = 'Please verify your email before logging in.';
    userStore.setEmailVerified(false);
    await sendEmailVerification(user);
    router.push('/verify-email');
    return;
  }

  const userDoc = await getDoc(doc(nuxtApp.$firestore, 'users', user.uid));
  if (userDoc.exists()) {
    userStore.setUser({ ...userDoc.data(), uid: user.uid, email: user.email, emailVerified: user.emailVerified });
  } else {
    userStore.setUser({ uid: user.uid, email: user.email, emailVerified: user.emailVerified });
  }
};

const handleSignOut = async () => {
  try {
    await signOut(auth);
    userStore.clearUser();
    error.value = '';
    emit('close');
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

const toggleMode = () => {
  isSignUp.value = !isSignUp.value;
  error.value = '';
  emailError.value = '';
  passwordError.value = '';
};

const handleCancel = () => {
  emit('close');
};

onMounted(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    userStore.setUser(currentUser);
  });

  return () => unsubscribe();
});
</script>

<template>
  <div class="auth-form">
    <h1 class="text-h3 text-center mb-4">
      {{ isSignUp ? 'Sign Up' : 'Login' }}
    </h1>
    <p
      v-if="error"
      class="error text-center mb-4"
    >
      {{ error }}
    </p>
    <p
      v-if="verificationSent"
      class="info text-center mb-4"
    >
      A verification email has been sent. Please check your inbox and verify your email before logging in.
    </p>
    
    <form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        required
        :error-messages="emailError"
        outlined
        class="mb-4"
        @blur="validateEmail"
      />
      
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
        :error-messages="passwordError"
        outlined
        class="mb-4"
        @blur="validatePassword"
      />
      
      <template v-if="isSignUp">
        <v-text-field
          v-model="name"
          label="Full Name"
          type="text"
          outlined
          class="mb-4"
        />
        
        <v-text-field
          v-model="number"
          label="Phone Number"
          type="tel"
          required
          outlined
          class="mb-4"
        />
        
        <v-checkbox
          v-model="agreeToTerms"
          :rules="[v => !!v || 'You must agree to continue!']"
          required
          class="mb-4"
        >
          <template #label>
            <span class="text-caption">
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
            </span>
          </template>
        </v-checkbox>
      </template>
      
      <v-btn
        type="submit"
        :disabled="!isFormValid"
        color="primary"
        block
        class="mb-4"
      >
        {{ isSignUp ? 'Sign Up' : 'Login' }}
      </v-btn>
      
      <v-btn
        v-if="!isSignUp"
        text
        block
        class="mb-4"
        @click="handleForgotPassword"
      >
        Forgot Password
      </v-btn>
    </form>
    
    <div class="text-center">
      <v-btn
        text
        class="mb-4"
        @click="toggleMode"
      >
        {{ isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up' }}
      </v-btn>
      
      <v-btn
        v-if="getUser"
        color="error"
        block
        class="mb-4"
        @click="handleSignOut"
      >
        Sign Out
      </v-btn>
      
      <v-btn
        text
        @click="handleCancel"
      >
        Cancel
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.auth-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

.error {
  color: #ff5252;
  font-size: 0.9rem;
}

.info {
  color: #2196F3;
  font-size: 0.9rem;
}
</style>