import { createRouter, createWebHistory } from 'vue-router'
import Posts from "../views/Posts.vue"
import Login from "../views/Login.vue"
import AddPost from "../views/AddPost.vue"

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
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
