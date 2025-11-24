<script setup>
import { ref } from 'vue'
import ListItemCard from '@/components/cards/ListItemCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'

const ListItems = ref([
  {
    id: 1,
    name: 'Item 1',
    description: 'Description item 1',
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Description item 2',
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'Description item 3',
  },
])

const handleCardClick = (id) => {
  console.log('Card clicked, ID:' + id)
  ListItems.value = ListItems.value.filter((item) => item.id !== id)
}
</script>

<template>
  <div class="text-center mb-5">
    <SectionTitle>Emit</SectionTitle>
    <p>Como emitir un evento desde un componente hijo</p>
  </div>

  <ListItemCard
    v-for="item in ListItems"
    v-bind:key="item.id"
    :item="item"
    @card_clicked="handleCardClick"
  />
</template>

<style scoped></style>
