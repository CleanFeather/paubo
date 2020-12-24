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
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>自定义奖惩</span>
          </div>
          <el-form v-model="custom" label-position="top">
            <el-form-item>
              <el-input
                v-model="custom.content"
                placeholder="请说明具体情况.."
              ></el-input>
            </el-form-item>
            <el-form-item label="延长天数:">
              <el-input-number v-model="custom.days"></el-input-number>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="customClick"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <el-progress
            type="circle"
            :percentage="progPercent"
            :width="260"
            :stroke-width="16"
          ></el-progress>
        </el-card>
      </el-col>
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
      custom: {
        content: "",
        days: 1,
      },
      hobby: {},
      prog_status: "success",
    };
  },
  props: ["hobby_id"],
  mounted: function () {
    this.getSigned();
    this.getHobby();
  },
  computed: {
    progPercent() {
      let percent = Math.round((this.hobby.keep_days / this.hobby.days) * 100);
      percent = isNaN(percent) ? 0 : percent;
      if (percent < 0) {
        percent = 0;
      }
      if (percent > 100) {
        percent = 100;
      }
      return percent;
    },
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
          this.sign(value, 1, data.day);
        })
        .catch(() => {});
    },
    customClick() {
      this.sign(
        this.custom.content,
        this.custom.days,
        moment().format("YYYY-MM-DD"),
        "custom"
      );
      this.custom.content = "";
      this.custom.days = 1;
    },
    sign(content, days, date, type = "sign") {
      request({
        method: "post",
        url: "hobby/sign",
        data: {
          hobby_id: this.hobby_id,
          type: type,
          content: content,
          days: days,
          date: date,
        },
      }).then((response) => {
        this.getSigned();
        this.$message({
          type: "success",
          message: "签到成功",
        });
      });
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
    getHobby() {
      request({
        method: "get",
        url: "hobby/show",
        params: {
          hobby_id: this.hobby_id,
        },
      }).then((response) => {
        this.hobby = response.data;
      });
    },
    getSigned() {
      request({
        method: "get",
        url: "hobby/sign",
        params: {
          hobby_id: this.hobby_id,
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
