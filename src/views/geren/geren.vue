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
        <van-field v-model="username" label="用户名" />

        <van-field v-model="nickname" label="昵称" />

        <van-field v-model="gender" label="性别" />

        <van-field v-model="email" label="邮箱" />

        <van-field v-model="text" label="出生年月" />
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
            <h3>亲爱的潘潘，你还没有登陆哦</h3>
            <button>去登陆</button>
        </div>
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
      userInfo: {},
      value: "",
      username: "",
      nickname: "",
      gender: "",
      email: "",
      year: "",
      month: "",
      day: "",
      text: ""
    };
  },
  methods: {
    uploader() {
      this.$router.push("");
    },
    queren() {},
    quxiao() {},
    nima(){
        this.$router.push('my')
    }
  },
  mounted() {
    this.$api
      .queryUser({})
      .then(res => {
        this.userInfo = res.userInfo;
        this.username = res.userInfo.username;
        this.nickname = res.userInfo.nickname;
        this.gender = res.userInfo.gender;
        this.year = res.userInfo.year;
        this.month = res.userInfo.month;
        this.day = res.userInfo.day;
        this.text = `${this.year}年${this.month}月${this.day}日`;
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
.bot1{
    width: 100%;
    display:flex;
    justify-content: center;
    
}
</style>