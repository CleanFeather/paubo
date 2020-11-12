<template>
  <div>
      <h1>首页</h1>
      <p>{{test}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  computed: {
    test: () => {
      that = this;
      axios({
        method: 'get',
        url: 'test',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
        data: {}
      }).then((response) => {
        that.message = response.data;
      });
    }
  },
}
</script>

<style>

</style>