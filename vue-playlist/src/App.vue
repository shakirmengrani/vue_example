<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>   
    <!-- <h1>{{msg}}</h1>
    <div>{{greeting()}}</div>
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <button @click="component = 'loginForm'">Login</button>
    <button @click="component = 'registerForm'">Register</button>
    <button @click="component = 'blogForm'">Blog</button>
    <ninja v-bind:my-ninjas="n">
      <span slot="prefix">Pagal</span>
      <span slot="suffix">Kutta</span>
    </ninja> -->
    <router-view></router-view>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import ninjas from './components/Ninja.vue'
import loginForm from './components/forms/Login.vue'
import registerForm from './components/forms/Register.vue'
import blogForm from './components/forms/Blog.vue'
export default {
  components: {
    'loginForm': loginForm,
    'registerForm': registerForm,
    'blogForm': blogForm,
    'ninja': ninjas
  },
  data: function() {
    return {
      component: 'loginForm',
      msg: 'Welcome to Your Vue.js App',
      n: [
        {id:1, name: "Shakir Mengrani", skills: "Golang, Js, Python", show: false},
        {id:2, name: "Shakir Mengrani", skills: "Golang, Js, Python", show: false},
        {id:3, name: "Shakir Mengrani", skills: "Golang, Js, Python", show: false},
        {id:4, name: "Shakir Mengrani", skills: "Golang, Js, Python", show: false},
        {id:5, name: "Shakir Mengrani", skills: "Golang, Js, Python", show: false},
        {id:6, name: "Shakir Mengrani", skills: "Golang, Js, Python", show: false},
        {id:7, name: "Shakir Mengrani", skills: "Golang, Js, Python", show: false},
        {id:8, name: "Shakir Mengrani", skills: "Golang, Js, Python", show: false},
        {id:9, name: "Shakir Mengrani", skills: "Golang, Js, Python", show: false},
      ],
      title: "This is my title"
    }
  },
  methods: {
    greeting: function(){
      return "Hello World"
    },
    updateTitle: function(val){
      this.title = val
    }
  }
}
</script>

<style>
  body{
    margin: 0px auto;
  }
</style>
