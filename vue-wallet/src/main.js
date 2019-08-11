import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
  const nextRoute = ['home','MainPage','Paymentdetail']; 
  if (nextRoute.indexOf(to.name) >= 0) { 
    if (!store.state.isIDDone) { 
      if(to.path==='/mainPage'){
        next();
      } else {
        next('/mainPage');
      }
    }else{
      next(); 
    } 
  } 
  next(); 
}); 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


