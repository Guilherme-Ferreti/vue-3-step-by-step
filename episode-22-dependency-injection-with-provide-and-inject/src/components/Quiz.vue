<template>
  <QuizHeader name="What is the largest ocean?" />

  <QuizQuestion v-model="answer" />

  <QuizFooter />

  <QuizAnswer :answer="answer" />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import QuizFooter from './QuizFooter.vue';
import QuizHeader from './QuizHeader.vue';
import QuizQuestion from './QuizQuestion.vue';
import QuizAnswer from './QuizAnswer.vue';

provide('copyright', 2024);

const answer = ref('');
</script>
