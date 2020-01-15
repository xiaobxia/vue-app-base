<template>
  <div class="page-to-image-demo">
    <div id="to-image-demo">
      <div class="mb3 tc tl-ns">
        <img src="../../assets/demo1.png">
        <img src="../../assets/demo2.png">
      </div>
      <h3 class="f5">npm Pro Teams</h3>
      <div class="mb4 f6">
        For next-level JavaScript developers who want more capabilities. Pro and Teams
        add the ability to build private packages for you, your team, or for customers.
      </div>
    </div>
    <div @click="down">下载</div>
    <div>
      <p>结果</p>
      <img v-if="imgUrl" :src="imgUrl" alt="">
    </div>
  </div>
</template>

<script>
import domImage from '@/util/domImage'
export default {
  name: 'ToImageDemo',
  data () {
    return {
      imgUrl: ''
    }
  },
  created () {
  },
  methods: {
    backHandler () {
      this.$router.history.go(-1)
    },
    down () {
      domImage.convertToImage(
        document.getElementById('to-image-demo')
      ).then((res) => {
        this.imgUrl = res
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  #to-image-demo {
    .a {
      font-size: 20PX;
      color: red;
    }
    .b {
      height: 20px;
      width: 200px;
      background-color: blue;
    }
  }
</style>
