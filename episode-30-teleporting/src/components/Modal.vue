<template>
  <Transition
    enter-from-class="enter-from-class"
    enter-to-class="enter-to-class"
    enter-active-class="enter-active-class"
    leave-active-class="leave-active-class"
    leave-from-class="leave-from-class"
    leave-to-class="leave-to-class"
  >
    <div v-if="show" class="modal__mask">
      <div class="modal__container">
        <div>
          <slot></slot>
        </div>

        <footer class="modal__footer">
          <button @click="$emit('close')">Close</button>
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})
</script>

<style>
.modal__mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}

.modal__container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}

.modal__footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}

.modal__footer button {
  background: #ddd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.modal__footer button:hover {
  background: #c8c8c8;
}
</style>
