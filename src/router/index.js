import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import detail from './../components/concurso/detail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/concurso/detail/:concurso_id',
    name: 'concursoDetail',
    component: detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
