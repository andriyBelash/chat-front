<script setup lang="ts">

  interface RadioOption {
    value: string | number;
    label: string;
  }

  interface Props {
    modelValue: string | number;
    options: RadioOption[];
    name: string;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<{ 'update:modelValue': [value: string | number] }>();

  const { t } = useI18n()

</script>

<template>
  <div class="radio-group">
    <label v-for="option in options" :key="option.value" class="radio-label">
      <input
        type="radio"
        :name="name"
        :value="option.value"
        :checked="modelValue === option.value"
        @change="$emit('update:modelValue', option.value)"
      >
      <span class="radio-text">{{ t(`field.${option.label}`) }}</span>
    </label>
  </div>
</template>

<style scoped>
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.radio-text {
  margin-left: 8px;
}

input[type="radio"] {
  cursor: pointer;
  accent-color: var(--border);
}
</style>