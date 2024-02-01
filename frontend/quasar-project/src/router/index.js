// src/router/index.js

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from 'pages/Home.vue';
import Projetos from 'pages/Projetos.vue';
import Tarefas from 'pages/Tarefas.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/projetos',
    component: Projetos,
  },
  {
    path: '/tarefas',
    component: Tarefas,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
