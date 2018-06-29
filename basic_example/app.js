Vue.component('AlertBox', {
    props: ["title", "message"],
    data: function(){
        return {}
    },
    template: `<div>{{title}} | {{message}}</div>`
});



var one = new Vue({
    el: "#app",
    data: {
        name: "Shakir",
        search: "",
        age: 26,
        x:0,y:0,
        message: "Hello World, Hello User"
    },
    methods: {

        click: function(){
            two.title = "hello";
            alert("You clicked " + this.$refs.input.value);
        },
        updateXY: function(evt){
            this.x = evt.offsetX;
            this.y = evt.offsetY;
        },
        add :function(){
            this.age++;
        },
        substract: function(){
            this.age--;
        },
        greet: function() {
            return "Hello, " + this.name;
        }
    },
    watch: {
        search: function(val){
            console.log(val);
        }
    },
    computed: {
        trimMessage: function(){
            console.log(this.message.length > 10 ? this.message.substr(0, 10-1) + "&hellip;": this.message);
            return this.message.length > 10 ? this.message.substr(0, 10-1) + "&hellip;": this.message
        },
        git: {
            get: function(){
                return this.name;
            },
            set: function(val){
                console.log(this.name + " " + val);
                return this.name + " " + val;
            }
        }

    }
})

var two = new Vue({
    el: "#myapp",
    data: function(){
        return {
            title: "welcome"
        }
    },
    template: `<h1>{{ title }}</h1>`
})