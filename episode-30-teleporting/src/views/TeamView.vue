<template>
  <div class="team__wrapper">
    <h1 class="team__title">{{ team.name }} Team</h1>

    <div class="team__info">
      <p>This team has {{ team.spots }} available spot(s) and {{ team.members.length }} members.</p>

      <p v-if="!team.availableSpots" style="color: red">
        No slots available. Please upgrade to premium.
      </p>
    </div>

    <AddMemberModal />

    <TeamMembers />
  </div>
</template>

<script setup>
import TeamMembers from '@/components/Team/TeamMembers.vue'
import AddMemberModal from '@/components/Team/AddMemberModal.vue'
import { useTeamStore } from '@/stores/TeamStore.js'
import { ref } from 'vue'

const team = useTeamStore()

team.fill()
</script>

<style scoped>
.team__title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.team__info {
  margin-bottom: 2rem;
}
</style>
