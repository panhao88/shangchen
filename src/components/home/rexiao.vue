<template>
  <div class="didi">
    <div class="container">
      <div class="box1">
        <div>热销商品</div>
      </div>
      <div class="toyou">
        <div v-for="(item,index) in hotGoods" :key="index"  @click="goDetail(index)">
          <div class="hghg">
            <img class="img" :src="item.image" alt />
            <div class="font">{{item.name}}</div>
            <div class="box3">
              <div>￥{{item.mallPrice}}</div>
              <div class="box4">￥{{item.price}}</div>
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
      id:''
    };
  },
  props: {
    hotGoods: {
      type: Array
    }
  },
  components: {},
  methods: {
    goDetail(index){
      this.$router.push({
        path:'/detail',
        query:{id:this.hotGoods[index].goodsId}
      })
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
    
<style scoped lang='scss'>
.box1 {
  width: 375px;
  height: 40px;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.img {
  display: flex;
  width: 180px;
  height: 180px;
}
.box3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box4 {
  color: red;
  text-decoration: line-through;
  margin-left: 10px;
}
.font {
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
.toyou {
  width: 375px;
  height: 280px;
  display: flex;
  flex-wrap: wrap;
}
.hghg {
  // width: 375px;
  height: 280px;
}
</style>