<script setup>
defineProps({ id: { type: String, required: true } })
</script>
<template>
  <label :for="id"><slot></slot></label>
</template>

<style scoped></style>
