// middleware/auth.js
import { useUserStore } from '~/stores/user';
import { auth } from '~/utils/firebase';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  const publicPages = ['/login', '/sign-up', '/verify-email'];
  const isPublicPage = publicPages.includes(to.path);

  // Check if there's a current user in Firebase Auth
  const user = auth.currentUser;

  if (user) {
    // If there's a user but the store isn't authenticated, update the store
    if (!userStore.isAuthenticated) {
      await user.reload(); // Ensure we have the latest user data
      userStore.setUser({
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified
      });
    }

    // If user is authenticated and tries to access auth pages, redirect to home
    if (isPublicPage) {
      return navigateTo('/');
    }

    // If email isn't verified and user isn't on verify-email page
    if (!user.emailVerified && to.path !== '/verify-email') {
      return navigateTo('/verify-email');
    }
  } else {
    // If there's no user
    userStore.clearUser();

    // Allow access to public pages
    if (isPublicPage) {
      return;
    }

    // Redirect to login for protected pages
    return navigateTo('/login');
  }

  // If still not authenticated after checks, redirect
  if (!userStore.isAuthenticated && !isPublicPage) {
    return navigateTo('/login');
  }
});