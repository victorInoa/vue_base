<script setup>
import ButtonBase from '@/components/base/forms/ButtonBase.vue'
import InputTextBase from '@/components/base/forms/InputTextBase.vue'
import { Icon } from '@iconify/vue'
import CardBase from '@/components/base/CardBase.vue'
import InputPasswordBase from '@/components/base/forms/InputPasswordBase.vue'

import { darkModeStore } from '@/stores/darkMode.js'

import { onMounted, ref } from 'vue'
import { alertBase } from '@/composables/SweetAlerts.js'
import router from '@/router/index.js'
import AuthService from '@/services/AuthService.js'
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
  <div class="text-center h-[100px] mb-5 flex justify-center mt-5">
    <img v-if="!themeDarkMode.isDark" alt="Vue Base" src="@/assets/logo.svg" />
    <img v-else alt="Vue Base" src="@/assets/logo-dark.svg" />
  </div>
  <form action="" @submit.prevent="handleSubmit">
    <CardBase class="w-[90%] md:w-full">
      <template #header>
        <h2>Iniciar sesión</h2>
      </template>
      <InputTextBase class="mb-3" label="Email" name="user_email" placeholder="Escribe tu email" />
      <InputPasswordBase
        class="mb-3"
        label="Contraseña"
        name="password"
        placeholder="Escribe tu contraseña"
      />
      <template #footer>
        <ButtonBase :disabled="sendingLoginForm" type="submit" variant="gradient">
          <template v-if="sendingLoginForm">
            <div class="mr-2 inline">
              <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path d="M12 3c4.97 0 9 4.03 9 9" stroke-dasharray="18">
                    <animate
                      attributeName="stroke-dashoffset"
                      dur="0.3s"
                      fill="freeze"
                      values="18;0"
                    />
                    <animateTransform
                      attributeName="transform"
                      dur="1.5s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </path>
                  <path
                    d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
                    opacity="0.3"
                    stroke-dasharray="60"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      dur="1.2s"
                      fill="freeze"
                      values="60;0"
                    />
                  </path>
                </g>
              </svg>
            </div>
            Entrando a la plataforma
          </template>
          <template v-else>
            <Icon class="mr-2 inline" icon="mdi:account-key" />
            Enviar
          </template>
        </ButtonBase>
      </template>
    </CardBase>
  </form>
</template>
