
<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>
<script>
import {bus} from '../constants';
export default {
    props:{
        title: {
            type: String, required: true
        }
    },
    data(){
        return{
            copyright: 'Copyright 2017 Vue Ninjas'
        }
    },
    created(){
        bus.$on("titleChange", (data)=>{
            this.title = data;
        });
    }
}
</script>
<style scoped>
    footer{
        background: #222;
        padding: 6px;
    }
    p{
        color: lightgreen;
        text-align: center;
    }
</style>