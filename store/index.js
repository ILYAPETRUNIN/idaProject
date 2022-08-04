import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products.js'
import Snackbar from '@/models/Snackbar.js'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    snackbars: []
  },
  getters: {
    getSnackbars (state) {
      return state.snackbars
    }
  },
  mutations: {
    addSnackbar (state, snackbar) {
      state.snackbars.push(snackbar)
    },
    deleteSnackbar (state, id) {
      state.snackbars = state.snackbars.filter(item => item.id !== id)
    }
  },
  actions: {
    showSnackbar ({ commit }, data) {
      const snackbar = new Snackbar(data)
      commit('addSnackbar', snackbar)

      function hideSnackbar () {
        commit('deleteSnackbar', snackbar.id)
      }

      setTimeout(hideSnackbar.bind(this), data.timeout)
    }
  },
  modules: {
    products
  }
})

export default store
