<template>
  <v-container>
    <v-row class="search-box">
      <v-col cols="6">
        <div class="box-items mt-3">
          <p class="me-5 my-3">Search by release date:</p>

          <v-text-field solo></v-text-field>
        </div>
      </v-col>
      <v-col>
        <div class="search-btn">
          <v-btn rounded color="#549df2" dark> Search </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Search",
};
</script>
<style scoped>

</style>