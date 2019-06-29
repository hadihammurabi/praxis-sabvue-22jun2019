import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import (/*webpackChunkName: "about"*/'./views/About.vue'),
    },
    {
      path: '/toko',
      name: 'toko',
      component: () => import (/*webpackChunkName: "toko"*/'./views/Toko.vue'),
    },
    {
      path: '/gambar',
      name: 'gambar',
      component: () => import (/*webpackChunkName: "gambar"*/'./views/Gambar.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import (/*webpackChunkName: "form"*/'./views/Form.vue'),
    },
  ]
});

export default routes;

