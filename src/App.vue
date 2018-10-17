<template>
  <div id="app">
    <div class="loading-wrap" v-if="!ifChecked">
      <i class="fas fa-spinner fa-spin"></i>
      <p>加载中...</p>
    </div>
    <template v-else>
      <router-view v-if="subPath"/>
      <template v-else>
        <logo v-if="tabSelect === 'logo'"></logo>
        <mt-tabbar v-model="tabSelect" :fixed="true">
          <mt-tab-item id="logo">
            <img src="./assets/logo.png" alt="" slot="icon">
            <!--<i class="fas fa-donate" slot="icon"></i>-->
            <p>logo</p>
          </mt-tab-item>
        </mt-tabbar>
      </template>
    </template>
  </div>
</template>

<script>
import Http from '@/util/httpUtil.js'
import storageUtil from '@/util/storageUtil.js'
import Logo from '@/tabViews/Logo/index.vue'

const defaultTab = 'logo'

export default {
  data () {
    const tabSelect = storageUtil.getAppConfig('homeTabSelect') || defaultTab
    return {
      tabSelect: tabSelect,
      subPath: false,
      ifChecked: false
    }
  },
  watch: {
    tabSelect (val) {
      storageUtil.setAppConfig('homeTabSelect', val)
    }
  },
  components: {Logo},
  name: 'App',
  mounted () {
    this.initPage()
  },
  methods: {
    initPage () {
      this.checkLogin()
      this.checkPath(this.$router.history.current.path)
      this.$router.afterEach((transition) => {
        this.checkPath(transition.path)
      })
    },
    checkLogin () {
      const token = localStorage.getItem('token') || ''
      Http.get('auth/checkLogin', {token}).then((data) => {
        window._token = data.data.token
        if (data.data.isLogin === false) {
          storageUtil.initUserInfo({
            isLogin: false
          })
          this.$router.push('/page/login')
        } else {
          storageUtil.initUserInfo({
            ...data.data,
            isLogin: true
          })
        }
        this.ifChecked = true
      })
    },
    checkPath (path) {
      this.subPath = path.startsWith('/page')
    }
  }
}
</script>

<style>

</style>
