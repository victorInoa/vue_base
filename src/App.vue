<script setup>
import { RouterView } from 'vue-router'

import HeaderMenu from '@/components/interfase/HeaderMenu.vue'
import Main from '@/components/interfase/Main.vue'
import Footer from '@/components/interfase/Footer.vue'
import SbMenu from '@/components/interfase/SbMenu.vue'
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-stretch">
    <!--    <HeaderMenu />-->
    <div class="h-[78px]"><HeaderMenu /></div>
    <div class="flex grow items-stretch justify-items-stretch">
      <div class="hidden sm:block">
        <SbMenu />
      </div>
      <div class="grow">Body content</div>
    </div>
    <div class="h-[78px]">Footer</div>
  </div>
  <!--  <HeaderMenu />-->
  <!--  <SbMenu></SbMenu>-->
  <!--  <Main>-->
  <!--    <RouterView />-->
  <!--  </Main>-->
  <!--  <Footer />-->
</template>
