<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">消息</el-menu-item>
    <el-menu-item index="2">通讯录</el-menu-item>
    <el-menu-item index="3">发现</el-menu-item>
    <el-menu-item index="4">我</el-menu-item>
  </el-menu>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Nav',
  setup () {
    const activeIndex = ref('1')
    const activeIndex2 = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      activeIndex2,
      handleSelect
    }
  }
})
</script>

<style scoped>

</style>
