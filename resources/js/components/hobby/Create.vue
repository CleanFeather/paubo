<template>
  <div>
    <el-drawer :visible.sync="drawer" :with-header="false" size="50%">
      <el-form v-model="form" ref="form">
        <el-form-item>
          <el-select v-model="form.type">
            <el-option
              v-for="item in category"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" placeholder="请输入你的目标"></el-input>
        </el-form-item>
        <el-form-item>
          <el-card>
            <div slot="header">
              <el-button @click="incStage" type="text"
                >添加阶段</el-button
              >
            </div>
            <div>
              <el-steps :active="2" align-center>
                <el-step
                  v-for="item in form.stages"
                  :key="item.level"
                  :title="item.name"
                  :description="item.description"
                ></el-step>
              </el-steps>
            </div>
          </el-card>
          <Stage ref="stage" @getStage="getStage" />
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { request } from "../../network/request";
import Stage from "./Stage";

export default {
  data() {
    return {
      drawer: false,
      form: {
        type: 13,
        name: "",
        stages: [],
      },
    };
  },
  props: ["category"],
  components: {
    Stage,
  },
  methods: {
    incStage() {
      this.$refs.stage.drawer = true
    },
    getStage(stage) {
      this.form.stages.push(stage);
      console.log(this.form.stages);
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
