<template>
  <div id="contact">
    <div class="banner">
      <div class="banner-title">
        <h5>联系我们</h5>
        <p style="text-transform: uppercase">CONTACT US</p>
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
          联系我们
          <p>CONTACT US</p>
        </div>
      </div>
      <div class="body-main-right">
        <div class="body-main-right-title">
          <h5>联系方式</h5>
        </div>
        <div class="body-main-right-content">
          <div class="body-main-right-content-item">
            <h5>重庆汇亚环保股份有限公司(总部)</h5>
            <p class="el-icon-location">地址：重庆市巴南区XXXXXXXX</p>
            <p class="el-icon-message">邮箱：xxxxx@xxx.com</p>
            <p class="el-icon-phone">电话：+xxxxxxxxxxxxx</p>
            <p class="el-icon-phone-outline">技术服务专线：xxxxxxxxx</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#contact {
  p,
  h5 {
    margin: 0;
    padding: 0;
  }
  .banner {
    width: 100%;
    height: 260px;
    position: relative;
    background: url(../assets/contact-banner.jpg) no-repeat 50% 50%;
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
      &-content {
        padding-top: 55px;
        padding-bottom: 100px;
        background: url(../assets/damap.png) no-repeat 50% 43px;
        &-item {
          width: 50%;
          h5 {
            font-size: 24px;
            color: #333;
            font-weight: 500;
            padding-left: 10px;
            margin-bottom: 20px;
          }
          p {
            margin-left: 10px;
            padding-left: 30px;
            height: 75px;
            line-height: normal;
            padding-top: 17px;
            font-size: 20px;
            color: #666;
            display: block;
          }
        }
      }
    }
  }
}
</style>