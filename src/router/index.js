import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Profile from '../views/Profile/Profile.vue'
import Category from '../views/Category/Category.vue'
import Car from '../views/Car/Car.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/car',
    name: 'Car',
    component: Car
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
