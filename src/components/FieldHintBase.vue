<script setup>

import { Icon } from '@iconify/vue'

</script>

<template>

  <div :class="['w-full flex text-xs rounded-lg px-2 items-center']">
    <div>
      <div class="rounded-[50%] p-0.5 bg-orange-50 text-yellow-600 mr-2">
        <Icon icon="line-md:check-all" width="16" height="16" />
      </div>
    </div>
    <div class="grow text-yellow-600 font-bold italic">
      <slot></slot>
    </div>
  </div>

</template>

<style scoped></style>
