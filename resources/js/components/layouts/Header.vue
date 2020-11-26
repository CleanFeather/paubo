<template>
  <div id="main">
    <h1 behavior="" direction="">我是头部</h1>
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
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>