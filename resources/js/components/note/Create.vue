<template>
  <div id="main" @keyup.enter="submit">
    <h1 style="margin-bottom: 60px">创建笔记</h1>
    <el-form>
      <el-form-item>
        <el-input v-model="title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item>
        <div id="editor"></div>
      </el-form-item>
    </el-form>

    <p>{{ content }}</p>
    <button type="normal" @click="submit">创建</button>
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
    };
  },
  mounted: function () {
    this.editor = new E("#editor");
    this.editor.config.showLinkImg = false;
    this.editor.config.uploadImgServer = "api/note/store";
    this.editor.create();
  },
  methods: {
    submit() {
      let content = this.editor.txt.html();
      request({
        method: "post",
        url: "note/store",
        data: {
          title: this.title,
          content: this.content,
          category_id: this.category_id,
        },
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