<template>
  <div id="ninjas">
    <ul>
        <li v-for="n1 in myNinjas" :key="n1.id" @click="n1.show = !n1.show">
            <h2>{{n1.name}}</h2>
            <h3 v-show="n1.show">{{n1.skills}}</h3>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        myNinjas: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {}
    }
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
