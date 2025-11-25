import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/reports',
      name: 'reports',

      component: () => import('@/views/ReportsView.vue'),
    },
    {
      path: '/evidences',
      name: 'evidences',
      component: () => import('@/views/EvidencesView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
    },
    {
      path: '/examples',
      children: [
        { path: '', component: () => import('@/views/examples/Form.vue') },
        {
          path: 'forms',
          name: 'exampleForms',
          component: () => import('@/views/examples/Form.vue'),
        },
        {
          path: 'emiter',
          name: 'exampleEmiter',
          component: () => import('@/views/examples/Emiter.vue'),
        },
      ],
    },
  ],
})

export default router
