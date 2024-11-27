<template>
  <button
    class="add-member-modal__add-button"
    @click="showModal = true"
    :disabled="!team.availableSpots"
  >
    Add member
  </button>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <p>Need to add a new member to your team?</p>
      <form class="add-member-modal__form" @submit.prevent="addMember">
        <div class="add-member-modal__inputs-wrapper">
          <input
            class="add-member-modal__input"
            type="email"
            placeholder="Email Address..."
            v-model="newMember.email"
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </Modal>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import { useTeamStore } from '@/stores/TeamStore.js'

const showModal = ref(false)
const newMember = ref(
  {
    email: '',
  },
  { deep: true },
)

const team = useTeamStore()

const addMember = () => {
  team.addMember(newMember.value.email)

  showModal.value = false
  newMember.value = ''
}
</script>

<style scoped>
.add-member-modal__add-button {
  margin-bottom: 2rem;
}

.add-member-modal__form {
  margin-top: 1rem;
}

.add-member-modal__inputs-wrapper {
  display: flex;
  gap: 1rem;
}

.add-member-modal__input {
  flex: 1;
}

.enter-from-class,
.leave-to-class {
  opacity: 0;
  scale: 125%;
}

.enter-to-class,
.leave-from-class {
  opacity: 1;
  scale: 100%;
}

.enter-active-class {
  transition: all 300ms ease-in-out;
}

.leave-active-class {
  transition: all 200ms ease-in-out;
}
</style>
