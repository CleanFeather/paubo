<template>
  <div id="main">
    <el-button
      id="createButton"
      style="margin-bottom: 20px"
      @click="$refs.drawer.drawer = true"
    >
      <i class="el-icon-plus"></i>
    </el-button>
    <Drawer ref="drawer" :category="category" />
    <el-tabs
      v-model="activeName"
      tab-position="left"
      type="border-card"
      @tab-click="handleClick"
    >
      <el-tab-pane
        v-for="item in category"
        :key="item.id"
        :label="item.name"
        :name="item.id.toString()"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { request } from "../../network/request";
import Drawer from "./Create";

export default {
  data() {
    return {
      activeName: "13",
      category: [],
    };
  },
  mounted: function () {
    request({
      method: "get",
      url: "hobby/category",
    }).then((response) => {
      this.category = response.data;
    });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  components: {
    Drawer,
  },
};
</script>

<style lang="scss" scoped>
</style>
