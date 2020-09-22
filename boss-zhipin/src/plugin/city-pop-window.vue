<template>
    <!--搜索框地址弹出-->
    <div id="dialog-wrap-detail" style="display: none" ref="cityBox">
        <!--css实现关闭弹窗-->
        <!--<div id="dialog-container-close" tabindex="-1">-->
        <!--<i></i>-->
        <!--</div>-->
        <div id="dialog-container-layer"></div>
        <div id="dialog-container">
            <div id="dialog-container-close" v-on:click="closeCityBox">
                <i></i>
            </div>
            <div id="dialog-con">
                <div id="dialog-title"><h3>请选择城市</h3></div>
                <div id="city">
                    <ul id="section-province">
                        <li>ABCDE</li>
                        <li>FGHIJ</li>
                        <li class="active">KLMN</li>
                        <li>PQRST</li>
                        <li>WXYZ</li>
                    </ul>
                    <ul id="section-city">
                        <li class="classify-city">
                            <div class="city-title">A</div>
                            <ul class="city-main">
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                            </ul>
                        </li>
                        <li class="classify-city">
                            <div class="city-title">A</div>
                            <ul class="city-main">
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                            </ul>
                        </li>
                        <li class="classify-city">
                            <div class="city-title">A</div>
                            <ul class="city-main">
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                            </ul>
                        </li>
                        <li class="classify-city">
                            <div class="city-title">A</div>
                            <ul class="city-main">
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                            </ul>
                        </li>
                        <li class="classify-city">
                            <div class="city-title">A</div>
                            <ul class="city-main">
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                                <li class="city">鞍山</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "city-pop-window",

        methods: {
            // 搜索框地址--关闭
            closeCityBox: function () {
                this.$refs.cityBox.style.display = 'none'
            },
            // 搜索框地址
            switchCityBox: function () {
                if (this.$refs.cityBox.style.display == 'none') {
                    this.$refs.cityBox.style.display = 'block'
                } else {
                    // this.$refs.cityBox.style.display == 'none'
                    this.closeCityBox();
                }
            },

        }
    }
</script>

<style scoped>

    a {
        text-decoration: none;
        color: #414a60;
    }

    div, ul, li, a, p, dl, dd, span, img, dt {
        margin: 0px;
        padding: 0px;
    }

    ul {
        list-style: none;
    }

    /*搜索框地址弹出*/
    #dialog-wrap-detail {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1000;
        top: 0;
        left: 0;

        /*border: 1px solid red;*/
    }

    #dialog-container-layer {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1001;
        top: 0;
        left: 0;

        /*background-color: rgba(151, 154, 145, 0.51);*/

        background: rgba(37, 40, 48, .7); /*这组数值，效果更好*/

        opacity: 1.2;
    }

    #dialog-container {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 786px;
        height: 527px;
        z-index: 1002;
        margin: -243px 0 0 -393px;

        /*background-color: rgba(151, 154, 145, 0.51);*/
        /*opacity: 1.2;*/

        /*border: 1px solid red;*/
        background-color: #fff;
    }

    #dialog-container-close {
        width: 16px;
        height: 16px;

        position: absolute;
        right: 30px;
        top: 14px;

        cursor: pointer;
    }

    /*能使父元素隐藏，但失去焦点后，父元素又出现了，不好用*/
    /*#dialog-container-close:focus-within ~ div{*/
    /*display: none;*/
    /*}*/

    #dialog-container-close i::before {
        content: "\00D7";
        font-size: 21px;
    }

    #dialog-con {
        margin-top: 20px;
    }

    #dialog-con #city {
        padding: 10px 30px;
    }

    #dialog-con #dialog-title {
        padding-left: 30px;
        padding-right: 30px;
    }

    #dialog-con #city #section-province {
        width: 100%;
        height: 30px;


        background-color: #f9fafb;

        border: 1px solid #f9fafb;
    }

    #dialog-con #city #section-province li {
        width: 131px;
        height: 39px;
        line-height: 39px;
        text-align: center;

        float: left;

        cursor: pointer;

        font-size: 14px;

        padding: unset;

        position: relative;

        /*padding-left: 10px;*/
        /*padding-right: 10px;*/

        /*border: 1px solid green;*/
    }

    #dialog-con #city #section-province li.active {
        background-color: #f9fafb;
        color: #5dd5c8;
    }

    /*实现下划线。用border不能实现下划线与文字等长。*/
    #dialog-con #city #section-province li.active::before {
        content: "";
        position: absolute;
        top: unset;
        bottom: 0px;

        width: 35%;
        height: 2px;
        background-color: #5dd5c8;
    }


    #dialog-con #city #section-province li:hover {
        /*border-bottom: 1px solid #f9fafb;*/
        color: #5dd5c8;
    }

    #section-city {
        margin: 20px 0px; /*没这句，这个元素只会显示左边很少一部分。原因不知*/
        height: 378px;
        overflow: auto; /*与下面这句好像效果相同*/
        /*overflow-x: hidden;*/
        /*overflow-y: scroll;*/
    }

    #section-city .classify-city {
        width: 100%;
        /*height: 100%;*/

        /*border: 1px solid red;*/
    }

    #section-city .city-title {
        float: left;
        width: 11.2%;
        font-size: 15px;
        /*font-weight: 500;*/
        color: #5dd5c8;
        /*width: 40px;*/
        /*height: auto;*/
    }

    #section-city .city-main {
        float: left;
        width: 88.8%;
        /*width: 600px;!*746px;*!*/
        /*height: auto;*/
    }

    #section-city .city-main li {
        width: 100px;
        height: 30px;
        line-height: 30px;
        float: left;
        margin-bottom: 10px;
        font-size: 14px;
        cursor: pointer;

        /*border: 1px solid red;*/
    }

    #section-city .city-main li:hover {
        color: #5dd5c8;
    }
</style>
