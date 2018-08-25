<template>
    <div>
        {{ $route.params }}
        <button @click.prevent="pin">Pin</button>
    </div>    
</template>
<script>
export default {
    methods:{
        pin: function(e){
            alert("P");
        }
    },
    head(){
        return {
            title: this.$route.params.id,
            meta:[
                {hid: "keywords", name: "keywords", content: "SEO, Hello, master"}
            ]
        }
    }
}
</script>
<style scoped>

</style>
