import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        HomeInfo: {},
        GenreInfo: {},
        totalPages: 0,
        currentPage: 1,
        countTxt: '',

        DetailsInfo: {},
        Cast: {},
        detailsLoading: false,

    },
    getters: {},
    mutations: {
        HomePage: (state, HomeInfo) => {
            console.log(HomeInfo[0].data)
            console.log(HomeInfo[1].data)
            const genres = {};

            HomeInfo[0].data.genres.map((element) => {
                genres[element.id] = element.name;
            });

            const films = HomeInfo[1].data.results;
            // const genreNames = [];
            films.map((element) => {
                const genreNames = [];
                element.genre_ids.map((e) => {
                    genreNames.push(genres[e]);
                });
                element.genres = genreNames;
            });
            const count = films.length;
            const page = HomeInfo[1].data.page;
            state.countTxt = (page - 1) * count + 1 + "-" + page * count;

            state.totalPages = HomeInfo[1].total_pages
            state.currentPage = page
            state.GenreInfo = HomeInfo[0].data
            state.HomeInfo = films
        },
        DetailsPage: (state, DetailsInfo) => {
            console.log(DetailsInfo.data)
            state.DetailsInfo = DetailsInfo.data

        },
        GetCast: (state, CastInfo) => {
            console.log(CastInfo.data)
            const cast =CastInfo.data.cast;
            function compare( a, b ) {
                if ( a.popularity < b.popularity ){
                    return -1;
                }
                if ( a.popularity > b.popularity ){
                    return 1;
                }
                return 0;
            }

            cast.sort( compare );

            state.Cast =cast.splice(0,10);

        },
        DetailsPageLoading: (state, value) => {
            state.detailsLoading = value
        },
    },
    actions: {
        HomePage: async ({commit}, data) => {

            const page = data[0];
            const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57";
            let HOME_URL = "https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&page=" + page;

            const gte = data[1];
            const lte = data[2];

            const hasGteDate = gte !== '';
            const hasLteDate = lte !== '';

            if (hasGteDate || hasLteDate)
                HOME_URL = HOME_URL + '&with_release_type=AND';

            if (hasGteDate) {
                HOME_URL = HOME_URL + '&&release_date.gte=' + gte;
            }

            if (hasLteDate) {
                HOME_URL = HOME_URL + '&release_date.lte=' + lte;
            }

            const home = await axios.all([
                axios.get(GENRE_URL),
                axios.get(HOME_URL),
            ])

            commit("HomePage", home)

        },
        DetailsPage: async ({commit}, id) => {

            commit("DetailsPageLoading", true)
            const URL = "https://api.themoviedb.org/3/movie/" +
                id +
                "?api_key=f62f750b70a8ef11dad44670cfb6aa57";
            const details = await axios.get(URL);
            commit("DetailsPage", details)
            commit("DetailsPageLoading", false)
        },
        GetCast: async ({commit}, id) => {
            const URL = "https://api.themoviedb.org/3/movie/" +
                id +
                "/credits?api_key=f62f750b70a8ef11dad44670cfb6aa57";
            const cast = await axios.get(URL);
            commit("GetCast", cast)
        }
    }
    ,
    modules: {}
})
