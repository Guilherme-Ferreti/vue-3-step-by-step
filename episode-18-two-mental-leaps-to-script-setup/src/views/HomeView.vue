<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue';

const message = ref('Hello World!');

onMounted(() => {
  message.value = 'Hi There!';
});

setTimeout(() => {
  message.value = 'Hello There!';
}, 2000);

const showMessage = () => {
  alert(message.value);
}

</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message"/>
      <button @click="showMessage">{{ message }}</button>
    </p>
  </main>
</template>
