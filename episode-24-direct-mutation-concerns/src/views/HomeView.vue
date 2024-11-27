<script setup>
import { counter } from '@/stores/counterStore';
</script>

<template>
  <main>
    <h1>{{ counter.count }}</h1>
    <button @click="counter.increment()">Increment</button>
  </main>
</template>
