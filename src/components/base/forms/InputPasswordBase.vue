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
})
const id = 'input_password_' + props.name
</script>

<template>
  <div class="flex flex-col gap-2">
    <LabelBase v-if="label" :for="id" class="block font-semibold">{{ label }}</LabelBase>
    <input
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      autocomplete="current-password"
      class="border-gray-400 border-2 rounded-xl px-4 py-2"
      type="password"
    />
  </div>
</template>

<style scoped></style>
