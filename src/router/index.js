import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: "/main",
    children: [
      {
        path: '/main',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        meta: { title: "Home" }
      },
      {
        path: '/shop',
        component: () => import('../views/shop/shop.vue'),
        meta: { title: "商品管理" }
      },{
        path: '/shoplist',
        component: () => import('../views/shop/shoplist.vue'),
        meta: { title: "品类管理" }
      },{
        path: '/addshop',
        component: () => import('../views/shop/addshop.vue'),
        meta: { title: "添加商品" }
      },{
        path: '/detail',
        component: () => import('../views/shop/detail.vue'),
        meta: { title: "商品详情" }
      },{
        path: '/editshop',
        component: () => import('../views/shop/editshop.vue'),
        meta: { title: "修改商品" }
      },
      {
        path: '/order',
        component: () => import('../views/order/order.vue'),
        meta: { title: "订单管理" }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes
});

export default router
