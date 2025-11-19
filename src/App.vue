<script setup>
import { RouterView } from 'vue-router'

import HeaderMenu from '@/components/interfase/HeaderMenu.vue'
import Main from '@/components/interfase/Main.vue'
import Footer from '@/components/interfase/Footer.vue'
</script>

<template class="bg-red-300 h-screen">
  <HeaderMenu />
  <Main>
    <RouterView />
  </Main>
  <Footer />
</template>
