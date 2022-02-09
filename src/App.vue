<template>
  <div id="page">
    <div class="container">
      <Header/>
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
export default {
  name: "App",
  components: { Blog, Footer, Header },
};
</script>

<style src="./styles/style.css" />
