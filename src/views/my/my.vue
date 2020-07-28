<template>
  <div>
    <van-nav-bar title="会员中心" />
    <div>
      <div v-if="username !== ''">
        <div class="top">
          <!-- 设置图标 -->
          <van-icon class="Settin" name="setting" @click="nima" />
          <!-- 头像 -->
          <img class="img" :src="userInfo.avatar" @click="niba" alt />
          <div>欢迎你：{{userInfo.nickname}}</div>
          <!-- 登陆、注册 -->
          <div class="font">
            <button @click="tui">退出登录</button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="top">
          <!-- 设置图标 -->
          <van-icon class="Settin" name="setting" @click="nima" />
           <img class="img" alt />
          <div>欢迎来到卢本伟广场，请先登录</div>
          <!-- 登陆、注册 -->
          <div class="font">
            <button @click="goto1">登录</button>
            <button @click="goto1">注册</button>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box1">
        <van-icon class="icon" name="coupon-o" />待付款
      </div>
      <div class="box1">
        <van-icon class="icon" name="todo-list-o" />待发货
      </div>
      <div class="box1">
        <van-icon class="icon" name="logistics" />待收货
      </div>
      <div class="box1">
        <van-icon class="icon" name="records" @click="didi1"/>评价
      </div>
      <div class="box1">
        <van-icon class="icon" name="sign"  @click="didi2"/>已完成
      </div>
    </div>
    <div>
      <van-cell class="box2" icon="cart-circle-o" title="全部订单" is-link />
      <van-cell class="box2" icon="star-o" title="收藏商品" is-link />
      <van-cell class="box2" icon="location-o" title="地址管理" is-link  @click="dizhi"/>
      <van-cell class="box2" icon="todo-list-o" title="最近浏览" is-link />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      userInfo: {}
    };
  },
  methods: {
    nima() {
      this.$router.push("geren");
    },
    niba() {
      this.$router.push("geren");
    },
    tui(){
      this.$api.loginOut({}).then(res => {
        localStorage.clear()
        this.$toast.success('退出成功')
        this.$router.push('/home')
        // console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    goto1(){
      this.$router.push('land')
    },
    // 评价
    didi1(){
      this.$router.push('/pingjia')
    },
    // 已完成
    didi2(){
      this.$router.push('/wancheng')
    },
    // 地址
    dizhi(){
      this.$router.push('/dizhi')
    }
  },
  mounted() {
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
    this.$api
      .queryUser({})
      .then(res => {
        this.userInfo = res.userInfo;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 375px;
  height: 200px;
  background: gold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
// 设置定位
.Settin {
  position: relative;
  left: 165px;
  top: -10px;
  color: #ffff;
}
.img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.font {
  margin-top: 10px;
  color: black;
}
.box {
  width: 375px;
  background: floralwhite;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: darkgray;
  border-bottom: 0.5px solid darkgray;
}
.icon {
  font-size: 40px;
  color: darkgrey;
}
.box1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
}
.box2 {
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid darkgray;
}
.box2:last-child {
  border: none;
}
</style>