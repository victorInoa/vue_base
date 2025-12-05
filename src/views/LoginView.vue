<script setup>
import ButtonBase from '@/components/base/forms/ButtonBase.vue'
import InputTextBase from '@/components/base/forms/InputTextBase.vue'
import { Icon } from '@iconify/vue'
import CardBase from '@/components/base/CardBase.vue'
import InputPasswordBase from '@/components/base/forms/InputPasswordBase.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { ref } from 'vue'
import axios from 'axios'
import { alertBase } from '@/composables/SweetAlerts.js'
import { useAuthStore } from '@/stores/auth.js'
import router from '@/router/index.js'

const sendingLoginForm = ref(false)

const handleSubmit = () => {
  console.log('----submitting')
  const formData = new FormData(event.target)
  //console.log(formData)
  console.log(formData.get('user_email'))
  console.log(formData.get('password'))
  login(formData)
}

async function login(formData) {
  try {
    sendingLoginForm.value = true
    const response = await axios.post('', {
      user_email: formData.get('user_email'),
      password: formData.get('password'),
      action: 'login',
    })

    if (response.statusText !== 'OK') {
      throw new Error('Error al hacer login')
    }

    if (response.data.status === 'error') {
      await alertBase(response.data.message, 'error', 'Error', 'Footer')
    }
    if (response.data.status === 'warning') {
      await alertBase(
        response.data.message +
          '\n Datos pasados: <strong>Email:</strong> ' +
          response.data.data.userEmail +
          ' <strong>Password:</strong> ' +
          response.data.data.password,
        'warning',
        'Advertencia',
        '<strong>Email:</strong> victorinoa16@gmail.com, <strong>Password:</strong> password',
      )
    }
    if (response.data.status === 'ok') {
      await alertBase(response.data.message, 'success', 'Exito', 'Footer').then(() => {
        const authStore = useAuthStore()
        authStore.setUserInfo(
          response.data.data.id,
          response.data.data.email,
          response.data.data.role,
          response.data.data.fullName,
        )

        console.log(authStore.UserInfo)

        router.push({ name: 'dashboard' })
      })
    }

    sendingLoginForm.value = false
  } catch (error) {
    await alertBase(
      `<strong>No se pudo hacer la conexión</strong> <br>\n` + error.message,
      'error',
      'Error',
    )
    sendingLoginForm.value = false
    console.error('Error al hacerlo: ' + error.message)
  }
}
</script>

<template>
  <div class="text-center">
    <section-title>Login</section-title>
  </div>
  <form action="" @submit.prevent="handleSubmit">
    <CardBase>
      <template #header>
        <h2>Formulario de registro</h2>
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
            <Icon class="mr-2 inline" icon="svg-spinners:pulse-2" /> Sending request
          </template>
          <template v-else>
            <Icon class="mr-2 inline" icon="fluent-color:send-clock-20" />
            Enviar
          </template>
        </ButtonBase>
      </template>
    </CardBase>
  </form>
</template>

<style scoped></style>
