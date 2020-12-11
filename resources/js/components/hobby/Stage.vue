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
        <el-form-item label="阶段目标分数:">
          <el-input-number
            v-model="stage.score"
            :min="1"
            :max="score"
          ></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
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
        score: 100,
        level: 0,
      },
      score: 100,
    };
  },
  methods: {
    submit() {
      this.$emit("getStage", this.stage);
      this.drawer = false;
      setInterval(function (){
        this.initParams();
      },1000)
    },
    initParams() {
      this.stage.name = "";
      this.stage.description = "";
      this.score -= this.stage.score;
      this.stage.score = this.score;
      this.stage.level++;
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
