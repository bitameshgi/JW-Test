<template>
  <v-container>
    <v-row class="search-box">
      <v-col cols="2">
        <div class="box-items mt-3">
          <p class="me-5 my-3">Search by release date:</p>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="box-items mt-3">
          <v-menu
              ref="menuFrom"
              v-model="menuFrom"
              :close-on-content-click="false"
              :return-value.sync="dateFrom"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="dateFrom"
                  label="From Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  solo
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="dateFrom"
                no-title
                scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="menuFrom = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="$refs.menuFrom.save(dateFrom)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="box-items mt-3">
          <v-menu
              ref="menuTo"
              v-model="menuTo"
              :close-on-content-click="false"
              :return-value.sync="dateTo"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="dateTo"
                  label="From To"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  solo
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="dateTo"
                no-title
                scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="menuTo = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="$refs.menuTo.save(dateTo)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="search-btn my-auto">
          <v-btn rounded color="#549df2" @click="performSearch()" dark> Search</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import store from "@/store";

export default {
  name: "Search",
  data() {
    return {
      menuFrom: false,
      menuTo: false,
      dateFrom: '',
      dateTo: ''
    }
  },
  methods:{
    performSearch() {
      this.$parent.currentPage = 1;
      console.log(this.dateTo);
      store.dispatch("HomePage", [1, this.dateFrom, this.dateTo])
    }
  }

};
</script>
<style scoped>

</style>
