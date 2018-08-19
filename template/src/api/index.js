import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = process.env.BASE_URL
Vue.http.headers.common['Authorization'] = process.env.AUTH_KEY;
Vue.http.headers.common['Content-Type'] = "application/json";
export default Vue.http