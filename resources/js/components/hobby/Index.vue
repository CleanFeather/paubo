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
      v-model="activeCategory"
      tab-position="left"
      type="border-card"
      :key="vender"
    >
      <el-tab-pane
        v-for="item in category"
        :key="item.id"
        :label="item.name"
        :name="item.id.toString()"
      >
        <el-row v-for="(item, index) in hobbies" :key="item.id">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h4 style="display:inline;color:#909399">{{ item.name }}</h4>
              <router-link
                style="float: right; padding: 3px 0"
                :to="{ name: 'hobby.show', params: { hobby_id: item.id } }"
                >查看详情</router-link
              >
            </div>
            <el-steps
              :active="activeStep(index)"
              finish-status="success"
              simple
            >
              <el-step
                v-for="i in item.hobby_stage"
                :key="i.id"
                :title="i.name"
              ></el-step>
            </el-steps>
          </el-card>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { request } from "../../network/request";
import Drawer from "./Create";

export default {
  data() {
    return {
      activeCategory: "",
      category: [],
      hobbies: [],
      vender: 0,
    };
  },
  mounted: function () {
    request({
      method: "get",
      url: "hobby/category",
    }).then((response) => {
      this.category = response.data;
      this.activeCategory = this.category[0].id.toString();
      // this.getHobbies();
    });
  },
  watch: {
    activeCategory(category_id) {
      this.getHobbies();
    },
  },
  methods: {
    getHobbies() {
      if (this.activeCategory > 0) {
        request({
          method: "get",
          url: "hobby",
          params: {
            category_id: this.activeCategory,
          },
        }).then((response) => {
          this.hobbies = response.data;
        });
      }
    },
  },
  computed: {
    activeStep() {
      return (index) => {
        let hobby_stage = this.hobbies[index].hobby_stage;
        let level = 0;
        hobby_stage.forEach((stage) => {
          if (this.hobbies[index].keep_days >= stage.days) {
            level = stage.level;
          }
        });
        return level;
      };
    },
  },
  components: {
    Drawer,
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
