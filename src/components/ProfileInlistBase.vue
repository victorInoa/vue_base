<script setup>
import { globalsStore } from '@/stores/globals.js'
const profilesTypes = globalsStore().profilesTypes[0]
const props = defineProps({
  alt: {
    type: String,
  },
  src: {
    type: String,
    default: import.meta.env.VITE_SERVER_ROOT_URL + 'assets/profiles/vinoa.jpg',
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
    class="border-2 rounded-full overflow-hidden p-0.5 size-[50px] box-border bg-white"
  >
    <img
      :alt="alt"
      :src="src"
      class="object-cover rounded-full overflow-hidden w-100 h-100 box-border max-w-[42px] max-h-[42px]"
    />
  </div>
</template>

<style scoped></style>
