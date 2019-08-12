import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isIDDone:false,
    validMainPage:{
      name:false,
      phone:false,
      email:false,
      address:false
    },
    isMainpageSubmit:false,
    isFinishedMainPage:false,
    isFinished:false
  },
  mutations: {
    setIdDone(state,done){
      state.isIDDone = done
    },
    setValidMainPageName(state,valid){
      state.validMainPage.name = valid.name
    },
    setValidMainPageEmail(state,valid){
      state.validMainPage.email = valid.email
    },
    setValidMainPagePhone(state,valid){
      state.validMainPage.phone = valid.phone
    },
    setMainPageSubmit(state, boolean){
      state.isMainpageSubmit = boolean
    },
    setFinishedMainpage(state,boolean){
      state.isFinishedMainPage=boolean
    },
    setFinishedStatus(state,status){
      state.isFinished = status
    }
  },
  actions: {
  }
})
