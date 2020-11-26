<template>
  <div id="main">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link :to="{ name: 'note' }">填坑笔记</router-link>
      </el-menu-item>
      <p id="auth" style="float: right">
        <span v-if="$store.state.auth.status">
          <span>{{ $store.state.auth.username }}</span>
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
export default {
  data() {
    return {
      activeIndex: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
  #auth{
    line-height: 60px;
    margin-bottom: 0;
  }
</style>