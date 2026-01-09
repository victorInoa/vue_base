<script setup>
const props = defineProps({
  icon: {
    type: String,
  },
  variant: {
    type: String,
    default: 'muted',
    validator: (value) =>
      ['muted', 'info', 'success', 'warning', 'alert', 'outline', 'gradient'].includes(value),
  },
  size: {
    type: String,
    default: 'sm',
    validator: (value) => ['xs', 'sm', 'lg', 'md', 'xl'].includes(value),
  },
  id: {
    type: String,
  },
})

const customClass = 'badge_' + props.variant + '_' + props.size
</script>

<template>
  <div
    :id="id"
    :class="[
      customClass,
      'border-2 rounded-xl font-bold transition inline-flex justify-center items-center gap-x-1 text-sm capitalize',
      variant === 'muted' && 'bg-gray-200 text-gray-500 border-transparent',
      variant === 'success' && 'bg-green-100 text-green-500 border-transparent',
      variant === 'info' && 'bg-blue-200 text-blue-800 border-transparent',
      variant === 'warning' && 'bg-orange-100 text-orange-400 border-transparent',
      variant === 'alert' && 'bg-danger/10 text-danger/80 border-transparent',
      variant === 'outline' && 'bg-transparent text-gray-500 border-gray-500',
      variant === 'gradient' &&
        'bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 border-purple-800 text-white transition duration-700 ease-in-out' +
          'hover:bg-linear-to-br hover:from-pink-500 hover:via-purple-500 hover:to-blue-500',
      size === 'xs' && 'p-0 text-xs',
      size === 'sm' && 'px-1.5 py-0.5 text-base',
      size === 'md' && 'px-2 py-1 text-sm',
      size === 'lg' && 'px-6 py-3 text-2xl',
      size === 'xl' && 'px-8 py-4 text-3xl',
    ]"
  >
    <slot />
  </div>
</template>
