<template>
  <div class="didi">
    <div class="container" ref="container">
      <div class="content">
        <div v-for="(item,index) in recommend" :key="index">
          <div>
            <img class="img" :src="item.image" alt />
          </div>
        </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>