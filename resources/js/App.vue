<template>
  <div id="app">
    <p style="float: right">
      <span v-if="$store.state.auth.status">
        <span>{{ $store.state.auth.username }}</span>
        <router-link to="" @click.native="logout">登出</router-link>
      </span>
      <span v-else>
        <router-link :to="{ name: 'login' }">登录</router-link>
        <router-link :to="{ name: 'register' }">注册</router-link>
      </span>
    </p>
    <router-view />
  </div>
</template>

<script>
import { request } from "../js/network/request";
export default {
  created: function () {
    let auth = localStorage.getItem("auth");
    if (auth) {
      auth = JSON.parse(auth);
      this.$store.commit("setStatus", auth.status);
      this.$store.commit("setName", auth.username);
    }
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("auth", JSON.stringify(this.$store.state.auth));
    });
  },
  methods: {
    logout() {
      request({
        method: "delete",
        url: "logout",
      }).then((response) => {
        this.$store.commit('setStatus',false);
        this.$store.commit('setName','');
        localStorage.removeItem('auth');
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(245, 250, 215);
}
</style>