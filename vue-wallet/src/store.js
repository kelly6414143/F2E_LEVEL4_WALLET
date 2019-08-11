import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isIDDone:false
  },
  mutations: {
    setIdDone(state,done){
      state.isIDDone = done
    }
  },
  actions: {
  }
})
