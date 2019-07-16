<template>
  <div>
    <h1>This is an TempleManager Wechat login page</h1>
  </div>
</template>
<script>
import WechatAuth from "@/utils/wechatAuth";
import { BASE_URL } from "@/constants/Environment";

export default {
  name: "TempleManagerBind",
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    let wa = new WechatAuth({
      redirect_uri: encodeURIComponent(BASE_URL + "/tmlogin"),
      oauth_uri: "/api/oauthtemplemanager",
      login_uri: "/tmlogin",
      main_uri: "/homex/index"
    });

    if (to.query.code) {
      wa.getCodeCallback(next, to.query.code);
    } else {
      wa.getCode();
    }

    next();
  }
};
</script>
