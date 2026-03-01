<script setup>
import LabelBase from '@/components/base/forms/LabelBase.vue'
const emit = defineEmits(['change_emitted_select'])
const props =defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
})
import Api from '@/services/Api.js'
import { ref, onMounted } from 'vue'
import 'tom-select/dist/css/tom-select.css'
const formErrors = ref({})

import TomSelect from 'tom-select'

const localGovernmentListOptions = ref([])

const selectRef = ref(null)
const selected = ref('')

async function loadLocalGovernmentList() {
  try {
    const response = await Api.get('services/local-governments/get-list')
    localGovernmentListOptions.value = response.data

  } catch (error) {
    formErrors.value = {
      localGovernment: 'Error al obtener los gobiernos locales',
    }
    console.log(error)
  }
}
onMounted(async () => {
  await loadLocalGovernmentList()
  const tom = new TomSelect(selectRef.value)
  tom.on('change', (value) => {
    selected.value = value
    emit('change_emitted_select', selected.value)
  })
})

const id = 'input_selected_searchable_' + props.name
</script>

<template>
  <LabelBase v-if="label" :for="id" class="block font-semibold mb-3">{{ label }}</LabelBase>
  <select
    :id="id"
    ref="selectRef"
    v-if="localGovernmentListOptions.length >= 1"
    :name="name"
    :class="[
      'font-(--form-font-weight) text-(length:--form-font-size) rounded-(--form-border-radius) border-form-border-default border-(length:--form-border-width) focus:outline-0 focus:border-form-border-accented hover:border-form-border-accented dark:border-form-dark-border-default dark:focus:border-form-dark-border-accented dark:hover:border-form-dark-border-accented px-(--form-padding-x) py-(--form-padding-y) bg-form-bg-default hover:bg-form-bg-accented focus:bg-form-bg-accented dark:bg-form-dark-bg-default dark:hover:bg-form-dark-bg-accented dark:focus:bg-form-dark-bg-accented text-form-text-default hover:text-form-text-accented focus:text-form-text-accented dark:text-form-dark-text-default dark:hover:text-form-dark-text-accented dark:focus:text-form-dark-text-accented',
      'disabled:border-gray-100 disabled:bg-gray-100 disabled:text-gray-400'
    ]"
  >
    <option value="">Seleccione o busque por el nombre</option>
    <option v-for="option in localGovernmentListOptions" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
