import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import component from '../views/Tabs.vue';
import Tabs from '../views/Tabs.vue';
import logo from '../views/logo.vue';
import menu from '../views/Menu.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/menu'
  },{
    path: '/signup',
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/logins',
    component: () => import('@/views/Logins.vue')
  },
  {
    path: '/menu',
    component: () => import('@/views/Menu.vue')
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
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
