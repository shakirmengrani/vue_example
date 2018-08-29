<template>
    <b-container>
        <form-layout title="Login" description="">
            <section slot="body">
                <b-row class="pb-2">
                    <b-col>
                        <b-input-group>
                            <b-form-input type="email" v-model="email" placeholder="Email Address" />
                        </b-input-group>
                    </b-col>
                </b-row>
                <b-row class="pb-2">
                    <b-col>
                        <b-input-group>
                            <b-form-input type="password" v-model="password" placeholder="Password" />
                        </b-input-group>
                    </b-col>
                </b-row>
                <b-row class="pb-2">
                    <b-col>
                        <b-input-group>
                            <b-button variant="danger" block @click.prevent="login">Login</b-button>
                        </b-input-group>
                    </b-col>
                </b-row>    
            </section>    
        </form-layout>
    </b-container>
</template>
<script>
import FormHelper from '@/helpers/form.vue'
import pageMixin from '@/mixins/pageMixins'
export default {
    name: "login",
    mixins: [pageMixin],
    components: {
        formLayout: FormHelper
    },
    data: () => {
        return {
            email: "",
            password: ""
        };
    },
    methods:{
        login: function(){
            this.sigin({
                provider: "email",
                email: this.email, 
                password: this.password
            })
        }
    },

}
</script>
<style scoped>

</style>
