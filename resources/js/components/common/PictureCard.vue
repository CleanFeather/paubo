<template>
  <div id="main">
    <el-row
      class="infinite-list"
      style="overflow: auto"
      v-infinite-scroll="load"
      :infinite-scroll-delay="1000"
      :key="infinite_key"
    >
      <el-col
        class="infinite-list-item"
        :span="6"
        v-for="(item, index) in albums"
        :key="index"
        :offset="getOffset(index)"
      >
        <el-card :body-style="{ padding: '10px' }">
          <div>
            <el-image
              :src="item.url"
              fit="contain"
              :preview-src-list="[item.url]"
              class="image"
              lazy
            ></el-image>
          </div>
          <div style="padding: 14px">
            <span>{{ item.name }}</span>
            <span style="float: right">
              <el-rate v-model="item.star" disabled text-color="#ff9900">
              </el-rate>
            </span>
            <div class="bottom clearfix">
              <time class="time">{{ item.created_at }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { request } from "../../network/request";

export default {
  data() {
    return {
      albums: [],
      page: 1,
      category_id: "",
      infinite_key: 0,
    };
  },
  computed: {
    getOffset() {
      return function (index) {
        let offset = 1;
        if (index % 4 == 0) {
          offset = 0;
        }
        return offset;
      };
    },
  },
  methods: {
    load() {
      request({
        method: "get",
        url: "album",
        params: {
          page: this.page,
          limit: 4,
          category_id: this.category_id,
        },
      }).then((response) => {
        if (response.data.length > 0) {
          this.empty_page = "";
          this.page++;
          this.albums = this.albums.concat(response.data);
        }
      });
    },
    initParams(category_id = "") {
      this.albums = [];
      this.page = 1;
      this.category_id = category_id;
      this.infinite_key++;
    },
  },
};
</script>

<style lang='scss' scoped>
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.image {
  width: 100%;
  height: 300px;
  display: block;
}
.el-col {
  width: 21.8%;
}
.el-card {
  margin-bottom: 20px;
}
.infinite-list {
  height: 1200px;
}
</style>
