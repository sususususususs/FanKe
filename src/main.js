/*
 * @Author: suwanqing
 * @Date: 2020-09-09 11:26:09
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-09-09 16:43:17
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import '@/styles/index.scss'
import '@/styles/App.scss'

Vue.config.productionTip = false

Vue.use(ViewUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
