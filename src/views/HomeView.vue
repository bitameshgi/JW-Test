<template>
  <div>
    <Navbar />
    <Search />
    <Filmcards ref="filmCards" />
    <Pagination ref="pagination" />
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import Filmcards from "../components/Filmcards.vue";
import Navbar from "../components/Navbar.vue";
import Pagination from "../components/Pagination.vue";
export default {
  name: "Home",
  components: {
    Search,
    Filmcards,
    Navbar,
    Pagination,
  },
};
</script>
