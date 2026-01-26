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
  size: {
    type: String,
    default: '50',
  },
})

const profileBorderColor = profilesTypes[props.profile]?.accent ?? '#E0FA25FF'

const alt = props.alt || 'profile'
</script>

<template>
  <div
    :class="['border-2 overflow-hidden box-border bg-white rounded-full flex object-cover']"
    :style="{
      borderColor: profileBorderColor,
      width: size + 'px',
      height: size + 'px',
    }"
  >
    <div class="rounded-full border-4 border-body overflow-hidden">
      <img
        :alt="alt"
        :class="[
          'w-full h-full object-cover',
          //'max-w-[' + (size - 8) + 'px] max-h-[' + (size - 8) + 'px]',
        ]"
        :src="src"
        :style="{
          //width: size * 1 + 10 + 'px',
          //height: size * 1 + 10 + 'px',
        }"
      />
    </div>
  </div>
</template>

<style scoped></style>
