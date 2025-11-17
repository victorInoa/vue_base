<script setup>
/* global document, localStorage */
import { ref, onMounted } from 'vue'

const isDark = ref(false)
const checkDarkMode = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    localStorage.theme = 'dark'
  } else {
    localStorage.theme = 'light'
  }
  checkDarkMode()
}

onMounted(() => {
  checkDarkMode()
})
</script>
<template>
  <button
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 transition-colors duration-200"
    type="button"
    @click="toggleDarkMode"
  >
    <svg
      v-if="!isDark"
      class="h-6 w-6 text-yellow-300"
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
      class="h-6 w-6 text-gray-600"
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
