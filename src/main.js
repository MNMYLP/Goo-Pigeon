import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css
// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'

// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VueVideoPlayer)

import App from './App'
import store from './store'
import router from './router'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters
// 地图
import echarts from 'echarts'
Vue.use(echarts)
Vue.prototype.$echarts = echarts
// // // 高德地图配置
// import VueAMap from 'vue-amap' // 引入插件
// Vue.use(VueAMap) // 使用插件
window._AMapSecurityConfig = {
  securityJsCode: '66c796322a809f51a06508f8b8b48952'
}

// VueAMap.initAMapApiLoader({ // 初始化插件
//   key: 'baface8ee2ca22a7b9b66a4a6c1c1cd1', // 高德key，自己官网申请即可，这里是我申请的
//   plugin: ['AMap.Geocoder'], // 插件集合，这里只有一个定位功能，所以就只放一个AMap.Geocoder
//   uiVersion: '1.0.11', // 不加会报错，加上吧
//   v: '1.4.15' // 不加也不会影响，顺手加上吧
// })
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
