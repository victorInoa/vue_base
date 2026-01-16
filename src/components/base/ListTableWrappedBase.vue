<script lang="ts" setup>
import BadgeBase from '@/components/base/BadgeBase.vue'
import { Icon } from '@iconify/vue'
import ProfileInlistBase from '@/components/ProfileInlistBase.vue'
import AnchorBase from '@/components/base/AnchorBase.vue'
import ProfilesInlistGroup from '@/components/ProfilesInlistGroup.vue'
</script>

<template>
  <div class="relative overflow-x-auto shadow-xs rounded-md p-7 bg-white dark:bg-white/10">
    <table class="w-full text-sm text-black font-bold bg-table-bg dark:text-gray-400 rounded-md">
      <thead class="border-b border-body rounded-t-md">
        <tr>
          <th class="px-6 py-3 font-md table-column-stretch" scope="col">ID</th>
          <th class="px-6 py-3 font-md text-center table-column-stretch" scope="col">Profile</th>
          <th class="px-6 py-3 font-md text-left" scope="col">Name</th>
          <th class="px-6 py-3 font-md text-center table-column-stretch" scope="col">status</th>
          <th class="px-6 py-3 font-md text-left table-column-stretch" scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b-body border-b-2">
          <td class="px-6 py-4 font-medium text-heading">33</td>
          <td align="center">
            <ProfilesInlistGroup />
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
        <tr class="border-b-body border-b-2">
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
        <tr class="border-b-body border-b-2">
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
        <tr class="border-b-body border-b-2">
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
        <tr class="border-b-body">
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
            <AnchorBase href="#" variant="warning"
              ><Icon height="14" icon="mdi:edit" width="14" />Edit</AnchorBase
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
