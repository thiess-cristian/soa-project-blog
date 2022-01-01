import { createRouter, createWebHistory } from 'vue-router'
import Posts from "../views/Posts.vue"
import Login from "../views/Login.vue"
import AddPost from "../views/AddPost.vue"
import SignUp from "../views/SignUp.vue"
import Home from "../views/Home.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign_up',
    name: 'Sign up',
    component: SignUp
  },
  {
    path: '/add_post',
    name: 'AddPost',
    component: AddPost
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
