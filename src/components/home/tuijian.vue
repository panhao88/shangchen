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
              <van-icon name="cart" badge color="red" size="27" />
          </div>
          <div>查看详情</div>
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
    return {};
  },
  props: {
    recommend: {
      type: Array
    }
  },
  components: {},
  methods: {},
  //    字体隐藏
  mounted() {
    new BScroll(this.$refs.container, {
      scrollX: true,
      click: true
    });
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