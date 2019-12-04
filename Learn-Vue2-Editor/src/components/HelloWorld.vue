<template>
    <div class="hello">
        <vue-editor></vue-editor>
    </div>
</template>

<script>
    import {VueEditor} from "vue2-editor"

    export default {
        name: 'HelloWorld',
        components: {
            VueEditor
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
</style>
