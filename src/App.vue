<script setup>
import { RouterView } from 'vue-router'

import HeaderMenu from '@/components/interfase/HeaderMenu.vue'
//import Main from '@/components/interfase/Main.vue'
import Footer from '@/components/interfase/Footer.vue'
import SbMenu from '@/components/interfase/SbMenu.vue'
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-stretch">
    <div><HeaderMenu /></div>
    <div class="flex grow items-stretch justify-items-stretch">
      <div class="hidden sm:block">
        <SbMenu />
      </div>
      <div class="grow p-5 max-h-[calc(100vh-144px)] overflow-y-auto scrolled"><RouterView /></div>
    </div>
    <div class="h-[72px]"><Footer /></div>
  </div>
</template>
