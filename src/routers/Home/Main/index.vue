<template>
  <div class="home-main">
    <span>home-main</span>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
