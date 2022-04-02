<template>
  <div class="pagination-area">
    <div class="pagination">
      <button
        class="pagination-button"
        @click="processPrev()"
        :disabled="isPrevDisabled"
      >
        Pervious Page
      </button>
      <span
        style="
          width: 1px;
          height: 50px;
          display: inline-block;
          background: #6a6a6a;
        "
      />
      <button
        class="pagination-button"
        @click="processNext()"
        :disabled="isNextDisabeled"
      >
        Next Page
      </button>
    </div>
    <span class="pagination-count" ref="count"></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPrevDisabled: true,
      isNextDisabeled: true,
      count: "",
    };
  },
  methods: {
    processTotalPages(current, total, count) {
      this.isNextDisabeled = total <= 1;
      this.isPrevDisabled = current == 1;

      count = (current - 1) * count + 1 + "-" + current * count;
      this.$refs.count.innerHTML = "Showing results " + count;
    },
    processNext() {
      this.$parent.$refs.filmCards.goToNextPage();
    },
    processPrev() {
      this.$parent.$refs.filmCards.goToLastPage();
    },
  },
};
</script>
<style scoped>
</style>
