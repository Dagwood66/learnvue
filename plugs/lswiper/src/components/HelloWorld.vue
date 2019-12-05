<template>
    <div class="parent" ref="parent">
        <div class="uls" ref="uls">
            <ul class="img_ul" ref="img_ul">
                <li><img src="../assets/banner1.jpg" alt=""/></li>
                <li><img src="../assets/banner2.jpg" alt=""/></li>
                <li><img src="../assets/banner3.jpg" alt=""/></li>
                <li><img src="../assets/banner4.jpg" alt=""/></li>
                <li><img src="../assets/banner5.jpg" alt=""/></li>
            </ul>
            <ul class='litCir_ul' ref='litCir_ul'></ul>
        </div>
        <div class="buttons" ref="buttons">
            <span class="left" ref="left">&lt;</span>
            <span class="right" ref="right">&gt;</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                $parent: null,
                $img_ul: null,
                $litCir_ul: null,
                $buttons: null,
                itemWidth: 0,
                itemLength: 0,
                currentIndex: 0,
            }
        },
        mounted() {
            this.$parent = this.$refs.parent;
            this.$img_ul = this.$refs.img_ul;
            this.$litCir_ul = this.$refs.litCir_ul;
            this.$buttons = this.$refs.buttons;

            this.itemWidth = this.$parent.offsetWidth;
            this.itemLength = this.$img_ul.children.length;

            this.makePoint();
        },
        methods: {
            roll(index) {
                this.$img_ul.style.left = -this.itemWidth * index + "px";
            },
            makePoint() {
                for (let i = 0; i < this.itemLength; i++) {
                    let element = document.createElement("li");
                    element.className = "quiet";
                    this.$litCir_ul.appendChild(element);
                }
                this.$litCir_ul.children[0].className = "active";
                for (let i = 0; i < this.$litCir_ul.children.length; i++) {
                    let _this = this;
                    this.$litCir_ul.children[i].onclick = function () {
                        _this.resetPointClass();
                        _this.$litCir_ul.children[i].className = "active";
                        _this.roll(i);
                    }
                }
            },
            resetPointClass() {
                for (let i = 0; i < this.$litCir_ul.children.length; i++) {
                    this.$litCir_ul.children[i].className = "quiet";
                }
            }
        }
    }
</script>

<style lang="less">
    .parent {
        position: relative;
        padding: 0;
        width: 375px;
        height: 150px;
    }

    .uls {
        position: relative;
        margin: 0;
        padding: 0;
        width: 375px;
        height: 150px;
        overflow: hidden;
    }

    .img_ul {
        position: absolute;
        margin: 0;
        padding: 0;
        left: 0;
        top: 0;
        width: calc(375 * 6px); /*多留出一张图片的宽度！*/
        list-style: none;
    }

    .img_ul li {
        float: left;
        margin: 0;
        padding: 0;
        width: 375px;
        height: 150px;
    }

    .img_ul li img {
        width: 375px;
        height: 150px;
    }

    .litCir_ul {
        position: absolute;
        margin: 0;
        padding: 0;
        right: 10px;
        bottom: 10px;
        list-style: none;
    }

    .litCir_ul li {
        margin: 0;
        padding: 0;
        float: left;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
    }

    li.active {
        background-color: white;
    }

    li.quiet {
        background-color: #1e90ff;
    }

    .buttons {
        margin: 0;
        padding: 0;
        display: none;
    }

    .buttons span {
        position: absolute;
        width: 40px;
        height: 40px;
        top: 50%;
        margin-top: -20px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        font-family: Simsun;
        font-size: 30px;
        border: 1px solid #fff;
        opacity: 0.3;
        cursor: pointer;
        color: #fff;
        background: black;
    }

    .left {
        left: 5px;
    }

    .right {
        left: 100%;
        margin-left: -45px;
    }
</style>
