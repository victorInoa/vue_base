<script setup>
const props = defineProps({
  icon: {
    type: String,
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['info', 'warning', 'outline', 'gradient', 'default'].includes(value),
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['sm', 'md', 'xl', 'default'].includes(value),
  },
})

const id = 'badge_' + props.variant + '_' + props.size
</script>

<template>
  <div
    :id="id"
    :class="[
      'border-2 rounded-md font-bold transition inline-flex justify-center items-center space-x-2 text-sm capitalize',
      variant === 'info' && 'text-white border-transparent bg-info',
      variant === 'warning' && 'border-gray-400 hover:text-gray-200 hover:bg-gray-600',
      variant === 'outline' && 'bg-blue-800 hover:bg-blue-600 text-white border-transparent',
      variant === 'gradient' &&
        'bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 border-purple-800 text-white transition duration-700 ease-in-out' +
          'hover:bg-linear-to-br hover:from-pink-500 hover:via-purple-500 hover:to-blue-500',
      size === 'default' && 'p-2 text-base',
      size === 'small' && 'px-2 py-1 text-sm',
      size === 'large' && 'px-6 py-3 text-2xl',
      size === 'xlarge' && 'px-8 py-4 text-3xl',
    ]"
  >
    <slot />
  </div>
</template>
