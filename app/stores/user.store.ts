import { defineStore } from "pinia";
import { useUserServices } from "~/composables/services/useUserServices";
import { ACCESS_TOKEN } from "~/constants/keys";
import type { IUser } from "~/types/user";

export const useUserStore = defineStore('user', () => {

  const services = useUserServices()
  const token = useCookie(ACCESS_TOKEN).value
  
  const user: Ref<IUser | null> = ref(null)

  const setUser = (data: IUser | null) => user.value = data

  const getUser = async () => {
    if(!token) return setUser(null)
    const response = await services.getUser()
    setUser(response)
    return response
  }

  const getUserFromStore = () => {
    return user.value
  }

  return { 
    user,
    setUser,
    getUser,
    getUserFromStore
  }

})