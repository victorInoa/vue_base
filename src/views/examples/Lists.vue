<script lang="ts" setup>
import SectionTitle from '@/components/SectionTitle.vue'
import ListTable from '@/components/base/ListTable.vue'

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

  <div class="mt-5">
    <ListTable></ListTable>
  </div>
</template>

<style scoped></style>
