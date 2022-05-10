import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../views/layout/Index.vue"
import Login from "../views/login/Login.vue"
import Home from "../views/home/Home.vue"

const Goods = () => import("../views/goods/Goods.vue")
const Params = () => import("../views/params/Params.vue")
const Ads = () => import("../views/ads/Ads.vue")
const Orders = () => import("../views/orders/Orders.vue")
const OrderList = () => import("../views/orders/orderList/OrderList.vue")
const ReturnedOrderList = () => import("../views/orders/returnedOrderList/ReturnedOrderList.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      }, {
        path: "/goods",
        name: "Goods",
        component: Goods
      },
      {
        path: "/params",
        name: "Params",
        component: Params
      },
      {
        path: "/ads",
        name: "Ads",
        component: Ads
      },
      {
        path: "/orders",
        name: "Orders",
        component: Orders,
        redirect:"/orders/order-list",
        children: [
          {
            path: "order-list",
            component: OrderList
          }, {
            path: "returned-order",
            component: ReturnedOrderList
          }]
      },

    ]

  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }

]

const router = new VueRouter({
  routes
})

export default router
