import { uuid } from 'uuidv4'
export default {
  namespaced: true,
  state: () => (
    {
      filter: [],
      list: [{
        id: 0,
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        img: 'https://avatars.mds.yandex.net/get-mpic/4249638/img_id6129126127483725327.jpeg/orig'
      }
      ]
    }
  ),
  mutations: {
    addProduct (state, product) {
      const id = uuid()
      state.list.push({ id, ...product })
    },
    deleteProduct (state, id) {
      state.list = state.list.filter(item => item.id !== id)
    }
  },
  actions: {
    create ({ commit }, product) {
      commit('addProduct', product)
    },
    delete ({ commit }, id) {
      commit('deleteProduct', id)
    }
  },
  getters: {
    getList (state) {
      return state.list
    }
  }
}
