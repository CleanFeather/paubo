<template>
  <div id="main" @keyup.enter="submit">
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
          v-model="password"
          placeholder="请输入密码"
          clearable
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click.once="submit">登录</el-button>
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
      password: "",
    };
  },
  methods: {
    submit() {
      request({
        method: "post",
        url: "login",
        data: this.$data,
      })
        .then((response) => {
          if (response.status == 200) {
            localStorage.setItem(
              "access_token",
              "Bearer " + response.data.access_token
            );
            this.$store.commit('setStatus',true);
            localStorage.setItem(
              "auth",
              JSON.stringify(this.$store.state.auth)
            );
            request({
              method: "get",
              url: "auth/user",
            }).then((response) => {
              this.$store.commit("setName", response.data.username);
              this.$message({
                type: 'success',
                message: '欢迎您 ' + response.data.username,
                center: true
              });
            });
            this.$router.push({ name: "home" });
          }
        })
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
  height: 740px;
}
</style>