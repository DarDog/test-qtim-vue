<template>
  <article class="hentry card">
    <header class="entry-header">
      <h1 class="entry-title">
        <router-link :to="{ name: 'post', params: { id: post.id } }" rel="bookmark"
        >{{ post.title }}</router-link
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
        <router-link :to="{ name: 'post', params: { id: post.id } }" class="more-link">Read more</router-link>
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
    name: "Card",
    props: [
      'post'
    ]
  }
</script>

<style scoped>

</style>
