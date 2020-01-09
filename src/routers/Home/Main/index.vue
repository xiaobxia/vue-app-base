<template>
  <div class="home-main">
    <span>home-main</span>
    <div>
      <router-link :to="'/helloWorld'">hello-world</router-link>
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
