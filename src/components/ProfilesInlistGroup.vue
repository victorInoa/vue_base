<script setup>
import ProfileInlistBase from '@/components/ProfileInlistBase.vue'

import axios from 'axios'
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { alertBase } from '@/composables/SweetAlerts.js'

const hasError = ref(false)
const listOfUsers = ref([])

async function getUsers() {
  try {
    const response = await axios.get('?require=users')
    if (response.statusText !== 'OK') {
      throw new Error(response.statusText)
    }
    listOfUsers.value = response.data
  } catch (error) {
    await alertBase(
      '<strong>No se pudo hacer la conexión</strong> <br>\n La plataforma no encuentra el servidor<br> <span class="text-orange-400 font-bold">Favor contactar la administración</span>',
      'error',
      'Error',
    )
    hasError.value = true
    console.error('Error al hacerlo: ' + error.message)
  }
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <div v-if="listOfUsers.length > 0" class="inline-flex justify-center">
    <ProfileInlistBase
      v-for="(user, index) in listOfUsers"
      :key="user.id"
      :class="index > 0 ? 'ml-[-30px]' : ''"
      :profile="user.profile"
      :src="user.photo"
      :style="{ zIndex: 10 - index }"
    />
  </div>
  <div v-else>
    <p v-if="hasError" class="text-red-500">
      <Icon height="32" icon="streamline-pixel:internet-network-cloud-error" width="32" />
    </p>
    <p v-else><Icon height="24" icon="line-md:downloading-loop" width="24" /></p>
  </div>
</template>

<style scoped></style>
