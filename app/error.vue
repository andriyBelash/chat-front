<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <div :class="$style.relative">
    <NuxtImg :class="$style.image" :src="`https://http.dog/${props.error.statusCode}.jpg`" />
  </div>
</template>

<style module>
  .relative{
    position: relative;
    height: 100dvh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image{
    width: 100%;
    height: 80%;
    object-fit: contain;
  }
</style>