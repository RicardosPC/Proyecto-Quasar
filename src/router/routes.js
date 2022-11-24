
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/vista', component: () => import('pages/Vista.vue') },
      { path: '/anuncio', component: () => import('pages/NewAnuncio.vue') },
      { path: '/otro', component: () => import('pages/Anuncio.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
