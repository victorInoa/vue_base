<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

onMounted(() => {
  console.log('Configuraciones montada')
  const authStore = useAuthStore()

  console.log(authStore.UserInfo)
})
</script>

<template>
  <SectionTitle>Configuraciones</SectionTitle>
</template>

<style scoped></style>
