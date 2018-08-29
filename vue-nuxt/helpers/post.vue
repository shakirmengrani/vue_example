<template>
    <div>
        <slot name="head">
            <h1>{{title}}</h1>
        </slot>
        <slot name="body"></slot>
    </div>
</template>

<script>
export default {
    name: "post-helper",
    props:{
        title: {type: String, required: true}
    }
}
</script>

<style>

</style>
