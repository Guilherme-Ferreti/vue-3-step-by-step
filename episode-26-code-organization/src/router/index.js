import { createRouter, createWebHistory } from 'vue-router'
import TeamView from '../views/TeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TeamView,
    },
  ],
})

export default router
