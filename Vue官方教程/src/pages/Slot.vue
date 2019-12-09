<template>
    <div>
        <pre>
            组件无Slot,闭合标签内的内容会被丢弃
        </pre>
        <div>
            <slot-link url="/profile">
                <span>My Span</span>
            </slot-link>
        </div>
        <div>
            <slot-link-no-slot url="/profile">
                <span>My Span</span>
            </slot-link-no-slot>
        </div>
    </div>
</template>

<script>
    import SlotLink from "../components/SlotLink";
    import SlotLinkNoSlot from "../components/SlotLinkNoSlot";

    export default {
        components: {SlotLinkNoSlot, SlotLink},
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>
