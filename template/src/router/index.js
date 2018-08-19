import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: Vue.component("Contact", () => import("@/components/Contact"))
    },{
      path: '/gallery',
      name: 'gallery',
      component: Vue.component("Gallery", () => import("@/components/Gallery"))
    },{
      path: '/what',
      name: 'what',
      component: Vue.component("What", () => import("@/components/What"))
    },{
      path: '/login',
      name: 'login',
      component: Vue.component("Login", () => import("@/components/Login"))
    },{
      path: '/somebody',
      name: 'somebody',
      component: Vue.component("Gallery", () => import("@/components/Gallery")),
      meta:{
        requiresAuth: true
      }
    },{
      path: '/',
      name: 'Home',
      component: Vue.component("Home", () => import("@/components/Home"))
    }
  ],
  mode: 'hash'
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let isAuth = to.matched.some(record => record.meta.requiresAuth)
  if (isAuth && !user) next("login")
  next()
});
router.afterEach((to, from) => {
  // page impression
})
export default router