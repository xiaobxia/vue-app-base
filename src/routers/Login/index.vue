<template>
  <div class="page-login">
    <h3>my mobile</h3>
    <div class="input-item">
      <input type="text" v-model="account">
    </div>
    <div class="input-item">
      <input type="text" v-model="password">
    </div>
    <div class="input-item">
      <van-button type="info" @click="loginHandler">登录</van-button>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import storageUtil from '@/util/storageUtil.js'

export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  computed: {},
  created () {
    this.initPage()
  },
  methods: {
    initPage () {
    },
    loginHandler () {
      this.$http.post('auth/login', {account: this.account, password: md5(this.password), platform: 'pc'}).then((data) => {
        if (data.success) {
          window._token = data.data.token
          localStorage.setItem('token', data.data.token)
          storageUtil.setData('UserInfo', {
            ...data.data,
            // 菜单模式
            menu: ['/testMenu/main'],
            isLogin: true
          })
          // 通过roles的方式
          // this.$store.dispatch('generateRoutes', { roles: data.data.roles || [] }).then(() => {
          //   console.log('生成路由')
          //   // router里面原本只有基础的路由，是后来添加的有权限的路由
          //   this.$router.addRoutes(this.$store.getters.addRouters)
          //   this.$router.replace('/')
          // })
          // 通过menu的方式
          this.$store.dispatch('generateRoutesWithMenu', { menu: ['/testMenu/main'] }).then(() => {
            console.log('生成路由')
            // router里面原本只有基础的路由，是后来添加的有权限的路由
            this.$router.addRoutes(this.$store.getters.addRouters)
            this.$router.replace('/')
          })
        } else {
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input-item {
    width: 660px;
  }
</style>
