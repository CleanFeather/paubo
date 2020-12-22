<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-calendar v-model="value">
          <template slot="dateCell" slot-scope="{ date, data }">
            <p
              @click="dateClick(data, date)"
              :class="data.isSelected ? 'is-selected' : ''"
            >
              {{ data.day.split("-").slice(-1)[0] }}
              {{ data.isSelected ? "✔️" : "" }}
            </p>
          </template>
        </el-calendar>
      </el-col>
      <el-col :span="6"><div>a</div></el-col>
      <el-col :span="6"><div>b</div></el-col>
    </el-row>
    <el-row>
      <el-col><div>c</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
  props: ["hobby_id"],
  mounted: function () {
    console.log(this.hobby_id);
  },
  methods: {
    dateClick(data, date) {
      this.$prompt("", "", {
        inputPlaceholder: "说点什么 ...",
        confirmButtonText: "签到",
        showCancelButton: false,
        showClose: false,
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "签到成功",
          });
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang='scss'>
.el-row {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col > div {
  background-color: #d3dce6;
  height: 334px;
}
.el-calendar-table .el-calendar-day {
  height: 30px;
}
.el-calendar-table th {
  text-align: center;
}
</style>
