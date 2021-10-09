<template>
  <div id="index">
    <banner></banner>
    <div class="body">
      <div class="body-index">
        <!-- 走进汇亚 -->
        <div class="body-index-item">
          <div class="index-about">
            <div class="index-about-title">
              <router-link to="/about"
                >走进汇亚<span
                  style="font-size: 18px; font-weight: 300; margin-left: 10px"
                  >ABOUT US</span
                ></router-link
              >
            </div>
            <div
              class="index-aout-image"
              style="
                background-image: url(../assets/news.jpg);
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 110px;
              "
            ></div>
            <div class="index-about-text">
              <p>
                广东益诺欧环保股份有限公司(简称：益诺欧）——零排放综合服务运营商。广东省科技厅依托益诺欧建立广东省工业废水处理零排放工程技术研究中心。核心技术集中于工业废水治理领域，业务涵盖黑臭水体生态修复、生活垃圾热解、含重金属土壤治理、污泥减量、工业废气、危废处理等污染治理领域，专注于为客户提供专业的环境生态治理整体解决方案，现已形成了污染治理研究开发、设计咨询、核心设备制造、系统设备集成、工程建设安装调试、投资运营管理等全寿命周期的环境污染治理完整产业链。
              </p>
            </div>
            <div class="index-about-link">
              <a> 查看更多 </a>
            </div>
          </div>
        </div>

        <!-- 公司新闻 -->
        <div class="body-index-item news">
          <div class="index-about">
            <div class="index-about-title">
              <router-link to="/company"
                >公司新闻<span
                  style="font-size: 18px; font-weight: 300; margin-left: 10px"
                  >NEWS</span
                ></router-link
              >
            </div>
            <div
              class="index-about-image"
              style="
                background-image: url(../assets/news1.jpg);
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 110px;
              "
            ></div>
            <div class="active-news">
              <p class="news-date">2020-12-09</p>
              <h5 class="news-title">
                <a href="">益诺欧荣获粤港澳大湾区科创先锋大赛“领军人物奖</a>
              </h5>
              <div class="news-des">
                益诺欧荣获粤港澳大湾区科创先锋大赛“领军人物奖”
              </div>

              <ul class="news-list">
                <li>
                  <span>2020-11-04</span>
                  <a href="">
                    喜讯：热烈祝贺中华环保联合会工业园区专业委员...
                  </a>
                </li>
                <li>
                  <span>2020-11-04</span>
                  <a href="">
                    喜讯：热烈祝贺中华环保联合会工业园区专业委员...
                  </a>
                </li>
              </ul>
            </div>

            <!-- 行业新闻 -->
            <div class="index-about-title" style="margin-top: 10px">
              <router-link to="/industry"
                >行业新闻<span
                  style="font-size: 18px; font-weight: 300; margin-left: 10px"
                  >INDUSTRY NEWS</span
                ></router-link
              >
            </div>
            <ul class="news-list">
              <li>
                <span>2020-03-27</span>
                <a href=""> 行业信息 | 常见污水处理问题与解答-下 </a>
              </li>
              <li>
                <span>2020-03-27</span>
                <a href=""> 行业信息 | 常见污水处理问题与解答-中 </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 经典案例 -->
        <div class="body-index-item case">
          <div class="index-about">
            <div class="index-about-title">
              <router-link to="/case"
                >经典案例<span
                  style="font-size: 18px; font-weight: 300; margin-left: 10px"
                  >CLASSIC CASE</span
                ></router-link
              >
            </div>
            <div
              class="index-aout-image"
              style="
                background-image: url(../assets/classic_case.jpg);
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 100%;
                height: 242px;
                overflow: hidden;
              "
            ></div>
            <h5>
              <router-link to="/about"
                >广州天河车陂涌水质一体化污水处理（大观净水厂西侧、欧阳支涌）</router-link
              >
            </h5>
            <div class="index-about-text">
              <p>
                中国电子科技集团公司第十三所控股公司，主要为航天、军工电子等领域提供高精密特种电镀连接器件产品。
              </p>
            </div>
            <div class="index-about-link">
              <a href=""> 查看更多 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
export default {
  components: {
    banner,
  },
};
</script>

<style lang="less">
#index {
  a {
    color: #333;
    text-decoration: none;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  .body {
    .body-index {
      margin: 0 30px;
      position: relative;
      background: #fff;
      padding: 50px 0;
      display: flex;
      .body-index-item {
        width: 33.33333%;
        padding-right: 51px;
        .index-about {
          &-title {
            position: relative;
            font-size: 20px;
            padding-top: 10px;
            margin-bottom: 12px;
            & ::after {
              width: 32px;
              height: 5px;
              display: block;
              background-color: #0078d7;
              content: "";
              position: absolute;
              top: 0;
            }
          }
          &-text {
            line-height: 25px;
            margin-bottom: 5px;
            font-size: 12px;
            color: #666;
            overflow: hidden;
            display: -webkit-box;
            word-break: break-all;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 8;
            width: 90%;
          }
          &-link {
            margin-top: 10px;
            a {
              font-size: 12px;
              display: inline-block;
              padding-right: 25px;
              background: url(../assets/more.jpg) no-repeat 100% 50%;
            }
          }
          .active-news {
            .news-date {
              font-size: 12px;
              color: #666;
              margin-top: 10px;
              margin-bottom: 3px;
            }
            .news-title {
              font-size: 14px;
              color: #333;
              font-weight: 600;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              padding: 0;
              margin: 0;
            }
            .news-des {
              font-size: 12px;
              color: #666;
              margin-top: 3px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
      }
      .news {
        .index-about-title ::after {
          width: 32px;
          height: 5px;
          display: block;
          background-color: #7db901;
          content: "";
          position: absolute;
          top: 0;
        }
      }
      .case {
        .index-about-title ::after {
          width: 32px;
          height: 5px;
          display: block;
          background-color: #f05014;
          content: "";
          position: absolute;
          top: 0;
        }
        h5 {
          color: #333;
          font-size: 14px;
          font-weight: 600;
          margin-top: 17px;
          margin-bottom: 7px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 80%;
        }
      }
      .news-list {
        padding-top: 15px;
        margin-top: 15px;
        border-top: 1px solid #c8c8c8;
        li {
          padding-left: 18px;
          background: url(../assets/arrow-right.png) no-repeat 2px 50%;
          font-size: 12px;
          color: #666;
          margin-bottom: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>