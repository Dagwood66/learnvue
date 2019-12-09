<template>
    <button type="submit">
        <slot>默认内容</slot>
    </button>
</template>

<script>
    export default {
        name: "SlotFallbackContentSubmitButton",
        data() {
            return {};
        }
    }
</script>