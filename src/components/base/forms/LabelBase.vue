<script setup>
defineProps({ for: { type: String, required: true } })
</script>
<template>
  <label :for="for"><slot></slot></label>
</template>

<style scoped></style>
