const state = {
  token: localStorage.getItem('token'),
  userInfo: [],
  permissions: localStorage.getItem('permissions')
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  mutations
}
