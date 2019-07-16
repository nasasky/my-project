<template>
  <div></div>
</template>
<script>
import WechatAuth from "@/utils/wechatAuth";
import { BASE_URL } from "@/constants/Environment"

console.log(BASE_URL+"/cplogin")
let wa = new WechatAuth({
  redirect_uri: encodeURIComponent(BASE_URL + "/cplogin"),
  oauth_uri: "/api/oauthbindcommonpeople",
  login_uri: "/cplogin",
  main_uri: "/mingzhong"
});
export default {
  name: "CommonPeopleLogin",

  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    if (to.query.code) {
      wa.getCodeCallback(next, to.query.code);
    } else {
      wa.getCode();
    }

    next();
  }
};
</script>
