<template>
  <div>
    <div class="box1">
      <div>
        <div class="yuan" @click="goto">
          <van-icon name="arrow-left" size="40px" color="#fff" />
        </div>
      </div>
      <van-swipe :autoplay="3000" class="box2">
        <van-swipe-item v-for="item in images" :key="item.id">
          <img :src="item" class="detail-imgs" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="box3">
      <div class="box4">{{obj.name}}</div>
      <div class="box4" style="color:red">&yen;{{obj.orl_price}}</div>
    </div>
    <div class="box5">
      <div>运费：{{obj.__v}}</div>
      <div>剩余：{{obj.amount}}</div>
      <div>
        <!-- 没有登录点击收藏 -->
        <div v-if="username === ''&& flag === false" @click="collectGoods">
          收藏:
          <van-icon name="like-o" color="red" />
        </div>
        <!-- 登录的时候收藏 -->
        <div v-else-if="isCollect  === 0 && flag === false" @click="collectGoods">
          收藏:
          <van-icon name="like-o" color="red" />
        </div>
        <!-- 取消收藏 -->
        <div v-else @click="cancelCollect">
          取消收藏:
          <van-icon name="like" color="red" />
        </div>
      </div>
    </div>
    <div class="box6">
      <div class="box7">
        <van-icon name="idcard" size="25" />
        <span style="font-size:18px">有赞的店</span>
        <button style="background: red; color:beige;border:none; border-radius: 5px;">官方</button>
      </div>
      <div class="box7">
        <span style="font-size:18px">进入店铺</span>
        <van-icon name="arrow" size="25" />
      </div>
    </div>

    <van-tabs title-active-color="red" v-model="activeName">
      <div>
        <van-tab title="商品详情" name="a">
          <div v-html="obj.detail"></div>
        </van-tab>
      </div>
      <van-tab title="商品评论" name="b">
        <div v-if="comment.length===0" class="wu">暂无数据</div>
        <div v-else>
          <div class="deta_pin" v-for="(item,index) in comment" :key="index">
            <div class="deta_h" v-if="item.anonymous === true">
              <div class="deta_i">
                <div class="deta_j">
                  <img :src="item.comment_avatar" alt />
                </div>
                <div class="deta_K">
                  <div class="deta_l">
                    <span>{{item.comment_nickname}}</span>
                    <span class="deta_m">{{item.comment_time}}</span>
                  </div>
                  <div>
                    <van-rate v-model="item.rate" readonly />
                  </div>
                  <div>{{item.content}}</div>
                </div>
              </div>
            </div>
            <div class="deta_h" v-else>
              <div class="deta_i" v-for="(item1,index1) in item.user" :key="index1">
                <div class="deta_j">
                  <img :src="item1.avatar" alt />
                </div>
                <div class="deta_K">
                  <div class="deta_l">
                    <span>{{item1.nickname}}</span>
                    <span class="deta_m">{{item.comment_time}}</span>
                  </div>
                  <div>
                    <van-rate v-model="item.rate" readonly />
                  </div>
                  <div>{{item.content}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <div>
      <van-goods-action style="z-index:1">
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="setNumber" @click="toShoppingCart" />
        <van-goods-action-button type="warning" text="加入购物车" @click="addShoppingCart" />
        <van-goods-action-button type="danger" text="立即购买" @click="buy" />
        <van-action-sheet v-model="show" round>
          <div class="but">
            <div class="but1">
              <div class="but2">
                <img :src="obj.image" class="img" />
              </div>
              <div class="but3">
                <div>{{obj.name}}</div>
                <div>￥ {{ obj.present_price}}</div>
              </div>
              <div class="close">
                <van-icon name="close" size="30" color="red" @click="close" />
              </div>
            </div>
            <div>
              <div style="width:100%;display:flex;">
                <div class="boo">
                  <div>购买数量：</div>
                  <div>
                    <div>剩余{{obj.amount}}</div>
                  </div>
                </div>
                <div style="height:80px;display:flex;align-items: center;">
                  <van-stepper
                    v-model="count"
                    theme="round"
                    button-size="22"
                    disable-input
                    class="stepper"
                  />
                </div>
              </div>
            </div>
            <van-button type="danger" size="large" class="butt" @click="goumai">立即购买</van-button>
          </div>
        </van-action-sheet>
      </van-goods-action>
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
      // 定义一名字，用来判断locasg的条件
      username: "",
      idd: "",
      obj: {},
      id: "",
      flag: false,
      comment: [],
      images: [],
      isCollect: [],
      activeName: 0,
      show: false,
      count: 1,
      flags: "0"
    };
  },
  methods: {
    // 去购物车
    goto() {
      this.$router.go(-1);
    },
    // 加入购物车
    toShoppingCart() {
      this.$router.push("/Cart");
    },
    addShoppingCart() {
      if (this.username === "") {
        this.$dialog
          .confirm({
            message: "亲，你还没有登录哦，请登录"
          })
          .then(res => {
            this.$router.push("/land");
          })
          .catch(err => {});
      } else {
        this.$api
          .addShop({
            id: this.obj.id
          })
          .then(res => {
            this.$toast.success("加入购物车成功");
          })
          .catch(err => {});
      }
    },
    // 购买商品
    buy() {
      this.show = true;
    },
    // 立即购买
    goumai() {
      if (this.username !== "") {
        this.$router.push({
          path: "/jiesuan",
          query: {
            goodsOne: JSON.stringify(this.obj),
            count: this.count,
            flags: this.flags
          }
        });
        localStorage.setItem("goodsOne", JSON.stringify(this.obj));
      } else {
        this.$dialog
          .confirm({ message: "你还没有登录,请先登录" })
          .then(res => {
            this.$router.push("/land");
          })
          .catch(err => {});
      }
    },
    // 错误icon
    close() {
      this.show = false;
    },
    //   查看商品是否被收藏
    getisCollection() {
      this.$api
        .isCollection({ id: this.id })
        .then(res => {
          // 将收藏与否的结果 赋值给 收藏与否标识
          this.isCollect = res.isCollection;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 收藏
    collectGoods() {
      if (this.username !== "") {
        this.$api
          .collection(this.obj)
          .then(res => {
            this.$toast.success("收藏成功了");
            this.$utils.collectGoods(this.obj);
            this.flag = true;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$dialog
          .confirm({
            title: "未检测到登录记录，前往登录"
          })
          .then(() => {
            this.$router.push("/land");
          })
          .catch(() => {});
      }
    },
    // 取消收藏
    cancelCollect() {
      this.$api
        .cancelCollection({ id: this.id })
        .then(res => {
          // 弹框提示
          this.$toast.success(res.msg);
          this.flag = false;
          this.getisCollection();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // 定义一个空对象，接收首页传过来的id
    this.idd = this.$route.query.id;
    // 单个商品详情的请求，get传参
    this.$api
      .goods(this.idd)
      .then(res => {
        // 定义一个空对象，用来拿取渲染数据
        this.obj = res.goods.goodsOne;
        // id用来查看商品是否被收藏
        this.id = res.goods.goodsOne.id;
        this.comment = res.goods.comment;
        this.images.push(this.obj.image);
        this.images.push(this.obj.image_path);
        this.getisCollection();
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
  computed: {
    setNumber() {
      return this.$store.state.num;
    }
  },
  filters: {}
};
</script>

<style scoped lang='scss'>
.box1 {
  width: 100%;
  height: 100%;
  // background: red;
}
.box2 {
  width: 100%;
  height: 375px;
  border-bottom: 1px blanchedalmond solid;
}
.detail-imgs {
  width: 100%;
  height: 375px;
}
.yuan {
  width: 40px;
  height: 40px;
  background: gray;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 15px;
}
.box3 {
  width: 100%;
  height: 60px;
  border-bottom: blanchedalmond 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.box4 {
  margin-left: 20px;
}
.box5 {
  width: 100%;
  height: 60px;
  border-bottom: blanchedalmond 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.box6 {
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: blanchedalmond 1px solid;
  justify-content: space-around;
  align-items: center;
}
.box7 {
  display: flex;
  align-items: center;
}
.but {
  width: 100%;
  height: 270px;
  // background: red;
}
.but1 {
  width: 100%;
  height: 110px;
  border-bottom: solid 1px solid;
  display: flex;
  position: relative;
}
.img {
  width: 80px;
  height: 80px;
}
.but2 {
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 200px;
  left: 30px;
}
.but3 {
  width: 200px;
  height: 70px;
  // background: yellow;
  margin-left: 50px;
  position: absolute;
  left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.close {
  position: absolute;
  right: 18px;
  top: 8px;
}
.boo {
  width: 250px;
  height: 80px;
  // background: blue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.butt {
  position: absolute;
  bottom: 0px;
}
//商品评论
.deta_f {
  margin-top: 30px;
  border-top: 1px solid #eeeeee;
  margin-bottom: 50px;
}
.deta_h {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
}
.deta_i {
  display: flex;
  justify-content: space-between;
  width: 94%;
}
.deta_j {
  height: 42px;
  width: 42px;
  border: 1px solid #eeeeee;
  border-radius: 50px;
  overflow: hidden;
}
.deta_j img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.deta_K {
  width: 84%;
  font-size: 14px;
}
.deta_K div {
  line-height: 26px;
}
.deta_l {
  display: flex;
  justify-content: space-between;
}
.deta_m {
  color: #666666;
}
.deta_pin {
  margin-bottom: 80px;
}
.wu{
  width: 100%;
  height: ;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>