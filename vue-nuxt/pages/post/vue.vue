<template>
<h1>Why Vue?</h1>
<p>As we know about Angular and React javascript frameworks adventages and disadventages and how can we resolving that frameworks errors and what outputs will return after compiling.<p>
<p>Vue framework has a lot of flexiblities and much faster than both of these framework as i mentioned before. Vue is much simpler than Angular and React in term of API and UI. It's really high performace rather than other. If we go into it's depth we got some similar things from both frameworks.</p>
If we talking React over Vue we have React like lifecycle but in different way likewise talking about Angular over Vue we have filters, directives and mixins. If we say that Vue is the mixture of these both framework it be should be right.
Vue Vs Angular
There are serveral reasons to use Vue instead of Angular.
Vue is much more easier and flexible than Angluar. It is just presentation layer where as Angular provides us MVC pattren and it's much harder too maintain their code structure as well as error handling. 
This gives us more oppotunities for combining with other libraries but their no responsiblities for more architectural solutions. for example we want to use with any other 3rd party module from out of the box and usuallay consider that we build an application using an external module.
Angular is much slower than Vue because it has dirty checking that becomes slower when using more than 1 observers but Vue uses transparent observer tracking system.
React Vs Vue
It's slightly similar from it that both supports reactive and compnent presentational layer of components but internally implementaions in different way. React is based on virtual DOM in memory and the data is largely unchanged and DOM changes based on data changed which breaks performance. Whereas in Vue, on the contrary, the data is changed by default and changed it through events and it's works directly with DOM.
Problem with React DOM, it's really tricky when we need to control DOM own selves. For example If we wants animation in time, this can becomes heahach. On that front Vue is more flexible. 

Getting start
firstly we install vue-cli from npmjs.org then following blow command for creating a vue project.
vue-cli init webpack <folder_name>
Dive Inn
Components
On this keyword our brain respond us about React but it's from it in different way. 
Let's digging components
In Vue Components have three parts
1. template
2. script
3 . style
Template
In this section we add some html code while using it's template engine
Script
we must have declared JSON object as export to  default along with data property
`export default {
	name: "component_name",
	data: () => {
		return {};
	},
}`

Style
We can define style tag as usual or just add scoped keyword too. Scoped keyword makes style rules locally and without it rules for globally.
Component Structure
file should save as .vue extension
`<template>
	<!-- add some html here in this tag -->
</template>
<script>
// we can add it's life cycle also
export default {
	name: "component_name",
	data: () => {
		return {};
	},
}
</script>
<style>
/* globally */
</style>`
OR
`<style scoped>
	/* locally */
</style>`

Let's talk about Vue entry point
After making some comonents we must mount on html dom which code is blow
`import Vue from 'vue'
import App from './App'
new Vue({
      el: '#app',
      components: { App },
      template: '<App />'
})`

Whereas 
el is for element where we render our comopnents.
components where we register compnent that compnent we want to render.
template we add some html and define component name as tag.
</template>
<script>
export default {

}
</script>