<template>
  <div>
    <h1>首页</h1>
    <marquee>{{ message }}</marquee>
  </div>
</template>

<script>
import {request} from '../network/request';
export default {
  data() {
    return {
      message: "我是首页",
    };
  },
  mounted: function () {
    
  },
};
</script>

<style>
</style>