<script setup>
import SbMenuItem from '@/components/interfase/SbMenuItem.vue'
</script>

<template>
  <div
    class="h-full flex flex-col w-[84px] md:w-[200px] xl:w-max transition-all duration-150 ease-in-out border-e-2 border-e-gray-200 dark:border-gray-600"
  >
    <SbMenuItem icon="mdi:home-outline">Dashboard</SbMenuItem>
    <SbMenuItem icon="icon-park-outline:list">Evidencias</SbMenuItem>
    <SbMenuItem :isActive="true" icon="la:users">Usuarios</SbMenuItem>
    <SbMenuItem icon="hugeicons:dashboard-square-setting">Configuraciones</SbMenuItem>
  </div>
</template>

<style scoped></style>
