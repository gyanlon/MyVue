<template>
  <div>
    <div
      class='fullscreenBackground'
      style='background-image: url(&quot;/images.v2/008.jpg&quot;); background-position: center top;'
    ></div>
    <div class='contentLeft'>
      <div class='mainHeader'>
        <a href='./index.html'>
          <img class='logo' src='../../static/js/logo.png' />
        </a>
        <span class='toggleMenu bars'>
          <i class='fa fa-bars'></i>
        </span>
        <span class='toggleMenu cross'>
          <i class='fa fa-times'></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>
