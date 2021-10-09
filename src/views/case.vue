<template>
  <div id="case">
    <div class="body-main-right">
      <div class="body-main-right-title">
        <h5>经典案例</h5>
      </div>
      <div class="body-main-right-content">
        <div class="news-top">
          <div class="news-top-image">
            <img src="../assets/classic_case.jpg" alt="" />
          </div>
          <div class="news-top-right">
            <h5>香港独资东莞美景电镀废水零排放项目（环评+设计+建设+运营）</h5>
            <p>2020-03-27</p>
            <p></p>
            <router-link to="">查看详情>></router-link>
          </div>
        </div>
        <!-- 新闻 -->
        <div class="news-list">
          <div class="news-list-item">
            <div class="news-list-item-date">2020-11-04</div>
            <h5>恒洁卫浴（一期）电镀废水整体零排放项目</h5>
          </div>
          <div class="news-list-item">
            <div class="news-list-item-date">2020-11-04</div>
            <h5>恒洁卫浴（一期）电镀废水整体零排放项目</h5>
          </div>
          <div class="news-list-item">
            <div class="news-list-item-date">2020-11-04</div>
            <h5>恒洁卫浴（一期）电镀废水整体零排放项目</h5>
          </div>
          <div class="news-list-item">
            <div class="news-list-item-date">2020-11-04</div>
            <h5>恒洁卫浴（一期）电镀废水整体零排放项目</h5>
          </div>
        </div>
        <!-- 分页 -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="5"
          page-size="5"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#case {
  .body-main-right {
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
      .news-top {
        height: 274px;
        margin-top: 40px;
        margin-bottom: 30px;
        overflow: hidden;
        &-image {
          width: 381px;
          height: 274px;
          float: left;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        &-right {
          padding-left: 417px;
          padding-right: 25px;
          padding-top: 35px;
          height: 274px;
          background-color: #f0f0f0;
          h5 {
            position: relative;
            font-size: 18px;
            color: #666;
            font-weight: 500;
            padding-right: 100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p {
            font-size: 14px;
            color: #666;
            margin-top: 10px;
          }
          a {
            font-size: 12px;
            color: #666;
            display: block;
            margin-top: 40px;
          }
        }
      }
      .news-list {
        margin-bottom: 50px;
        border-top: 1px solid #e3e3e3;
        &-item {
          padding-left: 150px;
          padding-top: 30px;
          padding-bottom: 45px;
          border-bottom: 1px solid #e3e3e3;
          position: relative;
          &-date {
            // margin-top: 15px;
            position: absolute;
            // top: 15px;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: #e9e9e9;
            color: #999;
            left: 21px;
          }
          h5 {
            font-size: 18px;
            color: #666;
            font-weight: 500;
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>