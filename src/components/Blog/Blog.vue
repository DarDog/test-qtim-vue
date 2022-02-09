<template>
  <div id="content" class="site-content">
    <div id="primary" class="content-area column full">
      <main id="main" class="site-main" role="main">
        <div class="grid portfoliogrid posts">
          <Post />
        </div>
        <div class="clearfix"></div>
        <nav class="pagination"></nav>
      </main>
      <!-- #main -->
    </div>
  </div>
</template>

<script>
  import Post from "../Post/Post";
  export default {
    name: "Blog",
    components: { Post }
  }
</script>

<style scoped>

</style>
