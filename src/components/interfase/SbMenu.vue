<script setup>
import SbMenuItem from '@/components/interfase/SbMenuItem.vue'
</script>

<template>
  <div
    class="h-full flex flex-col w-[84px] md:w-[200px] xl:w-max transition-all duration-150 ease-in-out border-e-2 border-e-gray-200 dark:border-gray-600"
  >
    <SbMenuItem icon="mdi:home-outline">Dashboard</SbMenuItem>
    <SbMenuItem icon="mdi:account">Evidencias</SbMenuItem>
    <SbMenuItem :isActive="true">Nombre de enlace muy largo</SbMenuItem>
  </div>
</template>

<style scoped></style>
