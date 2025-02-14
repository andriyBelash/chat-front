import type { IUser } from "~/types/user"

export const useUserServices = () => {
  const { $http } = useNuxtApp()

  const getUser = async () => {
    return $http<{ user: IUser }>('/profile/me')
  }

  return { getUser }
}