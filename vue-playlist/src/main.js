import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { config, routes } from "./config"

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


config.directives.forEach(function(item){
  Vue.directive(item.name, item.component);
});

config.filters.forEach(function(item){
  Vue.filter(item.name, item.component);
});

config.components.forEach(function(item){
  Vue.component(item.name, item.component);
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
