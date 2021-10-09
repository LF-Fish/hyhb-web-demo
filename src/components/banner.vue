<template>
  <div id="banner">
    <div class="block">
      <el-carousel trigger="click" height="500px">
        <el-carousel-item v-for="item in bannerImage" :key="item">
          <img :src="item" >
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImage: [
        require("../assets/banner-image1.jpg"),
         require("../assets/banner-image2.jpg"),
         require("../assets/banner-image3.jpg"),
         require("../assets/banner-image4.jpg"),
      ],
    };
  },
};
</script>

<style lang="less">
#banner {
  .block {
    .el-carousel__item {
      margin: 0;
    }
    .el-carousel__button{
        height: 5px;
    }
    .el-carousel__arrow{
        background-color: rgba(21, 25, 29, 0.507);
        width: 50px;
        height: 50px;
        font-size: 20px;
    }
  }
}
</style>