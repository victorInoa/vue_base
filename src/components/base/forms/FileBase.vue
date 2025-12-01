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
    accept="application/pdf"
    class="border-slate-400 text-slate-400 border-2 rounded-xl p-1 bg-slate-700 mt-2 file:bg-slate-500 file:text-slate-800 file:rounded-md file:p-1 file:font-semibold hover:file:bg-slate-400 hover:file:cursor-pointer hover:cursor-pointer transition duration-300 ease-in-out"
    name="documents[]"
    required=""
    type="file"
  />
</template>

<style scoped></style>
