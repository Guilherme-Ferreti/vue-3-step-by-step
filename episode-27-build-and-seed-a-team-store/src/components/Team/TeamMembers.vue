<template>
  <table class="team-members">
    <thead>
      <th>Name</th>
      <th>E-mail</th>
      <th>Role</th>
      <th>Status</th>
    </thead>
    <tbody>
      <TeamMember v-for="member in team.members" :member="member" />
    </tbody>
  </table>
</template>

<script setup>
import TeamMember from '@/components/Team/TeamMember.vue'
import { useTeamStore } from '@/stores/TeamStore.js'

const team = useTeamStore()
</script>

<style scoped>
.team-members {
  width: 100%;
  border-collapse: collapse;
}

.team-members th {
  padding: 0.5rem;
  border: 1px solid #ccc;
}
</style>
