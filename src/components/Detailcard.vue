<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-img
          :src="baseUrl+items.backdrop_path"
          style="width: 90%; height: 100%"
          class="details-image"
        ></v-img>
      </v-col>
      <v-col cols="8" style="padding: 50px 20px">
        <div class="d-flex">
          <p class="film-title">Budget</p>
          <v-spacer></v-spacer>
          <p class="film-text">{{items.budget}}</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Revenue</p>
          <v-spacer></v-spacer>
          <p class="film-text">{{items.revenue}}</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Release Date</p>
          <v-spacer></v-spacer>
          <p class="film-text">{{items.release_date}}</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Runtime</p>
          <v-spacer></v-spacer>
          <p class="film-text">{{items.runtime}}</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Score</p>
          <v-spacer></v-spacer>
          <p class="film-text">7.9 (23563 votes)</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Genres</p>
          <v-spacer></v-spacer>
          <p class="film-text">Action, Science Fiction, Adventure</p>
        </div>
        <div class="d-flex">
          <p class="film-title">IMDB Link</p>
          <v-spacer></v-spacer>
          <router-link to="/" class="film-link">Link</router-link>
        </div>
        <div class="d-flex">
          <p class="film-title">Homepage</p>
          <v-spacer></v-spacer>
          <router-link to="/" class="film-link">Link</router-link>
        </div>
      </v-col>
    </v-row>

    <p class="film-description">
      Light years from Earth, 26 years after being abducted, Peter Quil finds
      himself the prime target of a manhunt after discovering an orb wanted by
      Ronan the Accuser.
    </p>
    <div class="Credit">
      <p>Credit:</p>
      <span>Zoe Saldanna. Vin Diesel , chris Pratt</span>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
         baseUrl:'https://image.tmdb.org/t/p/w500/'
    };
  },
  props: ["id"],
  mounted() {this.addRequest();},
  methods: {
    addRequest() {
      const id = this.$route.params.id;
      const URL =
        "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=f62f750b70a8ef11dad44670cfb6aa57";
      axios.get(URL).then((response) => {
         this.items = response.data;
        // const data = response.data;
       
        // console.log(Response.data);
            console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          this.loading = false;
       
       
      });
    },
  },
};
</script>
<style scoped>
</style>