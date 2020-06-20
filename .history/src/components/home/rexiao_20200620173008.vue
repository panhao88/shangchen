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
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>