<template>
    <div>
        {{ $route.params.name }}
    </div>    
</template>
<script>
export default {
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
