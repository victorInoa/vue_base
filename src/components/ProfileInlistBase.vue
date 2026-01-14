<script setup>
import { globalsStore } from '@/stores/globals.js'
const profilesTypes = globalsStore().profilesTypes[0]
const props = defineProps({
  alt: {
    type: String,
  },
  src: {
    type: String,
    default: '/assets/profiles/vinoa.jpg',
  },
  profile: {
    type: String,
    default: 'LINK',
  },
})

const profileBorderColor = profilesTypes[props.profile]?.accent ?? '#E0FA25FF'

const alt = props.alt || 'profile'
</script>

<template>
  <div
    :style="{ borderColor: profileBorderColor }"
    class="border-2 rounded-full object-cover overflow-hidden h-9 w-9 p-0.5"
  >
    <img :alt="alt" :src="src" class="rounded-full" height="40" width="40" />
  </div>
</template>

<style scoped></style>
