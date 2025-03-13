import { auth } from '~/utils/firebase';
import { useUserStore } from '~/stores/user';

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return; // Skip on server-side

  const userStore = useUserStore();
  let user = auth.currentUser;
  
  // If there's no user, redirect to login
  if (!user) {
    userStore.clearUser(); // Ensure store is cleared if no user is found
    return navigateTo('/login');
  }

  // Reload user to get the latest email verification status
  try {
    await user.reload();
    user = auth.currentUser; // Reassign to get the updated user object
  } catch (error) {
    console.error("Error reloading user:", error);
    // If there's an error reloading, we'll continue with the existing user data
  }

  // Update user store
  userStore.setUser({
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified
  });

  // Handle different scenarios
  if (!user.emailVerified && to.path !== '/verify-email') {
    return navigateTo('/verify-email');
  }

  if (user.emailVerified && to.path === '/verify-email') {
    return navigateTo('/profile/user');
  }

  // If the user is verified and trying to access login or signup, redirect to profile
  if (user.emailVerified && (to.path === '/login' || to.path === '/signup')) {
    return navigateTo('/profile/user');
  }
});