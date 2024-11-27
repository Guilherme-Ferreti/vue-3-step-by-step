<template>
  <li>
    <RouterLink :to="to">{{ name }}</RouterLink>
    <small>{{ copyright }}</small>
  </li>
</template>

<script setup>
import { inject } from 'vue';

defineProps({
  name: String,
  to: {
    type: String,
    default: '#',
  },
});

const copyright = inject('copyright');
</script>
