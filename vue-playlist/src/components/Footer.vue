
<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>
<script>
export default {
    props:["title"],
    data(){
        return{
            copyright: 'Copyright 2017 Vue Ninjas'
        }
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