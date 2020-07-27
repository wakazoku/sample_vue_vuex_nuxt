import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Memo from './memo'

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    Memo,
  },
})
