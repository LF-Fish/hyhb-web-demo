<template>
  <div id="about">
    <div class="banner">
      <div class="banner-title">
        <h5>关于我们</h5>
        <p style="text-transform: uppercase">About us</p>
      </div>
    </div>
    <div class="body-main">
      <div class="body-main-left">
        <div class="body-main-left-title">
          <div class="body-main-left-title-left">
            A
            <span>/</span>
          </div>

          <div class="body-main-left-title-right"></div>
          关于我们
          <p>ABOUT US</p>
        </div>
      </div>
      <div class="body-main-right">
        <div class="body-main-right-title">
          <h5>公司简介</h5>
          <!-- <div class="body-main-right-title-breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>公司简介</el-breadcrumb-item>
            </el-breadcrumb>
          </div> -->
        </div>
        <div class="body-main-right-content"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#about {
  p,
  h5 {
    margin: 0;
    padding: 0;
  }
  .banner {
    width: 100%;
    height: 260px;
    position: relative;
    background: url(../assets/about-banner.jpg) no-repeat 50% 50%;
    display: flex;
    align-items: center;
    justify-content: right;
    &-title {
      margin-right: 149px;
      h5 {
        font-weight: 300;
        font-size: 40px;
        color: #fff;
        letter-spacing: 8px;
      }
      p {
        line-height: normal;
        font-weight: 300;
        font-size: 30px;
        color: #fff;
      }
    }
  }
  overflow: hidden; //清楚浮动
  .body-main {
    padding-top: 35px;
    padding-bottom: 71px;
    padding-left: 20px;
    padding-right: 20px;

    &-left {
      float: left;
      padding-right: 79px;
      &-title {
        color: #0078d7;
        &-right {
          display: inline-block;
          p {
            font-size: 28px;
            line-height: normal;
            position: relative;
            top: 2px;
          }
        }
        &-left {
          font-size: 50px;
          line-height: 50px;
          display: inline;
          span {
            font-weight: 300;
          }
        }
      }
    }
    &-right {
      width: 100%;
      padding-left: 337px;
      &-title {
        position: relative;
        margin-top: 8px;
        padding-top: 15px;
        padding-bottom: 10px;
        border-bottom: 3px solid #0078d7;
        h5 {
          font-size: 24px;
          color: #0078d7;
          font-weight: 500;
          display: inline;
        }
      }
    }
  }
}
</style>