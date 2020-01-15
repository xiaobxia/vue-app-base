<template>
  <div class="home-main">
    <span>home-main</span>
    <div>
      <router-link :to="'/helloWorld'">hello-world</router-link>
    </div>
    <div>
      <router-link :to="'/testRoles/main'">test-roles-main</router-link>
      <router-link :to="'/testRoles/mine'">test-roles-mine</router-link>
    </div>
    <div>
      <router-link :to="'/testMenu/main'">test-menu-main</router-link>
      <router-link :to="'/testMenu/mine'">test-menu-mine</router-link>
    </div>
    <div>
      <router-link :to="'/toImageDemo'">toImageDemo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMain',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
  },
  methods: {
    backHandler () {
      this.$router.history.go(-1)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
