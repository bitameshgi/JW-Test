<template>
  <v-toolbar class="hidden-xs-and-down">
    <v-toolbar-title class="text-white">Movies</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="btn_content" v-for="item in menu" :key="item.title" :to="item.path">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data() {
    return {

      menu: [
        { title: "Home", path: "/", icon: "home" },
        { title: "Sign Up", path: "/signup", icon: "face" },
        { title: "Sign In", path: "/signin", icon: "lock_open" },
      ],
    };
  },
};
</script>
<style scoped>

</style>
