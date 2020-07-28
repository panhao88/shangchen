<template>
  <div style=" margin-bottom: 65px;">
    <div class="box2">
      <h1>购物车</h1>
    </div>
    <div>
      <div v-if="username === ''">
        <div class="box3">
          <div>
            <div>
              <img class="img" src="../../assets/loading.gif" alt />
            </div>
            <h3 style="color:red">嬷嬷哒亲，你还没有登录哦</h3>
          </div>
        </div>
        <div class="box4">
          <van-button type="primary" @click="tologin">去登录</van-button>
        </div>
      </div>
      <div v-else-if="shopList.length <= 0">
        <div>
          <div class="box3">
            <van-icon name="shopping-cart-o" class="bot" size="50px" />
            <h3>亲，你的购物车还是空的，去购物吧</h3>
          </div>
          <div class="box4">
            <van-button type="primary" @click="goto">去购物</van-button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="bot1">
          <div class="bot2">
            <div v-if="checkeb === false">
              <van-checkbox v-model="checkeb" @click="xuan">全选</van-checkbox>
            </div>
            <div v-else-if="checkeb === true">
              <van-checkbox v-model="checkeb" @click="xuan">取消全选</van-checkbox>
            </div>
          </div>
          <div class="bot2">
            <div style="color:red">合计:{{total | fixed}}</div>
            <div>请确认订单</div>
          </div>
        </div>
        <div style="display:flex;border-bottom: solid 1px bisque; justify-content: flex-end;">
          <div>
            <van-button type="primary" @click="add">删除</van-button>
          </div>
          <div v-else="this.check === true">
            <van-button type="info" @click="jiesuan" v-model="check">去结算</van-button>
          </div>
        </div>

        <div>
          <div v-for="(item,index) in shopList" :key="index">
            <div class="nima">
              <div style="display:flex;  flex-direction: column;
  justify-content: center;">
                <van-checkbox icon-size="24px" v-model="item.check"></van-checkbox>
              </div>
              <img :src="item.image_path" alt class="img" />
              <div
                style="display:flex; justify-content: space-around; flex-direction: column;width:100%"
              >
                <div>{{item.name}}</div>
                <div class="didi">
                  <div>￥{{item.present_price}}</div>
                  <div>
                    <van-stepper
                      v-model="item.count"
                      @change="haha(item)"
                      theme="round"
                      button-size="22"
                      disable-input
                    />
                  </div>
                </div>
              </div>
            </div>
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
      shopList: [],
      checkeb: false,
      todo: [],
      flags: "1",
      list: [],
      check:false
    };
  },
  components: {},
  methods: {
    getData() {
      this.$api
        .getCard()
        .then(res => {
          this.shopList = res.shopList;
          let num = this.shopList.length;
          this.$store.commit("setNumber", num);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 全选
    xuan() {
      this.shopList.map(item => {
        item.check = this.checkeb;
      });
    },
    // 反选
    check(item) {
      this.checkeb = this.shopList.every(item => {
        return item.check === true;
      });
    },
    // 加减商品
    haha(item) {
      this.$api
        .editCart({
          count: item.count,
          id: item.cid,
          mallPrice: item.mallPrice
        })
        .then(res => {})
        .catch(err => {
          console.log(err);
        });
    },
    // 删除商品
    add() {
      this.todo = this.shopList.filter(item => {
        return item.check === true;
      });
      if (this.todo.length > 0) {
        this.$dialog
          .confirm({
            title: "标题",
            message: "你确认删除吗"
          })
          .then(res => {
            this.todo.map(item => {
              this.list.push(item.cid);
            });
            this.$api
              .deleteShop(this.list)
              .then(res => {
                this.$toast.success("删除成功");
                this.getData();
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {});
      } else {
        this.$toast({
          message: "你还没有选择要删除的内容",
          icon: "warning-o"
        });
      }
    },
    // 去结算
    jiesuan() {
      this.shopList = this.shopList.filter(item => {
        return item.check === true;
      });
      this.$router.push({
        path: "/jiesuan",
        query: {
          shopList: JSON.stringify(this.shopList),
          total: this.total,
          flags: this.flags
        }
      });
      localStorage.setItem("shopList", JSON.stringify(this.shopList));
    },
    goto() {
      this.$router.push("/home");
    },
    tologin() {
      this.$router.push("/land");
    }
  },
  mounted() {
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
    this.getData();
  },
  watch: {},
  computed: {
    total() {
      let sum = 0;
      this.shopList.map(item => {
        if (item.check === true) {
          sum += item.count * item.mallPrice;
        }
      });
      return sum;
    }
  },
  filters: {
    fixed(val) {
      return Number(val).toFixed(2);
    }
  }
};
</script>

<style scoped lang='scss'>
.img {
  width: 300px;
  height: 300px;
}
.box2 {
  width: 375px;
  border-bottom: solid 1px burlywood;
  display: flex;
  justify-content: center;
}
.box3 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box4 {
  height: 100%;
  // margin-top: 60px;
  display: flex;
  justify-content: center;
}
.bot {
  color: red;
}
.bot1 {
  width: 100%;
  height: 80px;
  border-bottom: solid 1px bisque;
  display: flex;
  justify-content: space-around;
}
.bot2 {
  width: 50%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
}
.nima {
  width: 100%;
  display: flex;
  border-bottom: solid 1px bisque;
}
.img {
  width: 100px;
  height: 100px;
}
.didi {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>