import Vuex from 'vuex'
import cookieparser from 'cookieparser'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
        currentUser: null
    },
    mutations,
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        if (req.headers.cookie) {
          var parsed = cookieparser.parse(req.headers.cookie)
          commit('setUser', parsed["__1d4fgh"])
        }
      }
    }
  })
}

export default createStore