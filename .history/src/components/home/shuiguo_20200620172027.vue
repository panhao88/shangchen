<template>
 <div class="didi">
      <div class="didi1">
      <div><span class="didi2">2F</span>{{floorName.floor2}}</div>
    </div>
     <div v-for="(item,index) in floor2" :key="index">
         <div :class="[{'left':(index <= 0)},{'right':(index >=1)}]">
             <img :src="item.image" alt="">
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
   props:{
       floor2:{
           type:Array
       },
        floorName: {
      type: Object
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
    .didi{
        width: 375px;
        height: 330px;
        background: yellow;
    }
    .box1 {
    width: 100%;
    background: white;
}
.left {
    float: left;
    width: 50%;
    display: flex;
}
.right {
    float: right;
    width: 50%;
    display: flex;
}
img {
    width: 100%;
}
    .didi1{
    width: 375px;
    height: 40px;
    background: beige;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
}
    .didi2{
    width: 25px;
    height: 25px;
    background: red;
    color: beige;
    border-radius: 50%;
}
</style>