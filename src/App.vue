<template>
  <div id="page">
    <div class="container">
      <Header/>
      <Blog />
      <Post />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Post from "./components/Post";
export default {
  name: "App",
  components: { Post, Blog, Footer, Header },
};
</script>

<style src="./styles/style.css" />
