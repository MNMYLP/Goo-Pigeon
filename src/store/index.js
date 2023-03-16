import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { userInfo } from '@/api/user'
import { Message } from 'element-ui'
Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const actions = {
  async hasUserInfo(context) {
    try {
      console.log('1111111111111111111111111111111111111111111111')
      const res = await userInfo()
      store.state.user.userInfo = res.data.user
      console.log(res.data.user)
    } catch (error) {
      Message.error('用户信息获取失败')
    }
  }
}
const store = new Vuex.Store({
  modules,
  getters,
  actions
})

export default store
