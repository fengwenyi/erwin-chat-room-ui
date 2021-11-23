<template>
  <div class="home">
    <Header />
    <Intro></Intro>
    <Footer />
    <Nav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Intro from '@/components/Intro.vue'
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Nav,
    Header,
    Intro,
    Footer
  }
})
</script>
