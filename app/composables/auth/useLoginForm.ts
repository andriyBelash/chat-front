import { useAuthServices } from "../services/useAuthServices"
import { useUserStore } from "#imports"
import { toast } from "vue-sonner"

export const useLoginForm = () => {

  const services = useAuthServices()
  const { setUser } = useUserStore()
  const localePath = useLocalePath()
  const { t } = useI18n()

  const form: Ref<{ email: string, password: string }> = ref({ email: '', password: '' })

  const setErrors = (error: Record<string, any>) => {
    if(error.errors) {
      const payload = Object.keys(error.errors).filter(item => item !== 'avatar')
      for (const item of payload) {
        const message = `${t(`field.${item}`)}: ${t('validation.required')}`
        toast.error(message)
      }
    } else {
      toast.error(t(`error.${error.message}`))
    }
  }

  const login = async () => {
    try {
      const response = await services.signIn(form.value)
      services.setToken(response.token)
      setUser(response.user)
      navigateTo(localePath('/'))
    } catch (error: any) {
      setErrors(error)
    }
  }
  return { form, login }
}