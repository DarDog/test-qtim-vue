<template>
  <header id="masthead" class="site-header">
    <div class="site-branding">
      <h1 class="site-title">
        <a href="https://ru.qtim.pro/" target="_blank" rel="home">QTIM test</a>
      </h1>
      <h2 class="site-description">Тестовое задание для QTIM</h2>
    </div>
    <NavBar />
  </header>
</template>

<script>
  import NavBar from "./NavBar";
  export default {
    name: "Header",
    components: { NavBar },
  }
</script>
<style scoped>

</style>
