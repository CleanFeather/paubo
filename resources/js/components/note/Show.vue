<template>
  <div id="main">
    <el-card class="box-card" v-loading="loading">
      <div slot="header" class="clearfix">
        <span>{{ note.title }}</span>
        <span style="float: right">
          <router-link :to="{ name: 'note.create' }">
            <i class="el-icon-plus"></i>
          </router-link>
        </span>
      </div>
      <div id="content" v-html="note.content"></div>
    </el-card>
  </div>
</template>

<script>
import { request } from "../../network/request";
export default {
  data() {
    return {
      note: '',
      loading: true
    };
  },
  props: ['note_id'],
  mounted: function (){
      request({
          method: 'get',
          url: 'note/show',
          params: {
              note_id: this.note_id
          }
      }).then(response => {
        this.loading = false;
          this.note = response.data
      })
  }
};
</script>

<style>
.box-card{
  margin-bottom: 60px;
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
img{
  display: inline-block;
  max-width: 100%;
}
</style>