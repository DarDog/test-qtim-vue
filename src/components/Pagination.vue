<template>
  <nav class="pagination">
    <button v-if="page > 1" @click="showPreviousPage" type="button" class="page-numbers">Previous</button>
    <span class="page-numbers current">{{ page }}</span>
    <button v-if="page < Math.ceil(posts.length / 6)" @click="showNextPage" type="button" class="page-numbers">{{ page + 1 }}</button>
    <button v-if="page < Math.ceil(posts.length / 6)" @click="showNextPage" type="button" class="next page-numbers">Next</button>
  </nav>
</template>

<script>
  export default {
    name: "Pagination",
    props: ['posts', 'onChange', 'page'],

    methods: {
      showNextPage() {
        this.onChange(this.page + 1);
      },

      showPreviousPage() {
        this.onChange(this.page - 1);
      }
    }
  }
</script>

<style scoped>

</style>
