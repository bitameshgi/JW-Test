<template>
  <v-container fluid>
    <Navbar/>
    <v-progress-circular
        v-if="this.loading"
        color="primary"
        indeterminate
        style="width: 100%"
    ></v-progress-circular>

    <DetailHeader ref="header" :visible="!loading"/>
    <DetailCard ref="detailsCard" :visible="!loading"/>
  </v-container>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import DetailHeader from '../components/DetailHeader.vue'
import DetailCard from '../components/DetailCard.vue'
import axios from "axios";
import store from "@/store";
import {mapState} from "vuex";

export default {
  components: {
    Navbar,
    DetailHeader,
    DetailCard
  },
  data() {
    return {
    }
  },
  mounted() {
    const id = this.$route.params.id;
    store.dispatch("DetailsPage",id)
    store.dispatch("GetCast",id)
  },
  computed:{
    ...mapState({
      loading: state => state.detailsLoading
    }),
  },
  methods: {},
}
</script>
