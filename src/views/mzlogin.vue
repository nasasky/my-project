<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="50px" class="loginForm">
      <h3 class="title">会员登录</h3>
      <el-form-item label="账号" prop="account" style="margin-bottom:10px;">
        <el-input type="text" v-model="loginForm.account" autocomplete="off" placeholder="账号"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="loginForm.pass"
          autocomplete="off"
          placeholder="密码"
          @keyup.enter.native="handleSubmit"
        ></el-input>
      </el-form-item>

      <span style="margin-left:30px; color:#F00" v-show="isFailed">登陆失败！</span>

      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleSubmit"
          :loading="logining"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        account: "admin",
        pass: "123456"
      },
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ]
      },
      checked: false,
      logining: false,
      isFailed: false
    };
  },
  methods: {
    handleSubmit() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.logining = true;
          let loginParams = {
            username: this.loginForm.account,
            password: this.loginForm.pass
          };
          this.$store
            .dispatch("handleLogin", loginParams)
            .then(res => {
              this.$store
                .dispatch("handleUserInfo")
                .then(res => {
                  this.logining = false;
                  this.$router.push("/senghome");
                })
                .catch(err => {
                  this.isFailed = true;
                  this.logining = false;
                  console.log(err);
                });
            })
            .catch(err => {
              this.isFailed = true;
              this.logining = false;
              console.log(err);
            });
        }
      });
    }
  }
};
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}
.el-form-item__content {
  margin-left: 0px !important;
}
.login-container {
  text-align: left;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 80px auto;

  padding: 35px 35px 15px 35px;
  background: #fff;

  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 20px 0px;
    padding: 0px 0px 0px 50px;
    /* right: 85px; */
  }
}
#app {
  background: white !important;
}
html {
  background: white !important;
}
.el-form-item__label {
  width: auto !important;
}
</style>
