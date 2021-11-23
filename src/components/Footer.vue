<template>
  <footer class="footer-container">
    <div class="box-version">Version 2021.10.5</div>
    <div class="box-beian">蜀ICP备17004656号</div>
    <div class="box-developer">Designed and developed by Erwin Feng.</div>
    <div class="box-copyright">
      Copyright &copy;2016-2021 fengwenyi.com. All Rights Reserved.
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style lang="less" scoped>
.footer-container {
  width: 100%;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 3rem;
  font-size: @sizeFont * 0.9;
  background-color: @colorBg;
  color: @colorFont;
  border-top: 0.1rem solid #ddd;

  .box-version {
    opacity: 0.6;
  }

  .box-beian {
    opacity: 0.6;
    margin-top: 0.8rem;
  }

  .box-developer {
    margin-top: 2rem;
  }

  .box-copyright {
    margin-top: 0.8rem;
  }
}
</style>
