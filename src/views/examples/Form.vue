<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import InputTextBase from '@/components/forms/InputTextBase.vue'
import InputPasswordBase from '@/components/forms/InputPasswordBase.vue'
import ButtonBase from '@/components/forms/ButtonBase.vue'
import { Icon } from '@iconify/vue'
import CardBase from '@/components/base/CardBase.vue'
</script>

<template>
  <section-title>Como usar un formulario</section-title>

  <form action="">
    <CardBase>
      <template #header>
        <h2>Formulario de registro</h2>
      </template>

      <InputTextBase
        id="input_name"
        class="mb-3"
        label="Usuario"
        name="name"
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
        <ButtonBase size="xlarge">
          <Icon class="mr-2 size-10 inline" icon="fluent-color:send-clock-20" />
          Enviar
        </ButtonBase>
      </template>
    </CardBase>
  </form>
</template>

<style scoped></style>
