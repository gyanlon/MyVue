import Vue from 'vue'
import Router from 'vue-router'
import BusinessCard from '@/components/BusinessCard'
import About from '@/views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BusinessCard',
      component: BusinessCard
    },    
    {
      path: '/me',
      name: 'BusinessCard',
      component: BusinessCard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
