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
      auth: true
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
    name: 'ToImageDemo',
    path: '/toImageDemo',
    component: lazyLoading('ToImageDemo'),
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

export const asyncRouterMap = [
  // roles方式
  // {
  //   path: '/testRoles',
  //   name: 'TestRoles',
  //   component: lazyLoading('PermissionRouterView'),
  //   redirect: '/testRoles/main',
  //   meta: {
  //     auth: true,
  //     roles: {
  //       include: ['admin']
  //     }
  //   },
  //   children: [
  //     {
  //       path: 'main',
  //       component: lazyLoading('TestRoles/Main'),
  //       name: 'TestRolesMain',
  //       meta: {
  //         auth: true,
  //         roles: {
  //           include: ['admin']
  //         }
  //       }
  //     },
  //     {
  //       path: 'mine',
  //       component: lazyLoading('TestRoles/Mine'),
  //       name: 'TestRolesMine',
  //       meta: {
  //         auth: true,
  //         roles: {
  //           include: ['admin']
  //         }
  //       }
  //     }
  //   ]
  // },
  // 菜单方式
  {
    path: '/testMenu',
    name: 'TestMenu',
    component: lazyLoading('PermissionRouterView'),
    redirect: '/testMenu/main',
    meta: {
      auth: true,
      menu: '/testMenu'
    },
    children: [
      {
        path: 'main',
        component: lazyLoading('TestMenu/Main'),
        name: 'TestMenuMain',
        meta: {
          auth: true,
          menu: '/testMenu/main'
        }
      },
      {
        path: 'mine',
        component: lazyLoading('TestMenu/Mine'),
        name: 'TestMenuMine',
        meta: {
          auth: true,
          menu: '/testMenu/mine'
        }
      }
    ]
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
