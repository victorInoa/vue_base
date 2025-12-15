<script setup>
import { Icon } from '@iconify/vue'
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: 'proicons:dot-square',
  },
})
</script>

<template>
  <a
    :class="[
      isActive ? 'border-e-amber-300' : 'border-e-transparent',
      'px-4',
      'my-1',
      'hover:border-e-amber-300',
      'border-r-4',
      'relative',
      'right-[-2px]',
      'group',
      'transition-all',
      'duration-400',
    ]"
    href="#"
  >
    <div
      :class="[
        isActive ? 'bg-emerald-200' : '',
        'p-3',
        'rounded-md',
        'overflow-x-hidden',
        'group-hover:bg-emerald-200',
        'transition-all',
        'duration-400',
      ]"
    >
      <div class="flex">
        <div class="mr-0 md:mr-4">
          <Icon :icon="icon" height="20" width="20" />
        </div>
        <div class="grown font-bold text-black hidden md:block">DashBoard</div>
      </div>
    </div>
  </a>
</template>

<style scoped></style>
