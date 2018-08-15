<template>
    <div>
        <slot name="head">
            <h3>{{title}}</h3>
        </slot>
        <slot name="content"></slot>
        <slot name="foot"></slot>
    </div>
</template>

<script>
export default {
    name: "page-helper",
    props:{
        title:{type: String, required: true}
    }    
}
</script>

<style scoped>

</style>
