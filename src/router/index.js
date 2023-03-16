import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'chart', affix: true }
      }
    ]
  },
  {
    path: '/student',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/student/index'),
        name: 'Documentation',
        meta: { title: '学生管理', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/teacher/index'),
        name: 'Teacher',
        meta: { title: '教师管理', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/course',
    component: Layout,
    redirect: '/course/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/course/index'),
        name: 'Course',
        meta: { title: '选课管理', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/run',
    component: Layout,
    redirect: '/run/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/run/index'),
        name: 'Run',
        meta: { title: '跑步管理', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/notice',
    component: Layout,
    redirect: '/notice/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/notice/index'),
        name: 'Notice',
        meta: { title: '学校通知', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/base',
    component: Layout,
    redirect: '/base/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/base/index'),
        name: 'Base',
        meta: { title: '基础设置', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/settings',
    component: Layout,
    redirect: '/settings/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/settings/index'),
        name: 'Settings',
        meta: { title: '系统管理', icon: 'user', noCache: true }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRoutes = [
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
