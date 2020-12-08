<template>
  <div id="main">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="clickMenu"
    >
      <el-menu-item
        id="menu"
        v-for="(item, index) in menu"
        :key="index"
        :index="index.toString()"
        v-show="$store.state.auth.status"
        :title="item.name"
      >
        <router-link
          :to="{ name: item.route }"
          v-html="item.title"
        ></router-link>
      </el-menu-item>
      <p id="auth" style="float: right">
        <span v-if="$store.state.auth.status">
          <span>{{ $store.state.auth.data.username }}</span>
          <el-divider direction="vertical"></el-divider>
          <router-link to="" @click.native="logout">登出</router-link>
        </span>
        <span v-else>
          <router-link :to="{ name: 'login' }">登录</router-link>
          <el-divider direction="vertical"></el-divider>
          <router-link :to="{ name: 'register' }">注册</router-link>
        </span>
      </p>
    </el-menu>
  </div>
</template>

<script>
import { request } from "../../network/request";

export default {
  data() {
    return {
      menu: [
        {
          title: "<i class='el-icon-house'></i>",
          route: "home",
          name: "首页"
        },
        {
          title: "<i class='el-icon-notebook-2'></i>",
          route: "note",
          name: "笔记"
        },
        {
          title: "<i class='el-icon-picture-outline'></i>",
          route: "album",
          name: "画册"
        },
        {
          title: "<i class='el-icon-guide'></i>",
          route: "hobby",
          name: "习惯"
        },
      ],
      activeIndex: "",
    };
  },
  methods: {
    logout() {
      request({
        method: "delete",
        url: "logout",
      }).then((response) => {
        this.$store.commit("clear");
        this.$router.push({ name: "login" });
      });
    },
    clickMenu(key) {
      document.getElementsByTagName("a")[key].click();
    },
  },
};
</script>

<style lang="scss">
#auth {
  line-height: 60px;
  margin-bottom: 0;
}
#menu {
  i {
    font-size: 25px;
    &:hover{
      color: #3490dc;
    }
  }
}
</style>