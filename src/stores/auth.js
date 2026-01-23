import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'auth_user_info'

export const useAuthStore = defineStore('auth', () => {
  // Load user info from localStorage on initialization
  const storedUser = localStorage.getItem(STORAGE_KEY)
  const UserInfo = ref(storedUser ? JSON.parse(storedUser) : null)

  // Watch for changes to UserInfo and save to localStorage
  watch(
    UserInfo,
    (newValue) => {
      if (newValue) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue))
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    },
    { deep: true },
  )

  function setUserInfo(id, email, role, fullName, photo, token) {
    UserInfo.value = { id, email, role, fullName, photo, token }
  }

  // Add a clear function to log out
  function clearUserInfo() {
    UserInfo.value = null
  }

  return { UserInfo, setUserInfo, clearUserInfo }
})
