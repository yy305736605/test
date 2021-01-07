import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../views/list.vue'
// import user from '../views/user.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: list,
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/user.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
