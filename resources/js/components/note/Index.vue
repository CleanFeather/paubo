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
        <span>
          {{ item.category_name }}
          <el-divider direction="vertical"></el-divider>
          {{ item.user_name }}
          <el-divider direction="vertical"></el-divider>
          {{ item.created_at }}
        </span>
      </div>
      <el-divider></el-divider>
      <div id="paginate">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="count"
          @current-change="changePage"
        ></el-pagination>
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
      count: 0,
    };
  },
  mounted: function () {
    request({
      method: "get",
      url: "note",
      params: {
        page: 1,
        limit: 10,
      },
    }).then((response) => {
      this.notes = response.data.data;
      this.count = response.data.count;
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
    changePage(page) {
      request({
        method: "get",
        url: "note",
        params: {
          page: page,
          limit: 10,
        },
      }).then((response) => {
        this.notes = response.data.data;
        this.count = response.data.count;
      });
    },
  },
};
</script>

<style>
.item {
  margin-bottom: 1em;
}
.item p {
  margin-bottom: 0.2px;
}
.item span {
  color: darkgrey;
}
#paginate {
  text-align: center;
}
</style>