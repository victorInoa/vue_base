import { ref } from 'vue'
import { defineStore } from 'pinia'

export const globalsStore = defineStore('globals', () => {
  const currentRoute = ref(null)
  const beforeRoute = ref(null)

  function setCurrentRoute(route) {
    currentRoute.value = route
  }

  function setBeforeRoute(route) {
    beforeRoute.value = route
  }

  return { currentRoute, beforeRoute, setCurrentRoute, setBeforeRoute }
})
