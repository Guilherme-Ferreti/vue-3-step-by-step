<script setup>
import { useStorage } from '@/composables/useStorage'

const food = useStorage('food', 'salad')
const age = useStorage('age')
</script>

<template>
  <main>
    <p>What is your favorite food? <input type="text" v-model="food" /></p>

    <p>How old are you? <input type="text" v-model="age" /></p>
  </main>
</template>
