<template>
    <div>
        <pre>
            有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，
            它只会在没有提供内容的时候被渲染。
        </pre>
        <div>
            <slot-fallback-content-submit-button></slot-fallback-content-submit-button>
        </div>
        <div>
            <slot-fallback-content-submit-button>自定义内容</slot-fallback-content-submit-button>
        </div>
    </div>
</template>

<script>
    import SlotLink from "../components/SlotLink";
    import SlotLinkNoSlot from "../components/SlotLinkNoSlot";
    import SlotFallbackContentSubmitButton from "../components/SlotFallbackContentSubmitButton";

    export default {
        components: {SlotFallbackContentSubmitButton, SlotLinkNoSlot, SlotLink},
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>
