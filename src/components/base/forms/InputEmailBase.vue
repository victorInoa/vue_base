<script setup>
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
  required: {
    type: Boolean,
    default: false,
  },
})

const id = 'input_text_' + props.name

const autocomplete = props.name.replace(/[-_]{1,}/, '')
</script>

<template>
  <div class="flex flex-col gap-2">
    <LabelBase v-if="label" :for="id" class="block font-semibold">{{ label }}</LabelBase>
    <input
      :id="id"
      :autocomplete="autocomplete"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      class="font-(--form-font-weight) text-(length:--form-font-size) rounded-(--form-border-radius) border-form-border-default border-(length:--form-border-width) focus:outline-0 focus:border-form-border-accented hover:border-form-border-accented dark:border-form-dark-border-default dark:focus:border-form-dark-border-accented dark:hover:border-form-dark-border-accented px-(--form-padding-x) py-(--form-padding-y) bg-form-bg-default hover:bg-form-bg-accented focus:bg-form-bg-accented dark:bg-form-dark-bg-default dark:hover:bg-form-dark-bg-accented dark:focus:bg-form-dark-bg-accented text-form-text-default hover:text-form-text-accented focus:text-form-text-accented dark:text-form-dark-text-default dark:hover:text-form-dark-text-accented dark:focus:text-form-dark-text-accented"
      type="email"
    />
  </div>
</template>

<style scoped></style>
