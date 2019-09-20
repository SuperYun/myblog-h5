export const state = () => ({
  // authUser: null,
  routeHistory: [],
  routeSt: 'forward', // 'forward'前进；'back'后退
  QRSt: false
})

export const mutations = {
  handelRoute(state, path) {
    const _len = state.routeHistory.length
    if (_len > 1 && state.routeHistory[_len - 2].fullPath === path.fullPath) {
      state.routeHistory.pop()
      state.routeSt = 'back'
    } else {
      state.routeHistory.push(path)
      state.routeSt = 'forward'
    }
  },
  changeQRSt(state, st) {
    state.QRSt = st
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // if (req.session && req.session.authUser) {
    //   commit('SET_USER', req.session.authUser)
    // }
  },
}

export const getters = {
  GETER_RouteHistory(state) {
    return state.routeHistory
  }
}
