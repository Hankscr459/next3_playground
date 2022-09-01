export default defineNuxtRouteMiddleware(() => {
  // set the redirect code to 301 Moved Permanently
  const counter = useCookie('counter3');
  console.log('counter: ', counter);
  console.log('value: ', counter.value);
  if (counter.value !== 1500) {
    console.log('running');
    return navigateTo('/app/auth/signin');
  }
});