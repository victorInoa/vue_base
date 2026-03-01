<script setup>
//import { RouterLink } from 'vue-router'
//import DarkModeToggle from '@/components/DarkModeToggle.vue'
//import UserInfoHeader from '@/components/interfase/UserInfoHeader.vue'
import { useAuthStore } from '@/stores/auth.js'
import { darkModeStore } from '@/stores/darkMode.js'
import { globalsStore } from '@/stores/globals.js'
import { Icon } from '@iconify/vue'

import { animate } from 'animejs'
import { ref, onMounted } from 'vue'

const icon = ref(null)

onMounted(() => {
  if (icon.value?.$el) {
    animate(icon.value.$el, {
      translateY: [0, -3, 0],
      duration: 1300,
      loop: true,
      easing: 'inBounce',
    })
  }
})

const moreDetails = ref(false)
//const moreDetailsPanel = document.querySelector('#toggle_more_info')
const moreDetailsToggle = () =>{
  const moreDetailsPanel = document.querySelector('#toggle_more_info')
  let contentHeight = moreDetailsPanel.scrollHeight
  animate('#toggle_more_info',{
          height: moreDetails.value ? 0 : contentHeight,
          duration: 400,
          easing: "easeInOutQuad",
          complete: () => {
            if (! moreDetails.value) {
              moreDetailsPanel.style.height = "auto"; // allow dynamic height
            }
          }
        });

  moreDetails.value = !moreDetails.value
  console.log(moreDetails.value)
}

//const themeDarkMode = darkModeStore()
//const authStore = useAuthStore()

const __globals = globalsStore()
</script>

<template>
  <div class="w-full h-[30px] px-4 py-2 bg-white text-obs2 text-xs text-center">
    <img src="/assets/osp/top-header/do-flag.svg" class="h-[16px] inline relative top-[-2px] mr-1"> Una web oficial de la
    <a href="https://www.lmd.gob.do" class="font-bold" target="_blank">Liga Municipal Dominicana</a
    >, de la
    <a class="font-bold" href="https://www.lmd.gob.do" target="_blank">República Dominicana</a>
    <a @click="moreDetailsToggle" class="hover:cursor-pointer text-obs1" title="Clic para más información">
      ¿Como comprobarlo?

      <Icon
        icon="mynaui:chevrons-down"
        width="16"
        height="16"
        class="inline"
        ref="icon"
      />
    </a>
  </div>
  <div id="toggle_more_info"  class="text-xs w-full overflow-hidden h-0  bg-sky-200 border-b-[2px] border-b-sky-600 text-white fixed">
    <div class="container container_body mx-auto flex flex-wrap">
      <div class="flex w-[50%] max-[900px]:w-full max-[900px]:mb-5 items-center">
        <div>
          <div class="mr-2 text-sky-600 rounded-full p-4 bg-sky-300">
            <Icon icon="fa7-solid:landmark-alt" width="32" height="32" />
          </div>
        </div>
        <div class="grow text-sky-800">
          <p><strong>Los sitios web oficiales utilizan .gob.do, .gov.do o .mil.do</strong></p>
          <p>Un sitio .gob.do, .gov.do o .mil.do significa que pertenece a una organización oficial del Estado dominicano.</p>
        </div>
      </div>
      <div class="flex w-[50%] max-[900px]:w-full  items-center">
        <div><div class="mr-2 text-sky-600 rounded-full p-4 bg-sky-300 ">
          <Icon icon="uis:padlock" width="32" height="32" />
        </div></div>
        <div class="grow text-sky-800">
          <p><strong>Los sitios web oficiales .gob.do, .gov.do o .mil.do seguros usan HTTPS</strong></p>
          <p>Un candado (🔒) o https:// significa que estás conectado a un sitio seguro dentro de .gob.do .gov.do. o .mil.do Comparte información confidencial solo en los sitios seguros de .gob.do o gov.do.</p>
        </div>
      </div>

    </div>
  </div>
  <div class="w-full h-[100px] bg-obs1 text-white">
    <div class="container container_general">

      <div class="flex justify-center items-center gap-4 m-auto">
        <div class="h-[64px] w-[103px]">
          <a href="https://lmd.gob.do/"><img alt="" src="/assets/obs/logo-lmd-inverted.svg" /></a>
        </div>
        <div class="h-[64px] w-[182px]">
          <a href="https://observatoriomunicipal.gob.do"><img alt="" src="/assets/obs/logo_obs_inverted.png" /></a>
        </div>
      </div>

    </div>
  </div>
  <!--  <header-->
  <!--    v-if="__globals.currentRoute && __globals.currentRoute?.name !== 'login'"-->
  <!--    class="overflow-y-visible h-[72px] p-4 flex justify-between border-b-2 border-gray-200 w-full dark:border-gray-600"-->
  <!--  >-->
  <!--    <div class="mx-auto flex justify-start font-bold w-full text-menu-default">-->
  <!--      <RouterLink :to="{ name: 'home' }" class="hover:text-menu-hover mr-4 flex-1 md:flex-none">-->
  <!--        <img-->
  <!--          v-if="!themeDarkMode.isDark"-->
  <!--          alt="Logo"-->
  <!--          class="w-32 top-[3px] relative"-->
  <!--          src="@/assets/logo.svg"-->
  <!--        />-->
  <!--        <img v-else alt="Logo" class="w-32 top-[3px] relative" src="@/assets/logo-dark.svg" />-->
  <!--      </RouterLink>-->
  <!--      <nav-->
  <!--        class="space-x-4 dark:text-slate-200 justify-start items-end hidden md:flex md:flex-1 top-[5px]"-->
  <!--      >-->
  <!--        <RouterLink :to="{ name: 'home' }" class="hover:text-menu-hover">Dashboard</RouterLink>-->
  <!--        <RouterLink :to="{ name: 'content' }" class="hover:text-menu-hover group/menu relative"-->
  <!--          >Contenido-->
  <!--          <ul-->
  <!--            class="group-hover/menu:block absolute top-6 left-0 hidden text-submenu-default border border-slate-400 bg-white p-5 shadow-2xl rounded-lg z-9999"-->
  <!--          >-->
  <!--            <li class="pb-4 border-slate-200 border-b-1">-->
  <!--              <routerLink :to="{ name: 'contentNews' }" class="hover:text-submenu-hover"-->
  <!--                >Noticias</routerLink-->
  <!--              >-->
  <!--            </li>-->
  <!--            <li class="pt-4">-->
  <!--              <routerLink :to="{ name: 'contentOpinions' }" class="hover:text-submenu-hover"-->
  <!--                >Opiniones</routerLink-->
  <!--              >-->
  <!--            </li>-->
  <!--          </ul>-->
  <!--        </RouterLink>-->

  <!--        <RouterLink-->
  <!--          v-if="authStore.UserInfo"-->
  <!--          :to="{ name: 'dashboard' }"-->
  <!--          class="hover:text-menu-hover"-->
  <!--          name="dashboard"-->
  <!--          >DashBoard</RouterLink-->
  <!--        >-->

  <!--        <RouterLink :to="{ name: 'examples' }" class="hover:text-menu-hover group/menu relative"-->
  <!--          >Examples-->
  <!--          <ul-->
  <!--            class="group-hover/menu:block absolute top-6 left-0 hidden text-submenu-default border border-slate-400 bg-white p-5 shadow-2xl rounded-lg z-9999"-->
  <!--          >-->
  <!--            <li class="pb-4 border-slate-200 border-b">-->
  <!--              <routerLink :to="{ name: 'exampleForms' }" class="hover:text-submenu-hover"-->
  <!--                >Forms</routerLink-->
  <!--              >-->
  <!--            </li>-->
  <!--            <li class="pb-4 pt-4 border-slate-200 border-b">-->
  <!--              <routerLink :to="{ name: 'exampleLists' }" class="hover:text-submenu-hover"-->
  <!--                >Lists</routerLink-->
  <!--              >-->
  <!--            </li>-->
  <!--            <li class="pt-4">-->
  <!--              <routerLink :to="{ name: 'exampleEmiter' }" class="hover:text-submenu-hover"-->
  <!--                >Emiter</routerLink-->
  <!--              >-->
  <!--            </li>-->
  <!--          </ul>-->
  <!--        </RouterLink>-->
  <!--      </nav>-->
  <!--      <div class="flex items-center">-->
  <!--        <DarkModeToggle />-->
  <!--      </div>-->
  <!--      <UserInfoHeader />-->
  <!--    </div>-->
  <!--  </header>-->
</template>

<style scoped>
/* Add any custom styles here */
</style>
