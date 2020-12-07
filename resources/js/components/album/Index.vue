<template>
  <div id="main">
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="4000" type="card" style="height: 20%">
          <el-carousel-item v-for="item in masterpiece" :key="item.id">
            <el-image
              :src="item.url"
              fit="fill"
              style="width: 100%; height: 100%"
            ></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col class="middle-col" :span="16">
        <el-card
          shadow="hover"
          body-style="padding: 10px"
          class="middle-content"
          id="abstract"
          @click.native="initAbstract()"
        >
          <span style="white-space: pre">{{ abstract }}</span>
        </el-card>
      </el-col>
      <el-col class="middle-col" :span="8">
        <el-card
          shadow="none"
          body-style="width:100%;height:100%;display: flex;align-items: center;justify-content: space-around;"
          class="middle-content"
          id="operate"
        >
          <el-dropdown>
            <el-button type="primary" size="medium">
              作品类目<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>绘画</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button type="primary" size="medium" @click="drawer = true">
            上传作品
          </el-button>
          <el-drawer title="上传" :visible.sync="drawer" :with-header="false">
            <Drawer />
          </el-drawer>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="middle-content">
          <PictureCard />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Drawer from "./Create";
import PictureCard from "../common/PictureCard";
import { request } from "../../network/request";

export default {
  data() {
    return {
      abstract: "",
      abstract_index: 0,
      interval: null,
      drawer: false,
      masterpiece: [],
    };
  },
  mounted: function () {
    this.initAbstract();
    request({
      method: "get",
      url: "album",
      params: {
        page: 1,
        limit: 3,
        masterpiece: 1,
      },
    }).then((response) => {
      this.masterpiece = response.data;
    });
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
    },
  },
  components: {
    Drawer,
    PictureCard,
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
  color: #99a9bf;
  padding: 10px;
}
</style>
