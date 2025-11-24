<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import LoadingBar from '@/components/LoadingBar.vue'
import ReportListItem from '@/components/ReportListItem.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ButtonBase from '@/components/base/forms/ButtonBase.vue'

const reports = ref(null)
const loading = ref(true)

async function getReports() {
  try {
    const response = await axios.get('http://localhost:8000')

    if (response.statusText !== 'OK') {
      throw new Error('Error al cargar reportes')
    }

    reports.value = response.data.data.reports
    loading.value = false
  } catch (error) {
    console.error('Error al cargar reportes: ' + error.message)
    loading.value = false
    reports.value = '🚨 Lo sentimos hay un error, trate otra vez...'
  }
}

function tryAgain() {
  loading.value = true
  reports.value = null
  getReports()
}

onMounted(getReports)
</script>

<template>
  <SectionTitle>Reportes</SectionTitle>

  <div>
    <div v-if="loading && reports === null"><LoadingBar /> Cargando reportes...</div>
    <template v-else>
      <div v-if="typeof reports === 'string'">
        {{ reports }}
        <buttonBase @click="tryAgain"> Try again </buttonBase>
      </div>
      <ReportListItem v-for="report in reports" v-else v-bind:key="report.id" :report="report" />
    </template>
  </div>
</template>

<style scoped></style>
