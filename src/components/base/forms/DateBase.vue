<script setup>
const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
const id = 'input_date_' + props.name
</script>

<template>
  <LabelBase v-if="label" :for="id" class="block font-semibold">{{ label }}</LabelBase>
  <input
    id="date_filter_date_minimum"
    :name="props.name"
    :required="props.required"
    class="form-control"
    type="date"
    value="2024-12-01"
  />
</template>

<style scoped></style>
