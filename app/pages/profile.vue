<script setup lang="ts">
  import { PROFILE_TABS } from '~/constants/fields';

  definePageMeta({ middleware: 'profile' })
</script>

<template>
  <div class="container profile">
    <BaseNavigationTabs base-url="profile" :tabs="PROFILE_TABS"  />
    <NuxtPage />
  </div>
</template>

<style src="~/assets/style/page/profile/index.css"></style>