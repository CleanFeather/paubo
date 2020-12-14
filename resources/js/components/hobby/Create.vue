<template>
  <div>
    <el-drawer :visible.sync="drawer" :with-header="false" size="50%">
      <el-form v-model="form" ref="form">
        <el-form-item>
          <el-select v-model="form.type" placeholder="请选择习惯类型">
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
              <el-button @click="incStage" type="text">添加阶段</el-button>
            </div>
            <div>
              <el-steps :active="form.stages.length" align-center>
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
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
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
        type: "",
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
      this.$refs.stage.drawer = true;
      this.$refs.stage.initParams();
    },
    getStage(stage) {
      this.form.stages.push(stage);
    },
    submit() {
      request({
        method: 'post',
        url: 'hobby',
        data: this.form
      }).then(response => {
        this.$message({
          type: 'success',
          message: '创建成功'
        })
      })
    }
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
