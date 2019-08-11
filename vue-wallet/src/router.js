import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/mainPage',
          name: 'MainPage',
          component: () => import(/* webpackChunkName: "MainPage" */ './views/MainPage.vue'),
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/paymentDetail',
          name: 'Paymentdetail',
          component: () => import(/* webpackChunkName: "PaymentDetail" */ './views/PaymentDetail.vue'),
          beforeEnter: (to, from, next) => {
            if (!store.state.isIDDone) { 
              if(to.path==='/mainPage'){ //如果是登录页面路径，就直接next()
                next();
              } else { //不然就跳转到登录；
                next('/mainPage');
              }
            }else{
              next(); 
            } 
          }
        }
      ]
    },
    { path: '/*', redirect: '/mainPage' }
  ]
})
