<template>
    <div>
        <slot name="head">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </slot>
        <slot name="body"></slot>
        <slot name="buttons"></slot>
        <slot name="list"></slot>
        <slot name="foot"></slot>
    </div>
</template>

<script>
export default {
    name: "form-helper",
    props:{
        title:{type: String, required: true},
        description :{required: false}
    }
}
</script>

<style>

</style>
