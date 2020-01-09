import router from './router'
// import store from './store'
// import storageUtil from '@/utils/storageUtil'
// import permissionUtil from '@/utils/permission'

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  console.log(from)
  console.log(to)
  // 默认是都不需要登录信息
  if (to.meta && to.meta.auth === true) {
    const userInfo = storageUtil.getData('userInfo')
    if (userInfo.isLogin === true) {
      // 登入了还去登录，直接转首页
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        // // 没有生成过
        // if (store.getters.addRouters.length === 0) {
        //   store.dispatch('GenerateRoutes', { roles: userInfo.roles }).then(() => {
        //     console.log('生成菜单')
        //     // router里面原本只有基础的路由，是后来添加的有权限的路由
        //     router.addRoutes(store.getters.addRouters)
        //     next({ ...to, replace: true })
        //   })
        // }
        // if (permissionUtil.checkPermission(userInfo.roles, to)) {
        //   next()
        // } else {
        //   next({ path: '/401', replace: true, query: { noGoBack: true }})
        // }
      }
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  console.log('afterEach')
  console.log(from)
  console.log(to)
})
