<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import ListTableBase from '@/components/base/ListTableBase.vue'
import TitleBody from '@/components/base/TitleBody.vue'
import ListTableWrappedBase from '@/components/base/ListTableWrappedBase.vue'

const list = [
  {
    header: ['id', 'name'],
    body: {},
    footer: {},
  },
]
</script>

<template>
  <div class="text-center">
    <section-title>Como presentar listas</section-title>
  </div>

  <TitleBody>Usuarios creados recientemente</TitleBody>
  <div class="mb-5">
    <ListTableBase></ListTableBase>
  </div>

  <TitleBody>Lista de usuarios mas activos</TitleBody>
  <div class="mb-5">
    <ListTableBase></ListTableBase>
  </div>

  <TitleBody>Acciones realizadas durante el dia</TitleBody>
  <div class="mb-5">
    <ListTableWrappedBase></ListTableWrappedBase>
  </div>
</template>

<style scoped></style>
