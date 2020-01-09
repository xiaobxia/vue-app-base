import Vue from 'vue'
import Router from 'vue-router'
const lazyLoading = (path, index = true) => () => System.import(`@/routers/${path}${index ? '/index' : ''}.vue`)

Vue.use(Router)

// 都有的路由
export const constantRouterMap = [
  {
    name: 'Login',
    path: '/login',
    component: lazyLoading('Login'),
    meta: {
      auth: false
    }
  },
  {
    name: 'HelloWorld',
    path: '/helloWorld',
    component: lazyLoading('HelloWorld'),
    meta: {
      auth: false
    }
  },
  {
    name: 'NoPermission',
    path: '/401',
    component: lazyLoading('NoPermission'),
    meta: {
      auth: false
    }
  },
  {
    path: '/home',
    component: lazyLoading('Home'),
    name: 'Home',
    redirect: '/home/main',
    children: [
      {
        path: 'main',
        component: lazyLoading('Home/Main'),
        name: 'HomeMain',
        meta: {
          auth: false
        }
      },
      {
        path: 'mine',
        component: lazyLoading('Home/Mine'),
        name: 'HomeMine',
        meta: {
          auth: false
        }
      }
    ]
  },
  {
    path: '',
    redirect: 'home'
  },
  {
    name: '404',
    path: '*',
    component: lazyLoading('NotMatch'),
    meta: {
      auth: false
    }
  }
]

export default new Router({
  // hash, history
  mode: 'hash',
  linkActiveClass: 'is-active',
  // 这个功能只在 HTML5 history 模式下可用
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
