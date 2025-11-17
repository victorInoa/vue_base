<script setup>
import { RouterView } from 'vue-router'

import HeaderMenu from '@/components/interfase/HeaderMenu.vue'
import Main from '@/components/interfase/Main.vue'
import Footer from '@/components/interfase/Footer.vue'
</script>

<template>
  <HeaderMenu />
  <Main>
    <RouterView />
  </Main>
  <Footer />
</template>
