// middleware/guest.js - for public pages only
export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  const user = auth.currentUser;

  if (user) {
    // If user is already authenticated, redirect to home
    return navigateTo('/');
  }
});