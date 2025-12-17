<script setup>
import { onMounted } from 'vue'
import { darkModeStore } from '@/stores/darkMode.js'

const themeDarkMode = darkModeStore()

const toggleDarkMode = () => {
  themeDarkMode.toggleDarkMode()
}

onMounted(() => {
  themeDarkMode.checkDarkMode()
})
</script>
<template>
  <button
    :aria-label="themeDarkMode.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="p-2 rounded-full focus:outline-none transition-colors duration-200 hover:cursor-pointer"
    type="button"
    @click="toggleDarkMode"
  >
    <svg
      v-if="!themeDarkMode.isDark"
      class="h-6 w-6 text-primary-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
    <svg
      v-else
      class="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  </button>
</template>
