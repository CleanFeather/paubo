<template>
  <div id="main">
    <el-image :src="homeImg" style="width: 50%; height: 50%" fit="contain">
      <div slot="error" class="image-slot"></div>
    </el-image>
  </div>
</template>

<script>
export default {
  computed: {
    homeImg() {
      if (Object.keys(this.$store.state.auth.data).length > 0) {
        let gender = this.$store.state.auth.data.gender ? "boy" : "girl";
        return require("./../../image/" + gender + ".gif");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>