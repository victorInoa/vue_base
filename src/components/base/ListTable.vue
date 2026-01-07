<script lang="ts" setup></script>

<template>
  <div class="relative overflow-x-auto bg-gray-50 shadow-xs rounded-md border-red-400">
    <table class="w-full text-sm text-left rtl:text-right text-body">
      <thead class="bg-gray-50 border-b border-gray-400">
        <tr>
          <th class="px-6 py-3 font-md" scope="col">ID</th>
          <th class="px-6 py-3 font-md" scope="col">Name</th>
          <th class="px-6 py-3 font-md" scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
          <th class="px-6 py-4 font-medium text-heading whitespace-nowrap" scope="row">33</th>
          <td class="px-6 py-4">Juan de los palotes</td>
          <td class="px-6 py-4">
            <a class="font-medium text-fg-brand hover:underline" href="#">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <table class="table-auto">
    <thead></thead>
    <tbody>
      <tr>
        <td>33</td>
        <td>Nombre</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>fID</td>
        <td>fName</td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped></style>
