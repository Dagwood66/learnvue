<template>
    <a :href="url" class="nav-link">
        无Slot:
    </a>
</template>

<script>
    export default {
        name: "SlotLinkNoSlot",
        props: ["url"],
        data() {
            return {};
        }
    }
</script>