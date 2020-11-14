<template>
  <div id="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>笔记</span>
      </div>
      <div v-for="(item,index) in notes" :key="index" class="text item">
        <p>{{ item.title }}<span style="float:right">{{ item.created_at }}</span></p>
        <span>{{ item.category_name + '|' + item.user_name }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import {request} from '../../network/request';
export default {
  data() {
    return {
      notes: [],
    };
  },
  mounted: function (){
      request({
          method: 'get',
          url: 'note',
      }).then(response => {
          this.notes = response.data;
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
.item{
  margin-bottom: 1em;
}
.item p{
  margin-bottom: 0.2px;
}
.item span{
  color: darkgrey;
}
</style>