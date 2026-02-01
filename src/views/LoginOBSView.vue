<script lang="ts" setup>
import InputTextBase from '@/components/base/forms/InputTextBase.vue'
import InputPasswordBase from '@/components/base/forms/InputPasswordBase.vue'
import AnchorBase from '@/components/base/AnchorBase.vue'
import ButtonBase from '@/components/base/forms/ButtonBase.vue'

import { darkModeStore } from '@/stores/darkMode.js'

import { onMounted, ref } from 'vue'
import { alertBase } from '@/composables/SweetAlerts.js'
import router from '@/router/index.js'
import AuthService from '@/services/AuthService.js'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

const sendingLoginForm = ref(false)

const themeDarkMode = darkModeStore()

const Auth = new AuthService()

async function handleSubmit() {
  const formData = new FormData(event.target)
  console.log('----submitting')
  sendingLoginForm.value = true
  try {
    await Auth.login(formData.get('user_email'), formData.get('password')).then(() => {
      router.push({ name: 'dashboard' })
      sendingLoginForm.value = false
    })
  } catch (Error) {
    await alertBase(
      '<strong>No se pudo hacer la conexión</strong> <br>\n La plataforma no encuentra el servidor<br> <span class="text-orange-400 font-bold">Favor contactar la administración</span>',
      'error',
      'Error',
    )
    sendingLoginForm.value = false
    console.error('Error al hacerlo: ' + Error.message)
  }
}
onMounted(() => {
  themeDarkMode.checkDarkMode()
})
</script>

<template>
  <!-- Slider main container -->
  <!--  <div class="swiper_slider z-9999 bg-red-500 w-60 h-30">-->
  <!-- Additional required wrapper -->

  <!--  </div>-->
  <div class="flex h-screen bg-[#cacaca]">
    <div class="hero-bg h-[330px] bg-blue-700 absolute w-full top-0 z-0"></div>
    <div class="flex flex-col w-screen z-10 mt-8 items-center">
      <div class="flex justify-center items-center gap-4 w-[90%] max-w-[900px]">
        <div class="h-[140px] w-[223px]">
          <a href="#"><img alt="" src="/assets/obs/logo-lmd-inverted.svg" /></a>
        </div>
        <div class="h-[140px] w-[283px]">
          <a href="#"><img alt="" src="/assets/obs/logo_obs_inverted.png" /></a>
        </div>
      </div>
      <div
        class="login-container h-[470px] overflow-hidden flex w-[90%] max-w-[900px] max-h-content rounded-2xl bg-white z-20 self-center mt-8 relative drop-shadow-lg"
      >
        <form action="" @submit.prevent="handleSubmit">
          <div class="w-[528px] pt-12 pl-12 pb-12 pr-[115px] flex flex-col login-form-container">
            <div class="flex flex-col inputs-container gap-4">
              <div>
                <input-text-base
                  label="Correo electrónico"
                  name="user_email"
                  placeholder="Escribe tu email"
                ></input-text-base>
              </div>
              <div>
                <input-password-base
                  label="Contraseña"
                  name="password"
                  placeholder="Escribe tu contraseña"
                  type="password"
                ></input-password-base>
              </div>
              <div>
                <button-base class="bg_accent" type="submit">Entrar</button-base>
              </div>
            </div>
            <div class="flex flex-col gap-4 items-start justify-start links-container mt-30">
              <anchor-base class="text_accent font-bold" href="#"
                >¿Perdió su contraseña?</anchor-base
              >
              <anchor-base class="text_accent font-bold" href="#">Crear cuenta</anchor-base>
            </div>
          </div>
        </form>
        <div
          class="h-[602px] w-[515px] grow slides-container border-l-[30px] border-l-red-600 rotate-15 bg-amber-100 ml-[-40px] mt-[-55px] overflow-hidden absolute right-[-48px]"
        >
          <div class="rotate-[-15deg] left-[-69px] top-[3px] relative">
            <swiper
              :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }"
              :loop="true"
              :modules="[Autoplay]"
              :slides-per-view="1"
              class="w-[515px] h-[602px]"
              @slideChange="onSlideChange"
              @swiper="onSwiper"
            >
              <SwiperSlide class="h-full">
                <div class="w-full h-full flex items-center justify-center">
                  <img class="" src="/assets/obs/login-slides/slide-1.jpg" />
                </div>
              </SwiperSlide>
              <SwiperSlide class="h-full">
                <div class="w-full h-full flex items-center justify-center">
                  <img class="" src="/assets/obs/login-slides/slide-2.jpg" />
                </div>
              </SwiperSlide>
              <SwiperSlide class="h-full">
                <div class="w-full h-full flex items-center justify-center">
                  <img class="" src="/assets/obs/login-slides/slide-3.jpg" />
                </div>
              </SwiperSlide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background-image: url('/assets/obs/login_bg_hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
