<template>
  <nav id="site-navigation" class="main-navigation">
    <button class="menu-toggle">Menu</button>
    <a class="skip-link screen-reader-text" href="#content"
    >Skip to content</a
    >
    <div class="menu-menu-1-container">
      <ul id="menu-menu-1" class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/">Shop</router-link></li>
        <li><router-link to="/">Blog</router-link></li>
        <li><router-link to="/">Elements</router-link></li>
        <li><router-link to="/">Pages</router-link></li>
        <li><router-link to="/">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>

</style>
