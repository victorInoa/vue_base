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
  rows: {
    type: Number,
    default: 5,
  },
})

const id = 'input_text_' + props.name

const autocomplete = props.name.replace(/[-_]{1,}/, '')
</script>

<template>
  <LabelBase v-if="label" :for="id" class="block font-semibold mb-3">{{ label }}</LabelBase>
  <textarea
    :id="id"
    :autocomplete="autocomplete"
    :name="name"
    :placeholder="placeholder"
    :rows="rows"
    :value="value"
    class="border-slate-400 border-2 rounded-xl px-4 py-2 w-full"
  >
  </textarea>
</template>

<style scoped></style>
