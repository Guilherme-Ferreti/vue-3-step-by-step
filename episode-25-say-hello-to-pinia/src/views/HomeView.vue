<script setup>
import { useCounterStore } from '@/stores/CounterStore';

const counter = useCounterStore();
</script>

<template>
  <main>
    <h1>{{ counter.count }}</h1>
    <button
      @click="counter.increment()"
      :disabled="counter.remaining === 0"
    >
      Increment ({{ counter.remaining }} remaining)
    </button>
  </main>
</template>
