<template>
 <div class="box1">
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to="Home">商城</van-tabbar-item>
  <van-tabbar-item  icon="wap-nav" to="classification">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart" to="Cart" v-if="username !== ''" :badge="setNumber">购物车</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart" to="Cart" v-if="username === ''" >购物车</van-tabbar-item>
  <van-tabbar-item icon="friends" to="my">我的</van-tabbar-item>
</van-tabbar>
<router-view></router-view>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       active: 0,
       username:''
     }
   },
   components: {

   },
   methods: {
    //  Home(){
    //   this.$router.push('Home')
    //  },
    // classification(){
    //   this.$router.push('classification')
    //  },
    //  Cart(){
    //    this.$router.push('Cart')
    //  },
    //  my(){
    //    this.$router.push('my')
    //  }
   },
   mounted() {
if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username");
    }
   },
   watch: {
      "$route.path": {
      handler(val) {
        // console.log(val)
        if (val === "/") {
          this.active = 0;
        }
        if (val === "/classiFication") {
          this.active = 1;
        }
        if (val === "/shoppingCart") {
          this.active = 2;
        }
        if (val === "/my") {
          this.active = 3;
        }
      },
      immediate: true
    }
   },
   computed: {
     setNumber() {
      return this.$store.state.num;
    }
   }
 }
</script>

<style scoped lang='scss'>
  .box1{
    width: 90%;
   height: 10%;
    
  }
</style>