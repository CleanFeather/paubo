<template>
  <div id="main">
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col class="middle-col" :span="16">
        <el-card shadow="hover" body-style="padding: 10px" class="middle-content" id="abstract" @click.native="initAbstract()">{{ abstract }}</el-card>
      </el-col>
      <el-col class="middle-col" :span="8">
        <el-card shadow="none" class="middle-content" id="operate">
          <el-dropdown>
            <el-button type="primary" size="medium">
              画集类目<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>绘画</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button type="primary" size="medium">上传绘画</el-button>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="middle-content">下</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      abstract: "",
      abstract_index: 0,
      interval: null
    };
  },
  mounted: function () {
    this.initAbstract();
  },
  methods: {
    showAbstract() {
      let abstract =
        "欢迎光临 《万万没想到》 作品集，\r\n这是一个充斥着艺术气息的地方。。。\r\n(*^_^*)";
      this.abstract = abstract.substring(0, this.abstract_index++);
    },
    initAbstract() {
      clearInterval(this.interval);
      this.abstract_index = 0;
      this.interval = setInterval(this.showAbstract, 200);
    }
  },
};
</script>

<style lang='scss' scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.middle-content {
  height: 100%;
}
.middle-col {
  height: 100px;
}
#abstract {
  font-size: 14px;
  white-space: pre;
  color: #99a9bf;
  padding: 10px;
}
#operate{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
