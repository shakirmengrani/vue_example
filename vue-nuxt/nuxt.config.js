module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Internet For Everything - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Modules
  */

  modules:['bootstrap-vue/nuxt', ['@nuxtjs/google-adsense', {id: 'ca-pub-5899203281808039', pageLevelAds: true, test: true}]],

  /*
  ** Plugins
  */
  plugins:[{src: './plugins/firebase.js', ssr: true}],
  
  router:{
    middleware: 'auth'
  },
  /*
  ** Customize the progress bar color
  */
  // loading: { color: 'red' },
loading: './components/loading.vue',
  env:{
    BASE_URL: "https://us-central1-internet-for-everything.cloudfunctions.net/api/",
    AUTH_KEY: "6bc7b47461fb114ee4beafa93b94dadf09e4e223491251337b40cef1a2a4075ca9328a11529961433da66f054a3ed50b17ed6e50d3d0844356ba6b",
    BACKEND_KEYS: {
      apiKey: "AIzaSyCPaQ8letiHDA8qVVM13xZltNOjV33oMaU",
      authDomain: "internet-for-everything.firebaseapp.com",
      databaseURL: "https://internet-for-everything.firebaseio.com",
      projectId: "internet-for-everything",
      storageBucket: "internet-for-everything.appspot.com",
      messagingSenderId: "934257112366"
    }
  },
  /*
  ** css files
  */
  css:['./css/main.css'],
  /*
  ** Render configuration
  */
  Render:{
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor:['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

