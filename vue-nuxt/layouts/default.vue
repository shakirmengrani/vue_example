<template>
  <b-container>
    <b-navbar toggleable="md" type="dark" variant="danger" fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand>Internet For Everything</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
            <nuxt-link class="nav-link" to="/what">What?</nuxt-link>
            <nuxt-link class="nav-link" to="/post/shakir">Post</nuxt-link>
            <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
            <b-nav-item href="https://www.instagram.com/internetforeverything" target="_blank"><i class="fab fa-instagram"></i></b-nav-item>
            <b-nav-item href="https://www.fb.com/internetforeverything" target="_blank"><i class="fab fa-facebook"></i></b-nav-item>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt/>
    <timer />
  </b-container>
</template>
<script>
import Timer from '@/components/Timer'
export default {
  components:{
    timer: Timer
  }
}
</script>