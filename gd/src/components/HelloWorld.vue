<template>
  <div class="gd" style="height: 100%;">
    <iframe ref="iframe" src="https://m.amap.com/picker/?key=96dd8a0dd15d5777b7840d36164e831a"
            style="height: 100%;width: 100%;border: 0;"></iframe>
  </div>
</template>

<script>
  import getFirstPY from "../utils/py"

  export default {
    name: 'gd',
    data() {
      return {}
    },
    mounted: function () {
      let iframe = this.$refs.iframe.contentWindow;
      this.$refs.iframe.onload = function () {
        iframe.onclick = function () {
          debugger
        };
        iframe.postMessage('hello', 'https://m.amap.com/picker/');
      };
      window.addEventListener("message", this.handleMessage, false);
    },
    beforeDestroy: function () {
      window.removeEventListener("message", this.handleMessage, false);
    },
    methods: {
      handleMessage(e) {
        console.log(e);
        if (e.data) {
          this.$emit("confirm", e.data.address);
        }
      }
    }
  }
</script>

<style scoped>
</style>
