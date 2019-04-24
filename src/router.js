import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Season from './views/Season'
import Volume from './views/Volume'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/season',
      name: 'season',
      component: Season
    }, {
      path: '/volume',
      name: 'volume',
      component: Volume
    }
  ]
})
