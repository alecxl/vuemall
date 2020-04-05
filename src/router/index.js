import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profiles = () => import('views/profiles/Profiles')

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/profiles',
      name: 'Profiles',
      component: Profiles
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
