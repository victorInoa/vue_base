<script setup>
import { useAuthStore } from '@/stores/auth.js'
import router from '@/router/index.js'
const authStore = useAuthStore()
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="items-center space-x-4 hidden sm:flex">
    <div v-if="authStore.UserInfo" class="flex flex-col space-y-1 items-end">
      <a
        class="font-semibold text-gray-800 transition-colors duration-300 dark:text-gray-200 sm:text-lg dark:hover:text-primary hover:text-primary hover:underline hover:cursor-pointer"
        @click="router.push({ name: 'profile' })"
        >{{ authStore.UserInfo.fullName }}</a
      >
      <button
        class="text-indigo-700 hover:text-red-500 hover:cursor-pointer hover:underline"
        @click="(authStore.clearUserInfo(), router.push({ name: 'home' }))"
      >
        Logout
      </button>
    </div>
    <div v-else class="flex flex-col space-y-1 items-end dark:text-white">
      Usuario no autenticado
      <button
        class="text-indigo-700 hover:text-red-500 hover:cursor-pointer hover:underline"
        @click="router.push({ name: 'login' })"
      >
        Login
      </button>
    </div>

    <a
      v-if="authStore.UserInfo"
      class="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full cursor-pointer hover:border-indigo-600 border-2 border-transparent transition-colors duration-300"
      @click="router.push({ name: 'profile' })"
    >
      <img
        alt="RagAndRoll"
        class="object-cover w-full h-full"
        height="45"
        src="/assets/profiles/vinoa.jpg"
        width="45"
      />
    </a>
    <div v-else class="inline dark:text-white">
      <Icon height="48" icon="material-symbols-light:account-circle" width="48" />
    </div>
  </div>
</template>

<style scoped></style>
