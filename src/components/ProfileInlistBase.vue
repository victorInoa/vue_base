<script setup>
const props = defineProps({
  alt: {
    type: String,
  },
  src: {
    type: String,
    default: '/assets/profiles/vinoa.jpg',
  },
})

const alt = props.alt || 'profile'
</script>

<template>
  <div class="rounded-full border-2 border-red-500 overflow-hidden h-6 w-6">
    <img :alt="alt" :src="src" height="24" width="24" />
  </div>
</template>

<style scoped></style>
