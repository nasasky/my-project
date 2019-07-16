<template>
  <div class="ban">
    <van-row>
      <van-col span="24">
        <div class="admin">
          <div class="touxiang">
            <van-icon name="manager" />
            <h6 class="touxiang-h6">寺庙管理员</h6>
          </div>
        </div>
      </van-col>
    </van-row>

    <div>
      <van-row gutter="20" style="margin-top:20px;">
        <router-link :to="{name:'homex/contant',query: { newsUrl: '6',title:'编辑寺庙'}}">
          <van-col span="6">
            <van-icon name="shop-o" />
            <h6>编辑寺庙</h6>
          </van-col>
        </router-link>

        <router-link :to="{name:'homex/contant',query: { newsUrl: '7',title:'增加僧人'}}">
          <van-col span="6">
            <van-icon name="user-o" />
            <h6>增加僧人</h6>
          </van-col>
        </router-link>

        <router-link :to="{name:'homex/contant',query: { newsUrl: '4',title:'发布资讯'}}">
          <van-col span="6">
            <van-icon name="edit" />
            <h6>发布资讯</h6>
          </van-col>
        </router-link>

        <router-link :to="{name:'homex/contant',query: { newsUrl: '5',title:'发布商品'}}">
          <van-col span="6">
            <van-icon name="balance-pay" />
            <h6>发布商品</h6>
          </van-col>
        </router-link>
      </van-row>

      <van-row>
        <div style="float:left;width:100%;height:20px;background:#ebebeb;"></div>
      </van-row>

      <van-row>
        <div class="web-xian">
          <a class="web-xian-a">我的发布</a>
        </div>
      </van-row>

      <van-row gutter="20">
        <!-- <router-link :to="{name:'moblie/course',params:{}}">
          <van-col span="6">
            <van-icon name="hotel-o"/>
            <h6>寺庙列表</h6>
          </van-col>
        </router-link>-->

        <router-link :to="{name:'homex/contant',query: { newsUrl: '8',title:'僧人列表'}}">
          <van-col span="6">
            <van-icon name="user-circle-o" />
            <h6>僧人列表</h6>
          </van-col>
        </router-link>

        <router-link :to="{name:'homex/contant',query: { newsUrl: '2',title:'资讯列表'}}">
          <van-col span="6">
            <van-icon name="notes-o" />
            <h6>资讯列表</h6>
          </van-col>
        </router-link>

        <router-link :to="{name:'homex/contant',query: { newsUrl: '3',title:'商品列表'}}">
          <van-col span="6">
            <van-icon name="bag-o" />
            <h6>商品列表</h6>
          </van-col>
        </router-link>
      </van-row>

      <van-row>
        <div style="float:left;width:100%;height:20px;background:#ebebeb;"></div>
      </van-row>

      <van-row>
        <div class="web-xian">
          <a class="web-xian-a">其他信息</a>
        </div>
      </van-row>

      <van-row gutter="20">
        <router-link :to="{name:'homex/contant',query: { newsUrl: '1',title:'个人信息'} }">
          <van-col span="6">
            <i class="fa fa-user-o fa-2x"></i>
            <h6>个人信息</h6>
          </van-col>
        </router-link>

        <router-link :to="{name:'moblie/bangding',params:{}}">
          <van-col span="6">
            <i class="fa fa-qrcode fa-2x" style="color:black;"></i>
            <h6>绑定微信</h6>
          </van-col>
        </router-link>

        <router-link :to="{name:'homex/contant',query: { newsUrl: '9',title:'寺庙信息'}}">
          <van-col span="6">
            <i class="fa fa-home fa-2x" style="color:black;"></i>
            <h6>寺庙信息</h6>
          </van-col>
        </router-link>
      </van-row>
    </div>

    <van-row>
      <div style="float:left;width:100%;height:100px;"></div>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ismobile: "",

      // id: JSON.parse(localStorage.getItem("id")),
      username: ""
    };
  },

  components: {},

  computed: {
    // id() {
    //   return this.$store.state.id;
    // }
  },

  mounted() {},
  created() {
    //从localStorage 里面获取值出来
    // var username = localStorage.getItem("username");
    // console.log(username);
    // //将存在localstorage中的数据取出,并序列化储成对象存入数组中
    // this.username = username;
  },
  methods: {
    copy: function(username) {
      var uname = localStorage.setItem("setname", username);
    }
  }
};
</script>




<style lang="scss" scoped>
.van-icon-shop-o {
  color: #0092ff;
  font-size: 35px;
}

.van-icon-user-o {
  color: #fb7600;
  font-size: 35px;
}

.van-icon-edit {
  color: #4bcf3a;
  font-size: 35px;
}
.van-icon-balance-pay {
  color: #0082fe;
  font-size: 35px;
}

.van-icon-user-circle-o {
  color: #0082fe;
  font-size: 35px;
}

.van-icon-notes-o {
  color: #0082fe;
  font-size: 35px;
}

.van-icon-bag-o {
  color: #fb5f00;
  font-size: 35px;
}

.van-icon-hotel-o {
  color: #4bcf3a;
  font-size: 35px;
}

.van-icon-manager {
  color: white;
  font-size: 50px;
}
.touxiang h6 {
  font-size: 16px;
  color: white;
  margin-top: 10px;
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
.web-xian {
  float: left;
  width: 100%;
  height: 20px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 10px;
  margin-top: 5px;
}
.web-xian-a {
  float: left;
  text-align: left;
  margin-left: 5%;
  font-size: 14px;
  font-weight: 600;
  color: black;
}
#app {
  background: white !important;
}
</style>
