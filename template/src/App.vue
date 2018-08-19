<template>
  <div id="app">
    <!-- <img style="width: 180px" alt="logo" class="image" src="./assets/logo.png" /> -->
    <page title="Internet For Everything">
      <router-view slot="content"></router-view>
    </page>
  </div>
</template>

<script>
import Page from './components/helpers/page.vue'
export default {
  name: 'App',
  components:{
    page: Page
  },
  data(){
    return {};
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
