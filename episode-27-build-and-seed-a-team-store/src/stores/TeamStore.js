import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  state: () => ({
    name: '',
    spots: 0,
    members: [],
  }),

  actions: {
    async fill() {
      const result = await import('@/team.json')

      this.$state = result.default
    },
  },

  getters: {
    availableSpots() {
      return this.spots - this.members.length
    },
  },
})
