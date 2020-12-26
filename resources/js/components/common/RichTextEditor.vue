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
    this.editor.config.height = 500;
    this.editor.config.showLinkImg = false;
    this.editor.config.uploadImgServer = "/api/note/upload";
    this.editor.config.uploadFileName = "img";
    this.editor.config.zIndex = 1;
    this.editor.config.uploadImgMaxLength = 1;
    this.editor.create();
    this.setContent("如题");
  },
  methods: {
    getContent() {
      return this.editor.txt.html();
    },
    setContent(content) {
      this.editor.txt.html(content);
    },
  },
};
</script>

<style lang="scss">
#editor {
  width: 90%;
  img {
    max-width: 100%;
  }
}
</style>