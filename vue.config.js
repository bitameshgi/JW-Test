const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
//   devServer: {
//     proxy: "https://api.themoviedb.org/3/",
// },
  transpileDependencies: [
    'vuetify'
  ]
})
