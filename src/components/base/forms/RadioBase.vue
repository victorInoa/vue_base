<script setup>
import LabelBase from '@/components/base/forms/LabelBase.vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
  label: {
    type: String,
  },
})
const id = 'input_radio_' + props.name + '_' + props.value
</script>

<template>
  <div class="flex gap-2">
    <input :id="id" :name="name" :value="value" type="radio" />
    <LabelBase v-if="label" :for="id" class="block font-semibold">{{ label }}</LabelBase>
  </div>
</template>

<style scoped></style>
