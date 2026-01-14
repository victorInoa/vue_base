<script setup>
import { RouterLink } from 'vue-router'
import { darkModeStore } from '@/stores/darkMode.js'

const themeDarkMode = darkModeStore()
</script>

<template>
  <div
    class="mx-auto w-full p-5 text-gray-600 border-t-2 border-t-gray-200 dark:border-gray-600 flex justify-start"
  >
    <RouterLink :to="{ name: 'home' }" class="hover:text-secondary mr-4 size-[20px]">
      <img
        v-if="!themeDarkMode.isDark"
        alt="Logo"
        class="size-[20px] relative"
        src="@/assets/logo-icon.svg"
      />
      <img v-else alt="Logo" class="size-[20px] relative" src="@/assets/logo-icon.svg" />
    </RouterLink>

    <strong>Footer de la página</strong>
  </div>
</template>

<style scoped></style>
