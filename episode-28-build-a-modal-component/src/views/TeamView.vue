<template>
  <div class="team__wrapper">
    <h1 class="team__title">{{ team.name }} Team</h1>

    <div class="team__info">
      <p>This team has {{ team.spots }} available spot(s) and {{ team.members.length }} members.</p>

      <p v-if="!team.availableSpots" style="color: red">
        No slots available. Please upgrade to premium.
      </p>
    </div>

    <button class="team__add-member-btn" @click="showModal = true">Add member</button>

    <Modal :show="showModal" @close="showModal = false">
      <p>Need to add a new member to your team?</p>

      <form class="team__add-member-form">
        <div class="team__add-member-form-inputs">
          <input type="email" placeholder="Email Address..." class="team__add-member-form__input" />

          <button>Add</button>
        </div>
      </form>
    </Modal>

    <TeamMembers />
  </div>
</template>

<script setup>
import TeamMembers from '@/components/Team/TeamMembers.vue'
import Modal from '@/components/Modal.vue'
import { useTeamStore } from '@/stores/TeamStore.js'
import { ref } from 'vue'

const team = useTeamStore()

team.fill()

const showModal = ref(false)
</script>

<style scoped>
.team__title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.team__info,
.team__add-member-btn {
  margin-bottom: 2rem;
}

.team__add-member-form {
  margin-top: 1rem;
}

.team__add-member-form-inputs {
  display: flex;
  gap: 1rem;
}

.team__add-member-form__input {
  flex: 1;
}
</style>
