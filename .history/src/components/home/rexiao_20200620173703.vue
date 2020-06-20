<template>
  <div class="didi">
    <div class="container" ref="container">
      <div class="content">
        <div v-for="(item,index) in hotGoods" :key="index">
          <div>
            <img class="img" :src="item.image" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
      hotGoods:{
          type:Array
      }
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>
    img
<style scoped lang='scss'>
</style>