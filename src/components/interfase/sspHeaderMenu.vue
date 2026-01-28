<script setup>
import { RouterLink } from 'vue-router'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import UserInfoHeader from '@/components/interfase/UserInfoHeader.vue'
import { useAuthStore } from '@/stores/auth.js'
import { darkModeStore } from '@/stores/darkMode.js'
import { globalsStore } from '@/stores/globals.js'

const themeDarkMode = darkModeStore()
const authStore = useAuthStore()

const __globals = globalsStore()
</script>

<template>
  <header
    v-if="__globals.currentRoute && __globals.currentRoute?.name !== 'login'"
    class="overflow-y-visible h-[72px] p-4 flex justify-between border-b-2 border-gray-200 w-full dark:border-gray-600"
  >
    <div class="mx-auto flex justify-start font-bold w-full text-menu-default">
      <RouterLink :to="{ name: 'home' }" class="hover:text-menu-hover mr-4 flex-1 md:flex-none">
        <img
          v-if="!themeDarkMode.isDark"
          alt="Logo"
          class="w-32 top-[3px] relative"
          src="@/assets/logo.svg"
        />
        <img v-else alt="Logo" class="w-32 top-[3px] relative" src="@/assets/logo-dark.svg" />
      </RouterLink>
      <nav
        class="space-x-4 dark:text-slate-200 justify-start items-end hidden md:flex md:flex-1 top-[5px]"
      >
        <RouterLink :to="{ name: 'sspDashboard' }" class="hover:text-menu-hover"
          >Dashboard</RouterLink
        >
        <RouterLink :to="{ name: 'content' }" class="hover:text-menu-hover group/menu relative"
          >Contenido
          <ul
            class="group-hover/menu:block absolute top-6 left-0 hidden text-submenu-default border border-slate-400 bg-white p-5 shadow-2xl rounded-lg z-9999"
          >
            <li class="pb-4 border-slate-200 border-b-1">
              <routerLink :to="{ name: 'contentNews' }" class="hover:text-submenu-hover"
                >Noticias</routerLink
              >
            </li>
            <li class="pt-4">
              <routerLink :to="{ name: 'contentOpinions' }" class="hover:text-submenu-hover"
                >Opiniones</routerLink
              >
            </li>
          </ul>
        </RouterLink>

        <RouterLink
          v-if="authStore.UserInfo"
          :to="{ name: 'dashboard' }"
          class="hover:text-menu-hover"
          name="dashboard"
          >DashBoard</RouterLink
        >

        <RouterLink :to="{ name: 'examples' }" class="hover:text-menu-hover group/menu relative"
          >Examples
          <ul
            class="group-hover/menu:block absolute top-6 left-0 hidden text-submenu-default border border-slate-400 bg-white p-5 shadow-2xl rounded-lg z-9999"
          >
            <li class="pb-4 border-slate-200 border-b">
              <routerLink :to="{ name: 'exampleForms' }" class="hover:text-submenu-hover"
                >Forms</routerLink
              >
            </li>
            <li class="pb-4 pt-4 border-slate-200 border-b">
              <routerLink :to="{ name: 'exampleLists' }" class="hover:text-submenu-hover"
                >Lists</routerLink
              >
            </li>
            <li class="pt-4">
              <routerLink :to="{ name: 'exampleEmiter' }" class="hover:text-submenu-hover"
                >Emiter</routerLink
              >
            </li>
          </ul>
        </RouterLink>
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
