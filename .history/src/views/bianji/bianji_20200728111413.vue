<template>
  <div>
    <van-nav-bar title="编辑地址" left-text left-arrow @click-left="onClickLeft" />
    <div>
      <van-address-edit
        :area-list="area"
        show-delete
        show-set-default
        show-search-result
        :address-info="obj"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>

<script>
import area from "../../area";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      obj: {},
      area: area
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go;
      this.$toast("返回");
    },
    onSave(content) {
      if (this.$route.query.obj) {
        content.id = content._id;
        this.$api.address(content).then(res => {
          if (res.code === 200) {
            if (content.id) {
              this.$toast("修改成功");
            } else {
              this.$toast("添加成功");
            }
          }
        });
       this.$router.push("/dizhi");
      }  
    },
    onDelete(id) {
      this.$api
        .deleteAddress({ id })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.$toast("删除成功");
      this.$router.push("/dizhi");
    }
  },
  mounted() {
    this.obj = JSON.parse(this.$route.query.obj);
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
</style>