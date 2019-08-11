import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home,
      children:[
        {
          path:'',
          name: 'home',
          component: () => import(/* webpackChunkName: "MainPage" */ './views/MainPage.vue'),
        },
        {
          path:'/paymentDetail',
          name: 'Paymentdetail',
          component: () => import(/* webpackChunkName: "PaymentDetail" */ './views/PaymentDetail.vue'),
        }
      ]
    },
  ]
})
