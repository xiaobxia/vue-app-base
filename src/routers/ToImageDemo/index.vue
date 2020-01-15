<template>
  <div class="page-to-image-demo">
    <div id="to-image-demo">
      <div class="b"></div>
      <div class="a">示例</div>
    </div>
    <div @click="down">下载</div>
  </div>
</template>

<script>
import domImage from '@/util/domImage'
export default {
  name: 'ToImageDemo',
  data () {
    return {
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
        console.log(res)
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
