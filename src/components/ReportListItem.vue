<script setup>
defineProps({
  report: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="rounded-lg bg-amber-50 dark:bg-transparent border-2 border-blue-900 dark:border-blue-200 p-4 mb-4 text-2xl text-blue-900 dark:text-blue-200"
  >
    <span class="font-bold text-blue-900">[{{ report.acronym }}]</span> {{ report.name }}
  </div>
</template>

<style scoped></style>
