<template>
    <div id="page-header">
        <div class="inner home-inner">
            <div id="logo">
                <a href="#">
                    <span>BOSS直聘</span></a>
            </div>
            <div id="nav">
                <ul>
                    <li><a href="#">首页</a></li>
                    <li><router-link :to="{path: 'job-list'}">职位</router-link></li>
                    <li><a class="nav-school-new" href="#">校园</a></li>
                    <li><a href="#">公司</a></li>
                    <li><a href="#">APP</a></li>
                    <li><a href="#">资讯</a></li>
                </ul>
            </div>
            <div id="user-nav">
                <div class="btns">
                    <a class="link-sign-resume" href="#">上传简历</a>
                    <a class="link-sign-resume user-nav-find-job" href="#">我要找工作</a>
                    <a class="user-nav-employ" href="#">我要招聘</a>
                    <router-link :to="{path: 'register'}" class="btn btn-outline">注册</router-link>
                    <!--<a class="btn btn-outline" href="#">注册</a>-->
                    <!--<a class="btn btn-outline" href="#">登录</a>-->
                    <router-link :to="{path: 'login'}" class="btn btn-outline">登录</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-header"
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
    #page-header {
        background: #202329;
        width: 100%;
        height: 49px;
        position: relative;
    }

    #page-header a {
        color: #fff;
    }

    #page-header a:hover {
        color: #00c2b3;
    }

    #page-header a:active {
        color: #00c2b3;
    }

    .inner {
        /*margin-left: 100px;*/
        /*margin-right: 100px;*/
        margin: 0px auto;
        /*max-width: 1184px;*/
        width: 1184px;
        position: relative;
    }

    #logo {
        float: left;
        height: 49px;
        line-height: 49px;
        color: #414a60;
    }

    #logo a {
        display: block;
        width: 110px;
        height: 36px;
        background: url("./header/logo-2x.png") no-repeat 5px 14px;
        background-size: 105px 19px;
    }

    #logo span {
        display: none;
    }

    #nav, #user-nav {
        float: left;
        height: 49px;
        margin-left: 15px;
        line-height: 49px; /*为什么会有上下居中功能呢？*/
        font-size: 0;

    }

    #nav, #user-nav a {

    }

    #user-nav {
        float: right;
    }

    #nav ul, #user-nav ul {
        display: inline-block;
        vertical-align: top;
    }


    #user-nav btns {
        position: relative;
        display: inline-block;
        vertical-align: top;
        margin: 0px 14px;
    }

    #nav li, #user-nav li {
        position: relative;
        display: inline-block;
        font-size: 14px;
        margin: 0px 14px;
    }

    .nav-school-new::after {
        position: absolute;
        content: 'New';
        color: #fff;
        background: #ef505e;
        font-size: 12px;
        height: 14px;
        width: 30px;
        line-height: 13px;
        text-align: center;
        top: 8px;
        right: -24px;
        border-radius: 7px;
    }

    .user-nav-find-job::after {
        content: "hot";
        background-color: #ef505e;
        position: absolute;
        color: #fff;
        font-size: 12px;
        height: 14px;
        line-height: 13px;
        width: 30px;
        text-align: center;
        top: 8px;
        right: -24px;
        border-radius: 7px;
    }

    .btn {
        display: inline-block;
        min-width: 112px; /*有无此项，效果一样。那么，这个指令，存在的意义是什么？*/
        border: 1px solid #00c2b3;
    }

    #user-nav .btns .btn-outline {
        border-radius: 15px;
        height: 23px;
        min-width: 0px;
        line-height: 23px;
        text-align: center;
        font-size: 13px;
        padding: 0px 9px 0px 11px;
        margin-left: 17px;
    }

    .btn-outline {
        background-color: #202329;
    }

    .link-sign-resume {
        display: inline-block;
        position: relative;
        height: 23px;
        min-width: 0px;
        margin-left: 20px;
        font-size: 14px;
    }

    .user-nav-employ {
        display: inline-block;
        position: relative;
        height: 23px;
        min-width: 0px;
        margin-left: 25px;
        font-size: 14px;
    }
</style>
