import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  linkActiveClass: 'text-indigo-500',
  linkExactActiveClass: 'text-indigo-700',
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
      redirect: '/examples/forms',
      name: 'examples',
      meta: { title: 'Examples' },
      children: [
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
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { title: 'Dashboard de la plataforma' },
      component: () => import('@/views/DashBoardView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' | Vue Base' || 'Vue Base, starter kit'
  next()
})

export default router
