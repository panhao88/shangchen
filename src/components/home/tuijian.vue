<template>
  <div class="didi">
    <div class="container" ref="container">
    <div class="content">
      <div v-for="(item,index) in recommend" :key="index">
        <div>
          <img class="img" :src="item.image" alt />
        </div>
        <div class="font">{{item.goodsName}}</div>
        <span>&yen;{{item.price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="box">&yen;{{item.mallPrice}}</span>
        <div class="chakan">
          <div class="chakan1">
              <van-icon name="cart" badge color="red" size="27" @click="goto(index)"/>
          </div>
          <div @click="goDetail(index)">查看详情</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      id:"",
      username:''
    };
  },
  props: {
    recommend: {
      type: Array
    }
  },
  components: {},
  methods: {
    // 查看详情页根据下标index把id传过去
      goDetail(index) {
      this.$router.push({
        path: "/detail",
        query: { id:this.recommend[index].goodsId }
      });
      // 判断本地有没有最近浏览的数组
      this.$utils.goDetail(this.recommend[index]);
    },
    // 加入购物车先判断登录没有
    goto(index){
      if(this.username === ''){
        this.$dialog.confirm({message:'你还没有登录，请登录'}).then(res => {
          this.$router.push('/land')
        }).catch(err => {})
      }else{
        this.$api.addShop({
          id:this.recommend[index].goodsId
        }).then(res => {
          this.$toast.success('加入购物车成功')
        }).catch(err =>{
          console.log(err);
        })
      }
    }
  },
  //  平滑
  mounted() {
    new BScroll(this.$refs.container, {
      scrollX: true,
      click: true
    });
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  text-decoration: line-through;
}
.chakan {
  width: 100px;
  height: 30px;
  background: red;
  display: flex;
  align-items: center;
}
.chakan1{
    width: 30px;
    height: 30px;
    background: yellow;
}
.container {
  display: flex;
  overflow: hidden;
}
.content {
  flex: 1;
  display: flex;
}

.img {
  width: 125px;
  height: 125px;
}
// 字体隐藏
.font {
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.didi{
  width: 100%;
  height: 200px;
}
</style>