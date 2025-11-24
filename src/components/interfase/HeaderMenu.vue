<script setup>
import { RouterLink } from 'vue-router'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
</script>

<template>
  <header class="p-4 flex justify-between border-b-2 border-slate-400">
    <div class="max-w-7xl mx-auto w-full flex justify-between font-bold">
      <nav class="flex space-x-4 text-black dark:text-slate-200 align-center justify-center">
        <RouterLink class="hover:text-cyan-300" to="/">Home</RouterLink>
        <RouterLink class="hover:text-cyan-300" to="/evidences">Evidencias</RouterLink>
        <RouterLink class="hover:text-cyan-300" to="/reports">Reports</RouterLink>
        <RouterLink class="hover:text-cyan-300" to="/profile">Mi perfil</RouterLink>
        <RouterLink class="hover:text-cyan-300 relative group/menu" to="/examples/">
          Examples
          <ul
            class="group-hover/menu:block absolute top-6 left-0 hidden border border-slate-400 bg-amber-50 p-3"
          >
            <li>
              <routerLink class="hover:text-red-500" to="/examples/forms">Forms</routerLink>
            </li>
            <li><routerLink class="hover:text-red-500" to="/examples/emiter">Emiter</routerLink></li>
          </ul>
        </RouterLink>
      </nav>
      <div class="flex items-center">
        <DarkModeToggle />
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex flex-col space-y-1">
          <a
            class="font-semibold text-gray-800 transition-colors duration-300 dark:text-gray-200 sm:text-lg dark:hover:text-primary hover:text-primary hover:underline"
            href="https://www.creative-tim.com/twcomponents/component/white-footer"
            >Victor Inoa</a
          >
        </div>
        <a
          class="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full"
          href="https://www.creative-tim.com/twcomponents/u/ragandroll"
          ><img
            alt="RagAndRoll"
            class="object-cover w-full h-full"
            src="https://avatars.githubusercontent.com/u/79159146?v=4"
        /></a>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Add any custom styles here */
</style>
