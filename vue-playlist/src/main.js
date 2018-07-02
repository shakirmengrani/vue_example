import Vue from 'vue'
import App from './App.vue'
import { config } from "./config"

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
  render: h => h(App)
});
