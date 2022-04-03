import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomePageView.vue'
import CardDetail from '../views/MovieDetailsView.vue'
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/CardDetail/:id',
    name: 'CardDetail',
    component: CardDetail
  },

  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },

]

const router = new VueRouter({
  routes
})

export default router
