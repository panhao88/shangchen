<template>
 <div>
   
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" @click="Home">商城</van-tabbar-item>
  <van-tabbar-item icon="wap-nav" @click="classification">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart" @click="Cart">购物车</van-tabbar-item>
  <van-tabbar-item icon="friends" @click="my">我的</van-tabbar-item>
</van-tabbar>
<router-view></router-view>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       active: 0,
     }
   },
   components: {

   },
   methods: {
     Home(){
       if(this.$route.path !== '/'){
         this.$router.push({
           name:'home'
         })
       }
     },
    classification(){
       if(this.$route.path !=='/'){
         this.$router.push({
           name:'classification'
         })
       }
     },
     Cart(){
       this.$router.push('Cart')
     },
     my(){
       this.$router.push('my')
     }
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