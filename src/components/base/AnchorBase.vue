<script setup>
defineProps({
  href: { type: String, default: '#' },
  variant: {
    type: String,
    default: 'muted',
    validator: (value) =>
      ['muted', 'info', 'success', 'warning', 'alert', 'outline'].includes(value),
  },
})
</script>

<template>
  <a
    :class="[
      'text-blue-600 hover:underline inline-flex justify-center items-center gap-x-0.1 text-sm',
      variant === 'muted' && 'text-gray-500 border-transparent',
      variant === 'success' && 'text-green-500 border-transparent',
      variant === 'info' && ' text-blue-800 border-transparent',
      variant === 'warning' && 'text-orange-400 border-transparent',
      variant === 'alert' && 'text-danger/80 border-transparent',
      variant === 'outline' && ' text-gray-500 border-gray-500',
    ]"
    :href="href"
    ><slot></slot
  ></a>
</template>
