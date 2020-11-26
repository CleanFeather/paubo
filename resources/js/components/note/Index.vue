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
      <div v-for="(item, index) in notes" :key="index" class="text item">
        <p>
          <router-link
            :to="{ name: 'note.show', params: { note_id: item.id } }"
          >
            {{ item.title }}
          </router-link>
          <span style="float: right">
            <router-link
              :to="{ name: 'note.update', params: { note_id: item.id } }"
            >
              <i class="el-icon-edit"></i>
            </router-link>
            <router-link to="" @click.native="destroy(item.id, index)">
              <i class="el-icon-delete"></i>
            </router-link>
          </span>
        </p>
        <span
          >{{ item.category_name }} | {{ item.user_name }}
          {{ item.created_at }}</span
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import { request } from "../../network/request";

export default {
  data() {
    return {
      notes: [],
    };
  },
  mounted: function () {
    request({
      method: "get",
      url: "note",
    }).then((response) => {
      this.notes = response.data;
    });
  },
  methods: {
    destroy(note_id, index) {
      this.$confirm("确定删除么", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        request({
          method: "delete",
          url: "note",
          data: {
            note_id: note_id,
          },
        }).then((response) => {
          this.notes.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功",
          });
        });
      });
    },
  },
};
</script>

<style>
/* #main {
  display: flex;
  align-items: center;
  justify-content: center;
} */
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