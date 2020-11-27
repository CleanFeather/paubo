<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <Main />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { request } from "../js/network/request";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import Footer from "./components/layouts/Footer";

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
        this.$store.commit("setStatus", false);
        this.$store.commit("setName", "");
        localStorage.removeItem("auth");
        this.$router.push({ name: "login" });
      });
    },
  },
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
html{
  position: relative;
  width: 100%;
  min-height: 100%;
}
footer {
  position: absolute;
  padding: 0 !important;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>