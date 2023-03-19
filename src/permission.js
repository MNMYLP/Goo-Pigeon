import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
const whiteList = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  // 获取存储localStorage的token
  // var token = window.localStorage.getItem('token')
  // 获取存储token的开始时间
  if (window.localStorage.getItem('tokenStartTime')) {
    const tokenStartTime = window.localStorage.getItem('tokenStartTime')
    // 后台给出的token有效时间，一个星期 单位 是秒
    // 定义2小时过期，让用户重新登录一下
    const timeOver = 2 * 3600 * 1000
    // 当前时间
    const date = new Date().getTime()
    // 如果大于说明是token过期了
    if (date - tokenStartTime > timeOver) {
      window.localStorage.clear()
      store.state.user.token = null
      store.state.user.userInfo = []
      router.push('/login')
    }
  }
  const role = 'admin'
  if (store.state.user.token !== null && role != null) {
    if (store.state.user.userInfo.length === 0) {
      await store.dispatch('hasUserInfo')
    }
    if (to.path === '/login') {
      next('/')
    }
    next()
    const accessRoutes = await store.dispatch('permission/generateRoutes', role)
    router.addRoutes(accessRoutes)
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }

  // if (token) {
  //   NProgress.start()
  //   if (to.path === '/login') {
  //     next('/')
  //   } else {
  //     if (!store.state.userInfo) {
  //       // console.log(store.getters.userInfo)
  //       await store.dispatch('hasUserInfo')
  //     }
  //     router.addRoutes(store.state.user.router)
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) > -1) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
  NProgress.done()
  // if (hastoken) {
  //   next()
  //   const accessRoutes = await store.dispatch('permission/generateRoutes', role)
  //   router.addRoutes(accessRoutes)
  // } else {
  //   next()
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
