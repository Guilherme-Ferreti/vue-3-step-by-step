<template>
  <main>
    <h1>{{ state.name }}</h1>

    <button @click="state.name = 'Another quiz name'">Change quiz name</button>

    <input type="text" v-model="state.name">
  </main>
</template>

<script setup>
import { state } from '@/stores/QuizStore'
</script>
