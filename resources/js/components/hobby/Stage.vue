<template>
  <div id="main">
    <el-drawer
      :append-to-body="true"
      :visible.sync="drawer"
      :with-header="false"
    >
      <el-form label-position="top">
        <el-form-item>
          <el-input
            v-model="stage.name"
            placeholder="请输入阶段目标"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="textarea"
            rows="4"
            v-model="stage.description"
            placeholder="请为该阶段添加描述信息"
          ></el-input>
        </el-form-item>
        <el-form-item label="阶段目标天数:">
          <el-slider
            v-model="stage.days"
            :step="5"
            :min="0"
            :max="stage_days"
            show-stops
          >
          </el-slider>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">添加</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      stage: {
        name: "",
        description: "",
        days: "",
        level: "",
      },
      level: 1,
      stage_days: 1,
    };
  },
  props: ["days"],
  watch: {
    days() {
      this.stage_days = this.days;
    },
  },
  methods: {
    submit() {
      if (this.stage_days <= 0) {
        this.$message({
          type: "warning",
          message: "天数已分配完毕",
        });
        return;
      }
      if (this.stage.days <= 0) {
        this.$message({
          type: "warning",
          message: "天数必须大于0",
        });
        return;
      }
      this.$emit("getStage", {
        name: this.stage.name,
        description: this.stage.description,
        days: this.stage.days,
        level: this.stage.level,
      });
      this.drawer = false;
      this.level++;
      this.stage_days -= this.stage.days;
    },
    initParams() {
      this.stage.name = "";
      this.stage.description = "";
      this.stage.days = this.stage_days;
      this.stage.level = this.level;
    },
  },
};
</script>

<style lang='scss' scoped>
.el-form {
  padding: 20px;
}
.el-input {
  width: 400px;
}
</style>
