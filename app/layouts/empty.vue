<script setup lang="ts"></script>

<template>
  <LayoutLocaleSwitcher :class="$style['locale-switcher']" />
  <slot />
</template>

<style module>
  .locale-switcher{
    position: absolute;
    top: 20px;
    right: 15px;
  }
</style>
