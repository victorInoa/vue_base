<script setup>
import { useAuthStore } from '@/stores/auth.js'
import router from '@/router/index.js'
const authStore = useAuthStore()
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="items-center space-x-4 flex group/menu-user relative">
    <div
      class="flex-col items-center space-x-4 group-hover/menu-user:block hidden absolute top-8 right-[-20px] z-999"
    >
      <ul
        v-if="authStore.UserInfo"
        class="border border-slate-400 bg-white p-5 shadow-2xl rounded-lg z-9999"
      >
        <li class="pb-4 border-slate-200 border-b-1">
          <routerLink :to="{ name: 'configs' }" class="hover:text-red-500"
            >Configuraciones</routerLink
          >
        </li>
        <li class="pt-4">
          <a
            class="hover:text-red-500 hover:cursor-pointer"
            @click="(authStore.clearUserInfo(), router.push({ name: 'login' }))"
            >Log Out</a
          >
        </li>
      </ul>
      <ul v-else class="border border-slate-400 bg-white p-5 shadow-2xl rounded-lg z-9999">
        <li class="pb-4 border-slate-200 border-b-1">
          <routerLink :to="{ name: 'login' }" class="hover:text-red-500">Iniciar Sesión</routerLink>
        </li>
        <!--        <li class="pt-4">-->
        <!--          <routerLink :to="{ name: 'register' }" class="hover:text-red-500">Registrarse</routerLink>-->
        <!--        </li>-->
      </ul>
    </div>
    <a
      v-if="authStore.UserInfo"
      class="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full cursor-pointer hover:border-indigo-600 border-2 border-transparent transition-colors duration-300"
      @click="router.push({ name: 'profile' })"
    >
      <img alt="profile" class="object-cover w-full h-full" src="/assets/profiles/vinoa.jpg" />
    </a>
    <div v-else class="inline dark:text-white">
      <Icon height="48" icon="material-symbols-light:account-circle" width="48" />
    </div>
  </div>
</template>

<style scoped></style>
