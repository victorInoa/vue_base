<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
let apiUrl = import.meta.env.VITE_SERVER_ROOT_URL
</script>

<template>
  <SectionTitle>Home</SectionTitle>

  <h2 class="font-[700] font-cave text-3xl">
    Ejemplo de uso de fuentes externas de Font sources de
    <a
      class="underline text-blue-800 hover:text-blue-600"
      href="https://fontsource.org/"
      target="_blank"
      >https://fontsource.org/</a
    >
  </h2>

  <p>{{ apiUrl }}</p>
</template>
