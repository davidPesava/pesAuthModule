
export const state = () => ({
  user: null,
  currentUser: null,
  credentials: null
})

export const actions = {
  fetchUserProfile({ commit, state }) {

  }
}

export const mutations = {
  setCurrentUser(state, val) {
    state.currentUser = val
  },
  setCredentials(state, val) {
    state.credentials = val
  },
  setUser (state, payload) {
    state.user = payload
  }
}

// export const strict = false

//
// import Vuex from 'vuex'
// import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'
//
// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       user: null
//     },
//     getters: {
//       activeUser: (state, getters) => {
//         return state.user
//       }
//     },
//     mutations: {
//       setUser (state, payload) {
//         state.user = payload
//       }
//     },
//     actions: {
//       autoSignIn ({commit}, payload) {
//         commit('setUser', payload)
//       },
//
//       signInWithGoogle ({commit}) {
//         return new Promise((resolve, reject) => {
//           auth.signInWithRedirect(GoogleProvider)
//           resolve()
//         })
//       },
//
//       signOut ({commit}) {
//         auth.signOut().then(() => {
//           commit('setUser', null)
//         }).catch(err => console.log(error))
//       }
//     }
//   })
// }
//
// export default createStore
