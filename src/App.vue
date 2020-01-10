<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import storageUtil from '@/util/storageUtil.js'

export default {
  name: 'App',
  data () {
    return {
      ifChecked: false
    }
  },
  watch: {
  },
  computed: {
  },
  created () {
    // const user = storageUtil.getData('UserInfo')
    // if (user.isLogin !== true) {
    //   this.ifChecked = true
    // } else {
    //   this.$store.dispatch('generateRoutes', {
    //     roles: ['admin']
    //   }).then(() => {
    //     this.ifChecked = true
    //   })
    // }
  },
  methods: {
  }
}
</script>

<style>

</style>
