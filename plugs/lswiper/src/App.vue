<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    body, div, ul, li {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    img {
        vertical-align: top;
        width: 100%;
    }
</style>
