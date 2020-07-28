<template>
  <div class="box">
    <dingbu></dingbu>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <lunbotu :slides="slides"></lunbotu>
      <xinxianshuiguo :category="category" :advertesPicture="advertesPicture"></xinxianshuiguo>
      <shangping></shangping>
      <tuijian :recommend="recommend"></tuijian>
      <xiuxian :floor1="floor1" :floorName="floorName"></xiuxian>
      <shuiguo :floor2="floor2" :floorName="floorName"></shuiguo>
      <naiping :floor3="floor3" :floorName="floorName"></naiping>
      </van-pull-refresh>
      <rexiao :hotGoods="hotGoods"></rexiao>
    
  </div>
</template>
 
<script>
import { Toast } from 'vant';
import dingbu from "../components/home/dingbu";
import lunbotu from "../components/home/lunbotu";
import xinxianshuiguo from "../components/home/xinxianshuiguo";
import tuijian from "../components/home/tuijian";
import shangping from "../components/home/shangping";
import xiuxian from "../components/home/xiuxian";
import shuiguo from "../components/home/shuiguo";
import naiping from "../components/home/naiping";
import rexiao from "../components/home/rexiao";

export default {
  data() {
    return {
      slides: [],
      category: [],
      advertesPicture: {},
      recommend: [],
      floor1: [],
      floorName: {},
      floor2: [],
      floor3: [],
      hotGoods: [],
      isLoading: false
    };
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
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    }
  },
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        console.log(res);
        this.slides = res.data.slides;
        this.category = res.data.category;
        localStorage.setItem('category',JSON.stringify(this.category))
        this.advertesPicture = res.data.advertesPicture;
        this.recommend = res.data.recommend;
        this.floorName = res.data.floorName;
        this.floor1 = res.data.floor1;
        this.floor2 = res.data.floor2;
        this.floor3 = res.data.floor3;
        this.hotGoods = res.data.hotGoods;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 375px;
  display: flex;
  flex-direction: column;
}
</style>