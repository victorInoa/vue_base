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
    <RouterLink v-slot="{ navigate, isActive }" :to="{ name: 'home' }" custom>
      <SbMenuItem :isActive="isActive" icon="mdi:home-outline" @click="navigate"
        >Dashboard</SbMenuItem
      >
    </RouterLink>
    <RouterLink v-slot="{ navigate, isActive }" :to="{ name: 'evidences' }" custom>
      <SbMenuItem :isActive="isActive" icon="icon-park-outline:list" @click="navigate"
        >Evidecias</SbMenuItem
      >
    </RouterLink>

    <SbMenuItem
      :isActive="activeItem === 'users'"
      icon="la:users"
      @click="(router.push({ name: 'users' }), setActive('users'))"
      >Usuarios</SbMenuItem
    >
    <RouterLink v-slot="{ navigate, isActive }" :to="{ name: 'exampleLists' }" custom>
      <SbMenuItem :isActive="isActive" icon="icon-park-outline:list" @click="navigate"
        >Ejemplo de listas</SbMenuItem
      >
    </RouterLink>
    <SbMenuItem
      :isActive="activeItem === 'configs'"
      icon="hugeicons:dashboard-square-setting"
      @click="(router.push({ name: 'configs' }), setActive('configs'))"
      >Configuraciones</SbMenuItem
    >
  </div>
</template>

<style scoped></style>
