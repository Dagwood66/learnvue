<template>
    <div class="home">
        <ul>
            <li v-for="item in 10">
                <button v-l-clipboard="text+item">复制</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                text: "初始化",
            }
        },
        mounted() {
            setTimeout(() => {
                console.log("重置值");
                this.text = "测试5秒-";
            }, 5000);

            setTimeout(() => {
                console.log("重置值");
                this.text = "测试10秒-";
            }, 10000);
        }
    }
</script>
