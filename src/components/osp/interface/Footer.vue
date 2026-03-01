<script setup>
import { RouterLink } from 'vue-router'
//import { darkModeStore } from '@/stores/darkMode.js'

//const themeDarkMode = darkModeStore()
</script>

<template>

  <div
    class="mx-auto w-full  p-3 text-gray-600 dark:text-gray-400 border-t-2 border-t-gray-200 dark:border-gray-600 "
  >

    <div class="container max-w-[990px] px-5 flex justify-between items-center">
      <div class="text-obs1 text-xs">
        © 2026 - Todos derechos reservados.
      </div>

      <RouterLink :to="{ name: 'home' }" class="hover:text-secondary mr-4">
        <img alt="Logo" class="w-auto h-[28px] relative" src="/assets/osp/logo-observatorio-municipal-lmd.png" />
      </RouterLink>
    </div>



  </div>
</template>

<style scoped></style>
