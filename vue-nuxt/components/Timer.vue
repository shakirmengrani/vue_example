<template>
    <div>Seconds: {{title}}</div>
</template>
<script>
export default {
    data(){
        return {
            title: 0
        }
    },
    created(){  
        setInterval(() => {
            this.title++
        }, 1000);
    }
}
</script>
