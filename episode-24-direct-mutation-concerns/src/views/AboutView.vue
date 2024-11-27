<template>
  <div class="about">
    <h1>This is an about page. The current count is {{ counter.count }}!</h1>
  </div>
</template>

<script setup>
import { counter } from '@/stores/counterStore';
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
