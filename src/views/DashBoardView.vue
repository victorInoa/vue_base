<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { onMounted } from 'vue'
//import { useAuthStore } from '@/stores/auth.js'

onMounted(() => {
  console.log('DashBoard mounted')
  //const authStore = useAuthStore()
  //console.log(authStore.UserInfo.token)
  //console.log(authStore.UserInfo)
})
</script>

<template>
  <SectionTitle>DashBoard</SectionTitle>
</template>

<style scoped></style>
