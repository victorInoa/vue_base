<script setup>
import ProfileInlistBase from '@/components/ProfileInlistBase.vue'

import axios from 'axios'
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

const listOfUsers = ref([])

async function getUsers() {
  const response = await axios.get('?require=users')
  listOfUsers.value = response.data
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
    <p><Icon height="24" icon="line-md:downloading-loop" width="24" /></p>
  </div>
</template>

<style scoped></style>
