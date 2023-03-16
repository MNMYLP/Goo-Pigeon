import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
router.beforeEach(async(to, from, next) => {
  const hastoken = 'admin-token'
  const role = 'admin'
  // if (hastoken && store.state.user.token !== null) {
  //   if (store.state.user.userInfo === null) {
  //     await store.dispatch('hasUserInfo')
  //   }
  //   next()
  //   const accessRoutes = await store.dispatch('permission/generateRoutes', role)
  //   // dynamically add accessible routes
  //   router.addRoutes(accessRoutes)
  // } else {
  //   next()
  // }
  if (hastoken) {
    next()
    const accessRoutes = await store.dispatch('permission/generateRoutes', role)
    router.addRoutes(accessRoutes)
  } else {
    next()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
