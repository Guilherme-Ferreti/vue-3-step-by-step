<script setup>
import { useFlash } from '@/composables/useFlash'

const { flash } = useFlash()
</script>

<template>
  <div class="about">
    <button @click="flash('Yay!', 'This is the about page!', 'info')">Click me</button>
  </div>
</template>
