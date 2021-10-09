<template>
  <div id="header">
    <div class="container">
      <!-- 公司logo -->
      <div class="logo">
        <router-link to="/" />
      </div>
      <!-- 菜单导航 -->
      <div class="menu">
        <el-menu
          :default-active="$route.path"
          class="el-menu"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about"> 公司简介</el-menu-item>

          <el-submenu index="3">
            <template slot="title">咨询中心</template>
            <el-menu-item index="/company">公司新闻</el-menu-item>
            <el-menu-item index="/industry">行业新闻</el-menu-item>
            <el-menu-item index="/case">经典案例</el-menu-item>
          </el-submenu>

          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
#header {
  .container {
    width: 100%;
    max-width: 1440px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 224px;
      height: 78px;
      display: block;
      background: url(../assets/logo.png) no-repeat;
      text-indent: -99999px;
      overflow: hidden;
      margin-top: 18px;
    }
    .menu {
      margin-top: 30px;
      width: 80%;
      .el-menu {
        display: flex;
        justify-content: center;
        .el-menu-item {
          padding: 0 40px;
          font-size: 18px;
        }
        .el-submenu__title {
          padding: 0 40px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>