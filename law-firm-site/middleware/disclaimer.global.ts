export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    const accepted = localStorage.getItem('agreedToDisclaimer')
    if (!accepted) {
      return navigateTo('/disclaimer')
    }
  }
})
