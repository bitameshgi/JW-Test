<template>

  <v-card class="mx-auto" max-width="330" outlined>
    <!-- <v-list-item> -->
      <router-link class="card-link" :to="{name:'CardDetail' ,params:{id:filmItem.id} }" >
    <v-row>
      <v-col cols="6">
        <v-img class="film-image" lazy-src="../assets/images/placeholder.jpg"
               :src="baseUrl+filmItem.poster_path">
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
      <v-col cols="6" class="my-2" style="position: relative;padding-left:0;">
        <!-- <v-list-item-content> -->
        <span class="card-title">{{
            filmItem.title
          }}
        </span>
        <div class="film-card-details">
          <div class="date">
            <i class="fa fa-calendar-o me-2" aria-hidden="true"></i>
            <span>{{ filmItem.release_date }}</span>
          </div>
          <div class="movie-list">
            {{ filmItem.genres.join(" &#8226; ") }}

          </div>
        </div>

      </v-col>
    </v-row>
      </router-link>
  </v-card>
</template>
<script>
export default {
  props: {
    filmItem: Object,
  },
  data() {
    return {
      baseUrl: 'https://image.tmdb.org/t/p/w500/'
    };
  },
};
</script>
<style scoped>

</style>
