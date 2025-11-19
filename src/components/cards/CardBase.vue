<script setup></script>

<template>
  <div class="card max-w-[600px] border-2 mx-auto border-slate-400 rounded-xl p-5 shadow-lg">
    <header class="text-2xl mb-3 font-semibold">
      <slot name="header" />
    </header>
    <slot />
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped></style>
