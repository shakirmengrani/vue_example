<template>
    <div>
        {{ $route.params }} - {{title}}
        <button @click.prevent="pin">Pin</button>
    </div>    
</template>
<script>
import pageMixin from '@/mixins/pageMixins'
export default {
    mixins:[pageMixin],
    methods:{
        pin: function(e){
            alert("P");
        }
    },
    data(){
        return {
            title: ""
        }
    },
    asyncData(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve({
                    head:{
                        title: "Shakir",
                        meta: [
                            {hid: "keywords", name: "keywords", content: "shakir Mengrani"}
                        ]
                    }
                });
            }, 5000);
        })
    },
    created(){
        new Promise((resolve, reject) => {
            setTimeout(() => {
                this.title = "Shakir"
            }, 5000)
        })
    }
}
</script>
<style scoped>

</style>
