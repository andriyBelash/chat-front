import { ACCESS_TOKEN } from "~/constants/keys"

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie(ACCESS_TOKEN).value
  const localePath = useLocalePath()


  const isPublicRoute = to.path === '/auth/login' || to.path === '/auth/register'

  if (!token && !isPublicRoute) {
    return navigateTo(localePath('/auth/login'))
  }

  if (token && isPublicRoute) {
    return navigateTo(localePath('/'))
  }
})