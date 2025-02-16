<script setup lang="ts">
  const props = defineProps<{ label: string, error?: string }>()
</script>

<template>
  <div :class="$style['field-container']">
    <label :class="$style['field-label']">{{ props.label }}</label>
    <div :class="$style.field">
      <slot/>
      <span v-if="error" :class="$style.error">{{ error }}</span>
    </div>
  </div>  
</template>

<style module>
  .field-container{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .field{
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .field-label{
    font-weight: 500;
    line-height: 15px;
    color: black;
  }

  .error{
    color: #ff00009a
  }
</style>