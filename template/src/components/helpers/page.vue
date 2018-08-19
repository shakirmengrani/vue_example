<template>
    <div>
        <slot name="head">
            <b-navbar toggleable="md" type="dark" variant="danger" fixed="top">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                <b-navbar-brand>{{title}}</b-navbar-brand>
                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <router-link class="nav-link" to="/">Home</router-link>
                        <router-link class="nav-link" to="/what">What?</router-link>
                        <router-link class="nav-link" to="/gallery">Gallery</router-link>
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                        <b-nav-item href="https://www.instagram.com/internetforeverything" target="_blank"><i class="fab fa-instagram"></i></b-nav-item>
                        <b-nav-item href="https://www.fb.com/internetforeverything" target="_blank"><i class="fab fa-facebook"></i></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </slot>
        <slot style="margin-top: 15px" name="content">
            
        </slot>
        <slot name="foot"></slot>
    </div>
</template>

<script>
export default {
    name: "page-helper",
    props:{
        title:{type: String, required: true}
    }    
}
</script>

<style scoped>

</style>
