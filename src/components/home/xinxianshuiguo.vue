<template>
  <div class="box">
    <div class="box2">

      <div v-for="(item,index) in category" :key="index"  @click="goClassFaction(item,index)">
        <div>
          <img class="img" :src="item.image" alt />
          <div>{{item.mallCategoryName}}</div>
        </div>
      </div>
    </div>
    <div class="img1">
          <img class="img2" :src="advertesPicture.PICTURE_ADDRESS" alt />
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    category: {
      type: Array
    },
    advertesPicture: {
      type: Object
    }
  },
  components: {},
  methods: {
    goClassFaction(item,index){
      this.$router.push({path:'/classification',query:{index,index}})
    },
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
// 父盒子
.box {
  width: 375px;
  height: 140px;
//   background: chartreuse;
  display: flex;
  flex-direction: column;
  align-items: center;
}
// 子盒子1
.box2{
    width: 375px;
    height: 90px;
    display: flex;
    // background: chocolate;
    display: flex;
    justify-content: space-around;
}
.img{
    width: 60px;
    height: 60px;
}

// 子盒子2
.img1{
    width: 375px;
    height: 50px;
    // background: cornflowerblue;
    display: flex;
}
.img2{
    width: 350px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>