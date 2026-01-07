import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import { globalsStore } from '@/stores/globals.js'

const router = createRouter({
  //linkActiveClass: 'text-two',
  //linkExactActiveClass: 'text-two',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Home' },
      component: HomeView,
    },
    {
      path: '/content',
      redirect: '/content/news',
      name: 'content',
      meta: { title: 'Contenido' },
      children: [
        {
          path: 'news',
          name: 'contentNews',
          meta: { title: 'Noticias' },
          component: () => import('@/views/EvidencesView.vue'),
        },
        {
          path: 'opinions',
          name: 'contentOpinions',
          meta: { title: 'Opiniones' },
          component: () => import('@/views/EvidencesView.vue'),
        },
        {
          path: 'editorial',
          name: 'contentEditorial',
          meta: { title: 'Editorial' },
          component: () => import('@/views/EvidencesView.vue'),
        },
      ],
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
          path: 'lists',
          name: 'exampleLists',
          meta: { title: 'Display lists examples' },
          component: () => import('@/views/examples/Lists.vue'),
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
    {
      path: '/login',
      name: 'login',
      meta: { title: 'Iniciar sesión' },
      component: () => import('@/views/LoginView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const globals = globalsStore()
  document.title = to.meta.title.toString() + ' | Vue Base' || 'Vue Base'
  //---------------------------------------------------------------------------------------
  //todo: hasta ahora encuentro esta la formas limpia de exponer la ruta actual y la ruta anterior
  globals.setCurrentRoute(to)
  globals.setBeforeRoute(from)
  //----------------------------------------------------------------------------------
  next()
})
export default router
