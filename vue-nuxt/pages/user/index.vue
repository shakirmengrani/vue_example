<template>
    <b-container>
        <b-row>
            <b-col>
                <b-btn variant="danger" @click.prevent="logout">Logout</b-btn>
            </b-col>
        </b-row>
    </b-container>    
</template>
<script>
import pageMixin from '../../mixins/pageMixins'
export default {
    mixins:[pageMixin],
    meta: {
        requireAuth: true
    },
    methods:{
        logout: function(){
            this.signout()
        }
    }    
}
</script>
<style>

</style>
