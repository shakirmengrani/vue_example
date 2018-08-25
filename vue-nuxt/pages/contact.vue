<template>
    <b-container>
        <img style="width: 180px" alt="logo" class="image" src="@/assets/logo.png" />
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
                <b-button variant="success" @click.prevent="send">Send</b-button>
            </div>
        </form-layout>
    </b-container>
</template>
<script>
import FormHelper from '@/helpers/form.vue'
import pageMixin from '@/mixins/pageMixins'
export default {
    name: "contact",
    mixins:[pageMixin],
    components: {
        formLayout: FormHelper
    },
    data: function(){
        return {
            head:{
                title: "Contact Us"
            },
            data: {
                name: "", 
                email: "",
                company: "",
                company_profile: "",
                message: ""
            },
        };
    },

    methods:{
        isUrl: function isUrl(link){
            let temp_a = document.createElement("a")
            temp_a.href = link;
            temp_a.remove();
            return true;
        },
        isEmail: function isEmail(email){
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        send: function(){
            let error_list = []
            if(!this.data["name"].length > 3){
                error_list.push("Please enter name");    
            }
            if(!this.data["company"].length > 5){
                error_list.push("Please enter company name");    
            }
            if (!this.isEmail(this.data["email"])){
                error_list.push("Please enter correct email addrerss");    
            }
            if (!this.isUrl(this.data["company_profile"])){
                error_list.push("Please enter correct company profile link");
            }
            if(!this.data["message"].length > 5){
                error_list.push("Please enter message");    
            }
            if(!error_list.length > 0){
                let text = "Name: " + this.data.name + "\n";
                text += "email: " + this.data.email + "\n";
                text += "company: " + this.data.company + "\n";
                text += "profile: " + this.data.company_profile + "\n";
                text += "message: \n\t" + this.data.message + "\n";
                // this.sendMail({
                //                 "to": "shakir.mengrani@gmail.com",
                //                 "subject": "Received someone's message",
                //                 "text": text
                //             }).then((resp) => {
                //                 alert("Your message has been emailed");
                //                 this.data = {name: "", email: "",company: "",company_profile: "",message: ""};
                //             }).catch((err) => {
                //                 alert("something went wrong !");
                //             });
            }else{
                console.log(error_list);
            }
        }
    },
    created: function(){
        
    }, 
}
</script>

<style scoped>

</style>
