<template>
  <div>
    <div class="box1">
      <div class="box2">
        <van-icon name="arrow-left" size="25px" @click="todo" />
      </div>
      <div class="box">结算订单</div>
    </div>
    <div v-if="this.defaultAdd === null">
      <div class="dizhi1">你还没有添加收货地址</div>
      <div class="dizhi2">
        <img src="../../assets/loading.gif" class="img" alt />
      </div>
      <div style="display: flex;
  justify-content: center;">
        <van-button type="info" @click="jhjh">添加地址</van-button>
      </div>
    </div>
  <div v-else>
      <div class="bob" >
      <div class="bob1">
        <van-icon name="location-o" size="30" />
      </div>
      <div class="bob2">
        <div style="display:flex; justify-content: space-around;">
          <div>收货人：{{defaultAdd.name}}</div>
          <div>{{defaultAdd.tel}}</div>
        </div>
        <div>收货地址：{{defaultAdd.address}}</div>
        <div style="color:orange">(收货不便时，可选择免费待收货服务)</div>
      </div>
      <div class="bob3">
        <div @click="goto">
          <van-icon name="arrow" size="25px" />
        </div>
      </div>
    </div>
    <div>
      <img src="../../assets/caitiao.jpg" alt />
    </div>
  </div>
  <!-- 渲染购物车的数据 -->
    <div>
      <div v-if="flags === 1">
        <div v-for="(item,index) in shopList" :key="index">
          <img :src="item.image_path" class="img" />
        </div>
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
      // 默认地址
      defaultAdd: {},
      // 接收购物车或者详情页传递过来的数量
      counts: "",
      // 这个是定义的标记，用来判断是从详情页或者购物车传递过来的
      flags: "",
      // 获取详情页存在localStorage的数据他是对象
      goodsOne: {},
      // 获取购物车存在localStorage的数据他是数组
      shopList: []
    };
  },
  methods: {
    // 返回按钮
    todo() {
      this.$router.back();
    },
    // 跳转到地址
    goto() {
      this.$router.push("/dizhi");
    },
    jhjh() {
      this.$router.push("/dizhi");
    }
  },
  mounted() {
    // 获取默认收货地址
    this.$api
      .getDefaultAddress()
      .then(res => {
        this.defaultAdd = res.defaultAdd;
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    //接收详情页和购物车页面传递过来的参数
    //
    this.counts = this.$route.query.count;
    this.flags = this.$route.query.flags;
    // 接收详情页传过来的数据
    if (this.flags === "0") {
      if (localStorage.goodsOne) {
        // 判断localStorage有没有goodsOne,再定义一个名字来接收,再接收值
        this.goodsOne = JSON.parse(localStorage.getItem("goodsOne"));
      } else {
        this.goodsOne = JSON.parse(this.$route.query.goodsOne);
      }
      console.log(this.);
    }
    // 接收购物车传过来的数据
    if (this.flags === '1') {
      if (localStorage.shopList) {
        // 判断localStorage有没有goodsOne,再定义一个名字来接收,再接收值
        this.shopList = JSON.parse(localStorage.getItem("goodsOne"));
      } else {
        this.shopList = JSON.parse(this.$route.query.shopList);
      }
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
  border-bottom: blanchedalmond 1px solid;
}
.box {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.box2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}
.bob {
  width: 100%;
  height: 100px;
  display: flex;
}
.bob1 {
  width: 10%;
  height: 80px;
  display: flex;
  align-items: center;
}
.bob2 {
  width: 80%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.bob3 {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dizhi1 {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: red;
  margin-top: 40px;
}
.dizhi2 {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
.img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  // border: solid 1px red;
}
</style>