<script setup lang="ts">

  interface Props {
    tabs: { label: string, value: string }[],
    baseUrl: string,
  }

  const props = defineProps<Props>()

  const { t } = useI18n()
</script>

<template>
  <div class="navigation-tab">
    <template v-for="tab in tabs">
      <NuxtLinkLocale class="navigation-tab-link" :to="`/${baseUrl}/${tab.value}`">{{ t(`${baseUrl}.${tab.label}`) }}</NuxtLinkLocale>
    </template>
  </div>
</template>

<style scoped>
  .navigation-tab{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .navigation-tab-link{
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--border);
    color: black;
  }
  .navigation-tab-link:hover{
    border: 1px solid var(--blue);
    color: var(--blue);
  }
  .navigation-tab-link.router-link-active{
    border: 1px solid var(--blue);
    background-color: var(--blue);
    color: white!important;
  }
</style>