<template>
  <section class="intro-container">
    <div class="box-content">
      <div class="box-text">
        <div class="title">
          {{ $t('intro.greet') }}<br />{{ $t('intro.name') }}<br />{{
            $t('intro.profession')
          }}
        </div>
        <div class="subtitle">{{ $t('intro.hobby') }}</div>
      </div>
    </div>
  </section>
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
.intro-container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    position: absolute;
    top: -20px;
    right: -20px;
    bottom: -20px;
    left: -20px;
    content: '';
    z-index: -1;
    //background-image: url('https://api.dujin.org/bing/1366.php');
    background-image: url('../assets/bg.jpg');
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: 50% 50%;
    -webkit-filter: blur(10px);
    filter: blur(10px);
  }

  .box-content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .box-text {
      .title {
        font-size: @sizeFontIntroTitle;
        font-family: 'Roboto Mono', monospace, 'plantc', 'Source Han Serif',
          serif;
        font-weight: bolder;
        line-height: 11rem;
        color: @colorFontIntroTitle;
      }

      .subtitle {
        font-size: @sizeFontIntroSubtitle;
        font-family: 'plantc', 'Source Han Serif', serif;
        font-weight: lighter;
        margin-top: 20px;
        color: @colorFontIntroSubtitle;
      }
    }
  }
}
</style>
