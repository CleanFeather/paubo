<template>
  <div id="main">
    <el-form size="small">
      <el-form-item>
        <el-input
          class="input-normal-width"
          v-model="username"
          placeholder="请输入用户名"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          class="input-normal-width"
          v-model="phone"
          placeholder="请输入手机号"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio v-model="gender" label="1"
          ><i class="el-icon-male"></i
        ></el-radio>
        <el-radio v-model="gender" label="0"
          ><i class="el-icon-female"></i
        ></el-radio>
      </el-form-item>
      <el-form-item>
        <el-input
          class="input-normal-width"
          v-model="password"
          placeholder="请输入密码"
          clearable
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          class="input-normal-width"
          v-model="password_confirmation"
          placeholder="请确认密码"
          clearable
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { request } from "../../network/request";
export default {
  data() {
    return {
      username: "",
      phone: "",
      gender: "1",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    submit() {
      request({
        method: "post",
        url: "user/store",
        data: this.$data,
      }).then((response) => {
        this.$message({
          type: "success",
          message: "注册成功",
        });
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.input-normal-width {
  width: 200px;
}
#main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18%;
}
</style>