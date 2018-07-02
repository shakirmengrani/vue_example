<template>
    <div id="add-blog">
        <form-helper>
            <div slot="form-header">
                <h3>Add New Blog</h3>
            </div>
            <div slot="form-fields">
                <input type="text" v-model="title" placeholder="Title">
                <textarea v-model="content"></textarea>
            </div>
            <div slot="form-controls">
                <button @click.prevent="handleSubmit">Post</button>
            </div>
        </form-helper>
        <div id="content-preview">
            <h3>{{title}}</h3>
            <p>{{content}}</p>
        </div>
    </div>
</template>
<script>
import Form from '../helpers/Form.vue';
export default {
    components: {
        "formHelper": Form
    },
    data(){
        return {
            title: "", content: ""
        }
    }
}
</script>
<style scoped>
#add-blog{
    background-color: whitesmoke;
}
#add-blog h3{
    text-align: center;
}
input[type=text], textarea{
    margin: 0px auto 5px auto;
    display: block;
    width: auto;
}
</style>
