<template>
  <div id="main">
    <h1 style="margin-bottom: 60px">创建笔记</h1>
    <el-form>
      <el-form-item>
        <el-input v-model="title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="category_id">
          <el-option
            v-for="(item, index) in category"
            :key="index"
            :value="item.id"
            :label="item.name"
            >{{ item.name }}</el-option
          >
        </el-select>
      </el-form-item>
      <el-form-item>
        <div id="editor"></div>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import E from "wangeditor";
import { request } from "../../network/request";

export default {
  data() {
    return {
      editor: "",
      title: "",
      content: "",
      category_id: "",
      category: [],
    };
  },
  mounted: function () {
    this.editor = new E("#editor");
    this.editor.config.showLinkImg = false;
    this.editor.config.uploadImgServer = "api/note/store";
    this.editor.config.zIndex = 1;
    this.editor.create();

    request({
      method: "get",
      url: "note/category",
    }).then((response) => {
      console.log(response.data);
      this.category = response.data;
    });
  },
  methods: {
    submit() {
      request({
        method: "post",
        url: "note/store",
        data: {
          title: this.title,
          content: this.editor.txt.html(),
          category_id: this.category_id,
        },
      }).then((response) => {
        this.$message({
          message: "创建成功",
          type: "success",
        });
        this.$router.push({ name: "note" });
      });
    },
  },
};
</script>

<style>
#editor {
  width: 1200px;
}
#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
}
</style>