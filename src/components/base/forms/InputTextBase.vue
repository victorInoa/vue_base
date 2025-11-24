<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
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
</script>

<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" :for="id" class="block font-semibold">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      class="border-slate-400 border-2 rounded-xl px-4 py-2"
      type="text"
    />
  </div>
</template>

<style scoped></style>
