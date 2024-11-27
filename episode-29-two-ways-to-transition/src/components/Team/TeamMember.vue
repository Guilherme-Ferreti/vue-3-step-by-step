<template>
  <tr>
    <td>{{ member.name }}</td>
    <td>{{ member.email }}</td>
    <td>{{ member.role }}</td>
    <td>{{ member.status }}</td>
  </tr>
</template>

<script setup>
defineProps({
  member: Object,
})
</script>

<style scoped>
td {
  padding: 0.5rem;
  border: 1px solid #ccc;
}
</style>
