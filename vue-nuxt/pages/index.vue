<template>
    <b-container>
        <img style="width: 180px; margin-bottom:15px" alt="logo" class="image" src="@/assets/logo.png" />
        <h3>Make your business digitalize</h3>
        <p>We're professionally digitalizing your businesses and build growth</p>
        <p><router-link to="/contact">Contact us</router-link> along with your business problems</p>
        <hr />
        <b-row v-for="row in services" v-bind:key="row.id">
            <b-col sm="10" md="4" v-for="col in row" v-bind:key="col.id">
                <b-card v-bind:title=col.title v-bind:img-src=col.img img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                    <p class="card-text">
                    {{col.description}}
                    </p>
                    <router-link to="/contact" class="btn btn-link">Contact</router-link>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import pageMixin from '@/mixins/pageMixins'
export default {
    name: "home",
    mixins:[pageMixin],
    data: function(){
      return {
        head:{
            title: "Home"
        },

        services: [
            [
              {title: "Web Development", description:"ExpressJs, Django, Laravel, Codeignator, Wordpress, Opencart", img: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg"},
              {title: "Software Development", description: "NodeJs, Python, Java, Golang, .Net", img: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg"},
              {title: "Mobile Development", description: "Android, IOS, swift, Cross Platform", img: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg"}
            ],
            [
              {title: "Electronic", description: "Arduino, Raspberry Pi & serial with python, Golang, .net", img: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg"},
              {title: "DevOps", description: "Google, AWS, Digital Ocean", img: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg"},
              {title: "Graphics", description: "Logo Creator, UI Design, Video Edit", img: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg"}
            ]
        ]
      };
    },
    created: function(){
        
    },
}
</script>

<style scoped>

</style>
