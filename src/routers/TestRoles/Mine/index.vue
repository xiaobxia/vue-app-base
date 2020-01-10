<template>
  <div class="page-test-roles-mine">
    <span>test-roles-mine</span>
  </div>
</template>

<script>
export default {
  name: 'TestRolesMine',
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
