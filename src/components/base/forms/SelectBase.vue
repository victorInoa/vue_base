<script setup>
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
})

const id = 'input_select_' + props.name
</script>

<template>
  <LabelBase v-if="label" :for="id" class="block font-semibold">{{ label }}</LabelBase>
  <select
    :id="id"
    :name="name"
    :value="value"
    class="border-slate-400 border-2 rounded-xl px-4 py-2"
  >
    <option value="">{{ placeholder }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped></style>
