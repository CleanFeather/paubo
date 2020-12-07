<template>
  <div id="main">
    <el-row
      class="infinite-list"
      v-infinite-scroll="load"
      style="overflow: auto"
    >
      <el-col
        :span="8"
        v-for="(item, index) in show"
        :offset="getOffset(index)"
        :key="index"
        class="infinite-list-item"
        >{{ item.name }}</el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      albums: [
        {name: 'lqy1'},
        {name: 'lqy2'},
        {name: 'lqy3'},
        {name: 'lqy4'},
        {name: 'lqy5'},
        {name: 'lqy6'},
        {name: 'lqy7'},
        {name: 'lqy8'},
        {name: 'lqy9'},
        {name: 'lqy10'},
        {name: 'lqy11'},
        {name: 'lqy12'},
        {name: 'lqy13'},
        {name: 'lqy14'},
        {name: 'lqy15'},
        {name: 'lqy16'},
        {name: 'lqy17'},
        {name: 'lqy18'},
        {name: 'lqy19'},
        {name: 'lqy20'},
      ],
      show: [],
    };
  },
  computed: {
    getOffset() {
      return function (index) {
        let offset = 1;
        if (index % 3 == 0) {
          offset = 0;
        }
        return offset;
      };
    },
  },
  methods: {
    load() {
      this.count += 2;
      this.show = this.albums.slice(0,this.count);console.log(this.albums,this.show);
    },
  },
};
</script>
<style>
.infinite-list {
  height: 100px;
}
.el-col {
  width: 30.5%;
}
</style>