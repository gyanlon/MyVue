import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/views/MainPage'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
