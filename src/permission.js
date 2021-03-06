import router from './router'
import store from './store'
import storageUtil from '@/util/storageUtil'
// import permissionUtil from '@/util/permission'

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  console.log(from)
  console.log(to)
  const userInfo = storageUtil.getData('UserInfo')
  // 添加过路由
  if (store.getters.ifAddRouters) {
    // 默认是都不需要登录信息
    if (to.meta && to.meta.auth === true) {
      // 登陆过的那就会有用户信息，不管你是不是刷新
      if (userInfo.isLogin === true) {
        // 登入了还去登录，直接转首页
        if (to.path === '/login') {
          next({ path: '/' })
        } else {
          next()
        }
      } else {
        next({ path: '/login' })
      }
    } else {
      next()
    }
  } else {
    // 通过roles的方式
    // store.dispatch('generateRoutes', { roles: userInfo.roles || [] }).then(() => {
    //   console.log('生成路由')
    //   console.log(store.getters.addRouters)
    //   // router里面原本只有基础的路由，是后来添加的有权限的路由
    //   router.addRoutes(store.getters.addRouters)
    //   next({ path: to.path, replace: true })
    // })
    // 通过menu的方式
    store.dispatch('generateRoutesWithMenu', { menu: userInfo.menu || [] }).then(() => {
      console.log('生成路由')
      // router里面原本只有基础的路由，是后来添加的有权限的路由
      router.addRoutes(store.getters.addRouters)
      next({ path: to.path, replace: true })
    })
  }
})

router.afterEach((to, from) => {
  console.log('afterEach')
  console.log(from)
  console.log(to)
})
