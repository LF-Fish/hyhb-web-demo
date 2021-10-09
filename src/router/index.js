import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component:  () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component:  () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component:  () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
  },
  {
    path: '/information',
    name: 'Information',
    component:  () => import(/* webpackChunkName: "about" */ '../views/infor.vue'),
    children:[
      {
        path: '/company',
        name: 'Company',
        component:  () => import(/* webpackChunkName: "about" */ '../views/company.vue')
      },
      {
        path: '/industry',
        name: 'Industry',
        component:  () => import(/* webpackChunkName: "about" */ '../views/industry.vue')
      },
      {
        path: '/case',
        name: 'Case',
        component:  () => import(/* webpackChunkName: "about" */ '../views/case.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
