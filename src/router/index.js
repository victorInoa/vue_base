import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ReportsView.vue'),
    },
    {
      path: '/evidences',
      name: 'evidences',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/EvidencesView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ProfileView.vue'),
    },
    {
      path: '/examples',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      children: [
        { path: '', component: () => import('@/views/examples/Form.vue') },
        {
          path: 'forms',
          component: () => import('@/views/examples/Form.vue'),
        },
        {
          path: 'emiter',
          component: () => import('@/views/examples/Emiter.vue'),
        },
      ],
    },
  ],
})

export default router
