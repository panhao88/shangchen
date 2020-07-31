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
        meta: {
          title: '首页',
        }
      },
      {
        path: 'classification',
        name: 'classificationg',
        component: () => import('../views/classification/classification.vue'),
        meta: {
          title: '分类',
        }
      },
      {
        path: 'Cart',
        name: 'Cart',
        component: () => import('../views/Cart/Cart.vue'),
        meta: {
          title: '购物车',
        }
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('../views/my/my.vue'),
        meta: {
          title: '我的',
        }
      },
    ]
  },
  // 登录注册
  {
    path: '/land',
    name: 'land',
    component: () => import('../views/land/land'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/geren',
    name: 'geren',
    component: () => import('../views/geren/geren.vue'),
    meta: {
      title: '个人资料'
    }
  },
  {
    path: '/pingjia',
    name: 'pingjia',
    component: () => import('../views/pingjia/pingjia.vue'),
    meta: {
      title: '评价'
    }
  },
  {
    path: '/jiesuan',
    name: 'jiesuan',
    component: () => import('../views/jiesuan/jiesuan.vue'),
    meta: {
      title: '结算页'
    }
  },
  {
    path: '/dizhi',
    name: 'dizhi',
    component: () => import('../views/dizhi/dizhi.vue'),
    meta: {
      title: '地址管理'
    }
  },
  {
    path: '/xinzen',
    name: 'xinzen',
    component: () => import('../views/xinzen/xinzen.vue'),
    meta: {
      title: '新增地址'
    }
  },
  {
    path: '/bianji',
    name: 'bianji',
    component: () => import('../views/bianji/bianji.vue'),
    meta: {
      title: '编辑地址'
    }
  },
  {
    path: '/pingjia2',
    name: 'pingjia2',
    component: () => import('../views/pingjia2/pngjia2.vue'),
    meta: {
      title: '评价中心'
    }
  },
  {
    path: '/pingjia3',
    name: 'pingjia3',
    component: () => import('../views/pingjia3/pingjia3.vue'),
    meta: {
      title: '评价中心'
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/orders/orders.vue'),
    meta: {
      title: '全部订单'
    }
  },
  {
    path: '/Collection',
    name: 'Collection',
    component: () => import('../views/Collection/Collection.vue'),
    meta: {
      title: '全部订单'
    }
  },
  {
    path: '/City',
    name: 'City',
    component: () => import('../views/city/City.vue'),
    meta: {
      title: '城市列表'
    }
  },
  {
    path: '/sousuo',
    name: 'sousuo',
    component: () => import('../views/sousuo/sousuo'),
    meta: {
      title: '模糊搜索'
    }
  },
  {
    path: '/visit',
    name: 'visit',
    component: () => import('../views/visit/visit.vue'),
    meta: {
      title: '最近游览'
    }
  },
  {
    path: '/wancheng',
    name: 'wancheng',
    component: () => import('../views/wancheng/wancheng.vue'),
    meta: {
      title: '已完成'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail/detail.vue'),
    meta: {
      title:'详情页'
    }
  },
  {
    path: '/settin',
    name: 'settin',
    component: () => import('../views/settin/settin'),

    meta: {
      title: '我的'

    }
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '*',
    component: () => import('../views/err/err.vue'),
    meta: {
      title: '错啦'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {// 网页名字
  document.title = to.meta.title
  next()
  //如果用户访问的就是登录注册页面就直接next 进入下一步
  // let username = JSON.parse(localStorage.getItem('username'))//路由守卫
  // if (to.path === '/land') next()
  // else username ? next() : next('/land')
  // else判断localStorage有没有这个user如果有就直接让他登录，进入下一步，
  // 如果没有就让他访问登录页面
})

export default router
