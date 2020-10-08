
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },

  { path: '/SignUp', component: () => import('pages/SignUp.vue') },

  { path: '/ForgotPass', component: () => import('pages/ForgotPass.vue') },

  {
    path: '/MainLayout',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NewPosts.vue') },

      { path: '/MyPage', component: () => import('pages/MyPage.vue') },

      { path: '/NewPosts', component: () => import('pages/NewPosts.vue') },

      { path: '/MyPhotoPage', component: () => import('pages/MyPhotoPage.vue') },

      { path: '/UserPhotoPage', component: () => import('pages/UserPhotoPage.vue') },

      { path: '/Change', component: () => import('pages/ChangeRegister.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
