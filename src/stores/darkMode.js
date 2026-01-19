import { ref } from 'vue'
import { defineStore } from 'pinia'

export const darkModeStore = defineStore('dark_mode', () => {
  const STORAGE_KEY = 'dark_mode'

  const isDark = ref(false)

  function checkDarkMode() {
    const storedMode = localStorage.getItem(STORAGE_KEY)

    if (
      storedMode === 'dark' ||
      (!(STORAGE_KEY in localStorage) &&
        globalThis.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      isDark.value = true
      document.documentElement.classList.add('dark')
    } else {
      isDark.value = false
      document.documentElement.classList.remove('dark')
    }

    return isDark.value
  }

  function toggleDarkMode() {
    isDark.value = !isDark.value
    if (isDark.value) {
      localStorage.setItem(STORAGE_KEY, 'dark')
    } else {
      localStorage.setItem(STORAGE_KEY, 'light')
      //localStorage.dark_mode = ''
    }
    checkDarkMode()
  }

  return { isDark, checkDarkMode, toggleDarkMode }
})
