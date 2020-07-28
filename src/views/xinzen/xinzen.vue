<template>
  <div>
    <van-nav-bar title="新增地址" left-text left-arrow @click-left="onClickLeft" />
    <div>
      <van-address-edit
        :area-list="area"
        show-delete
        show-set-default
        show-search-result
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
    return { area: area };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
      this.$toast("返回");
    },
    onSave(content) {
      this.content = this.content;
      this.$api
        .address({
          name: content.name,
          tel: content.tel,
          address: `${content.province}${content.city}${content.county}${content.addressDetail}`,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
        this.$toast('保存成功')
        this.$router.push('/dizhi')
    },
    onDelete({id}) {
        this.$api.deleteAddress({id}).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        this.$toast('删除成功')
        this.$router.push('/dizhi')
    }
  },
  mounted() {},
  watch: {},
  computed: {
       setName() {
      return this.$store.state.name;
    },
    setTel() {
      return this.$store.state.tel;
    },
    setCounty() {
      return this.$store.state.county;
    },
    setCity() {
      return this.$store.state.city;
    },
    setAreaCode() {
      return this.$store.state.areaCode;
    },
    setAddressDetail() {
      return this.$store.state.addressDetail;
    },
    setAddress() {
      return this.$store.state.address;
    }
  },
  filters: {}
};
</script>

<style scoped lang='scss'>
</style>