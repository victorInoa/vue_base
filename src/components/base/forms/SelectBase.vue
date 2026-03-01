<script setup>
import { computed } from 'vue'
import LabelBase from '@/components/base/forms/LabelBase.vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
  value: {
    type: String,
  },
  label: {
    type: String,
  },
  options: {
    type: Array,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const selectedValue = computed(() => {
  const selectedOption = props.options.find((option) => option.selected)
  return selectedOption ? selectedOption.value : props.value
})

const id = 'input_select_' + props.name
</script>

<template>
  <LabelBase v-if="label" :for="id" class="mb-3 block font-semibold">{{ label }}</LabelBase>
  <select
    :id="id"
    :name="name"
    :required="required"
    :value="selectedValue"
    :disabled="disabled"
    :class="[
      'font-(--form-font-weight) text-(length:--form-font-size) rounded-(--form-border-radius) border-form-border-default border-(length:--form-border-width) focus:outline-0 focus:border-form-border-accented hover:border-form-border-accented dark:border-form-dark-border-default dark:focus:border-form-dark-border-accented dark:hover:border-form-dark-border-accented px-(--form-padding-x) py-(--form-padding-y) bg-form-bg-default hover:bg-form-bg-accented focus:bg-form-bg-accented dark:bg-form-dark-bg-default dark:hover:bg-form-dark-bg-accented dark:focus:bg-form-dark-bg-accented text-form-text-default hover:text-form-text-accented focus:text-form-text-accented dark:text-form-dark-text-default dark:hover:text-form-dark-text-accented dark:focus:text-form-dark-text-accented',
      'disabled:border-gray-100 disabled:bg-gray-100 disabled:text-gray-400'
    ]"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :selected="option.selected"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped></style>
