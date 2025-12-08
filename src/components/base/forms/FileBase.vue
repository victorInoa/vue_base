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
  accept: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const id = 'input_file_' + props.name
</script>

<template>
  <LabelBase v-if="label" :for="id" class="block font-semibold">{{ label }}</LabelBase>
  <input
    :id="id"
    :required="required"
    accept="application/pdf"
    class="border-gray-400 text-gray-400 border-2 rounded-xl p-1 bg-gray-700 mt-2 file:bg-gray-500 file:text-gray-800 file:rounded-md file:p-1 file:font-semibold hover:file:bg-gray-400 hover:file:cursor-pointer hover:cursor-pointer transition duration-300 ease-in-out"
    name="documents[]"
    type="file"
  />
</template>

<style scoped></style>
