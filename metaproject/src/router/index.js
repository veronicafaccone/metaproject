import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/2020',
    name: '2020',
    component: () => import('../views/2020.vue')
  },
  {
    path: '/2019',
    name: '2019',
    component: () => import('../views/2019.vue')
  },
  {
    path: '/2018',
    name: '2018',
    component: () => import('../views/2018.vue')
  },
  {
    path: '/2017',
    name: '2017',
    component: () => import('../views/2017.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: function () {
    window.scrollTo(0, 0)
  },
  routes
})

export default router
