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
          :data="form"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="imgChange"
          :before-upload="beforeUpload"
          :http-request="XmlRequest"
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
import {request} from '../../network/request';

export default {
  data() {
    return {
      form: {
        name: "",
        category_id: "",
        star: 0,
      },
      category: [
        {
          name: "绘画",
          id: "1",
        },
        {
          name: "照片",
          id: "2",
        },
      ],
      imageUrl: "",
    };
  },
  methods: {
    imgChange(res) {
      this.imageUrl = URL.createObjectURL(res.raw);
    },
    beforeUpload(file) {
      const allowFileType = ["image/jpeg", "image/png", "image/gif"];
      const isImg = allowFileType.indexOf(file.type) >= 0 ? true : false;
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isImg) {
        this.$message.error("上传头像图片只能是图片格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isImg && isLt2M;
    },
    XmlRequest(file) {console.log(file);
      this.form.file = file.file;
      request({
        method: 'post',
        url: 'album',
        data: this.form
      }).then(response => {
        console.log(response.data);
      });
    },
    upload() {
      this.$refs.upload.submit();
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
.el-rate{
  display: inline;
}
</style>
