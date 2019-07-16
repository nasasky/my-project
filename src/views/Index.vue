<template>
  <div class="boc">
    <div class="index-main">
      <div class="ul-headerx">
        <div class="ul-lix">
          <el-row>
            <el-col :span="24">
              <el-dropdown style="margin-top:7px;float:left;">
                <span class="el-dropdown-link" style="color:black;">
                  关注公众号
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <img src="../assets/gongzhong.png" class="gongzhong-img" />
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

              <div class="header-top" style="height:30px;">
                <router-link :to="{name:'pc_mzlogin'}" style="color:black;">登录</router-link>&nbsp;|&nbsp;
                <router-link :to="{name:'pc_zhuce'}" style="color:black;">注册</router-link>&nbsp;&nbsp;
                <router-link :to="{name:'simiao'}" style="color:black;">寺庙服务</router-link>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="ul-header">
        <div class="ul-li">
          <el-row>
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#9E8149"
              text-color="#fff"
              active-text-color="#ffd04b"
              style="height:40px;"
            >
              <el-menu-item index="1" style="height:40px;line-height:40px;">首页</el-menu-item>

              <el-submenu index="2">
                <template slot="title">佛门要闻</template>
                <el-menu-item index="2-1">政策法规</el-menu-item>
                <el-menu-item index="2-2">佛门轶事</el-menu-item>
                <el-menu-item index="2-3">佛门要事</el-menu-item>
              </el-submenu>

              <el-menu-item index="3" style="height:40px;line-height:40px;">寺庙索引</el-menu-item>

              <el-submenu index="4">
                <template slot="title">佛门善举</template>
                <el-menu-item index="4-1">佛门善事</el-menu-item>
                <el-menu-item index="4-2">世间善事</el-menu-item>
              </el-submenu>

              <el-menu-item index="5" style="height:40px;line-height:40px;">佛门资料</el-menu-item>

              <el-menu-item index="6" style="height:40px;line-height:40px;">佛门养生</el-menu-item>

              <el-menu-item index="7" style="height:40px;line-height:40px;">佛事办理</el-menu-item>

              <el-menu-item index="8" style="height:40px;line-height:40px;">建庙功德</el-menu-item>

              <el-menu-item index="9" style="height:40px;line-height:40px;">法师介绍</el-menu-item>

              <el-menu-item index="10" style="height:40px;line-height:40px;">联系我们</el-menu-item>
            </el-menu>
          </el-row>
        </div>
      </div>

      <el-row>
        <el-col :span="24">
          <div class="he-ul"></div>
        </el-col>
      </el-row>

      <el-carousel :interval="10000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <img class="imgx" src="../assets/banner/banbg.jpg" />
        </el-carousel-item>
      </el-carousel>

      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="news-nei">
              <i class="fa fa-bullhorn fa-x" style="color:black;float:left;"></i>
              <div class="news">新闻动态</div>
            </div>
          </div>
        </el-col>

        <el-col :span="12">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>

      <!-- <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple" style="height:60px;"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>-->
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
/* body {
  background: url(../assets/sitebg1.gif) !important;
} */
.boc {
  width: 100%;
  height: 100%;
  position: relative;
  /* background: url(../assets/sitebg1.gif); */
}
.news {
  float: left;
  margin-left: 10px;
  color: black;
}

.news-nei {
  float: left;
  width: 98%;
  margin-left: 2%;
  margin-top: 10px;
  border-bottom: 1px solid #ebebeb;
}
.index-main {
  width: 100%;
  min-width: 1000px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}
.el-carousel__item {
  background: none !important;
}

.header-top {
  float: right;
  line-height: 30px;
  margin-right: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.gongzhong-img {
  width: 80px;
  height: 80px;
  margin-top: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0px;
}
.el-submenu__title i {
  color: white;
}
.el-submenu__title {
  height: 40px !important;
  line-height: 40px !important;
}
head-ui {
  height: 40px !important;
  line-height: 40px !important;
}
.ul-header {
  width: 100%;
  background: #9e8149;
  display: flex;
  height: 40px;
}
.ul-li {
  position: absolute;
  margin: auto;
  z-index: 99;
  left: 0;
  right: 0;

  width: 973px;
}
.ul-headerx {
  width: 100%;

  display: flex;
  height: 30px;
}
.ul-lix {
  position: absolute;
  margin: auto;
  z-index: 99;
  left: 0;
  right: 0;

  width: 950px;
}
.el-carousel__container {
  height: 400px;
}
.imgx {
  width: 100%;
  height: 100%;
}
</style>