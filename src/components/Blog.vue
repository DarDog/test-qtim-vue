<template>
  <div id="content" class="site-content">
    <div id="primary" class="content-area column full">
      <main id="main" class="site-main" role="main">
        <div class="grid portfoliogrid posts">
          <Card v-for="post in currentPosts" :key="post.id" :post="post" />
        </div>
        <Pagination v-if="posts.length" :posts="posts" :onChange="handleChangePage" :page="currentPage" />
        <div class="clearfix"></div>
        <nav class="pagination"></nav>
      </main>
      <!-- #main -->
    </div>
  </div>
</template>

<script>
  import Card from "./Card";
  import { mockupApi } from "../api/Mockup";
  import Pagination from "./Pagination";


  export default {
    name: "Blog",
    components: { Pagination, Card },

    data () {
      return {
        posts: [],
        currentPage: 1,
        currentPosts: [],
      }
    },

    methods: {
      getPosts() {
        mockupApi.getPosts()
        .then(posts => {
          this.posts = posts;
          this.getCurrentPosts(this.currentPage, posts)
        })
        .catch(err => {
          console.error(err);
        })
      },

      handleChangePage(newPage) {
        this.currentPage = newPage;
        this.getCurrentPosts(this.currentPage, this.posts);
      },

      getCurrentPosts(currentPage, posts) {
        const sliceStart = ( currentPage - 1 ) * 6;
        const lastMoviesIndex = currentPage * 6;

        this.currentPosts = posts.slice(sliceStart, lastMoviesIndex);
      }
    },

    mounted () {
      this.getPosts();
    }
  }
</script>

<style scoped>

</style>
