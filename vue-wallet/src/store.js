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
    validPaymentPage:{
      name:false,
      cardNum:false,
      year:false,
      month:false,
      securityNum: false,
    },
    isMainpageSubmit:false,
    isPaymentpageSubmit: false,
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
    setPaymentPageName(state, boolean){
      state.validPaymentPage.name = boolean
    },
    setPaymentPageCardNum(state, boolean){
      state.validPaymentPage.cardNum = boolean
    },
    setPaymentPageYear(state, boolean){
      state.validPaymentPage.year = boolean
    },
    setPaymentPageMonth(state, boolean){
      state.validPaymentPage.month = boolean
    },
    setPaymentPageSecurityNum(state, boolean){
      state.validPaymentPage.securityNum = boolean
    },
    setMainPageSubmit(state, boolean){
      state.isMainpageSubmit = boolean
    },
    setFinishedMainpage(state,boolean){
      state.isFinishedMainPage=boolean
    },
    setPaymentpageSubmit(state, boolean){
      state.isPaymentpageSubmit = boolean
    },
    setFinishedStatus(state,status){
      state.isFinished = status
    }
  },
  actions: {
  }
})
