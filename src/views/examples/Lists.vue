<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import ListTable from '@/components/base/ListTable.vue'
import TitleBody from '@/components/base/TitleBody.vue'

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

  <div class="mb-5">
    <ListTable></ListTable>
  </div>

  <TitleBody>asdjkh aksdha</TitleBody>
  <div class="mb-5">
    <ListTable></ListTable>
  </div>
</template>

<style scoped></style>
