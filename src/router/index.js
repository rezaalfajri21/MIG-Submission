import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function importComponent(path) {
  return () => import (`../components/${path}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Login',
    component: importComponent('Login'),
  },
  {
    path: '/home',
    name: 'Home',
    component: importComponent('Home'),
  },
  {
    path: '/customers',
    name: 'Customers',
    component: importComponent('Customers'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
