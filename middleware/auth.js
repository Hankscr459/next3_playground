export default defineNuxtRouteMiddleware(() => {
  // set the redirect code to 301 Moved Permanently
  if (counter.value !== 1500) {
    console.log('running');
    return navigateTo('/app/auth/signin');
  }
});