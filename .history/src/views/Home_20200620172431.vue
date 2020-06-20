<template>
 <div class="box">
     <dingbu></dingbu>
     <lunbotu :slides="slides"></lunbotu>
     <xinxianshuiguo :category = category :advertesPicture = advertesPicture></xinxianshuiguo>
     <shangping></shangping>
     <tuijian :recommend = recommend></tuijian>
     <xiuxian :floor1 = floor1  :floorName = floorName></xiuxian>
     <shuiguo :floor2 = floor2  :floorName = floorName></shuiguo>
     <naiping  :floor3 = floor3  :floorName = floorName></naiping>
 </div>
</template>

<script>
import dingbu from '../components/home/dingbu'
import lunbotu from '../components/home/lunbotu'
import xinxianshuiguo from '../components/home/xinxianshuiguo'
import tuijian from '../components/home/tuijian'
import shangping from '../components/home/shangping'
import xiuxian from '../components/home/xiuxian'
import shuiguo from '../components/home/shuiguo'
import naiping from '../components/home/naiping'
import rexiao from '../components/home/rexiao'
 export default {
   data () {
     return {
       slides:[],
       category:[],
       advertesPicture:{},
       recommend:[],
       floor1:[],
       floorName:{},
       floor2:[],
       floor3:[],
     }
   },
   components: {
     dingbu,
     lunbotu,
     xinxianshuiguo,
     shangping,
     tuijian,
     xiuxian,
     shuiguo,
     naiping,
     rexiao
   },
   methods: {

   },
   mounted() {
     this.$api.recommend().then(res => {
       console.log(res);
       this.slides = res.data.slides
       this.category = res.data.category
       this.advertesPicture = res.data.advertesPicture
       this.recommend = res.data.recommend
       this.floorName = res.data.floorName
       this.floor1 = res.data.floor1
       this.floor2 = res.data.floor2
       this.floor3 = res.data.floor3
     }).catch( err =>{
       console.log(err);
     })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .box{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>