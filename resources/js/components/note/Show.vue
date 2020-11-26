<template>
  <div id="main">
    <el-card class="box-card">
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
      note: ''
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
          this.note = response.data
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
  margin-top: 20px;
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
#content{
  overflow: scroll;
  height: 800px;
}
img{
  display: inline-block;
  max-width: 100%;
}
</style>