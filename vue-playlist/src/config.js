import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Login from './components/forms/Login.vue'
import Register from './components/forms/Register.vue'

import rainbow from './directives/Rainbow';
import snippets from './filters/Snippets';

export const config = {
    components: [
      {name: "app-header", component: Header},
      {name: "app-footer", component: Footer},
    ],
    directives: [
      {name: "rainbow", component: rainbow}
    ],
  
    filters: [
      {name: "snippets", component: snippets}
    ]
};


export const routes = [
  {path: "/login", component: Login},
  {path: "/register", component: Register},
];
