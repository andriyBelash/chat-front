<script setup lang="ts">  
  import { DISPLAY_LANG } from '~/constants/fields';
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

</script>

<template>
  <div :class="$style['locale-switcher']">
    <template v-for="lang in locales">
      <template v-if="lang.code !== locale">
        <NuxtLink :class="$style['locale-link']" :to="switchLocalePath(lang.code)">{{ DISPLAY_LANG[lang.code] }}</NuxtLink>
      </template>
      <template v-else>
        <span :class="$style['current-locale']">{{ DISPLAY_LANG[lang.code] }}</span>
      </template>
    </template>
  </div>
</template>

<style module>
  .locale-switcher{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .locale-link {
    color: var(--blue);
  }
  .locale-link:hover {
    text-decoration: underline;
  }

  .current-locale{
    color: var(--text-gray);
  }
</style>
