<template>
  <div id="app">
    <div class="loading-wrap" v-if="!ifChecked">
      <i class="fas fa-spinner fa-spin"></i>
      <p>加载中...</p>
    </div>
    <template v-else>
      <router-view v-if="subPath"/>
      <template v-else>
        <index v-if="tabSelect === 'index'"/>
        <mine v-if="tabSelect === 'mine'"></mine>
        <mt-tabbar v-model="tabSelect" :fixed="true">
          <mt-tab-item id="index">
            <!--<img src="./assets/logo.png" alt="" slot="icon">-->
            <!--<i class="fas fa-donate" slot="icon"></i>-->
            <h3>首页</h3>
          </mt-tab-item>
          <mt-tab-item id="mine">
            <h3>我的</h3>
          </mt-tab-item>
        </mt-tabbar>
      </template>
    </template>
  </div>
</template>

<script>
import storageUtil from '@/util/storageUtil.js'
import Mine from '@/tabViews/Mine/index.vue'
import Index from '@/tabViews/Index/index.vue'

export default {
  data () {
    return {
      subPath: false,
      ifChecked: false
    }
  },
  watch: {
    tabSelect (val) {

    }
  },
  computed: {
    tabSelect: {
      get () {
        return this.$store.state.tabSelect
      },
      set (val) {
        storageUtil.setAppConfig('homeTabSelect', val)
        this.$store.dispatch('setTabSelect', val)
      }
    }
  },
  components: {Index, Mine},
  name: 'App',
  mounted () {
    this.initPage()
  },
  methods: {
    initPage () {
      this.checkLogin()
      this.checkSubPath(this.$router.history.current.path)
      this.$router.beforeEach((transition, from, next) => {
        if (this.checkAuthPath(transition)) {
          if (storageUtil.getUserInfo().isLogin !== true) {
            this.$router.push('/page/login')
          }
        }
        this.checkSubPath(transition.path)
        next()
      })
      this.$router.afterEach((transition) => {
        // 验证路由过去是否需要登录状态
        if (this.checkAuthPath(transition)) {
          if (storageUtil.getUserInfo().isLogin !== true) {
            this.$router.push('/page/login')
          }
        }
        this.checkSubPath(transition.path)
      })
    },
    checkLogin () {
      const token = localStorage.getItem('token') || ''
      this.$http.get('auth/checkLogin', {token}).then((data) => {
        window._token = data.data.token
        if (data.data.isLogin === false) {
          storageUtil.initUserInfo({
            isLogin: false
          })
          if (this.checkAuthPath()) {
            this.$router.push('/page/login')
          }
        } else {
          storageUtil.initUserInfo({
            ...data.data,
            isLogin: true
          })
        }
        this.ifChecked = true
      })
    },
    checkSubPath (path) {
      this.subPath = path !== '/'
      // this.subPath = path.startsWith('/page')
    },
    checkAuthPath (current) {
      const now = current || this.$router.history.current
      // 需要鉴权的才转登录
      return now.meta && now.meta.auth === true
    }
  }
}
</script>

<style>

</style>
