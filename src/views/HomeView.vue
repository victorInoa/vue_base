<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const i18nVar = t('home.title')
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
  <p><strong>Use .env var</strong></p>
  <p>{{ apiUrl }}</p>

  <div class="mt-5 p-5 border border-gray-500 rounded-lg">
    <p><strong>Uso de i18n llamando desde &lt;theme&gt;:</strong></p>
    <p class="mb-5">{{ $t('home.description') }}</p>

    <p><strong>Uso de i18n llamando desde &lt;script setup&gt;:</strong></p>
    <p>{{ i18nVar }}</p>
  </div>
</template>
