<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active">
      <van-tabbar-item to="/mingzhong/index" icon="shop">首页</van-tabbar-item>
      <van-tabbar-item to="/mingzhong/fomenziliao" icon="edit">佛门资料</van-tabbar-item>
      <van-tabbar-item to="/mingzhong/course" icon="records">佛门养生</van-tabbar-item>
      <van-tabbar-item to="/mingzhong/mine" icon="contact">民众中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
li {
  position: relative !important;
}
.van-tabbar-item {
  font-size: 12px;
  line-height: 1;
  font-weight: 600;
}
#app {
  background: white !important;
}
</style>

