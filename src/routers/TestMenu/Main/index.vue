<template>
  <div class="page-test-menu-main">
    <span>test-menu-main</span>
    <div>
      <router-link :to="'/helloWorld'">hello-world</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestMenuMain',
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
