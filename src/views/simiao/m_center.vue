<template>
  <div class="container">
    <van-row class="m-header">
      <van-col span="24">
        <van-icon name="arrow-left" class="m-header-icon" @click="prevv()" />
        <div class="head">{{title}}</div>
      </van-col>
    </van-row>

    <div v-if="nav==='1'">
      <xinxi></xinxi>
    </div>

    <div v-if="nav==='2'">
      <zixun></zixun>
    </div>

    <div v-if="nav==='3'">
      <shangpin></shangpin>
    </div>

    <div v-if="nav==='4'">
      <fabuzixun></fabuzixun>
    </div>

    <div v-if="nav==='5'">
      <fabushangpin></fabushangpin>
    </div>

    <div v-if="nav==='6'">
      <bijisimiao></bijisimiao>
    </div>

    <div v-if="nav==='7'">
      <xinseng></xinseng>
    </div>
    <div v-if="nav==='8'">
      <sengren></sengren>
    </div>

    <div v-if="nav==='9'">
      <simiaoxinxi></simiaoxinxi>
    </div>
  </div>
</template>

<script>
//个人信息组件
import xinxi from "@/components/m_simiao/xinxi";
//资讯列表组件
import zixun from "@/components/m_simiao/zixun";
//商品列表组件
import shangpin from "@/components/m_simiao/shangpin";
//发布资讯组件
import fabuzixun from "@/components/m_simiao/fabuzixun";
//发布商品组件
import fabushangpin from "@/components/m_simiao/fabushangpin";
//编辑寺庙
import bijisimiao from "@/components/m_simiao/bianji";
//增加僧人组件
import xinseng from "@/components/m_simiao/z_sengren";
//僧人列表组件
import sengren from "@/components/m_simiao/sengrenlie";
//寺庙信息接口
import simiaoxinxi from "@/components/m_simiao/simiaoxinxi";

export default {
  data() {
    return {};
  },
  components: {
    xinxi: xinxi,
    zixun: zixun,
    shangpin: shangpin,
    fabuzixun: fabuzixun,
    fabushangpin: fabushangpin,
    bijisimiao: bijisimiao,
    xinseng: xinseng,
    sengren: sengren,
    simiaoxinxi: simiaoxinxi
  },
  computed: {},
  created() {
    //console.log(this.$route.params.nav);
    //console.log(this.$route.query.newsUrl);
    //console.log(this.$route.params.title);
    //  this.nav = this.$route.params.nav;
    this.nav = this.$route.query.newsUrl;
    this.title = this.$route.query.title;

    //localStorage.setItem("nav", this.$route.query.newsUrl);
  },

  methods: {
    prevv() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.m-header {
  height: 40px;
  line-height: 40px;
  background: #0082fe;
  color: #fff;
}

.m-header-icon {
  position: absolute;
  top: 11px;
  left: 6px;
  font-size: 18px;
}
.head {
  text-align: center;
  font-size: 14px;
}
.container {
  padding: 0;
  border: 0px;
}
.pic {
  float: left;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  margin-right: 10px;
}
.pic img {
  float: left;
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.title {
  text-align: left;
  line-height: 28px;
}
.xx {
  float: left;
  width: 100%;
}
.admin {
  position: relative;
  width: 100%;
  height: 180px;
  background: #0082fe;
}

.touxiang {
  position: absolute;
  margin: auto;
  width: 100px;
  height: 100px;
  left: 0;
  right: 0;
  top: 40px;
  text-align: center;
}
.touxiang-h6 {
  float: left;
  width: 100%;
}
.ban {
  margin-top: 0px;
}
.van-col--6 {
  text-align: center;
}
.van-col--6 h6 {
  color: black;
  margin-bottom: 10px !important;
}
.van-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
h6 {
  margin-top: 10px;
}

.van-icon-user-o {
  color: white;
  font-size: 50px;
}
.touxiang h6 {
  font-size: 16px;
  color: white;
  margin-top: 10px;
}
.van-card:not(:first-child) {
  margin-top: 0px;
}
.van-card {
  border: 0px;
  background: none;
}
</style>
