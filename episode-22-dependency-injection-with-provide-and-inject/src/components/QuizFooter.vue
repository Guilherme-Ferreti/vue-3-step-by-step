<template>
  <div>
    <p>Our links:</p>

    <ul v-for="link in links">
      <QuizLink :name="link.name" :to="link.to" />
    </ul>
  </div>
</template>

<script setup>
import QuizLink from './QuizLink.vue';

const links = [
  {
    name: 'Link One',
    to: '/',
  },
  {
    name: 'Link Two',
    to: '/about',
  },
];
</script>
