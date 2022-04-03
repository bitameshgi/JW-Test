<template>
  <v-container>
    <v-row v-if="films.length<=0">
      <v-col
          xl="3"
          lg="4"
          md="4"
          sm="6"
          xs="12"
          v-for="index in 20"
          :key="index"
          class="film-card"
      >
        <v-sheet
            class="pa-3"
        >
          <v-skeleton-loader
              class="mx-auto"
              max-width="330"
              type="card"
          ></v-skeleton-loader>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col
          xl="3"
          lg="4"
          md="4"
          sm="6"
          xs="12"
          class="film-card"
          v-for="film in films"
          :key="film.id"
      >
        <FilmCard v-bind:filmItem="film"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import FilmCard from "./FilmCard.vue";
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState({
      films: state => state.HomeInfo
    }),
  },
  methods:{

  },
  data() {
    return {
      // genres: {},
      // totalPages: 0,
      // currentPage: 1,
      // films: [],
    };
  },
  components: {
    FilmCard,
  },
};
</script>
<style>
</style>
