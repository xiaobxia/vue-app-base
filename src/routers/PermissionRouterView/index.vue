<template>
  <div>
    <router-view :key="key"/>
  </div>
</template>

<script>
export default {
  name: 'PermissionRouterView',
  data () {
    return {
    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  created () {
    console.log('iiiiii')
  },
  methods: {
  }
}
</script>
