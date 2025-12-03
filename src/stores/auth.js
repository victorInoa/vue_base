import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('auth', () => {
  const UserInfo = ref(null)
  function setUserInfo(id, email, role, fullName) {
    UserInfo.value = { id: id, email: email, fullName: fullName, role: role }
  }

  return { UserInfo, setUserInfo }
})
