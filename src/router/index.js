import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Playground from '@/views/Playground.vue'
import Problem from '@/views/Problem.vue'
import Problems from '@/views/Problems.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Playground',
    component: Playground
  },
  {
    path: '/problems',
    name: 'Problems',
    component: Problems
  },
  {
    path: '/problems/:pid',
    name: 'Problem',
    component: Problem
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
