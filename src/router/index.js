import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

function load(name) {
  return () => import(`@/views/${name}`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: load(/* webpackChunkName: "about" */ 'About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
