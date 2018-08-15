<template>
  <div id="ninjas">
        {{ title }}
        <slot name="prefix"></slot>
        <ul>
            <li v-toChangeColor v-for="n1 in myNinjas" :key="n1.id" @click="n1.show = !n1.show">
                <h2 v-rainbow="owl">{{n1.name | toUpper}}</h2>
                <h3 v-show="n1.show">{{n1.skills | snippets}}</h3>
            </li>
        </ul>
        <slot name="suffix"></slot>
  </div>
</template>

<script>
import ninJaMixin from '../mixins/Ninja'
export default {
    beforeCreate(){

    },
    created(){

    },
    beforeMont(){

    },
    props: {
        myNinjas: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {
            owl: ""
        }
    },
    methods: {
        
    },
    watch: {

    },
    mounted(){

    },
    beforeUpdate(){

    },
    update(){

    },
    beforeDestroy(){

    },
    destroyed(){

    },
    mixins: [ninJaMixin]
}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
