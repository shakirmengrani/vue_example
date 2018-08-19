// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './api'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
/* eslint-disable no-new */
let app
firebase.initializeApp(process.env.BACKEND_KEYS)
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    user.getIdToken(true).then((token) => {
      console.log(token);
    });
  }
  if (!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App />'
    })
  }
})




