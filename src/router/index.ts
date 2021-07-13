import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import component from '../views/Tabs.vue';
import Tabs from '../views/Tabs.vue';
import logo from '../views/logo.vue';
import Final from '../views/FinalCombi.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/idfind'
  },{
    path: '/logo',
    component: () => import('@/views/logo.vue'),
  },
  {
    path: '/idfind',
    component: () => import('@/views/Idfind.vue')
  },
  {
    path: '/provision',
    component: () => import('@/views/Provision.vue')
  },{
    path: '/signup',
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/logins',
    component: () => import('@/views/Logins.vue')
  },
  {
    path: '/final',
    component: () => import('@/views/FinalCombi.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
