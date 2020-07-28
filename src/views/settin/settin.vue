<template>
  <div>
    <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="box">
      <div class="font">头像</div>
      <img class="img" src="../../assets/QQ图片20200622113518.jpg" alt />
      <van-icon class="font" name="arrow" />
    </div>
    <van-cell-group>
      <van-field v-model="name" label="用户民" placeholder="请输入用户名" />
      <van-field v-model="Nickname" label="昵称" placeholder="请输入昵称" />
      <van-field v-model="Gender" label="性别" placeholder="请输入性比" />
      <van-field v-model="email" label="邮箱" placeholder="请输入邮箱" />
      <van-field v-model="github" label="github" placeholder="请输入github" />
    </van-cell-group>
    <div class="box-btn">
      <van-button class="btn" type="primary">保存</van-button>
      <van-button class="btn" type="default">取消</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      github: "",
      Nickname: "",
      name: "",
      Gender: "",
      email: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("my");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  align-items: center;
  margin: 5px 0px;
}
.font {
  font-size: 14px;
  margin-left: 16px;
}
// 头像
.img {
  margin-left: 220px;
  width: 50px;
  height: 50px;
}
// 按钮
.box-btn{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn {
  width: 300px;
  margin-top: 10px;
}
</style>