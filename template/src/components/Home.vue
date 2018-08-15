<template>
    <b-container>
        <form-layout title="" description="Fill the form along with your problem about business we will provide you best solutions"> 
            <div slot="body">
                <b-row class="pb-2">
                    <b-col>
                        <b-form-input v-model="data.name" type="text" placeholder="Enter your name"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="pb-2">
                    <b-col>
                        <b-form-input v-model="data.email" type="email" placeholder="Enter your email address"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="pb-2">
                    <b-col>
                        <b-form-input v-model="data.company" type="text" placeholder="Enter your company name"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="pb-2">
                    <b-col>
                        <b-form-input v-model="data.company_profile" type="text" placeholder="Enter your company profile link"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="pb-2">
                    <b-col>
                        <b-form-textarea v-model="data.message" placeholder="Enter something" :rows="3" :max-rows="6"></b-form-textarea>
                    </b-col>
                </b-row>
            </div>
            <div slot="buttons">
                <b-button variant="success">Send</b-button>
            </div>
        </form-layout>
    </b-container>
</template>
<script>
import FormHelper from './helpers/form.vue'
export default {
    name: "home",
    components: {
        formLayout: FormHelper
    },
    data: function(){
        return {
            data: {
                name: "", 
                email: "",
                company: "",
                company_profile: "",
                message: ""
            },
        };
    },
    created: function(){
        
    }, 
}
</script>

<style scoped>

</style>
