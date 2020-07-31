<template>
  <div>
    <div>
      <van-nav-bar title="我的订单" left-text left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="username !== ''">
      <div v-if="orderlist.length === 0">
        <div>暂无数据~~~</div>
      </div>
      <div v-else>
        <div v-for="(item,index) in orderlist" :key="index" class="wahaha">
          <van-cell-group class="bot1">
            <div>订单编号：{{item.order_id}}</div>
            <div style="color:red">交易完成</div>
          </van-cell-group>
          <div v-for="(item1,index) in item.order_list" :key="index">
            <div>
              <van-card
                :num="item1.count"
                :price="item1.mallPrice"
                :title="item1.name"
                :thumb="item1.image_path"
              />
            </div>
          </div>
          <div class="bot2">
                <div>创建时间：{{item.add_time}}</div>
                <div>收货地址：{{item.address}}</div>
                <div>共{{item.order_list.length}}件商品 &nbsp; 合计：￥{{item.mallPrice}}</div>
            </div>
        </div>
      </div>
    </div>
    <div v-else class="box">
      <div>亲，你还没有登陆哦</div>
      <div>
        <img src="../../assets/loading.gif" alt class="img" />
      </div>
      <div style=" margin-top: 20px;
">
        <van-button type="info" @click="goto">去登陆</van-button>
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
      orderlist: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goto() {
      this.$router.push("/land");
    }
  },
  mounted() {
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
    // 获取所有订单
    this.$api
      .getMyOrder()
      .then(res => {
        this.orderlist = res.list;
        // 将订单列表中的价格信息改为2位小数类型
        this.orderlist.map(item => {
          item.mallPrice = item.mallPrice.toFixed(2);
          item.order_list.map(item1 => {
            item1.mallPrice = item1.mallPrice.toFixed(2);
          });
        });
        console.log(res);
      })

      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
  },
  filters: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.wahaha{
    margin-top: 10px;
    border-bottom: orangered solid 1px;
}
.img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: solid 1px red;
  margin-top: 20px;
}
.bot1 {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.bot2{
    width: 100%;
   text-align: right;
}
</style>