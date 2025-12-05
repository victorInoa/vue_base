<script setup>
import { RouterLink } from 'vue-router'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import UserInfoHeader from '@/components/interfase/UserInfoHeader.vue'
import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()
</script>

<template>
  <header class="p-4 flex justify-between border-b-2 border-slate-400 w-full">
    <div class="max-w-7xl mx-auto w-full flex justify-between font-bold">
      <nav class="flex space-x-4 text-black dark:text-slate-200 align-center justify-center">
        <RouterLink :to="{ name: 'home' }" class="hover:text-cyan-300">Home</RouterLink>
        <RouterLink :to="{ name: 'evidences' }" class="hover:text-cyan-300">Evidencias</RouterLink>
        <RouterLink :to="{ name: 'reports' }" class="hover:text-cyan-300">Reports</RouterLink>
        <RouterLink :to="{ name: 'profile' }" class="hover:text-cyan-300" name="profile"
          >Mi perfil</RouterLink
        >
        <RouterLink :to="{ name: 'examples' }" class="hover:text-cyan-300 relative group/menu">
          Examples
          <ul
            class="group-hover/menu:block absolute top-6 left-0 hidden border border-slate-400 bg-white p-3 shadow-2xl"
          >
            <li>
              <routerLink :to="{ name: 'exampleForms' }" class="hover:text-red-500"
                >Forms</routerLink
              >
            </li>
            <li>
              <routerLink :to="{ name: 'exampleEmiter' }" class="hover:text-red-500"
                >Emiter</routerLink
              >
            </li>
          </ul>
        </RouterLink>
        <RouterLink
          v-if="authStore.UserInfo"
          :to="{ name: 'dashboard' }"
          class="hover:text-cyan-300"
          name="dashboard"
          >DashBoard</RouterLink
        >
      </nav>
      <div class="flex items-center">
        <DarkModeToggle />
      </div>
      <UserInfoHeader />
    </div>
  </header>
</template>

<style scoped>
/* Add any custom styles here */
</style>
