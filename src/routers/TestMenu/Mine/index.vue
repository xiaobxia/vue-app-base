<template>
  <div class="page-test-menu-mine">
    <span>test-menu-mine</span>
  </div>
</template>

<script>
export default {
  name: 'TestMenuMine',
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
