<template>
  <div class="page-404">
    <h1>404</h1>
  </div>
</template>

<script>
export default {
  name: 'NotMatch',
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
