import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signUp',
      name: 'signUn',
      component: () => import('./components/Auth/signIn')
    },
    {
      path:'/signIn',
      name: 'signIn',
      component: () => import('./components/Auth/signUp')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('./views/Account')
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('./components/Results')
    },
    {
      path: '/start-test',
      component: () => import('./views/Test')
    },
    {
      path: '/admin',
      component: () => import('./views/Admin')
    },
  ]
})
