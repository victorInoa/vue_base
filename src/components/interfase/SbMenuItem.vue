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
      isActive ? 'border-e-primary-full dark:border-e-secondary' : 'border-e-transparent',
      'px-4',
      'my-1',
      'hover:border-e-primary-full hover:dark:border-e-secondary',
      'border-r-4',
      'relative',
      'right-[-2px]',
      'group',
      'transition-all',
      'duration-400',
    ]"
    href="#"
    @click="$emit('click')"
  >
    <div
      :class="[
        isActive ? 'bg-primary-100 dark:bg-secondary dark:text-primary' : '',
        'p-3',
        'rounded-md',
        'overflow-x-hidden',
        'group-hover:bg-primary-100 dark:group-hover:bg-secondary',
        'transition-all',
        'duration-400',
      ]"
    >
      <div
        :class="[
          'flex   dark:hover:text-primary',
          isActive ? 'dark:text-primary' : 'dark:text-white',
        ]"
      >
        <div class="mr-0 md:mr-2">
          <Icon :icon="icon" height="20" width="20" />
        </div>
        <div class="grown font-bold hidden md:block text-nowrap">
          <slot />
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped></style>
