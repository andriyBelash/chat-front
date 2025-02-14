<script setup lang="ts">
  import { Toaster } from 'vue-sonner'
  import { useUserStore } from "#imports"
  import '@/assets/style/global.css'

  const { getUser } = useUserStore()

  await useAsyncData('user', async () => await getUser())
</script>

<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Toaster :expand="true" :toast-props="{ duration: 3000, expand: true }" />
  </div>
</template>
