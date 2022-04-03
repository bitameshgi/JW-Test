<template>
  <v-container>
    <div class="search-box">
      <!-- <v-col> -->
      <div class="search-btn">
        <router-link to="/" class="back-btn">
          <v-btn
              rounded
              color="#549df2"
              dark
              class="back-btn"
          >
            <i class="fa fa-arrow-left me-1 my-2" aria-hidden="true"></i>
            Back
          </v-btn>
        </router-link>
      </div>
      <div class="my-3 ml-5">
        <p class="card-text">{{ movieTitle }}</p>
        <p class="card-text2">{{ tagline }}</p>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {

  data() {
    return {
      movieTitle: '',
      tagline: '',
    }
  }
}
</script>
<style scoped>

</style>
