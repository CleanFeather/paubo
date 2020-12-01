<template>
  <div id="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span @click="initPage()">深坑</span>
        <el-divider direction="vertical"></el-divider>
        <el-dropdown @command="selectCategory">
          <span class="el-dropdown-link">
            {{ category_name }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in categories"
              :key="index"
              :command="item"
              >{{ item.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <span style="float: right">
          <router-link :to="{ name: 'note.create' }">
            <i class="el-icon-plus"></i>
          </router-link>
        </span>
      </div>
      <div v-loading="loading">
        <div v-if="!isEmpty">
          <div v-for="(item, index) in notes" :key="index" class="text item">
            <p>
              <router-link
                :to="{ name: 'note.show', params: { note_id: item.id } }"
              >
                {{ item.title }}
              </router-link>
              <span style="float: right">
                <router-link
                  :to="{ name: 'note.edit', params: { note_id: item.id } }"
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
        </div>
        <div id="emptyStatus" v-else>深不见底，快去填吧~</div>
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
      categories: [],
      category_id: "",
      category_name: "分类",
      count: 0,
      loading: true,
    };
  },
  mounted: function () {
    request({
      method: "get",
      url: "note/category",
    }).then((response) => {
      this.categories = response.data;
    });
    this.initPage();
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
      this.loading = true;
      request({
        method: "get",
        url: "note",
        params: {
          page: page,
          limit: 10,
          category_id: this.category_id,
        },
      }).then((response) => {
        this.loading = false;
        this.notes = response.data.data;
        this.count = response.data.count;
      });
    },
    initPage() {
      (this.category_id = ""), this.changePage(1);
    },
    selectCategory(category) {
      this.category_id = category.id;
      this.category_name = category.name;
      this.changePage(1);
    },
  },
  computed: {
    isEmpty() {
      return this.notes.length == 0;
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
.el-dropdown-link {
  color: #409eff;
}
#emptyStatus {
  text-align: center;
  color: #909399;
}
</style>