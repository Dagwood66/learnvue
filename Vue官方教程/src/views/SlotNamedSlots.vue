<template>
    <div>
        <pre>
            多个插槽
                slot 元素有一个特殊的特性：name
                这个特性可以用来定义额外的插槽
            一个不带 name 的 slot 出口会带有隐含的名字“default”。
            写法
                v-slot:slotName
        </pre>
        <slot-named-slots-base-layout>
            <template v-slot:header>
                <h1>Here might be a page title</h1>
            </template>

            <p>A paragraph for the main content.</p>
            <p>And another one.</p>

            <template v-slot:footer>
                <p>Here's some contact info</p>
            </template>
        </slot-named-slots-base-layout>
    </div>
</template>

<script>

    import SlotNamedSlotsBaseLayout from "../components/SlotNamedSlotsBaseLayout";

    export default {
        components: {SlotNamedSlotsBaseLayout},
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>
