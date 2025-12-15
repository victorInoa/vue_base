<script setup>
import SbMenuItem from '@/components/interfase/SbMenuItem.vue'
</script>

<template>
  <div
    class="h-full flex flex-col w-[84px] md:w-[200px] xl:w-[400px] transition-all duration-150 ease-in-out"
  >
    <SbMenuItem />
    <SbMenuItem />
    <SbMenuItem :isActive="true" />
  </div>
</template>

<style scoped></style>
