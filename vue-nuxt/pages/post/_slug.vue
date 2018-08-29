<template>
    <post-helper v-bind:title="data.title">
        <div slot="body" v-html="data.body"></div>
    </post-helper>
</template>
<script>
import pageMixin from '../../mixins/pageMixins'
import postHelper from '../../helpers/post.vue'
import {db} from '../../services/firebase'

export default {
    mixins:[pageMixin],
    components:{
        "post-helper": postHelper
    },
    asyncData({params}){
        return new Promise((resolve, reject) => {
            db.ref("posts").child(params.slug).once("value").then((snap) => {
                let d = snap.val();
                resolve({
                    data: {
                        title: d["title"],
                        body: d["body"]
                    },
                    head:{
                        title: d["title"],
                        meta: [
                            {hid: "keywords", name: "keywords", content: d["head"]["keywords"]}
                        ]
                    }
                });
            });
        });
    },
    created(){
    }
}
</script>
<style scoped>

</style>
