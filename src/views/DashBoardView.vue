<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/auth.js'

onMounted(() => {
  console.log('DashBoard mounted')
  const authStore = useCounterStore()

  console.log(authStore.UserInfo)
})
</script>

<template>
  <SectionTitle>DashBoard</SectionTitle>
</template>

<style scoped></style>
