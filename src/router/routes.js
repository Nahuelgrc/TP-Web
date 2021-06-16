const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/login',
        component: () => import('pages/Login.vue')
      },
      {
        path: '/signup',
        component: () => import('pages/SignUp.vue')
      },
      {
        path: '/users',
        component: () => import('pages/Users.vue')
      },
      {
        path: '/products',
        component: () => import('pages/Products.vue')
      },
      {
        path: '/profile',
        component: () => import('pages/Profile.vue')
      },
      {
        path: '/product/add',
        component: () => import('pages/AddProduct.vue')
      },
      {
        path: '/cart',
        component: () => import('pages/Cart.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
