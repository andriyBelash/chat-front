import { vMaska } from "maska/vue"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive(vMaska as string)
})