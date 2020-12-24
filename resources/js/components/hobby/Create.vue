<template>
  <div>
    <el-drawer :visible.sync="drawer" :with-header="false" size="50%">
      <el-form v-model="form" ref="form">
        <el-form-item>
          <el-select v-model="form.category_id" placeholder="请选择习惯类型">
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
          <el-switch
            style="display: block"
            v-model="keep_type"
            active-color="#13ce66"
            inactive-color="#13ce66"
            active-text="期限"
            inactive-text="天数"
            :disabled="switch_status"
          >
          </el-switch>
        </el-form-item>
        <el-form-item>
          <div v-if="keep_type">
            <el-date-picker
              v-model="keep_date"
              type="date"
              placeholder="选择日期"
              :disabled="switch_status"
            >
            </el-date-picker>
          </div>
          <div v-else>
            <el-input-number
              v-model="keep_num"
              :min="1"
              :disabled="switch_status"
            ></el-input-number>
          </div>
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
          <Stage ref="stage" :days="days" @getStage="getStage" />
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
import moment from "moment";

export default {
  data() {
    return {
      drawer: false,
      keep_type: true,
      keep_num: 1,
      keep_date: moment().add(1, "days"),
      form: {
        category_id: "",
        name: "",
        stages: [],
      },
    };
  },
  props: ["category"],
  components: {
    Stage,
  },
  computed: {
    days() {
      let days = this.keep_num;
      if (this.keep_type) {
        let keep_date = this.keep_date;
        if (!keep_date._isAMomentObject) {
          keep_date = moment(keep_date, "YYYY-MM-DD");
        }
        days = keep_date.diff(moment(), "days") + 1;
      }
      return days;
    },
    switch_status() {
      return this.form.stages.length != 0;
    },
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
      this.form.days = this.days;
      request({
        method: "post",
        url: "hobby",
        data: this.form,
      }).then((response) => {
        this.$message({
          type: "success",
          message: "创建成功",
        });
        this.$router.go(0);
      });
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
