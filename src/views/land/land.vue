<template>
  <div>
    <div class="box1">
      <div class="box2">
        <div class="box3">
          <div>登录/&nbsp;&nbsp;注册</div>
          <van-cell-group>
            <div>
              <van-field v-model="username" placeholder="USERNAME" />
            </div>
          </van-cell-group>
          <van-cell-group>
            <div>
              <van-field v-model="password" placeholder="PASSWORD" />
            </div>
          </van-cell-group>

          <div>
            <van-field v-model="phone" label="手机号码" placeholder="仅注册需要" />
            <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
              <template #button>
                <van-button size="small" type="primary" v-show="show" @click="down">发送验证码</van-button>
                <van-button slot="button" size="small" type="danger" v-show="!show">{{count}}</van-button>
              </template>
            </van-field>
          </div>

          <div>
            <van-field v-model="verify" center clearable label="验证码" placeholder="请输入验证码"></van-field>
            <div v-html="code1" @click="getto"></div>
          </div>

          <div>
            <van-button type="primary" @click="mito">登录</van-button>

            <van-button type="info" @click="getout">注册</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      sms: "",
      verify: "",
      code1: "",
      show:'true',
      count:'',
      timer:null
    };
  },
  components: {},
  methods: {
    // 倒计时
    down() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    // 请求验证码数据
    getto() {
      this.$api
        .verify()
        .then(res => {
          this.code1 = res;
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 注册
    getout() {
      this.$api
        .register({
          nickname: this.username,
          password: this.password,
          verify: this.verify
        })
        .then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$dialog.alert({
              message: "注册成功"
            });
          } else if (res.code === 1) {
            this.$dialog.alert({
              message: "用户名或密码错误"
            });
          } else if (res.code === 2) {
            this.$dialog.alert({
              message: "验证码错误"
            });
          } else {
            this.$dialog.alert({
              message: "注册失败"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 登录
    mito() {
      this.$api
        .login({
          nickname: this.username,
          password: this.password,
          verify: this.verify

        })
        .then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$dialog.alert({
              message: "登录成功"
            });
            localStorage.setItem("username", this.username);
            this.$router.push('/my');
            // 本地存储
          } else if (res.code === 1) {
            this.dialog.alert({
              message: "用户名或密码错误"
            });
          } else if (res.code === 2) {
            this.$dialog.alert({
              message: "验证码错误"
            });
          }else{
            this.$dialog.alert({
            message: "登录失败"
          });
          }
        }).catch(err => {
          console.log(err);
        })
    }
  },
  mounted() {
    this.getto();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box1 {
  width: 375px;
  height: 600px;
  background: url("../../assets/login.jpg");
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box2 {
  width: 300px;
  height: 500px;
  background: beige;
  display: flex;
}
.box3 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
}
</style>