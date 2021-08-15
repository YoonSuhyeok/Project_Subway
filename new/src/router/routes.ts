import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {// 추가한 Login Layout
    path: '/login',
    component: () => import('src/layouts/LoginLayout.vue'),
    children: [{path: '', component: ()=> import('pages/Login.vue')}]
  },
  {// 추가한 가입 Layout
    path: '/join',
    component: () => import('src/layouts/JoinLayout.vue'),
    children: [
      {path: '', component: ()=> import('pages/Provision.vue')},
      {path: 'privacy', component: ()=> import('pages/PrivacyInput.vue')}
    ]
  },
  {// 추가한 아이디찾기 Layout
    path: '/idfind',
    component: () => import('src/layouts/IdfindLayout.vue'),
    children: [{ path: '', component: () => import('pages/Idfind.vue') }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
