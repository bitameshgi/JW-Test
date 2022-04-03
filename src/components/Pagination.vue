<template>
  <div class="pagination-area" :visible="countTxt!==''">
    <div class="pagination">
      <button
          class="pagination-button"
          @click="processPrev()"
          v-model="currentPage"
          :disabled="currentPage === 1"
      >
        Previous Page
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
          :disabled="this.totalPages <= 1"
      >
        Next Page
      </button>
    </div>
    <span class="pagination-count" ref="count">Showing results {{countTxt}} </span>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      isPrevDisabled: true,
      isNextDisabled: true,
    };
  },
  computed:{
    ...mapState({
      currentPage: state => state.currentPage,
      totalPages: state => state.totalPages,
      countTxt: state => state.countTxt
    }),
  },
  methods: {
    processNext() {
      this.$parent.goToNextPage();
    },
    processPrev() {
      this.$parent.goToLastPage();
    },
  },
};
</script>
<style scoped>
</style>
