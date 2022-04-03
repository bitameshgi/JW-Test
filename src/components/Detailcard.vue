<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-img
            lazy-src="../assets/images/placeholder.jpg"
            :src="baseUrl.concat(items.poster_path)"
            style="width: 90%; height: 100%"
            class="details-image"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>

        </v-img>
      </v-col>
      <v-col cols="8" style="padding: 50px 20px">
        <div class="d-flex">
          <p class="film-title">Budget</p>
          <v-spacer></v-spacer>
          <p class="film-text">{{ formatMoney(items.budget) }}</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Revenue</p>
          <v-spacer></v-spacer>
          <p class="film-text">{{ formatMoney(items.revenue) }}</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Release Date</p>
          <v-spacer></v-spacer>
          <p class="film-text">{{ items.release_date }}</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Runtime</p>
          <v-spacer></v-spacer>
          <p class="film-text">{{ items.runtime }} Min</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Score</p>
          <v-spacer></v-spacer>
          <p class="film-text">
            <span style="display: flex">
              ({{ items.vote_count }})
              <v-rating
                :value=" items.vote_average"
                length="10"
                background-color="indigo lighten-3"
                color="orange"
                small
            ></v-rating>
            </span></p>
        </div>
        <div class="d-flex">
          <p class="film-title">Genres</p>
          <v-spacer></v-spacer>
          <p class="film-text">
            {{
              items.genres.map(function (item) {
                return item['name'];
              }).join(" &#8226; ")
            }}
          </p>
        </div>
        <div class="d-flex">
          <p class="film-title">IMDB Link</p>
          <v-spacer></v-spacer>
          <a :href="imdbBaseUrl+items.imdb_id" rel="nofollow" target="_blank" class="film-link">Link</a>
        </div>
        <div class="d-flex">
          <p class="film-title">Homepage</p>
          <v-spacer></v-spacer>
          <a :href="items.homepage" rel="nofollow" target="_blank" class="film-link">Link</a>
        </div>
      </v-col>
    </v-row>

    <p class="film-description">
      {{items.overview}}
    </p>
    <div class="Credit">
      <p>Credit:</p>
      <span>{{credits.map(function (item) {
        return item['name'];
      }).join(" &#8226; ")}}</span>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  data() {
    return {
      posterUrl: '',
      baseUrl: 'https://image.tmdb.org/t/p/original/',
      imdbBaseUrl: 'https://www.imdb.com/title/'
    };
  },
  computed:{
    ...mapState({
      items: state => state.DetailsInfo,
      credits: state => state.Cast
    }),
  },
  methods: {
    formatMoney(num) {
      if (num === undefined || num === '' || num === 0)
        return 'not reported';
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").concat(" $");
    },
  }
};
</script>
<style scoped>
</style>
