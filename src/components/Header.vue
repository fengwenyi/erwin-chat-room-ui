<template>
  <div>
    <span class="btn" @click="changeLang">{{ $t('header.lang') }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup () {
    const { locale } = useI18n()

    const changeLang = () => {
      const lang = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
      // 切换语言 值要对应上面index中导出的名字  要一致  第四步
      locale.value = lang
      // 缓存到localStorage中下次进来还是切换后的语言  如果不需要可以删除下面代码
      localStorage.setItem('lang', lang)
    }

    return {
      changeLang
    }
  }
})
</script>

<style lang="less" scoped>
.btn {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  color: #ccc;
  cursor: pointer;
}
</style>
