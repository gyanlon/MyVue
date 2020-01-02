<template>
  <div>
    <!-- BEGIN OF RESULTS -->
    <router-view/>
    <SkillSvg />
  </div>
</template>

<script>
import SkillSvg from '@/components/SkillSvg.vue'
export default {
  name: 'ContentArea',
  components: {
    SkillSvg
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>
