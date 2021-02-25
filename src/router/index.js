import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Buy = () => import('../views/buy/Buy.vue')
const Sell = () => import('../views/sell/Sell.vue')
const Service = () => import('../views/service/Service.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/buy',
    component: Buy
  },
  {
    path:'/sell',
    component: Sell
  },
  {
    path:'/service',
    component: Service
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
