import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    haveImages: false
  },
  getters: {
    get_have_images (state) {
      return state.haveImages
    }
  },
  mutations: {
    set_have_images (state, value) {
      state.haveImages = value
    }
  },
  actions: {

  }
})
