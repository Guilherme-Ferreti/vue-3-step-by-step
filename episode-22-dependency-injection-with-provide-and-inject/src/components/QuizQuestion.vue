<template>
  <textarea @keyup="emit('update:modelValue', $event.target.value)">Your answer here</textarea>
</template>

<script setup>
defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>
textarea {
  width: 100%;
  height: 200px;
}
</style>
