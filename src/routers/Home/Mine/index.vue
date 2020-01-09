<template>
  <div class="home-mine">
    <span>home-mine</span>
  </div>
</template>

<script>
export default {
  name: 'HomeMine',
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
