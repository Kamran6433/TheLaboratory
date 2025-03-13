// plugins/firebase-auth.client.js
import { onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from '~/stores/user';

export default defineNuxtPlugin(async ({ $firebaseAuth }) => {
  const userStore = useUserStore();

  return new Promise((resolve) => {
    onAuthStateChanged($firebaseAuth, (user) => {
      if (user) {
        userStore.setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          // Add any other user properties you need
        });
      } else {
        userStore.clearUser();
      }
      resolve();
    });
  });
});