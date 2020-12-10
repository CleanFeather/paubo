<template>
  <div id="main">
    <el-button
      id="createButton"
      style="margin-bottom: 20px"
      @click="drawer = true"
    >
      <i class="el-icon-plus"></i>
    </el-button>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
    <el-tabs v-model="activeName" tab-position="left" type="border-card" @tab-click="handleClick">
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

export default {
  data() {
    return {
      activeName: "12",
      category: [],
      drawer: false
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
};
</script>

<style lang="scss" scoped>
</style>
