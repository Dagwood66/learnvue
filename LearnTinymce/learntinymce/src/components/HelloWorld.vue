<template>
    <div class="hello">
        <div style="height:20vh;">
            da
        </div>
        <tinymce-editor api-key="0aqksr5a4ncyc2rxlhpk0mjuy7txu7muxzl7c0jnci83wnow" inline :init="{}" :initial-value="'点我编辑'" :toolbar="'undo redo | bold italic underline'"></tinymce-editor>
    </div>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';

    export default {
        name: 'HelloWorld',
        components: {
            'tinymce-editor': Editor // <- Important part
        },
        props: {
            msg: String
        },
        data: function () {
            return {
                op: {
                    inline: true,
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
