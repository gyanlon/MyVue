<template>
  <div>
    <!-- MAIN PAGE LAYOUT || TWO COLUMNS  || RIGHT COLUMN -->
    <Header />
    <LeftMenu />
    <ContentArea />
  </div>
</template>

<script>
import ContentArea from '@/views/ContentArea.vue'
import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'MainPage',
  components: {
    ContentArea,
    LeftMenu,
    Header
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>
