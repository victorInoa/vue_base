<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import InputTextBase from '@/components/base/forms/InputTextBase.vue'
import InputPasswordBase from '@/components/base/forms/InputPasswordBase.vue'
import ButtonBase from '@/components/base/forms/ButtonBase.vue'
import { Icon } from '@iconify/vue'
import CardBase from '@/components/base/CardBase.vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { alertBase } from '@/composables/SweetAlerts'
import { onMounted } from 'vue'
import LabelBase from '@/components/base/forms/LabelBase.vue'
import TextAreaBase from '@/components/base/forms/TextAreaBase.vue'
import RadioBase from '@/components/base/forms/RadioBase.vue'
import CheckboxBase from '@/components/base/forms/CheckboxBase.vue'
import FileBase from '@/components/base/forms/FileBase.vue'

const handleSubmit = () => {
  console.log('----submitting')
  const formData = new FormData(event.target)
  //console.log(formData)
  console.log(formData.get('user_name'))
  console.log(formData.get('password'))
  login(formData)
}

async function login(formData) {
  try {
    const response = await axios.post('', {
      user_name: formData.get('user_name'),
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
          '\n Datos pasados: <strong>Nombre:</strong> ' +
          response.data.data.user_name +
          ' <strong>Password:</strong> ' +
          response.data.data.password,
        'warning',
        'Advertencia',
        'Footer',
      )
    }
    if (response.data.status === 'ok') {
      await alertBase(response.data.message, 'success', 'Exito', 'Footer')
    }
  } catch (error) {
    console.error('Error al hacerlo: ' + error.message)
  }
}

onMounted(() => {
  //alertBase('Nitido desde el composable', 'success', 'Titulo', 'Footer')
})
</script>
<template>
  <div class="text-center">
    <section-title>Como usar un formulario</section-title>
  </div>
  <form action="" @submit.prevent="handleSubmit">
    <CardBase>
      <template #header>
        <h2>Formulario de registro</h2>
      </template>
      <InputTextBase
        class="mb-3"
        label="Usuario"
        name="user_name"
        placeholder="Escribe tu nombre de usuario"
      />
      <InputPasswordBase
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
  <form class="mt-5">
    <CardBase>
      <template #header>
        <h2>Formulario de registro</h2>
      </template>
      <template #footer>
        <div class="mt-5">
          <ButtonBase type="submit" variant="primary">
            <Icon class="mr-2 inline" icon="mdi:users-add" />
            Realizar registro
          </ButtonBase>
        </div>
      </template>
      <InputTextBase
        class="mb-3"
        label="Nombre completo"
        name="full_name"
        placeholder="Escribe tu nombre completo"
      >
      </InputTextBase>
      <TextAreaBase
        label="Descríbete a ti mismo"
        name="description"
        placeholder="Escribe tu descripción"
      ></TextAreaBase>
      <div class="mt-5">
        <h3 class="font-semibold mb-3 text-xl">Seleccione su género</h3>
        <RadioBase label="Masculino" name="gender" value="male"></RadioBase>
        <RadioBase label="Femenino" name="gender" value="female"></RadioBase>
      </div>
      <div class="mt-5">
        <h3 class="font-semibold mb-3 text-xl">Selecciona las opciones que quieras</h3>
        <CheckboxBase label="Opción 1" name="opciones" value="1"></CheckboxBase>
        <CheckboxBase label="Opcion 2" name="opciones" value="2"></CheckboxBase>
      </div>
      <FileBase accept="application/pdf" label="Subir archivo" name="file"></FileBase>
    </CardBase>
  </form>
</template>
<style scoped></style>
