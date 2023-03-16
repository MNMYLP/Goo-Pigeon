const state = {
  token: localStorage.getItem('token'),
  userInfo: localStorage.getItem('userInfo')
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  mutations
}
