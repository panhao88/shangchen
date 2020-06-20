<template>
 <div>
<div class="didi">
      <div class="didi1">
      <div><span class="didi2">3F</span>{{floorName.floor3}}</div>
    </div>
     <div v-for="(item,index) in floor3" :key="index">
         <div :class="[{'left':(index <= 0)},{'right':(index >=1)}]">
             <img :src="item.image" alt="">
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
    props:{
       floor3:{
           type:Array
       },
        floorName: {
      type: Object
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