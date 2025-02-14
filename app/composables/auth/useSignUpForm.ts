import type { ISignUpForm } from "~/types/auth"
import { useAuthServices } from "../services/useAuthServices"
import { toast } from "vue-sonner"
import { useUserStore } from "#imports"

export const useSignUpForm = () => {

  const services = useAuthServices()
  const localePath = useLocalePath()
  const { t } = useI18n()
  const { setUser } = useUserStore()

  const form: Ref<ISignUpForm> = ref({
    username: '',
    email: '',
    password: '',
    phone: '',
    sex: '',
    dob: ''
  })

  const image: Ref<{ file: File | null, url: string }> = ref({ file: null, url: '' })
  const imageRef: Ref<HTMLInputElement | null> = ref(null)

  const changeFile = (e: Event) => {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]

    if (file) {
      image.value = { file, url: URL.createObjectURL(file) }
    }
  }

  const getFormData = (): FormData => {
    const formData = new FormData()
    formData.append('username', form.value.username)
    formData.append('email', form.value.email)
    formData.append('password', form.value.password)
    formData.append('phone', form.value.phone)
    formData.append('sex', form.value.sex)
    formData.append('dob', form.value.dob)

    if(image.value.file) {
      formData.append('avatar', image.value.file)
    }

    return formData
  }

  const setErrors = (error: Record<string, any>) => {
    if(error.errors) {
      const payload = Object.keys(error.errors).filter(item => item !== 'avatar')
      for (const item of payload) {
        const message = `${t(`field.${item}`)}: ${t('validation.required')}`
        toast.error(message)
      }
    }
  }

  const signUp = async () => {
    const formData = getFormData()
    try {
      const response = await services.signUp(formData)
      if(response) {
        services.setToken(response.token)
        setUser(response.user)
      }
      navigateTo(localePath('/'))
    } catch (error: any) {
      setErrors(error)
    }
  }

  return { form, image, imageRef, changeFile, signUp }
}