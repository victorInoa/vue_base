<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import BadgeBase from '@/components/base/BadgeBase.vue'
import ProfileInlistBase from '@/components/ProfileInlistBase.vue'
import AnchorBase from '@/components/base/AnchorBase.vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  // Configuración de la tabla
  config: {
    type: Object,
    required: true,
    default: () => ({
      endpoint: '', // URL del endpoint para obtener los datos
      headers: [], // Array de objetos { key, label, align, width }
      actions: [], // Array de acciones para cada fila
    }),
  },
})

const loading = ref(true)
const tableData = ref([])

// Mapeo de variantes para los badges
const badgeVariants = {
  started: 'default',
  in_process: 'info',
  ended: 'success',
  incomplete: 'warning',
  canceled: 'alert',
}

// Mapeo de iconos para los badges
const badgeIcons = {
  started: 'ci:check-big',
  in_process: 'mdi:progress-clock',
  ended: 'solar:check-read-broken',
  incomplete: 'ri:progress-6-line',
  canceled: 'bx:error',
}

// Obtener datos del servidor
const fetchData = async () => {
  try {
    loading.value = true
    const response = await axios.get(props.config.endpoint)
    tableData.value = response.data
  } catch (error) {
    console.error('Error fetching table data:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (props.config.endpoint) {
    fetchData()
  }
})

// Renderizar el contenido de la celda
const renderCellContent = (row, header) => {
  const value = row[header.key]

  // Si es una columna de estado con badge
  if (header.type === 'status') {
    return {
      component: BadgeBase,
      props: {
        size: 'sm',
        variant: badgeVariants[value] || 'default',
      },
      children: [
        {
          component: Icon,
          props: {
            icon: badgeIcons[value] || 'mdi:help',
            height: '24',
            width: '24',
          },
        },
        ` ${value}`,
      ],
    }
  }

  // Si es una columna de perfil
  if (header.type === 'profile') {
    return {
      component: ProfileInlistBase,
      props: {
        profile: value,
        src: row.photo, // Asumiendo que hay una propiedad photo en los datos
      },
    }
  }

  // Si es una columna de acciones
  if (header.type === 'actions') {
    return props.config.actions.map((action) => ({
      component: AnchorBase,
      props: {
        href: action.href ? action.href(row) : '#',
        variant: action.variant || 'info',
        class: action.class || '',
        onClick: action.onClick
          ? (e) => {
              e.preventDefault()
              action.onClick(row)
            }
          : null,
      },
      children: [
        action.icon && {
          component: Icon,
          props: {
            icon: action.icon,
            height: '14',
            width: '14',
          },
        },
        ` ${action.label || ''}`,
      ].filter(Boolean),
    }))
  }

  // Por defecto, devolver el valor como texto
  return value
}
</script>

<template>
  <div class="relative overflow-x-auto shadow-xs rounded-md">
    <div v-if="loading" class="p-4 text-center">
      <Icon class="text-2xl" icon="line-md:loading-loop" />
    </div>

    <table v-else class="w-full text-sm text-black font-bold bg-table-bg dark:text-gray-400">
      <thead class="border-b-8 border-body rounded-t-md">
        <tr>
          <th
            v-for="header in config.headers"
            :key="header.key"
            :class="[
              'px-6 py-3 font-md',
              header.align === 'center' ? 'text-center' : 'text-left',
              header.width ? `w-${header.width}` : '',
            ]"
            scope="col"
          >
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in tableData"
          :key="row.id || rowIndex"
          class="odd:bg-gray-50 even:bg-blue-50 border-b-body border-b-8 dark:odd:bg-white/10 dark:even:bg-white/10"
        >
          <td
            v-for="header in config.headers"
            :key="header.key"
            :class="[
              'px-6 py-4',
              header.align === 'center' ? 'text-center' : 'text-left',
              header.key === 'name' ? 'dark:text-white' : '',
            ]"
          >
            <template v-if="header.type === 'actions'">
              <component
                :is="action.component"
                v-for="(action, actionIndex) in renderCellContent(row, header)"
                :key="actionIndex"
                v-bind="action.props"
              >
                <template v-for="(child, childIndex) in action.children" :key="childIndex">
                  <component
                    :is="child.component"
                    v-if="typeof child === 'object'"
                    v-bind="child.props"
                  />
                  <template v-else>{{ child }}</template>
                </template>
              </component>
            </template>
            <template v-else>
              {{ renderCellContent(row, header) }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!-- how to use
<template>
  <ListTableBase
    :config="{
      endpoint: '/api/users',
      headers: [
        { key: 'id', label: 'ID', width: '10%' },
        { key: 'profile', label: 'Profile', type: 'profile', align: 'center', width: '20%' },
        { key: 'name', label: 'Name', width: '30%' },
        { key: 'status', label: 'Status', type: 'status', align: 'center', width: '20%' },
        { key: 'actions', label: 'Actions', type: 'actions', align: 'center', width: '20%' }
      ],
      actions: [
        {
          label: 'Edit',
          icon: 'mdi:edit',
          variant: 'info',
          onClick: (row) => editUser(row)
        }
      ]
    }"
  />
</template>

<script setup>
import ListTableBase from '@/components/base/ListTableBase.vue'

const editUser = (user) => {
  console.log('Editing user:', user)
  // Lógica para editar usuario
}
</script>

SERVER DATA EXAMPLE:
[
  {
    "id": 1,
    "name": "John Doe",
    "profile": "ADMIN",
    "photo": "/path/to/photo.jpg",
    "status": "active"
  }
]
-->
