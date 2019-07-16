<template>
  <div class="container">
    <van-row>
      <van-col span="24">
        <div class="admin">
          <div class="touxiang">
            <van-icon name="map-marked" />
            <h6 class="touxiang-h6">{{courses.name}}</h6>
          </div>
        </div>
      </van-col>
    </van-row>
    <van-card>
      <div class="title" slot="title">
        <!-- <div class="pic">
          <img :src=" course.user_avatar">
        </div>-->

        <div class="xx">寺庙地址: {{courses.address}}</div>

        <div class="xx">寺庙简介: {{courses.describes}}</div>
      </div>
    </van-card>
  </div>
</template>

<script>
import { simiaoxinxi } from "@/api/pc-simiao";

export default {
  data() {
    return {
      courses: []
    };
  },

  mounted() {
    simiaoxinxi()
      .then(res => {
        //console.log("获取返回", res.data);
        this.courses = res.data;
      })
      .catch(err => {
        this.$toast.fail("获取失败", err);
        // this.$router.push({
        //   path: "/cplogin"
        // });
      });
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

.van-icon-map-marked {
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
