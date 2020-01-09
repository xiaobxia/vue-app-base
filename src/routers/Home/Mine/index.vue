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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
