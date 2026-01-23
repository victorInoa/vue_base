<script setup>
import { useAuthStore } from '@/stores/auth.js'
import router from '@/router/index.js'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import AuthService from '@/services/AuthService.js'
import ProfilePhoto from '@/components/base/ProfilePhoto.vue'
const authService = new AuthService()
const authStore = useAuthStore()
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
            @click="(authService.logOut(), router.push({ name: 'login' }))"
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
    <a v-if="authStore.UserInfo" class="hover:cursor-pointer" @click="router.push({ name: 'profile' })">
      <ProfilePhoto
        :profile="authStore.UserInfo.role"
        :src="authStore.UserInfo.photo"
        size="60"
      ></ProfilePhoto>
      <!--      <img alt="profile" class="object-cover w-full h-full" src="/assets/profiles/vinoa.jpg" />-->
    </a>
    <div v-else class="inline dark:text-white">
      <Icon height="48" icon="material-symbols-light:account-circle" width="48" />
    </div>
  </div>
</template>

<style scoped></style>
