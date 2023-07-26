import { useAuthStore } from '@/store/auth'
export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuthStore()

  if (!isLoggedIn) {
    alert('You must be logged in to access this page')
    return navigateTo('/')
  }
})