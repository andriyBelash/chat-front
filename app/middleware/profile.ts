import { PROFILE_TABS } from "~/constants/fields"

export default defineNuxtRouteMiddleware((to, from) => {
  const pages = PROFILE_TABS.map(tab => tab.value)
  const localePath = useLocalePath()

  const isValidProfilePage = pages.some(page => to.path.includes(`/profile/${page}`))

  if (!isValidProfilePage) {
    return navigateTo(localePath('/profile/dashboard'))
  }
})
