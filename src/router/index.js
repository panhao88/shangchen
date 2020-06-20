import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        // meta: {
        //   title: '首页',
        // }
      },
      {
        path: 'classification',
        name: 'classificationg',
        component: () => import('../views/classification/classification.vue'),
        // meta: {
        //   title: '分类',
        // }
      },
      {
        path: 'Cart',
        name: 'Cart',
        component: () => import('../views/Cart/Cart.vue'),
        // meta: {
        //   title: '购物车',
        // }
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('../views/my/my.vue'),
        // meta: {
        //   title: '我的',
        // }
      },
    ]
  },
  // 登录注册
  {
    path: '/land',
    name: 'land',
    component: () => import('../views/land/land')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '*',
    component: () => import('../views/err/err.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
