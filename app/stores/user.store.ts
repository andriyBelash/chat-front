import { defineStore } from "pinia";
import { useUserServices } from "~/composables/services/useUserServices";
import type { IUser } from "~/types/user";

export const useUserStore = defineStore('user', () => {

  const services = useUserServices()
  
  const user: Ref<IUser | null> = ref(null)

  const setUser = (data: IUser | null) => user.value = data

  const getUser = async () => {
    const response = await services.getUser()
    setUser(response.user)
    console.log(response)
    return response
  }

  return { 
    user,
    setUser,
    getUser
  }

})