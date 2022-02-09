import { createRouter, createWebHistory } from 'vue-router';

import Blog from "../components/Blog";
import Post from "../components/Post";

const routes = [
  {path: '/', name: 'blog', component: Blog},
  {path: '/post/:id', name: 'post', component: Post}
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
