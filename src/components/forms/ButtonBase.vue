<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'regular',
  },
})
</script>

<template>
  <button
    :class="[
      'border-slate-400 border-2 rounded-xl font-medium transition hover:text-slate-200 hover:bg-slate-600 hover:cursor-pointer',
      variant === 'default' && 'bg-primary text-slate-400',
      variant === 'secondary' && 'bg-secondary text-white',
      variant === 'outline' && 'border border-primary text-primary',
      size === 'regular' && 'px-4 py-2 text-base',
      size === 'small' && 'px-2 py-1 text-sm',
      size === 'large' && 'px-6 py-3 text-2xl',
      size === 'xlarge' && 'px-8 py-4 text-3xl',
    ]"
    :type="type"
  >
    <slot />
  </button>
</template>

<style scoped></style>
