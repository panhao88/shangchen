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
    
 </div>
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