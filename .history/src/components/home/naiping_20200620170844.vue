<template>
 <div>
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