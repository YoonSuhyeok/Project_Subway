import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Logo.vue') }],
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
  {
    path: '/tabs/',
    component: () => import('src/layouts/TabsLayout.vue'),
    children: [
      {path: 'tab1', component: () => import('src/pages/Tab1.vue')},
      {path: 'tab2', component: () => import('src/pages/Tab2.vue')}
    ]
  },
  {
    path: '/items',
    component: () => import('src/components/Items.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
