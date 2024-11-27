<script setup>
import { useFlash } from '@/composables/useFlash'

const { flash } = useFlash()
</script>

<template>
  <main>
    <div>
      <button @click="flash('You clicked me!', 'This is the homepage!')">Click me</button>
    </div>
  </main>
</template>
