<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'gradient'].includes(value),
  },
  size: {
    type: String,
    default: 'regular',
    validator: (value) => ['small', 'regular', 'large', 'xlarge'].includes(value),
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value),
  },
})
</script>

<template>
  <button
    :class="[
      'border-2 rounded-xl font-medium transition hover:cursor-pointer flex items-center space-x-2 hover:shadow-md shadow-slate-400 dark:shadow-blue-900',
      variant === 'secondary' && 'text-white border-transparent bg-gray-400 hover:bg-gray-600',
      variant === 'outline' && 'border-slate-400 hover:text-slate-200 hover:bg-slate-600',
      variant === 'primary' && 'bg-blue-800 hover:bg-blue-600 text-white border-transparent',
      variant === 'gradient' &&
        'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 border-purple-800 text-white transition duration-700 ease-in-out' +
          'hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-blue-500',
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
