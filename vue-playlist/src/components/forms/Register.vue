<template>
    <form-helper>
        <div slot="form-header">Register </div>
        <div slot="form-fields">
          <input type="text" />
        </div>
        <div slot="form-controls">
          <input type="submit" @click.prevent="handleSubmit" />
        </div>
    </form-helper>
</template>
<script>
import Form from "../helpers/Form.vue"

export default {
    components: {
        'FormHelper': Form
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
    
</style>