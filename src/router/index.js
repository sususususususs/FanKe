/*
 * @Author: suwanqing
 * @Date: 2020-09-09 11:26:09
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-09-14 18:01:15
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/management',
        component: () => import('@/views/management')
      },
      {
        path: '/order',
        component: () => import('@/views/order')
      },
      {
        path: '/setting',
        component: () => import('@/views/setting')
      }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
