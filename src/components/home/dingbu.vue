<template>
  <div>
    <div class="box">
      <div class="box1">{{city}}</div>

      <div class="box2">
        <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      city: "",
      value: '',
    };
  },
  components: {},
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
  mounted() {
    let _this = this;
    AMap.plugin("AMap.Geolocation", function() {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB"
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        _this.city = data.addressComponent.city;
        // data是具体的定位信息
      }

      function onError(data) {
        // 定位出错
      }
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  height: 55px;
  // border: solid 1px red;
  display: flex;
  align-items: center;
  // justify-content: space-around;
  position: relative;
}
.box1 {
  position: absolute;
  left: 30px;
}
.box2 {
  position: absolute;
  left: 100px;
}
</style>