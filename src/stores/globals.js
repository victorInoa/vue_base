import { ref } from 'vue'
import { defineStore } from 'pinia'

export const globalsStore = defineStore('globals', () => {
  const currentRoute = ref(null)
  const beforeRoute = ref(null)

  const profilesTypes = [
    {
      GOD: {
        accent: 'rgba(182,29,30,1)',
        background: 'rgba(182,29,30,.15)',
        border: 'rgba(146,21,22,1)',
      },
      SU_ADMIN: {
        accent: 'rgba(252,194,56,1)',
        background: 'rgba(252,194,56,.15)',
        border: 'rgba(191,144,31,1)',
      },
      ADMIN: {
        accent: 'rgba(13,92,165,1)',
        background: 'rgba(13,92,165,.15)',
        border: 'rgba(10,71, 128,1)',
      },
      ADMIN_DEMO: {
        accent: 'rgba(118,118,118,1)',
        background: 'rgba(118,118,118,.15)',
        border: 'rgba(118,118,118,1)',
      },
      LINK: {
        accent: 'rgba(111,155,46,1)',
        background: 'rgba(111,155,46,.15)',
        border: 'rgba(79,114,26,1)',
      },
      LINK_DEMO: {
        accent: 'rgba(89,109,128,1)',
        background: 'rgba(89,109,128,.15)',
        border: 'rgba(89,109,128,1)',
      },
    },
  ]

  function setCurrentRoute(route) {
    currentRoute.value = route
  }

  function setBeforeRoute(route) {
    beforeRoute.value = route
  }

  return { profilesTypes, currentRoute, beforeRoute, setCurrentRoute, setBeforeRoute }
})
