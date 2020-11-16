<template>
  <div id="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>笔记</span>
        <span style="float: right">
          <router-link :to="{ name: 'note.create' }">
            <i class="el-icon-plus"></i>
          </router-link>
        </span>
      </div>
      <div v-bind="note">
          <h1>{{ note.title }}</h1>
      </div>
    </el-card>
  </div>
</template>

<script>
import { request } from "../../network/request";
export default {
  data() {
    return {
      note: ''
    };
  },
  mounted: function (){
      request({
          method: 'get',
          url: 'note/show',
          params: {
              note_id: this.$route.params.note_id
          }
      }).then(response => {
          this.note = response.data
          console.log(this.note);
      })
  }
};
</script>

<style>
#main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-card {
  width: 1200px;
  height: 800px;
  margin-top: 100px;
}
.item {
  margin-bottom: 1em;
}
.item p {
  margin-bottom: 0.2px;
}
.item span {
  color: darkgrey;
}
</style>