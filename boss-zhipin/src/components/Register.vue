<template>
    <div class="wrap">
        <div id="head">
            <div id="tel">
                客户服务热线: 400 065 5799
            </div>
        </div>
        <div id="content">
            <div id="side-bar">
                <a href="#" id="logo">
                    <img src="/static/Register/logo.png">
                    <div>
                        <p>找工作</p>
                        <p>我要跟老板谈</p>
                    </div>
                </a>
                <ul>
                    <li>
                        <i class="icon1"></i>
                        <span>沟通</span>
                        <span>在线职位及时选</span>
                    </li>
                    <li>
                        <i class="icon2"></i>
                        <span>任性选</span>
                        <span>各大行业职位任你选</span>
                    </li>
                </ul>
            </div>
            <div id="main-bar">
                <div class="inner-box">
                    <div class="purpos-row">
                        <span>我要工作</span>
                        <span class="cur">我要招聘</span>
                    </div>
                    <div class="form-row row-select">
                    <span class="dropdown-select">
                        <i class="icon-select-arrow"></i>
                        <em class="text-select">+86</em>
                    </span>
                        <span class="ipt-wrap">
                        <i class="icon-sign-phone"></i>
                        <input type="text" class="ipt ipt-phone" placeholder="手机号2"/>
                    </span>
                        <div class="dropdown-menu">
                            <ul>
                                <li>
                                    <span class="num">+86</span>
                                    中国大陆
                                </li>
                                <li>
                                    <span class="num">+852</span>
                                    中国香港
                                </li>
                                <li>
                                    <span class="num">+853</span>
                                    中国澳门
                                </li>
                                <li>
                                    <span class="num">+863</span>
                                    中国台湾
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-code">
                            <div class="geek-btn">
                                <span class="geetest_radar_tip_content">点击按钮进行验证</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                    <span class="ipt-wrap">
                        <i class="icon-sign-sms"></i>
                        <input class="ipt ipt-sms" type="text" placeholder="短信验证码"/>
                        <button class="btn-sms">发送验证码</button>
                    </span>
                    </div>
                    <div class="form-btn">
                        <button class="btn-register">注册</button>
                    </div>
                    <div class="text-tip">
                        <input type="checkbox">我已同意
                        <a href="#" class="user-agreement">用户协议及隐私政策</a>
                        <a href="#" class="link-sign-in">直接登录</a>
                    </div>
                </div>
                <div class="btn-switch">
                    <div class="switch-tip">
                        微信极速注册
                        <i class="icon-triangle"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                bodyBgImage: 'url(' + require('../../static/Register/newbg.png') + ')'
            }
        },
        methods: {
            // 设置body属性
            setBodyBackGround() {
                document.body.style.width = '100%'
                document.body.style.height = '100%'
                document.body.style.minWidth = '1184px'
                document.body.style.margin = '0';
                document.body.style.fontSize = '14px'
                document.body.style.color = '#414a60'
                document.body.style.backgroundSize = '100%'
                document.body.style.backgroundImage = this.bodyBgImage
                document.body.style.backgroundColor = '#5dd5c8'
                document.body.style.backgroundRepeat = 'no-repeat'
            },
            // 清除背景图
            clearBodyBackGround() {
                document.body.style.backgroundImage = ''
            }
        },
        mounted() {
            // 进来的时候调用添加
            this.setBodyBackGround()
        },
        beforeDestroy() {
            // 离开页面的时候清除
            this.clearBodyBackGround()
        }
    }
</script>

<style scoped>
    @import "../../static/Register/index.css";
</style>
