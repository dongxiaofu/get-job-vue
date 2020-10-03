<template>
    <div id="page-footer">
        <div class="inner">
            <div class="service-terms">
                <dl class="service-term">
                    <dt>企业服务</dt>
                    <dd>
                        <a href="#">职位搜索</a>
                        <a href="#">新闻资讯</a>
                        <a href="#">BOSS直聘APP</a>
                    </dd>
                </dl>
                <dl class="service-term">
                    <dt>使用与帮助</dt>
                    <dd>
                        <a href="#">用户协议与隐私政策</a>
                        <a href="#">防骗指南</a>
                        <a href="#">职位发布规则</a>
                        <a href="#">使用与帮助</a>
                    </dd>
                </dl>
                <dl class="service-term">
                    <dt>联系BOSS直聘</dt>
                    <dd>
                        <p>北京华品博睿网络技术有限公司</p>
                        <p>公司地址 北京市朝阳区太阳宫中路8号冠捷大厦302</p>
                        <p>联系电话 010-84150633</p>
                        <p>违法和不良信息举报邮箱 jubao@kanzhun.com</p>
                    </dd>
                </dl>
            </div>
            <div class="footer-right-social">
                <img id="footer-logo" src="/static/JobDetail/footer-logo.png">
                <p>企业服务热线和举报投诉 400 065 5799</p>
                <p>工作日 8:00 - 22:00</p>
                <p>休息日 9:30 - 18:30</p>
                <p class="footer-icon">
                    <a href="#"><i class="icon-weibo"></i></a>
                    <a href="#" class="wechat-qr">
                        <i class="icon-wechat"></i>
                        <img class="icon-wechat-img" src="/static/JobDetail/we_chat_qr.jpg">
                    </a>
                    <a href="#"><i class="icon-boss"></i></a>
                </p>
            </div>
            <div class="clear"></div>
            <div class="copyright">
                <span>Copyright © 2020 BOSS直聘 </span>
                <span>BOSS直聘京ICP备14013441号-5</span>
                <span>京ICP证150923号</span>
                <span>京网文[2020]0399-066 号</span>
                <span>
                    <a href="#"><img src="/static/JobDetail/icon-badge-1.png">电子营业执照</a>
                </span>
                <span>
                    <a href="#"><img src="/static/JobDetail/icon-beian.png">京公网安备11010502032801</a>
                </span>
                <span><a href="#">首都网警</a></span>
                <span><a href="#">人力资源服务许可证 </a></span>
                <span><a href="#">网上有害信息举报专区</a></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myFooter"
    }
</script>

<style scoped>
    /*footer*/


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

    .inner {
        /*margin-left: 100px;*/
        /*margin-right: 100px;*/
        margin: 0px auto;
        /*max-width: 1184px;*/
        width: 1184px;
        position: relative;
    }


    .clear {
        clear: both;
    }

    #page-footer {
        margin-top: 30px;
        height: 250px;
        width: 100%;
    }

    .service-term {
        width: 192px;
        float: left;
    }

    .service-term dd {
        margin-top: 20px;
    }

    .service-term dd a {
        display: block;
        width: 100%;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
    }

    .service-term dd p {
        display: block;
        width: 100%;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        white-space: nowrap; /*一行文字过长，但是不换行显示*/
    }

    .copyright {
        margin-top: 20px;
        font-size: 12px;
        max-width: 960px;
        /*color: #eeeff3;*/
        /*background-color: #fff;*/
    }

    .copyright span {
        margin-right: 15px;
        display: inline-block;
        margin-top: 10px;
    }

    #page-footer a:hover {
        color: #5dd5c8;
    }

    .police {
        margin-top: 8px;
    }

    .police span {
        margin-right: 20px;
        font-size: 13px;
    }

    .footer-right-wrapper {
        text-align: right;
    }

    .footer-right-wrapper .tel p {
        line-height: 30px;
    }

    .footer-icon {
        margin-top: 20px;
        padding: 0px;
    }

    .icon-weibo, .icon-wechat, .icon-boss {
        width: 42px;
        height: 42px;
        border-radius: 100%;
        margin-left: 30px;

        border: 1px solid #9fa4b0;
    }

    .icon-weibo {
        background-position: 10px -190px;
    }

    .icon-wechat {
        background-position: 10px -254px;
    }

    .footer-icon .icon-wechat-img {
        display: none;
        position: absolute;
        width: 100px;
        height: 100px;
        top: -150px;
        right: -25px;

        background-color: #fff;
    }

    .footer-icon .wechat-qr {
        position: relative;
    }

    /*CSS元素改变子元素属性*/
    a.wechat-qr:hover img {
        display: inline-block;
    }

    .icon-boss {
        background-position: 6px -313px;
    }

    /*.copyright span img无效*/
    .copyright span img {
        width: 16px;
        height: 16px;
        margin-right: 4px;
        margin-bottom: -3px;
    }

    .footer-right-social {
        position: absolute;
        right: 0px;
        top: 0px;
        text-align: right;
    }

    /*.footer-right-social img {覆盖面太广了，其他的图片样式设置无效*/
    #footer-logo {
        width: 88px;
        height: 16px;
        margin: 6px 0px 10px 0px;
    }

    .footer-right-social p {
        font-size: 12px;
        text-align: right;
        padding: 0px;
        height: 24px;
        line-height: 24px;
    }

    .icon-arrow-down, .btn-search, .icon-arrow-right,
    .icon-arrow-left, .icon-weibo, .icon-boss, .icon-wechat,
    .icon-vip, .search-btn {
        display: inline-block;
        background-image: url("footer/icons.png");
        background-repeat: no-repeat;
    }
</style>
