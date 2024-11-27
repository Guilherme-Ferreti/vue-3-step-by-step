<template>
  <p>Your answer is: {{ answer }}</p>
</template>

<script setup>
defineProps({
  answer: {
    type: String,
    default: '',
  },
});
</script>
