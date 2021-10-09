<template>
  <div id="footer">
    <div class="footer-left">
      <img src="../assets/footer-logo.png" alt="" />

      <div class="footer-title" style="margin-left: 5px; font-size: 14px">
        <p>重庆市汇亚环保有限公司</p>
        <div class="copyRight">Copyright © hyhb All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#footer {
  height: 120px;
  background-color: #eee;
  position: relative;
  bottom: 0;
  left: 0;
  .footer-left {
    width: 70%;
    padding-top: 30px;
    padding-left: 30px;
    display: flex;
    .footer-title {
      padding-left: 30px;
      margin-top: 5px;
      p {
        margin-top: 5px;
      }
      .copyRight {
        // padding-top: 5px;
        color: #666;
        font-size: 12px;
      }
    }
  }
}
</style>