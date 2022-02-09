<template>
  <div id="content" class="site-content">
    <div id="primary" class="content-area column full">
      <main id="main" class="site-main" role="main">
        <div class="grid portfoliogrid posts">
          <Post v-for="post in posts" :key="post.id" :post="post" />
        </div>
        <Pagination :posts="posts" :onChange="handleChangePage" :page="currentPage" />
        <div class="clearfix"></div>
        <nav class="pagination"></nav>
      </main>
      <!-- #main -->
    </div>
  </div>
</template>

<script>
  import Post from "./Post";
  import { mockupApi } from "../api/Mockup";
  import Pagination from "./Pagination";


  export default {
    name: "Blog",
    components: { Pagination, Post },

    data () {
      return {
        posts: [],
        currentPage: 1
      }
    },

    methods: {
      getPosts() {
        mockupApi.getPosts()
        .then(posts => {
          this.posts = posts;
        })
        .catch(err => {
          console.error(err);
        })
      },

      handleChangePage(newPage) {
        this.currentPage = newPage;
      }
    },

    mounted () {
      this.getPosts();
    }
  }
</script>

<style scoped>

</style>
