<template>
  <div>
    <!-- BEGIN OF RESULTS -->
    <BusinessCard />
    <SkillSvg />
  </div>
</template>

<script>
import BusinessCard from "@/components/BusinessCard.vue";
import SkillSvg from "@/components/SkillSvg.vue";
export default {
  name: "ContentArea",
  components: {
    SkillSvg,
    BusinessCard
  }
};
</script>

<style scoped>
div {
  text-align: left;
}
</style>
