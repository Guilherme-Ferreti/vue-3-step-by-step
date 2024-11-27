<template>
  <h1>Quiz: {{ name }}</h1>
</template>

<script setup>
defineProps({
  name: String,
});
</script>
