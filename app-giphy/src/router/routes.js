const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'favorites', component: () => import('pages/FavoritesPage.vue') },
      { path: 'categories', component: () => import('pages/CategoriesPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
    ]
  },
]

export default routes
