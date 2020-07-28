<template>
  <div>
     <van-nav-bar
      title="地址列表"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div v-if="username !== ''">
      <div v-if="list.length <= 0">
        <div class="box">暂无收货地址~~~</div>
        <van-address-list @add="onAdd" />
      </div>
      <div v-else>
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd" 
          @edit="onEdit"
          @select="select"
        />
      </div>
    </div>
    <div v-else>
      <div class="address"></div>
      <div class="msg">亲，你还没有登录哟~~</div>
      <div class="address-login" @click="tologin">
        <van-button round type="primary">去登录</van-button>
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
      chosenAddressId: "1",
      list: [],
      obj: {},
      username: ""
    };
  },
  methods: {
    // 返回
     onClickLeft(){
        this.$router.go(-1)
        this.$toast('返回')
      },
    // 前往登录
    tologin() {
      this.$router.push("/land");
    },
    // 新增地址
    onAdd() {
      this.$router.push("/xinzen");
      this.$toast("新增地址");
    },
    // 编辑地址
    onEdit(item) {
      this.$router.push({
        path: "/bianji",
        query: { obj: JSON.stringify(item)}
      });
      this.$toast("编辑地址");
    },
    // 设置默认收货地址
    select(item) {
      this.$api
        .setDefaultAddress(item)
        .then(res => {
        })
        .catch(err => {});
    }
  },
  mounted() {
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
    // 查询用户收货地址
    this.$api
      .getAddress()
      .then(res => {
        res.address.map((item, index) => {
          this.$set(item, "id", (index + 1).toString());
        });
        this.list = res.address;
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
.box{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 20px;
  color: yellow;
}
.box1 {
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: blanchedalmond 1px solid;
}
.box2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}
.box3{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.address {
  width: 180px;
  height: 180px;
  margin: 30px auto;
  background: rgb(226, 217, 217) url('../../assets/QQ图片20200622113518.jpg') no-repeat
    center;
  border-radius: 50%;
  align-items: center;
  margin-top: 40px;
}
.msg {
  margin: 10px auto;
  text-align: center;
  width: 200px;
}
.address-login {
  width: 80px;
  margin: 10px auto;
}
</style>