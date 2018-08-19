<template>
    <b-container>
        <!-- <b-row v-for="row, r_key in data" :key=r_key>
            <b-col v-for="col, c_key in row" :key=c_key>
                <b-card :title=col.title :img-src=col.img img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                    <p class="card-text">
                    {{col.description}}
                    </p>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </b-col>
        </b-row> -->
        <b-row>
            <b-col class="coming">
                Coming Soon...
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
  name: "gallery",
  components: {},
  data: function() {
    return {
        data: [
            
        ]
    };
  },
  created: function() {}
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');
.coming{
    font-family: 'Indie Flower', cursive;
    font-size: 5em;
}
</style>
