import { v4 as uuidv4 } from 'uuid'
import { getLocalStorage, setLocalStorage } from '../storeLocal'

const clone = require('lodash/clone')

export default {
  namespaced: true,
  state: () => (
    {
      filter: [],
      list: getLocalStorage() || [],
      sort: ''
    }
  ),
  mutations: {
    addProduct (state, product) {
      const id = uuidv4()
      state.list.push({ id, ...product })
      setLocalStorage(state.list)
    },
    deleteProduct (state, id) {
      state.list = state.list.filter(item => item.id !== id)
      setLocalStorage(state.list)
    },
    setSort (state, type) {
      state.sort = type
    }
  },
  actions: {
    create ({ commit }, product) {
      commit('addProduct', product)
    },
    delete ({ commit }, id) {
      commit('deleteProduct', id)
    },
    sort ({ commit }, type) {
      commit('setSort', type)
    }
  },
  getters: {
    getList (state) {
      let list = clone(state.list)
      switch (state.sort) {
        case 'По наименованию':
          list = list.sort((a, b) => {
            if (a.name > b.name) { return -1 }
            if (a.name < b.name) { return 1 }
            return 0
          })
          break
        case 'По цене min':
          list = list.sort((a, b) => {
            if (a.price < b.price) { return -1 }
            if (a.price > b.price) { return 1 }
            return 0
          })
          break
        case 'По цене max':
          list = list.sort((a, b) => {
            if (a.price > b.price) { return -1 }
            if (a.price < b.price) { return 1 }
            return 0
          })
          break
      }
      return list
    }
  }
}
