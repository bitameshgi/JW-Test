<template>
  <v-container fluid>
    <Navbar/>
    <Search ref="search"/>
    <FilmsList ref="filmCards"/>
    <Pagination ref="pagination"/>
  </v-container>
</template>

<script>
import Search from "../components/Search.vue";
import FilmsList from "../components/FilmsList.vue";
import Navbar from "../components/Navbar.vue";
import Pagination from "../components/Pagination.vue";
import store from "../store"
import {mapState} from "vuex";

export default {
  name: "Home",
  data() {
    return {
      currentPage: 1,
    }
  },
  components: {
    Search,
    FilmsList,
    Navbar,
    Pagination,
  },
  computed:{
    ...mapState({
      films: state => state.HomeInfo,
    })
  },
  mounted() {
    store.dispatch("HomePage",[ this.currentPage , '' , ''])
  },
  methods: {
    goToNextPage() {
      const search = this.$refs.search;
      this.currentPage = this.currentPage + 1;
      store.dispatch("HomePage", [this.currentPage,search.dateFrom, search.dateTo])
    },
    goToLastPage() {
      const search = this.$refs.search;
      this.currentPage -= 1;
      store.dispatch("HomePage", [this.currentPage, search.dateFrom, search.dateTo])
    },
  }
};
</script>
