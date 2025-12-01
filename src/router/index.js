import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Home' },
      component: HomeView,
    },
    {
      path: '/reports',
      name: 'reports',
      meta: { title: 'Reports' },
      component: () => import('@/views/ReportsView.vue'),
    },
    {
      path: '/evidences',
      name: 'evidences',
      meta: { title: 'Evidence' },
      component: () => import('@/views/EvidencesView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { title: 'Profile' },
      component: () => import('@/views/ProfileView.vue'),
    },
    {
      path: '/examples',
      children: [
        { path: '', component: () => import('@/views/examples/Form.vue') },
        {
          path: 'forms',
          name: 'exampleForms',
          meta: { title: 'Example of form usage' },
          component: () => import('@/views/examples/Form.vue'),
        },
        {
          path: 'emiter',
          name: 'exampleEmiter',
          meta: { title: 'Example of emit and listen usage' },
          component: () => import('@/views/examples/Emiter.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' | Vue Base' || 'Vue Base, starter kit'
  next()
})

export default router
