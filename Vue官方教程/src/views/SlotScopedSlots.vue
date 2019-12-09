<template>
    <div>
        <pre>
            组件中的Slot上绑定要传出的参数
            组件外接收 v-slot:default="obj"

            插槽缩写 #default="obj"
        </pre>
        <div>
            <slot-current-user>
                <template v-slot:default="slotProps">
                    {{slotProps}}
                </template>
            </slot-current-user>
        </div>
        <div>
            <!-- 独占默认插槽 -->
            <slot-current-user v-slot:default="slotProps">
                {{slotProps}}
            </slot-current-user>
        </div>
        <div>
            <!-- 插槽缩写 -->
            <slot-current-user #default="slotProps">
                {{slotProps}}
            </slot-current-user>
        </div>
    </div>
</template>

<script>
    import SlotCurrentUser from "../components/SlotCurrentUser";

    export default {
        components: {SlotCurrentUser},
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>
