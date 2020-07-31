<template>
  <div class="todo">
    <div class="top-shopping">商品分类</div>
    <div class="box1">
      <div class="box">
        <van-sidebar v-model="activeIndex" @change="nima">
          <div v-for="(item,index) in category" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" />
          </div>
        </van-sidebar>
      </div>
      <div class="box2">
        <van-tabs v-model="active " @click="clickItem" line-width="20%" title-active-color="red">
          <van-tab v-for="(item,index1) in bxMallSubDto" :key="index1" :title="item.mallSubName">
            <div>
              <div v-for="(item,index) in dataList" :key="index" @click="goDetail(item)">
                <div class="haha">
                  <van-card
                  :price="item.present_price"
                  :title="item.name"
                  :thumb="item.image_path"
                  :origin-price="item.orl_price"
                />
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      category: [],  // 新鲜水果的分类
      bxMallSubDto: [],   //热带水果分类
      dataList: [],
      activeIndex: 0,  // 点击过来默认为当前的一项
      active: 0,   // 点击过来默认为当前的一项
      ids: "",   //
      id: ""   //给详情页取的参数
    };
  },
  components: {},
  methods: {
    nima(index) {
      // 默认ce为第一项
      this.active = 0;
      this.activeKey = index;
      this.bxMallSubDto = this.category[this.activeIndex].bxMallSubDto;
      this.ids = this.category[this.activeIndex].bxMallSubDto[
        this.active
      ].mallSubId;
      this.getdata();
    },
    clickItem(index) {
      this.active = index;
      this.ids = this.category[this.activeIndex].bxMallSubDto[
        this.active
      ].mallSubId;
      this.getdata();
    },
    // 跳转到详情页
    goDetail(item) {
      console.log(item);
      this.$router.push({
        path: "/detail",
        query: { id: item.id }
      });
      // 判断本地有没有最近浏览的数组
      this.$utils.goDetail(item);
    },
    // 次分类的每一项
    getdata() {
      this.$api
        .classification(this.ids)
        .then(res => {
          this.dataList = res.dataList;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // 取出本地的数据
    this.category = JSON.parse(localStorage.getItem("category"));
    this.bxMallSubDto = this.category[0].bxMallSubDto;

    // 判断我从首页点击传过来的index
    // 这个侧部导航的下标等于我传递过来的index，
    if (this.$route.query.index) {
      this.activeIndex = this.$route.query.index;
      this.ids = this.category[this.activeIndex].bxMallSubDto[
        this.active
      ].mallSubId;
      this.getdata();
    } else {
      this.ids = this.category[this.activeIndex].bxMallSubDto[
        this.active
      ].mallSubId;
      this.getdata();
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top-shopping {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  // border: 1px solid black;
}
.box1 {
  width: 100%;
  display: flex;
}
.box {
  width: 20%;
}
.box2 {
  width: 100%;
}
/deep/.van-tab {
  flex-basis: 27% !important;
}
/deep/.van-tabs--line .van-tabs__wrap {
  height: 60px;
}
/deep/.van-card{
  flex: 1;
}
.todo{
 margin-bottom: 50px;
}
</style>