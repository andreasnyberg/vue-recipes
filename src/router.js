import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Recipe from './components/Recipe.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/recipe/:id',
      component: Recipe,
    },
  ],
});
