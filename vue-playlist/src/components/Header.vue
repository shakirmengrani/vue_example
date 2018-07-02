<template>
    <header v-on:click="changeTitle">
        <h1>{{ title }}</h1>
    </header>
</template>
<script>
import { bus } from '../constants';
export default {
    props:{
        title: {
            type: String,
            required: true
        }
    },
    data(){
        return{}
    },
    methods:{
        changeTitle:function(){
            // this.title = "Wooo change again";
            bus.$emit("titleChange", "Wooo change again");
            // this.$emit("changeTitle", "Wooo");
        }
    }
    
}
</script>
<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>