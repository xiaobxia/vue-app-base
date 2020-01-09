<template>
  <div class="view-home">
    <div class="home-wrap clearfix">
      <router-view/>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="main" icon="home-o" replace to="/home/main">主页</van-tabbar-item>
      <van-tabbar-item name="mine" icon="setting-o" info="20" replace to="/home/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      active: 'main'
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
  @import "~@/style/_var.scss";
  @import "~@/style/mixin.scss";
  .view-home {
    height: 100vh;
  }
  .home-wrap {
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100vh - 100px);
    @include clearfix()
  }
</style>
