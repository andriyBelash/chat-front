<script setup lang="ts">
  import { Toaster } from 'vue-sonner'
  import { useUserStore } from "#imports"
  import '@/assets/style/global.css'
  import { NuxtLayout } from '#components';

  const { getUser } = useUserStore()

  await useAsyncData('user', async () => await getUser())
</script>

<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster :expand="true" :toast-props="{ duration: 3000, expand: true }" />
  </div>
</template>
