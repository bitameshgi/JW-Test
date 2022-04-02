<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-img
          src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
          style="width: 90%; height: 100%"
          class="details-image"
        ></v-img>
      </v-col>
      <v-col cols="8" style="padding: 50px 20px;">
        <div class="d-flex">
          <p class="film-title">Budget</p>
          <v-spacer></v-spacer>
          <p class="film-text">$170'000'000</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Revenue</p>
          <v-spacer></v-spacer>
          <p class="film-text">$772'776'600</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Release Date</p>
          <v-spacer></v-spacer>
          <p class="film-text">2014-07-30</p>
        </div>
        <div class="d-flex">
          <p class="film-title">Runtime</p>
          <v-spacer></v-spacer>
          <p class="film-text">2h 1m</p>
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
export default {};
</script>
<style scoped>
</style>