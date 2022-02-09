<template>
  <article class="hentry card">
    <header class="entry-header">
      <h1 class="entry-title">
        <a href="blog-single.html" rel="bookmark"
        >{{ post.title }}</a
        >
      </h1>
      <div class="entry-thumbnail">
        <img
          :src="post.image"
          :alt="post.title"
        />
      </div>
    </header>
    <div class="entry-summary">
      <p>
        {{ post.preview }}
        <a class="more-link" href="blog-single.html">Read more</a>
      </p>
    </div>
    <footer class="entry-footer">
                  <span class="cat-links">
                    Posted in <a href="#" rel="category tag">audio</a>,
                    <a href="#" rel="category tag">embed</a>,
                    <a href="#" rel="category tag">media</a>
                  </span>
    </footer>
  </article>
</template>

<script>
  export default {
    name: "Post",
    props: [
      'post'
    ]
  }
</script>

<style scoped>

</style>
