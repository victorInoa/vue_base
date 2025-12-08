<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { useI18n } from 'vue-i18n'
import CardBase from '@/components/base/CardBase.vue'
import ButtonBase from '@/components/base/forms/ButtonBase.vue'
import CardTitle from '@/components/cardTitle.vue'
const { t } = useI18n()

const i18nVar = t('home.title')
let apiUrl = import.meta.env.VITE_SERVER_ROOT_URL

const handleCardClick = () => {
  console.log('Card clicked')
}
</script>

<template>
  <SectionTitle>Sphinx of black quartz, judge my vow</SectionTitle>

  <h2 class="font-[700] font-acce text-3xl">
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
  <div class="flex flex-wrap flex-col md:flex-row">
    <CardBase class="mb-5">
      <template #header> Card title </template>
      <p>Description</p>
      <template #footer>
        <ButtonBase class="mt-5" @click="handleCardClick">Delete this one</ButtonBase>
      </template>
    </CardBase>
  </div>
</template>
