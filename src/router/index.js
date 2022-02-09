import { createRouter, createWebHistory } from 'vue-router';

import Card from "../components/Card";
import Blog from "../components/Blog";

const routes = [
  {path: '/', name: 'Blog', component: Blog},
  {path: '/post:id', name: 'Post', component: Card}
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
