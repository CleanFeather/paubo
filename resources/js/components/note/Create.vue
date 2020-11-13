<template>
  <div id="main">
    <h1>创建笔记</h1>
    <div id="editor"></div>
    <p>{{content}}</p>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  data() {
    return {
      editor: '',
      content: '',
    };
  },
  mounted: function () {
    this.editor = new E("#editor");
    this.editor.config.showLinkImg = false;
    this.editor.config.uploadImgServer = 'api/note/store';
    this.editor.create();
    this.editor.txt.html('asd');
  },
};
</script>

<style>
#editor{
  width: 1200px;
}
#main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
}
</style>