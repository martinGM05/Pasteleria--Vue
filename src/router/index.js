import { createRouter, createWebHashHistory } from 'vue-router'
import CustomerView from '../views/CustomerView.vue'
import BakerView from '../views/BakerView.vue'
import OrderCakeView from '../views/OrderCakeView.vue'

const routes = [
  {
    path: '/',
    name: 'cliente',
    component: CustomerView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: BakerView 
  },
  {
    path: '/pedir-pastel',
    name: 'pedir-pastel',
    component: OrderCakeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
