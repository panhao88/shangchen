<template>
 <div>
                    首页拆分组件
     1.dingbu: 这个是搜索框，从home拆分的组件通过传值到sousuo路由组件
     2:dingwei: 定位，组件
     3：lunbotu：轮播图
     4：xinxianshuiguo：水果分类 ，同时也传值到了分类路由
     5：xiuxian：一楼的休闲食品组件，传值到详情页，
     6：tuijian：商品推荐
     7：shuiguo：二楼的水果推荐
     8：rexiao：热销商品
     9：naiping：三楼的营养奶瓶
                    路由组件
    1：http：封装请求
    2：utils：封装的全局组件
    3：classification：路由的商品分类
    4：Cart：购物车
    5：pingjia：商品评价
    6：wancheng：已完成
    7：geren：个人资料
    8：bianji：编辑个人资料
    9：city：首页标记定位 （city.js）
    10：Collection：我的收藏
    11：detaail：商品详情页
    12：dizhi：地址列表
    13：jiesuan：商品结算页面
    14：land：登录，注册页面
    15：layout：路由布局
    16：my：路由我的组件
    17：orders：我的订单
    18：pingjia：我的评价，待评价，已评价
    19：pingjia2：去评价
    20：pingjia3：查看我的已评价
    21：settin：我的，头像个人资料设置（没写）
    22：sousuo：首页的模糊搜索
    23：visit:我的游览记录
    24：xinzeng：添加我的收货地址（area.js）
    25：area.js:新增地址中引用的文件
    26：city.js：首页编辑定位要引用的文件
    27：vue.config.js：发送请求时跨域的网址
    28：main.js:全局引用，挂载需要用到的文件

    分类总结：首页传递参数（item，index）要把数组每一项和下标传递到分类
            this.$router.push({path:'/classification',query:{index,index}})
             category:新鲜水果的分类 （vant-sidebar 侧边导航）
             bxMallSubDto:热带水果分类 （vant-tab标签页）
 </div>vant-
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

    },
   watch: {

   },
   computed: {

   },
   filters: {

   },
 }
</script>

<style scoped lang='scss'>

</style>