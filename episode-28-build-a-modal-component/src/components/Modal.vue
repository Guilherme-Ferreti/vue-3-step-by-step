<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <div>
        <slot></slot>
      </div>

      <footer class="modal-footer">
        <button @click="$emit('close')">Close</button>
        <slot name="footer" />
      </footer>
    </div>
  </div>
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
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}

.modal-footer button {
  background: #ddd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.modal-footer button:hover {
  background: #c8c8c8;
}
</style>
