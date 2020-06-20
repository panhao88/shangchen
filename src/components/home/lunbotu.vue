<template>
  <div>
    <div class="box">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in slides" :key="index">
         <img class="box1" v-lazy="item.image">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
export default {
  data() {
    return {
    
    };
  },
  components: {},
  props:{
      slides:{
          type:Array
      }
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box1{
    width: 375px;
    height: 197px;
}

</style>