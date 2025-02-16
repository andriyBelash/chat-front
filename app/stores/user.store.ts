import { defineStore } from "pinia";
import { useUserServices } from "~/composables/services/useUserServices";
import type { IUser } from "~/types/user";

export const useUserStore = defineStore('user', () => {

  const services = useUserServices()
  
  const user: Ref<IUser | null> = ref(null)

  const setUser = (data: IUser | null) => user.value = data

  const getUser = async () => {
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