import { ACCESS_TOKEN } from "~/constants/keys"

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie(ACCESS_TOKEN).value
  const localePath = useLocalePath()

  const isPublicRoute = to.path.includes('auth')

  if (!token && !isPublicRoute) {
    console.log('redirect to login')
    return navigateTo(localePath('/auth/login'))
  }

  if (token && isPublicRoute) {
    return navigateTo(localePath('/'))
  }
})
