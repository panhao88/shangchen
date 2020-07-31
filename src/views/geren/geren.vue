<template>
  <div>
    <div v-if="username !== ''">
      <div class="box1">
        <div>
          <van-icon name="arrow-left" size="25" class="van" @click="nima" />
        </div>
        <div class="box2">个人资料</div>
      </div>
      <div>
        <van-cell-group>
          <van-field v-model="value" label="githup" />
        </van-cell-group>
        <div class="Pcbox">
          <div class="pcbox">
            <div>头像</div>
            <div class="pc1box">
              <div @click="uploader">
                <img :src="userInfo.avatar" alt width="50px" height="50px" />
              </div>
              <div>
                <van-icon name="arrow" color="#999" />
              </div>
            </div>
          </div>
        </div>
        <van-cell-group>
          <van-field v-model="userInfo.username" label="用户名" placeholder="请输入用户名"></van-field>
          <van-field v-model="userInfo.nickname" label="昵称" placeholder="请输入昵称"></van-field>
          <van-field v-model="userInfo.gender" label="性别" placeholder="请选择性别"></van-field>
          <van-field v-model="userInfo.email" label="邮箱" placeholder="请输入邮箱"></van-field>
          <van-field v-model="text" label="出生年月" placeholder="请输入出生年月" @click="showPopup"></van-field>
          <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              title="选择年月日"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="value111"
              @cancel="cancel"
            />
          </van-popup>
        </van-cell-group>
      </div>
      <div class="toto">
        <van-button type="primary" style="width:90%" @click="queren">确认</van-button>
      </div>
      <div class="toto">
        <van-button type="default" style="width:90%" @click="quxiao">取消</van-button>
      </div>
    </div>
    <div v-else>
      <div class="bot1">
        <div>
          <h4>亲爱的潘潘，你还没有登陆哦</h4>
        </div>
        <div>
          <van-button type="info" @click="goto">去登录</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      userInfo: {},
      value: "",
      username: "",
      nickname: "",
      gender: "",
      email: "",
      year: "",
      month: "",
      day: "",
      text: "",
      show: false,
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
      // b:'',
      // c:'',
      // d:""
    };
  },
  methods: {
    uploader() {
      this.$router.push("");
    },
    goto() {
      this.$router.push("/land");
    },

    // 出生年月
    // jdkk(){
    //   // replace替换
    //   let a=this.text;
    //   a=a.replace("年","-");
    //   a=a.replace("月","-");
    //   a=a.replace("日","");
    //   this.c=new Date(a).getFullYear()
    //   this.b=new Date(a).getMonth()+1
    //   this.d=new Date(a).getDate()
    // },
    queren() {
      this.$api
        .saveUser({
          nickname: this.userInfo.nickname,
          gender: this.userInfo.gender,
          year: this.userInfo.year,
          month: this.userInfo.month,
          day: this.userInfo.day,

          // year: this.c,
          // month: this.b,
          // day: this.d,
          id: this.userInfo._id
        })
        .then(res => {
          if (res.code === 200) {
            this.$toast.success("修改成功");
            this.$router.push("/my");
          }
        })
        .catch(err => {});
    },
    quxiao() {},
    showPopup() {
      this.show = true;
    },
     cancel() {
      this.show = false;
    },
    value111(value) {
      this.show = false;
      this.userInfo.year = dayjs(value).year();
      this.userInfo.month = dayjs(value).month();
      this.userInfo.day = dayjs(value).date();
      this.text = dayjs(value).format("YY年MM月DD日");
    },
    nima() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$api
      .queryUser()
      .then(res => {
        this.userInfo = res.userInfo;
        this.year = res.userInfo.year;
        this.month = res.userInfo.month;
        this.day = res.userInfo.day;
        this.text = `${this.userInfo.year}年${this.userInfo.month}月${this.userInfo.day}日`;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.box1 {
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: solid bisque 1px;
}
.van {
  width: 100%;
  margin-top: 18px;
  margin-left: 20px;
}
.box2 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.Pcbox {
  width: 100%;
  display: flex;
  justify-content: center;
}
.pcbox {
  height: 80px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pc1box {
  display: flex;
  align-items: center;
}
.toto {
  width: 100%;
  display: flex;
  justify-content: center;
}
.bot1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
</style>