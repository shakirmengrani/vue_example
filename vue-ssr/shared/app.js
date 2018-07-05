// Step 1: Create a Vue instance
const Vue = require('vue')

const app = new Vue({
    data: {
        url: "asd"
    },
    template: `<div>The visited URL is: {{ url }}</div>`
})

module.exports = app