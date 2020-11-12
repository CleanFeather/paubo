<template>
  <div id="app">
    <p style="float:right">
      <router-link :to="{name: 'login'}">登录</router-link>
      <router-link :to="{name: 'register'}">注册</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background-color: rgb(245, 250, 215);
}
</style>