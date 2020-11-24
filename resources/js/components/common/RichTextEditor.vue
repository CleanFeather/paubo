<template>    
    <div id="editor"></div>
</template>

<script>
import E from "wangeditor";

export default {
  data() {
    return {
      editor: "",
    };
  },
  mounted: function () {
    this.editor = new E("#editor");
    this.editor.config.showLinkImg = false;
    this.editor.config.uploadImgServer = "/api/note/upload";
    this.editor.config.uploadFileName = 'img';
    this.editor.config.zIndex = 1;
    this.editor.config.uploadImgMaxLength = 1;
    this.editor.create();
  },
  methods: {
      getContent() {
          return this.editor.txt.html();
      },
      setContent(content) {
        this.editor.txt.html(content);
      }
  }
};
</script>

<style>
#editor {
  width: 1200px;
}
</style>