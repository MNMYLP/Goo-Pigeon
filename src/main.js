import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters
// // main.js
// import AMap from 'vue-amap'
// Vue.use(AMap)
// AMap.initAMapApiLoader({
//   key: '66c796322a809f51a06508f8b8b48952',
//   plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder', 'AMap.ElasticMarker']// 一些需要用到的插件
// })
// 地图
// import AmapVue from '@amap/amap-vue'

// AmapVue.config.version = '2.0' // 默认2.0，这里可以不修改
// AmapVue.config.key = '66c796322a809f51a06508f8b8b48952'
// AmapVue.config.plugins = [
//   'AMap.ToolBar',
//   'AMap.MoveAnimation'
//   // 在此配置你需要预加载的插件，如果不配置，在使用到的时候会自动异步加载
// ]
// Vue.use(AmapVue)
// 地图
import echarts from 'echarts'
Vue.use(echarts)
Vue.prototype.$echarts = echarts
// Vue.use('$echerts', echarts)
// import 'echarts'
// import ECharts from 'vue-echarts'
// Vue.component('VueEcharts', ECharts)
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

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
