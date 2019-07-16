<template>
  <div class="hello">
    <van-cell-group>
      <van-field
        v-model="name"
        placeholder="请输入寺庙名称"
        label-align="left"
        label="名称："
        clearable
        required
      ></van-field>
    </van-cell-group>

    <!-- <van-cell-group>
      
      <van-cell v-model="addrInfo" readonly="readonly" title="省/市/区" value="" @click="show = true" ></van-cell>
      <van-popup v-model="show" position="bottom">
        <van-area
          ref="area"
          value="110000"
          :area-list="areaList"
         @confirm="onAddrConfirm" 
         @cancel="onAddrCancel"
          
        />
      </van-popup>
    </van-cell-group>-->

    <van-field
      label-align="left"
      label="地区："
      placeholder="点击选择地区"
      @click="show = true"
      value
      v-model="addrInfo"
      readonly="readonly"
      required
    ></van-field>

    <van-popup v-model="show" position="bottom">
      <van-area
        ref="area"
        value="110000"
        :area-list="areaList"
        @confirm="onAddrConfirm"
        @cancel="onAddrCancel"
      />
    </van-popup>

    <van-field
      v-model="juti"
      placeholder="请输入具体地址"
      label-align="left"
      label="具体地址："
      clearable
      required
    ></van-field>
    <van-field
      class="tess"
      v-model="describes"
      type="textarea"
      placeholder="请输入寺庙简介"
      rows="1"
      autosize
      style="height:200px;"
    />
    <van-row class="box">
      <van-button
        type="primary"
        size="small"
        class="login-btn"
        @click="handleLogin"
      >{{isLogin ? '提交更改' : ''}}</van-button>
    </van-row>
  </div>
</template>
<script>
import { Cell, CellGroup, Popup, Field, Area, Picker } from "vant";
import areaList from "@/config/demo/area";
import { addUsi } from "@/api/pc-simiao";
export default {
  data() {
    return {
      name: "",
      describes: "",
      juti: "",
      isLogin: true,
      show: false,
      carmodel: "",
      areaList: areaList,
      showAddrPopup: false,
      addrInfo: "",
      showBankPopup: false
    };
  },

  components: {
    VanCell: Cell,
    VanCellGroup: CellGroup,
    VanPopup: Popup,
    VanField: Field,
    VanArea: Area,
    VanPicker: Picker
  },

  created() {},
  methods: {
    prev() {
      this.$router.go(-1);
    },

    showLoginTip() {
      const toast = this.$toast.loading({
        duration: 500,
        forbidClick: false,
        loadingType: "spinner",
        message: "更改中......"
      });
    },
    login() {
      addUsi({
        name: this.name,
        describes: this.describes,
        address: JSON.parse(localStorage.getItem("address")) + this.juti
      }).then(response => {
        //console.log("登录成功返回", response);
        console.log("返回code", response.status);
        if (response.status == 200) {
          // this.$router.push({
          //   path: "/substitute"
          // });
          Dialog.alert({
            message: "弹窗内容"
          }).then(() => {
            // on close
          });
          // this.$store.dispatch('setUser', )
        }
        if (response.code == 0) {
          console.log("登录失败", response);
          this.$toast.fail(response.info);
          return;
        }
      });
    },
    handleLogin() {
      if (!this.name) {
        this.$toast.fail("寺庙名称不能为空");
        return;
      }

      if (this.isLogin) {
        this.showLoginTip();
        this.login();
      }
    },

    //  onChange (picker, value, index) {
    //         console.log('当前值：' + value + '当前索引：' + index)
    //         console.log(value)
    //         let areaName = ''

    //         this.carmodel = areaName
    //       }

    selAddr() {
      this.showAddrPopup = true;
    },
    onAddrConfirm(val) {
      this.show = false;
      this.addrInfo = val[0].name + " " + val[1].name + " " + val[2].name;
      //console.log("获取" + val[0].name + val[1].name + val[2].name);
      localStorage.setItem(
        "address",
        JSON.stringify(val[0].name + val[1].name + val[2].name)
      );
    },

    onAddrCancel() {
      this.show = false;
    }
  }
};
</script>





<style>
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

textarea {
  overflow: auto;
  height: 200px !important;
}
</style>
<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    width: 100px;
    margin: 100px 0 30px;
  }
  .box {
    margin-top: 30px;
  }
  .login-btn {
    margin-left: 20px;
  }
}
.van-cell-group {
  background-color: #fff;
  width: 100%;
}
.login-container .box[data-v-37dfd6fc] {
  margin-top: 30px;
  width: 90%;
}
.login-container .login-btn[data-v-37dfd6fc] {
  margin-left: 0px;
  width: 100%;
}
.van-button--primary {
  color: #fff;
  background-color: #0082fe;
  border: 1px solid #0082fe;
}
.van-button--primary[data-v-08841328] {
  color: #fff;
  background-color: #0082fe;
  border: 1px solid #0082fe;
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
}

.van-button--primary[data-v-445139b6] {
  width: 90% !important;
  margin-top: 30px;
}
.van-button--small {
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
li {
  position: relative !important;
}
.van-button--small {
  width: 90% !important;
}
</style>
