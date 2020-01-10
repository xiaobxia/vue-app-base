<template>
  <div id="app">
    <router-view :key="key"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
    key () {
      return this.$route.fullPath
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style>

</style>
