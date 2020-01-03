<template>
  <div>
    <!-- MAIN PAGE LAYOUT || TWO COLUMNS  || RIGHT COLUMN -->
    <Header />
    <LeftMenu />
    <ContentArea />
    <FeedbackBox />
  </div>
</template>

<script>
import ContentArea from "@/views/ContentArea.vue"
import LeftMenu from "@/components/LeftMenu.vue"
import Header from "@/components/Header.vue"
import FeedbackBox from "@/components/FeedbackBox.vue"
export default {
  name: "MainPage",
  components: {
    ContentArea,
    LeftMenu,
    Header,
    FeedbackBox
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>
