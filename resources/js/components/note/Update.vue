<template>
  <div id="main">
    <el-row>
      <el-col :span="24">
        <el-page-header @back="goBack" content="编辑笔记"></el-page-header>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
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
            <RichTextEditor ref="content" />
          </el-form-item>
          <el-form-item>
            <el-button @click.once="submit">修改</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RichTextEditor from "../common/RichTextEditor";
import { request } from "../../network/request";

export default {
  data() {
    return {
      title: "",
      category_id: "",
      category: [],
    };
  },
  props: ["note_id"],
  components: {
    RichTextEditor,
  },
  mounted: function () {
    request({
      method: "get",
      url: "note/category",
    }).then((response) => {
      this.category = response.data;
    });
    request({
      method: "get",
      url: "note/show",
      params: {
        note_id: this.note_id,
      },
    }).then((response) => {
      this.title = response.data.title;
      this.category_id = response.data.category_id;
      this.$refs.content.setContent(response.data.content);
    });
  },
  methods: {
    submit() {
      request({
        method: "put",
        url: "note",
        data: {
          note_id: this.note_id,
          title: this.title,
          content: this.$refs.content.getContent(),
          category_id: this.category_id,
        },
      }).then((response) => {
        this.$message({
          message: "修改成功",
          type: "success",
        });
        this.$router.push({ name: "note" });
      });
    },
    goBack() {
      history.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 10%;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>