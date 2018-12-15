<template>
  <div class="tab-view tab-view-mine">
    <template v-if="!ifUser">
      <p>用户未登录</p>
      <div @click="toLoginHandler" >去登陆</div>
    </template>
    <template v-else>
      <div class="btn-wrap">
        <p>{{user.name}}</p>
        <mt-button type="primary" @click="logoutHandler" class="main-btn">退出登录</mt-button>
      </div>
    </template>
  </div>
</template>

<script>
import storageUtil from '@/util/storageUtil.js'

export default {
  name: 'Mine',
  data () {
    const user = storageUtil.getUserInfo()
    return {
      ifUser: user.isLogin === true,
      user: user
    }
  },
  methods: {
    initPage () {
    },
    toLoginHandler () {
      this.$router.push('/page/login')
    },
    logoutHandler () {
      this.$http.get('auth/logout', {token: window._token, platform: 'mobile'}).then((data) => {
        if (data.success) {
          localStorage.removeItem('token')
          storageUtil.initUserInfo({
            isLogin: false
          })
          this.$store.dispatch('setTabSelect', 'index')
        } else {
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
