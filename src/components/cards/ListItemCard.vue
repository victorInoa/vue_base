<script setup>
import CardBase from '@/components/base/CardBase.vue'
import ButtonBase from '@/components/base/forms/ButtonBase.vue'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <CardBase class="mb-5">
    <template #header>
      <h2>{{ item.name }}</h2>
    </template>
    <p>{{ item.description }}</p>
    <template #footer>
      <ButtonBase class="mt-5" @click="$emit('card_clicked', item.id)">Delete this one</ButtonBase>
    </template>
  </CardBase>
</template>

<style scoped></style>
