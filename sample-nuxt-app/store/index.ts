import Vuex from 'vuex'
import count from './count'

export const store = new Vuex.Store({
  modules: {
    count,
  },
})
