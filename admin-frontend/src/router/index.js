import { createRouter, createWebHistory } from 'vue-router'
import Posts from "../views/Posts.vue"
import Login from "../views/Login.vue"
import AddPost from "../views/AddPost.vue"
import SignUp from "../views/SignUp.vue"
import Home from "../views/Home.vue"

import store from "../store"
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
    component: AddPost,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    meta: {
      requireLogin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
/*
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
*/
export default router
