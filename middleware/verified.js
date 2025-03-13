// middleware/verified.js - for pages requiring email verification
export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  const user = auth.currentUser;

  if (!user) {
    return navigateTo('/login');
  }

  if (!user.emailVerified) {
    return navigateTo('/verify-email');
  }
});