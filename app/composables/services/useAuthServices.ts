import { ACCESS_TOKEN } from "~/constants/keys"
import type { IUser } from "~/types/user"

export const useAuthServices = () => {
  const { $http } = useNuxtApp()

  const signUp = async (form: FormData) => {
    return $http<{ user: IUser, token: string }>('/auth/register', { method: 'POST', body: form })
  }

  const signIn = async (form: { email: string, password: string }) => {
    return $http<{ user: IUser, token: string }>('/auth/login', { method: 'POST', body: form })
  }

  const setToken = (token: string) => {
    useCookie(ACCESS_TOKEN).value = token
  }

  const removeToken = () => {
    useCookie(ACCESS_TOKEN).value = null
  }

  return { signUp, setToken, removeToken, signIn }

}