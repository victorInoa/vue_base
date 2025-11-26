<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import InputTextBase from '@/components/base/forms/InputTextBase.vue'
import InputPasswordBase from '@/components/base/forms/InputPasswordBase.vue'
import ButtonBase from '@/components/base/forms/ButtonBase.vue'
import { Icon } from '@iconify/vue'
import CardBase from '@/components/base/CardBase.vue'
import axios from 'axios'
const handleSubmit = () => {
  console.log('----submitting')
  const formData = new FormData(event.target)
  console.log(formData)
  console.log(formData.get('user_name'))
  console.log(formData.get('password'))
  login(formData)
}

async function login(formData) {
  try {
    const response = await axios.post('http://localhost:8000', {
      user_name: formData.get('user_name'),
      password: formData.get('password'),
      action: 'login',
    })

    if (response.statusText !== 'OK') {
      throw new Error('Error al hacer login')
    }
  } catch (error) {
    console.error('Error al hacerlo: ' + error.message)
  }
}
</script>

<template>
  <section-title>Como usar un formulario</section-title>

  <form action="" @submit.prevent="handleSubmit">
    <CardBase>
      <template #header>
        <h2>Formulario de registro</h2>
      </template>

      <InputTextBase
        id="input_name"
        class="mb-3"
        label="Usuario"
        name="user_name"
        placeholder="Escribe tu nombre de usuario"
      />

      <InputPasswordBase
        id="input_password"
        class="mb-3"
        label="Contraseña"
        name="password"
        placeholder="Escribe tu contraseña"
      />
      <template #footer>
        <ButtonBase type="submit" variant="gradient">
          <Icon class="mr-2 inline" icon="fluent-color:send-clock-20" />
          Enviar
        </ButtonBase>
      </template>
    </CardBase>
  </form>
</template>

<style scoped></style>
