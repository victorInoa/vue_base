<script setup>
import { RouterView } from 'vue-router'

import HeaderMenu from '@/components/interfase/HeaderMenu.vue'
//import Main from '@/components/interfase/Main.vue'
import Footer from '@/components/interfase/Footer.vue'

import router from '@/router/index.js'
import { ref } from 'vue'
import { globalsStore } from '@/stores/globals.js'
import SspSbMenu from '@/components/interfase/sspSbMenu.vue'
const activeMenu = ref('home')
const __globals = globalsStore()
const handleMenusClick = (routeName) => {
  router.push({ name: routeName })
}
</script>

<template>
  <div v-if="__globals.currentRoute && __globals.currentRoute?.name === 'login'">
    <RouterView />
  </div>
  <div v-else class="h-screen w-screen flex flex-col items-stretch">
    <div><HeaderMenu /></div>
    <div class="flex grow items-stretch justify-items-stretch">
      <div class="hidden sm:block">
        <ssp-sb-menu />
      </div>
      <div class="grow p-5 max-h-[calc(100vh-144px)] overflow-y-auto scrolled"><RouterView /></div>
    </div>
    <div class="h-[72px]"><Footer /></div>
  </div>
</template>
