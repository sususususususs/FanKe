/*
 * @Author: suwanqing
 * @Date: 2020-09-09 11:26:09
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-09-09 18:13:40
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/management',
    name: 'Management',
    component: () => import('../views/management')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/setting')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
