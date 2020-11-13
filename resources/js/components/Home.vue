<template>
  <div>
    <h1>首页</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import {request} from '../network/request';
export default {
  data() {
    return {
      message: "",
    };
  },
  mounted: function () {
    request({
      method: "get",
      url: "test",
      data: {},
    }).then((response) => {
      this.message = response.data;
    });
  },
};
</script>

<style>
</style>