<template>
    <span>
        <slot :user="user">
            {{user.lastName}}
        </slot>
    </span>
</template>

<script>
    export default {
        name: "SlotCurrentUser",
        props: ["url"],
        data() {
            return {
                user: {
                    lastName: "lastName"
                }
            };
        }
    }
</script>