<template>
  <v-container>
    <v-row>
      <v-col
        xlg="3"
        lg="4"
        md="4"
        sm="6"
        xs="12"
        class="film-card"
        v-for="film in films"
        :key="film.id"
      >
        <FilmCard v-bind:filmItem="film" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import FilmCard from "./FilmCard.vue";
import axios from "axios";
export default {
  mounted() {
    this.getGeneres();
  },
  methods: {
    addRequest() {
      // this.loading = true;
      const URL =
        "https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&page="+this.currentPage;
      axios
        .get(
          URL
        )
        .then((response) => {
          this.films = response.data.results;

          this.films.map((element) => {
            var genereNames = [];
            element.genre_ids.map((e) => {
              genereNames.push(this.genres[e]);
            });
            element.generes = genereNames;
          });

          this.totalPages = response.data.total_pages;
          const pagination = this.$parent.$refs.pagination;

          pagination.processTotalPages(
            this.currentPage,
            this.totalPages,
            this.films.length
          );

          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          this.loading = false;
        });
    },

    getGeneres() {
      // this.loading = true;
      const URL =
        "https://api.themoviedb.org/3/genre/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57";
      console.log(URL);
      axios
        .get(URL)
        .then((response) => {
          const genres = response.data.genres;

          genres.map((element) => {
            this.genres[element.id] = element.name;
          });

          console.log(this.genres);
          this.addRequest();
        })
        .catch((error) => {
          console.log(error.message);
          this.loading = false;
        });
    },
    goToNextPage() {
      this.currentPage = this.currentPage+1;
      this.addRequest();
    },
    goToLastPage() {
      this.currentPage -= 1;
      this.addRequest();
    },
  },
  data() {
    return {
      genres: {},
      totalPages: 0,
      currentPage: 1,
      films: [],
    };
  },
  components: {
    FilmCard,
  },
};
</script>
<style >
</style>