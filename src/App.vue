<template>
  <div id="page">
    <div class="container">
      <Header/>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Footer, Header },
};
</script>

<style src="./styles/style.css" />
