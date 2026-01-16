<script lang="ts" setup>
import BadgeBase from '@/components/base/BadgeBase.vue'
import { Icon } from '@iconify/vue'
import ProfileInlistBase from '@/components/ProfileInlistBase.vue'
import AnchorBase from '@/components/base/AnchorBase.vue'
</script>

<template>
  <div class="relative overflow-x-auto shadow-xs rounded-md">
    <table class="w-full text-sm text-black font-bold bg-table-bg dark:text-gray-400">
      <thead class="border-b-8 border-body rounded-t-md">
        <tr>
          <th class="px-6 py-3 font-md table-column-stretch" scope="col">ID</th>
          <th class="px-6 py-3 font-md text-center table-column-stretch" scope="col">Profile</th>
          <th class="px-6 py-3 font-md text-left" scope="col">Name</th>
          <th class="px-6 py-3 font-md text-center table-column-stretch" scope="col">status</th>
          <th class="px-6 py-3 font-md text-left table-column-stretch" scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-gray-50 even:bg-blue-50 border-b-body border-b-8 dark:odd:bg-white/10 dark:even:bg-white/10"
        >
          <td class="px-6 py-4 font-medium text-heading">33</td>
          <td align="center">
            <ProfileInlistBase profile="GOD" />
          </td>
          <td class="px-6 py-4 dark:text-white">Juan de los palotes</td>
          <td class="px-6 py-4 text-center">
            <BadgeBase id="badge_33" size="sm"
              ><Icon height="24" icon="ci:check-big" width="24" /> Started</BadgeBase
            >
          </td>
          <td class="px-6 py-4">
            <a class="font-medium text-fg-brand hover:underline" href="#">Edit</a>
          </td>
        </tr>
        <tr
          class="odd:bg-gray-50 even:bg-blue-50 border-b-body border-b-8 dark:odd:bg-white/10 dark:even:bg-white/10"
        >
          <td class="px-6 py-4 font-medium text-heading">33</td>
          <td align="center">
            <ProfileInlistBase />
          </td>
          <td class="px-6 py-4">Juan de los palotes</td>
          <td class="px-6 py-4 text-center">
            <BadgeBase size="sm" variant="info">
              <Icon height="24" icon="mdi:progress-clock" width="24" />In process</BadgeBase
            >
          </td>
          <td class="px-6 py-4">
            <a class="font-medium text-fg-brand hover:underline" href="#">Edit</a>
          </td>
        </tr>
        <tr
          class="odd:bg-gray-50 even:bg-blue-50 border-b-body border-b-8 dark:odd:bg-white/10 dark:even:bg-white/10"
        >
          <td class="px-6 py-4 font-medium text-heading">33</td>
          <td align="center">
            <ProfileInlistBase profile="ADMIN" />
          </td>
          <td class="px-6 py-4">Juan de los palotes</td>
          <td class="px-6 py-4 text-center">
            <BadgeBase size="sm" variant="success"
              ><Icon height="24" icon="solar:check-read-broken" width="24" /> Ended</BadgeBase
            >
          </td>
          <td class="px-6 py-4">
            <a class="font-medium text-fg-brand hover:underline" href="#">Edit</a>
          </td>
        </tr>
        <tr
          class="odd:bg-gray-50 even:bg-blue-50 border-b-body border-b-8 dark:odd:bg-white/10 dark:even:bg-white/10"
        >
          <td class="px-6 py-4 font-medium text-heading">33</td>
          <td align="center">
            <ProfileInlistBase />
          </td>
          <td class="px-6 py-4">Juan de los palotes</td>
          <td class="px-6 py-4 text-center">
            <BadgeBase size="sm" variant="warning"
              ><Icon height="24" icon="ri:progress-6-line" width="24" />Incompleted</BadgeBase
            >
          </td>
          <td class="px-6 py-4">
            <a class="font-medium text-fg-brand hover:underline" href="#">Edit</a>
          </td>
        </tr>
        <tr
          class="odd:bg-gray-50 even:bg-blue-50 border-b-body dark:odd:bg-white/10 dark:even:bg-white/10"
        >
          <td class="px-6 py-4 font-medium text-heading">33</td>
          <td align="center">
            <ProfileInlistBase profile="LINK_DEMO_2" />
          </td>
          <td class="px-6 py-4">Juan de los palotes</td>
          <td class="px-6 py-4 text-center">
            <BadgeBase size="sm" variant="alert"
              ><Icon height="24" icon="bx:error" width="24" />Canceled</BadgeBase
            >
          </td>
          <td class="px-6 py-4">
            <AnchorBase href="#" variant="info"
              ><Icon height="14" icon="mdi:edit" width="14" />Edit</AnchorBase
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
