<template>
  <div class="page-no-permission">
    <h1>没有权限</h1>
  </div>
</template>

<script>
export default {
  name: 'NoPermission',
  data () {
    return {
    }
  },
  methods: {
    backHandler () {
      this.$router.history.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
