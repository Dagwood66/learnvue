<template>
    <a :href="url" class="nav-link">
        有Slot:
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "SlotLink",
        props: ["url"],
        data() {
            return {};
        }
    }
</script>