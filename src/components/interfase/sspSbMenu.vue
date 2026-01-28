<script setup>
import SbMenuItem from '@/components/interfase/SbMenuItem.vue'
import { globalsStore } from '@/stores/globals.js'
import router from '@/router/index.js'
import { RouterLink } from 'vue-router'
const __globals = globalsStore()
</script>

<template>
  <div
    v-if="__globals.currentRoute && __globals.currentRoute?.name !== 'login'"
    class="h-full flex flex-col w-[84px] md:w-[200px] xl:w-max transition-all duration-150 ease-in-out border-e-2 border-e-gray-200 dark:border-gray-600"
  >
    <RouterLink v-slot="{ navigate, isActive }" :to="{ name: 'sspDashboard' }" custom>
      <SbMenuItem :isActive="isActive" icon="mdi:home-outline" @click="navigate"
        >Dashboard</SbMenuItem
      >
    </RouterLink>
    <RouterLink v-slot="{ navigate, isActive }" :to="{ name: 'sspPlatforms' }" custom>
      <SbMenuItem :isActive="isActive" icon="icon-park-outline:list" @click="navigate"
        >Plataformas</SbMenuItem
      >
    </RouterLink>

    <RouterLink v-slot="{ navigate, isActive }" :to="{ name: 'sspAds' }" custom>
      <SbMenuItem :isActive="isActive" icon="ic:outline-ads-click" @click="navigate"
        >Publicidad</SbMenuItem
      >
    </RouterLink>
    <RouterLink v-slot="{ navigate, isActive }" :to="{ name: 'sspUsers' }" custom>
      <SbMenuItem :isActive="isActive" icon="la:users" @click="navigate">Usuarios</SbMenuItem>
    </RouterLink>

    <RouterLink v-slot="{ navigate, isActive }" :to="{ name: 'configs' }" custom>
      <SbMenuItem :isActive="isActive" icon="hugeicons:dashboard-square-setting" @click="navigate"
        >Configuraciones</SbMenuItem
      >
    </RouterLink>
  </div>
</template>

<style scoped></style>
