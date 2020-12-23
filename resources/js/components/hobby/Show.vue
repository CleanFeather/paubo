<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-calendar v-model="date">
          <template slot="dateCell" slot-scope="{ date, data }">
            <p
              @click="dateClick(data, date)"
              :class="{ isSelected: data.isSelected }"
            >
              {{ formToDay(data.day) }}
              {{ signed(data.day) ? "✔️" : "" }}
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
import { request } from "./../../network/request";
import moment from "moment";

export default {
  data() {
    return {
      date: new Date(),
      signs: [],
    };
  },
  props: ["hobby_id"],
  mounted: function () {
    this.getSigned();
  },
  methods: {
    dateClick(data, date) {
      if (data.day != moment().format("YYYY-MM-DD") || this.signed(data.day)) {
        return;
      }
      this.$prompt("", "", {
        inputPlaceholder: "说点什么 ...",
        confirmButtonText: "签到",
        showCancelButton: false,
        showClose: false,
      })
        .then(({ value }) => {
          request({
            method: "post",
            url: "hobby/sign",
            data: {
              hobby_id: this.hobby_id,
              content: value,
              date: data.day,
            },
          }).then((response) => {
            this.getSigned();
            this.$message({
              type: "success",
              message: "签到成功",
            });
          });
        })
        .catch(() => {});
    },
    formToDay(date) {
      return moment(date).format("DD");
    },
    signed(date) {
      for (let i = 0; i < this.signs.length; i++) {
        if (date == this.signs[i].date) {
          return true;
        }
      }
    },
    getSigned() {
      request({
        method: "get",
        url: "hobby/sign",
        params: {
          start_date: moment().startOf("month").format("YYYY-MM-DD"),
          end_date: moment().endOf("month").format("YYYY-MM-DD"),
        },
      }).then((response) => {
        this.signs = response.data;
      });
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
.el-calendar-table {
  &:not(.is-today) {
    td.next {
      pointer-events: none;
    }
    td.prev {
      pointer-events: none;
    }
  }
}
</style>
