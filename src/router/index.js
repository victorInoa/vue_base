import { createRouter, createWebHistory } from 'vue-router'

import { globalsStore } from '@/stores/globals.js'

const router = createRouter({
  //linkActiveClass: 'text-two',
  //linkExactActiveClass: 'text-two',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Home of the platform' },
      component: import('@/views/HomeView.vue'),
    },
    {
      path: '/content',
      redirect: '/content/news',
      name: 'content',
      meta: { title: 'Contenido', requireAuth: true },
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
          meta: { title: 'Opiniones', requireAuth: true },
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
      meta: { title: 'Reports', requireAuth: true },
      component: () => import('@/views/ReportsView.vue'),
    },
    {
      path: '/users',
      name: 'users',
      meta: {
        title: 'Users',
        requireAuth: true,
      },
      component: () => import('@/views/UsersView.vue'),
    },
    {
      path: '/configs',
      name: 'configs',
      meta: {
        title: 'Configuraciones',
        requireAuth: true,
      },
      component: () => import('@/views/ConfigsView.vue'),
    },
    {
      path: '/evidences',
      name: 'evidences',
      meta: { title: 'Evidence', requireAuth: true },
      component: () => import('@/views/EvidencesView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        title: 'Profile',
        requireAuth: true,
      },
      component: () => import('@/views/ProfileView.vue'),
    },
    {
      path: '/examples',
      redirect: '/examples/forms',
      name: 'examples',
      meta: { title: 'Examples', requireAuth: true },
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
      meta: { title: 'Dashboard de la plataforma', requireAuth: true },
      component: () => import('@/views/DashBoardView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: 'Iniciar sesión' },
      component: () => import('@/views/LoginOBSView.vue'),
    },
    {
      path: '/platforms',
      name: 'sspPlatforms',
      meta: { title: 'Manejo de las plataformas' },
      component: () => import('@/views/ssp/backend/PlatformsManagementView.vue'),
    },
    {
      path: '/dashboard',
      name: 'sspDashboard',
      meta: { title: 'Dashboard' },
      component: () => import('@/views/ssp/backend/DashboardView.vue'),
    },
    {
      path: '/users',
      name: 'sspUsers',
      meta: { title: 'Usuarios' },
      component: () => import('@/views/ssp/backend/UsersView.vue'),
    },
    {
      path: '/ads',
      name: 'sspAds',
      meta: { title: 'Publicidad' },
      component: () => import('@/views/ssp/backend/AdsManagementView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const globals = globalsStore()
  document.title =
    to.meta.title.toString() + ' | ' + import.meta.env.VITE_PLATFORM_TITLE_PAGE ||
    import.meta.env.VITE_PLATFORM_TITLE_PAGE

  //---------------------------------------------------------------------------------------
  //todo: hasta ahora encuentro esta la formas limpia de exponer la ruta actual y la ruta anterior
  globals.setCurrentRoute(to)
  globals.setBeforeRoute(from)
  //----------------------------------------------------------------------------------

  console.log(to.name === 'login')

  next()
})
export default router
