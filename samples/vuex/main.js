Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) { 
      state.count++
    },
    decrement(state) { 
      state.count--
    }
  },
  actions: {
    increment(context) { 
      context.commit('increment')
    },
    decrement(context) {
      context.commit('decrement')
    }
  },
  getters: {
    postfixCount(state) {
      return state.count + "回"
    }
  }
})


new Vue({
  el: '#app',
  store,
  // computed: Vuex.mapState({
  //   count: state => state.count,
  //   countWithPostfix: state => `${state.count}回`
  // }),
  computed: {
    countWithPrefix() { 
      return `第${this.$store.state.count}`
    },
    count() { 
      return this.$store.state.count
    },
    ...Vuex.mapGetters(['postfixCount']),
    ...Vuex.mapState({
      countWithPostfix: state => `${state.count}回`
    })
  },
  methods: {
    increment() { 
      store.dispatch('increment')
    },
    decrement() { 
      store.dispatch('decrement')
    }
  }
})