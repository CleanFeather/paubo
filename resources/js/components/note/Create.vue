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
        <RichTextEditor ref="content"/>
      </el-form-item>
      <el-form-item>
        <el-button @click.once="submit">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import RichTextEditor from '../common/RichTextEditor';
import { request } from "../../network/request";

export default {
  data() {
    return {
      title: "",
      category_id: "",
      category: [],
    };
  },
  components: {
    RichTextEditor
  },
  mounted: function () {
    request({
      method: "get",
      url: "note/category",
    }).then((response) => {
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
          content: this.$refs.content.getContent(),
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
#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
}
</style>