 <template>
  <div id="infor">
    <div class="banner">
      <div class="banner-title">
        <h5>资讯中心</h5>
        <p style="text-transform: uppercase">INFORMATION CENTRE</p>
      </div>
    </div>

    <div class="body-main">
      <div class="body-main-left">
        <div class="body-main-left-title">
          <div class="body-main-left-title-left">
            I
            <span>/</span>
          </div>

          <div class="body-main-left-title-right"></div>
          资讯中心
          <p>INFORMATION CENTRE</p>
        </div>
        <ul class="body-main-left-nav">
          <li>
            <router-link to="/company">公司新闻</router-link>
          </li>
          <li>
            <router-link to="/industry">行业新闻</router-link>
          </li>
          <li>
            <router-link to="/case">经典案例</router-link>
          </li>
        </ul>
      </div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<style lang="less">
#infor {
  p,
  h5 {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  .banner {
    width: 100%;
    height: 260px;
    position: relative;
    background: url(../assets/news-banner.jpg) no-repeat 50% 50%;
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
      &-nav {
        margin-top: 6px;
        width: 100%;
        border-top: 2px solid #0078d7;
        li {
          a {
            display: block;
            height: 70px;
            line-height: 70px;
            width: 70%;
            padding-left: 55px;
            border-bottom: 1px solid #adadad;
            background: url(../assets/nav-icon.png) no-repeat 11px 50% #fff;
          }
        }
        li :hover {
          background-color: #0078d7;
          color: #fff;
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
        }
      }
    }
  }
}
</style>