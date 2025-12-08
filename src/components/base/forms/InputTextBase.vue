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
      class="border-gray-400 border-2 rounded-xl px-4 py-2"
      type="text"
    />
  </div>
</template>

<style scoped></style>
