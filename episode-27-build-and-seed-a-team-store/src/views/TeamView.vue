<template>
  <div>
    <h1>{{ team.name }} Team</h1>

    <p>This team has {{ team.spots }} available spot(s) and {{ team.members.length }} members.</p>

    <p v-if="!team.availableSpots">No slots available. Please upgrade to premium.</p>

    <TeamMembers />
  </div>
</template>

<script setup>
import TeamMembers from '@/components/Team/TeamMembers.vue'
import { useTeamStore } from '@/stores/TeamStore.js'

const team = useTeamStore()

team.fill()
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}
</style>
