// plugins/fetch.ts
import type { FetchResponse } from 'ofetch'
import { ACCESS_TOKEN } from '~/constants/keys'


type CustomFetchResponse<T> = FetchResponse<T>

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()
  const token = useCookie(ACCESS_TOKEN).value

  type CustomFetchType = typeof $fetch

  interface AuthHeaders extends Headers {
    Authorization?: string
  }

  const http: CustomFetchType = $fetch.create({
    baseURL: config.public.BASE_URL as string,
    headers: {
      'Accept': 'application/json',
    },
    onRequest({ options }) {
      console.log('Request options:', token);
      if (token) {
        (options.headers as AuthHeaders) = { ...options.headers, Authorization: `Bearer ${token}` }
      }
    },
    onResponse<T>({ response }: { response: CustomFetchResponse<T> }) {
      return response._data
    },
    onResponseError({ response }: { response: CustomFetchResponse<any> }) {
      console.error('Response error:', response);
      return Promise.reject(response._data)
    }
  })

  return {
    provide: {
      http
    }
  }
})