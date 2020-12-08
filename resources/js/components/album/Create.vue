<template>
  <div id="main">
    <el-form :model="form">
      <el-form-item>
        <el-input v-model="form.name" placeholder="请输入作品名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.category_id" placeholder="请选择作品类目">
          <el-option
            v-for="(item, index) in category"
            :key="index"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="avatar-uploader"
          action=""
          ref="upload"
          :file-list="fileList"
          :data="form"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="imgChange"
          :http-request="formRequest"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <span>评分：</span>
        <el-rate v-model="form.star"></el-rate>
      </el-form-item>
      <el-form-item>
        <el-button size="small" @click="upload">上传</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { request } from "../../network/request";

export default {
  data() {
    return {
      form: {
        name: "",
        category_id: "",
        star: 0,
      },
      imageUrl: "",
      fileList: [],
    };
  },
  props: ['category'],
  methods: {
    imgChange(file, fileList) {
      const allowFileType = ["image/jpeg", "image/png", "image/gif"];
      const isImg = allowFileType.indexOf(file.raw.type) >= 0 ? true : false;
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isImg) {
        this.$message.error("上传头像图片只能是图片格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      if (isImg && isLt2M) {
        if (fileList.length > 0) {
          this.fileList = [fileList[fileList.length - 1]];
        }
        this.imageUrl = URL.createObjectURL(file.raw);
      }
    },
    formRequest(file) {
      let formData = new FormData();
      formData.append("file", file.file);
      formData.append("name", this.form.name);
      formData.append("category_id", this.form.category_id);
      formData.append("star", this.form.star);
      request({
        method: "post",
        url: "album",
        headers: {
          "content-type": "multipart-data",
        },
        data: formData,
      }).then((response) => {
        this.$message({
          type: "success",
          message: "上传成功",
        });
        this.initParams();
      });
    },
    upload() {
      this.$refs.upload.submit();
    },
    initParams() {
      this.form.name = "";
      this.form.category_id = "";
      this.form.star = 0;
      this.imageUrl = "";
      this.fileList = [];
    },
  },
};
</script>

<style lang='scss'>
.el-form {
  padding: 20px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-rate {
  display: inline;
}
</style>
