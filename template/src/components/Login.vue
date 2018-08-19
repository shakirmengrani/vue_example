<template>
    <b-container>
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
    </b-container>
</template>
<script>
import apiBackend from './mixins/backend'
export default {
    name: "login",
    data: () => {
        return {
            email: "",
            password: ""
        };
    },
    methods:{
        login: function(){
            this.signin(this.email, this.password)
        }
    },
    mixins: [apiBackend]    
}
</script>
<style scoped>

</style>
