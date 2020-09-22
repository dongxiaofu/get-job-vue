<template>
    <div>
        <div id="wrap">
            <Test></Test>
            <div id="header">
                <div class="inner home-inner">
                    <div id="logo">
                        <a href="#">
                            <span>BOSS直聘</span></a>
                    </div>
                    <div id="nav">
                        <ul>
                            <li><a href="#">首页</a></li>
                            <li><a href="#">职位</a></li>
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
                            <a class="btn btn-outline" href="#">注册</a>
                            <a class="btn btn-outline" href="#">登录</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="job-banner">
                <div class="inner">
                    <div class="banner-job-detail">
                        <div class="job-info">
                            <div class="job-status">{{job.job_status}}</div>
                            <div class="job-name">
                                {{job.title}}
                                <span class="salary">
                                    {{job.salary}}·{{job.salary_num}}
                                </span>
                            </div>
                            <p>
                                <a href="#">{{job.city}}</a>
                                <em class="dot"></em>
                                {{job.experience}}
                                <em class="dot"></em>
                                {{job.degree}}
                            </p>
                            <div class="tag-container">
                                <span class="tag" v-for="benefit in job.benefits">{{benefit}}</span>
                                <!--<span class="tag">五险一金</span>-->
                                <!--<span class="tag">年终奖</span>-->
                                <!--<span class="tag">带薪年假</span>-->
                                <!--<span class="tag">通讯补贴</span>-->
                                <!--<span class="tag">节日福利</span>-->
                            </div>
                        </div>
                        <div class="job-op">
                            <button class="contact" v-on:click="chat">立即沟通</button>
                            <a class="write-resume" href="#"><i></i>填写在线简历</a>
                            <a class="upload-resume" href="#"><i></i>上传简历附件</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="job-box">
                <div class="inner">
                    <div class="side-bar">
                        <div class="company-summary">
                            <h3>公司基本信息</h3>
                            <div class="company-info">
                                <a class="company-info-logo" href="#">
                                    <!--网络图片-->
                                    <img :src="job.company.logo">
                                </a>
                                <a class="company-info-name" href="#">
                                    {{job.company.name}}
                                </a>
                            </div>
                            <p>
                                <i class="icon-stage icon-company-sumary"></i>
                                {{job.company.stage}}
                            </p>
                            <p>
                                <i class="icon-scale icon-company-sumary"></i>
                                {{job.company.scale}}
                            </p>
                            <p>
                                <i class="icon-industry icon-company-sumary"></i>
                                {{job.company.industry}}
                            </p>
                            <p>
                                <i class="icon-net icon-company-sumary"></i>
                                {{job.company.net}}
                            </p>
                            <p class="upload-date">更新于：{{job.update_time}}</p>
                        </div>
                        <div class="history">
                            <div class="history-title-wapper">
                                <div class="history-title">看过的职位</div>
                                <!--<h3>看过的职位</h3>-->
                            </div>
                            <div class="history-list">
                                <ul>
                                    <li v-for="job in history_jobs">
                                        <router-link :to="{path:'job-detail', query:{job_id:job.job_id}}">
                                            <h4 class="title">
                                                {{job.title}}
                                                <span class="salary">{{job.salary}}·{{job.salary_num}}</span>
                                            </h4>
                                            <p>{{job.company.name}}</p>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="ads">
                            <ul>
                                <li><a href="#"> <img src="/static/JobDetail/pro-1.png"></a></li>
                                <li><a href="#"> <img src="/static/JobDetail/pro-2.png"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="job-detail">
                        <div class="detail-op">
                            <div class="btns">
                                <a href="javascript:;" v-on:click="switchMiniAppBox" style="cursor: pointer"
                                   ref="qrBtn"><i
                                        class="icon-wechat-qr"></i>微信扫码分享</a>
                                <a href="#"><i class="icon-like"></i>感兴趣</a>
                                <a href="javascript:;" v-on:click="showReportListBox"><i
                                        class="icon-report"></i>举报</a>
                                <div class="mini-app" ref="miniApp" style="display: none">
                                    <div class="mini-app-inner">
                                        <div class="arrow-up"></div>
                                        <div class="imgs">
                                            <img src="/static/JobDetail/tencent.jpg" class="company-icon">
                                            <img src="/static/JobDetail/qcodeC.png" class="qcodeC">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="avatar">
                                <img src="/static/JobDetail/avatar.png">
                                <div class="employer-name-title">
                                    <h3 class="name">
                                        {{job.employee.name}}
                                        <i class="icon-vip"></i>
                                    </h3>
                                    <p class="title">
                                        <span class="employee-title">{{job.employee.title}} &nbsp;</span>
                                        <span class="employee-status"> · {{job.employee.status}}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="detail-content">
                            <div class="job-desc">
                                <h3>职位描述</h3>
                                <div class="text">
                                    {{job.job_description}}
                                </div>
                            </div>
                            <div class="company-desc">
                                <h3>公司介绍</h3>
                                <div class="text">
                                    {{job.company.introduce}}
                                </div>
                            </div>
                            <div class="competition-desc">
                                <h3>竞争力分析</h3>
                                <div class="text">
                                    综合竞争力评估
                                </div>
                            </div>
                            <div class="business-desc">
                                <h3>工商信息</h3>
                                <div>
                                    <p>{{job.company.business}}</p>
                                </div>
                            </div>
                            <div class="work-address">
                                <h3>工作地址</h3>
                                <div>{{job.company.address}}</div>
                            </div>
                            <div class="related-job">
                                <div class="title">
                                    <span>看过该职位的人还看了</span>
                                    <a href="#">更多职位<i class="icon-arrow-right"></i></a>
                                    <router-link :to="{path:'job-list'}">
                                        更多职位<i class="icon-arrow-right"></i>
                                    </router-link>
                                </div>
                                <div class="more-job">
                                    <ul>
                                        <li v-for="job in related_jobs">
                                            <!--<a href="#">-->
                                            <!--<div class="company-logo">-->
                                            <!--<img :src="job.logo">-->
                                            <!--</div>-->
                                            <!--<div class="job-info">-->
                                            <!--<p><b>{{job.title}}</b></p>-->
                                            <!--<p class="red">{{job.salary}}</p>-->
                                            <!--<p class="gray">{{job.company}} . {{job.city}}</p>-->
                                            <!--</div>-->
                                            <!--</a>-->
                                            <router-link :to="{path:'job-detail', query:{'job_id':job.job_id}}">
                                                <div class="company-logo">
                                                    <img :src="job.company.logo">
                                                </div>
                                                <div class="job-info">
                                                    <p><b>{{job.title}}</b></p>
                                                    <p class="red">{{job.salary}}</p>
                                                    <p class="gray">{{job.company.name}} . {{job.city}}</p>
                                                </div>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="search-form">
                                <div class="search-form-con">
                                    <p><input type="text" class="search-ipt" placeholder="搜索职位、公司"/></p>
                                    <span class="city-box" v-on:click="switchCityBox">
                                <i clas s="icon-arrow-down"></i>
                                武汉
                            </span>
                                </div>
                                <button class="search-btn">搜索</button>
                            </div>
                            <div class="recommend-job">
                                <h3>推荐职位</h3>
                                <div class="recommend-job-box">
                                    <ul>
                                        <li class="cur">
                                            <span v-for="job in recommend_jobs">
                                                <router-link :to="{path:'job-detail', query:{job_id:job.job_id}}">
                                                        <div class="job-name">
                                                            {{job.title}}
                                                            <span class="salary">
                                                                {{job.salary}}·{{job.salary_num}}
                                                            </span>
                                                        </div>
                                                        <p>{{job.company.name}}</p>
                                                </router-link>
                                            </span>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                            <a href="#">
                                                <div class="job-name">
                                                    C++开发工程师（平台研发）
                                                    <span class="salary">6-11K·13薪</span>
                                                </div>
                                                <p>苍穹数码</p>
                                            </a>
                                        </li>
                                    </ul>
                                    <!--暂时不实现-->
                                    <!--<div class="page">-->
                                    <!--<a href="#"><i class="icon-arrow-left"></i></a>-->
                                    <!--<a href="#"><i class="icon-arrow-right"></i></a>-->
                                    <!--<span class="switch">-->
                                    <!--<i class="first"></i>-->
                                    <!--<i class="second cur"></i>-->
                                    <!--<i class="third"></i>-->
                                    <!--</span>-->
                                    <!--</div>-->
                                </div>
                            </div>
                            <div class="pos-bread">
                                <a href="#">武汉BOSS直聘招聘</a>>
                                <a href="#">武汉招聘</a>>
                                <a href="#">武汉硚口区招聘</a>>
                            </div>
                            <div id="link-box">
                                <div class="link-nav-wrapper">
                                    <div class="link-nav">
                                        <span>热门职位</span>
                                        <span>热门城市</span>
                                        <span>热门企业</span>
                                        <span class="cur">附近城市</span>
                                    </div>
                                    <div class="links">
                                        <ul>
                                            <li><a href="#">武汉招聘信息</a></li>
                                            <li><a href="#">襄阳招聘信息</a></li>
                                            <li><a href="#">鄂州招聘信息</a></li>
                                            <li><a href="#">孝感招聘信息</a></li>
                                            <li><a href="#">黄冈招聘信息</a></li>
                                            <li><a href="#">黄石招聘信息</a></li>
                                            <li><a href="#">咸宁招聘信息</a></li>
                                            <li><a href="#">荆州招聘信息</a></li>
                                            <li><a href="#">宜昌招聘信息</a></li>
                                            <!--<li><a href="#">十堰招聘信息</a></li>-->
                                            <!--<li><a href="#">随州招聘信息</a></li>-->
                                            <!--<li><a href="#">荆门招聘信息</a></li>-->
                                            <!--<li><a href="#">恩施招聘信息</a></li>-->
                                            <!--<li><a href="#">仙桃招聘信息</a></li>-->
                                            <!--<li><a href="#">潜江招聘信息</a></li>-->
                                            <!--<li><a href="#">天门招聘信息</a></li>-->
                                            <!--<li><a href="#">神农架招聘信息</a></li>-->
                                        </ul>
                                    </div>
                                </div>
                                <div class="clear"></div>
                                <!--<div class="channel-introduce">-->
                                <!--<h4>武汉招聘频道介绍</h4>-->
                                <!--<p>BOSS直聘武汉招聘频道，展示最新最热武汉招聘信息，百万Boss在线直聘，直接开聊，在线面试，武汉找工作就上BOSS直聘网站或APP！</p>-->
                                <!--</div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
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
        </div>
        <!--举报列表弹窗-->
        <div class="dialog-wrap" style="display: none" ref="reportTypeListBox">
            <!--弹窗主体不能放到遮罩层，会模糊不清-->
            <div class="dialog-layer">
            </div>
            <!--@blur="hideReportListBox" 无效。什么原因？是因为它就没有获得焦点。-->
            <div class="dialog-report-type-list-container" tabindex="-1" @blur="hideReportListBox">
                <div class="dialog-report-type-list-container-close" v-on:click="hideReportListBox"></div>
                <div class="dialog-report-type-list-container-con">
                    <div class="dialog-report-type-list-container-con-title">
                        <h3>选择举报类型</h3>
                    </div>
                    <div class="dialog-report-type-list">
                        <div class="list-item" v-on:click="goToReportFormBox">
                            <div class="first-title">
                                色情骚扰
                            </div>
                            <div class="second-title">
                                招聘者发布的信息包含色情低俗内容或存在性骚扰行为
                            </div>
                            <div class="icon-right">
                                <i></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="first-title">
                                色情骚扰
                            </div>
                            <div class="second-title">
                                招聘者发布的信息包含色情低俗内容或存在性骚扰行为
                            </div>
                            <div class="icon-right">
                                <i></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="first-title">
                                色情骚扰
                            </div>
                            <div class="second-title">
                                招聘者发布的信息包含色情低俗内容或存在性骚扰行为
                            </div>
                            <div class="icon-right">
                                <i></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="first-title">
                                色情骚扰
                            </div>
                            <div class="second-title">
                                招聘者发布的信息包含色情低俗内容或存在性骚扰行为
                            </div>
                            <div class="icon-right">
                                <i></i>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="first-title">
                                色情骚扰
                            </div>
                            <div class="second-title">
                                招聘者发布的信息包含色情低俗内容或存在性骚扰行为
                            </div>
                            <div class="icon-right">
                                <i></i>
                            </div>
                        </div>
                        <div class="list-item last">
                            <div class="first-title">
                                色情骚扰
                            </div>
                            <div class="second-title">
                                招聘者发布的信息包含色情低俗内容或存在性骚扰行为
                            </div>
                            <div class="icon-right">
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--举报表单-->
        <div class="dialog-wrap" style="display: none" ref="reportForm">
            <!--弹窗主体不能放到遮罩层，会模糊不清-->
            <div class="dialog-layer">
            </div>
            <div class="report-form-container">
                <div class="report-form-inner">
                    <div class="report-form-close" v-on:click="hideReportForm"></div>
                    <div class="report-form-con">
                        <div class="report-form-con-title">
                            <div class="icon-left" v-on:click="returnReportList"><i></i></div>
                            <h3>补充举报证据</h3>
                        </div>
                        <div class="form-row">
                            <span class="item-label">举报原因：</span>
                            <span class="item-content">人身攻击</span>
                        </div>
                        <div class="form-row">
                    <span class="item-label">
                        <span class="icon-require">*</span>
                        具体情况说明：
                    </span>
                            <span class="item-content">
                        <span class="reason">人身攻击</span>
                        <span class="reason">人身攻击</span>
                        <span class="reason mult-selected">人身攻击人身攻击</span>
                        <span class="reason">人身攻击</span>
                    </span>
                        </div>
                        <div class="form-row txt">
                    <span class="item-label">
                        <span class="icon-require">*</span>
                        补充说明：
                    </span>
                            <span class="item-content" id="ipt-textarea">
                        <textarea class="item-txt" placeholder="补充更详细的说明，可帮助工作人员更快定位问题，快速处理"></textarea>
                        <span class="word-num">0/500</span>
                    </span>
                        </div>
                        <div class="form-row">
                    <span class="item-label">
                        <span class="icon-require">*</span>
                        验证码：
                    </span>
                            <span class="item-content">
                        <input type="text" class="item-ipt" placeholder="请输入验证码">
                        <img src="/static/JobDetail/verify-code.png" id="verify-code">
                    </span>
                        </div>
                        <div class="form-row upload">
                    <span class="item-label">
                        证据截图：
                    </span>
                            <span class="item-content">
                        <span id="pretty-upload-btn">
                            <input class="upload-btn-none" type="file">
                            <i class="icon-plus"></i>
                            <span class="upload-txt">上传图片</span>
                        </span>
                    </span>
                        </div>
                    </div>
                    <div class="report-form-footer">
                        <div class="report-form-footer-inner">
                            <button class="button-cancel">取消</button>
                            <button class="button-confirm">确定</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    </div>
</template>

<script>
    import Test from '../plugin/test'
    export default {
        name: 'JobDetail',
        components: {Test},
        inject: ['reload'],
        data() {
            return {
                job: {
                    job_status: '招聘中',
                    title: 'C++工程师 初中级',
                    salary: '7-10K',
                    salary_num: '13薪',
                    city: '武汉',
                    experience: '1-3年',
                    degree: '本科',
                    benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
                    employee: {name: '孙悟空2', title: '创意总监-CTO', status: '刚刚在线', avatar: '头像'},
                    job_description: "岗位职责：\n" +
                        "\n" +
                        "1、负责和客户沟通设计方案、促成签单。\n" +
                        "\n" +
                        "2、量房、效果图及整套施工图的绘制工作。\n" +
                        "\n" +
                        "3、维护和客户之间的关系，挖掘潜在客户，促进公司与客户的长期合作。\n" +
                        "\n" +
                        "4、完成部门经理及公司领导交办的其他相关性工作。\n" +
                        "\n" +
                        "任职资格：\n" +
                        "\n" +
                        "1、室内设计、环境艺术设计等相关专业。\n" +
                        "\n" +
                        "2、二年以上家装设计师工作经验，独立完成设计项目。\n" +
                        "\n" +
                        "3、熟练运用绘图软件，有较强的实际操作能力。\n" +
                        "\n" +
                        "岗位福利：\n" +
                        "\n" +
                        "1.每个月到店客流保证300户以上.\n" +
                        "\n" +
                        "2.上班时间9:00-18:00午休2个小时。\n" +
                        "\n" +
                        "3.公司所有岗位提供住宿。\n" +
                        "\n" +
                        "4.每月举办员工生日会、部门团建、销冠奖励",
                    company: {
                        introduce: '太子家居创始于1999年。在昆明起步，始终致力于打造具有国际视野的民族品牌。发展至今，公司在成都天邛工业园已拥有1300余亩家居智造基地，总部员工近3000人，1000多家专卖店遍布全国。多年来，太子家居全心投入创造舒适居家生活，以更加开阔的眼界，时刻洞悉未来“家”的趋势。现',
                        business: '太子家居有限公司',
                        address: '中国上海',
                        logo: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
                        name: '北燕',
                        stage: '已上市',
                        scale: '10000人以上',
                        industry: '互联网',
                        net: 'http://chugang.net'

                    },
                    update_time: '2020-09-09'
                },

                job1: {
                    job_id: 1,
                    job_status: '招聘中',
                    title: 'C++工程师 初中级1',
                    salary: '7-10K',
                    salary_num: '13薪',
                    city: '武汉',
                    experience: '1-3年',
                    degree: '本科',
                    benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
                    employee: {name: '猪八戒', title: 'CEO', status: '刚刚在线', avatar: '头像'},
                    job_description: "岗位职责：\n" +
                        "\n" +
                        "1、负责和客户沟通设计方案、促成签单。\n" +
                        "\n" +
                        "2、量房、效果图及整套施工图的绘制工作。\n" +
                        "\n" +
                        "3、维护和客户之间的关系，挖掘潜在客户，促进公司与客户的长期合作。\n" +
                        "\n" +
                        "4、完成部门经理及公司领导交办的其他相关性工作。\n" +
                        "\n" +
                        "任职资格：\n" +
                        "\n" +
                        "1、室内设计、环境艺术设计等相关专业。\n" +
                        "\n" +
                        "2、二年以上家装设计师工作经验，独立完成设计项目。\n" +
                        "\n" +
                        "3、熟练运用绘图软件，有较强的实际操作能力。\n" +
                        "\n" +
                        "岗位福利：\n" +
                        "\n" +
                        "1.每个月到店客流保证300户以上.\n" +
                        "\n" +
                        "2.上班时间9:00-18:00午休2个小时。\n" +
                        "\n" +
                        "3.公司所有岗位提供住宿。\n" +
                        "\n" +
                        "4.每月举办员工生日会、部门团建、销冠奖励",
                    company: {
                        introduce: '太子家居创始于1999年。在昆明起步，始终致力于打造具有国际视野的民族品牌。发展至今，公司在成都天邛工业园已拥有1300余亩家居智造基地，总部员工近3000人，1000多家专卖店遍布全国。多年来，太子家居全心投入创造舒适居家生活，以更加开阔的眼界，时刻洞悉未来“家”的趋势。现',
                        business: '太子家居有限公司',
                        address: '中国上海',
                        logo: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
                        name: '北燕',
                        stage: '已上市',
                        scale: '10000人以上',
                        industry: '互联网',
                        net: 'http://chugang.net'

                    },
                    update_time: '2020-09-09'
                },
                job2: {
                    job_id: 2,
                    job_status: '招聘中',
                    title: 'C++工程师 初中级2',
                    salary: '7-10K',
                    salary_num: '13薪',
                    city: '武汉',
                    experience: '1-3年',
                    degree: '本科',
                    benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
                    employee: {name: '孙悟空', title: '创意总监', status: '刚刚在线', avatar: '头像'},
                    job_description: "岗位职责：\n" +
                        "\n" +
                        "1、负责和客户沟通设计方案、促成签单。\n" +
                        "\n" +
                        "2、量房、效果图及整套施工图的绘制工作。\n" +
                        "\n" +
                        "3、维护和客户之间的关系，挖掘潜在客户，促进公司与客户的长期合作。\n" +
                        "\n" +
                        "4、完成部门经理及公司领导交办的其他相关性工作。\n" +
                        "\n" +
                        "任职资格：\n" +
                        "\n" +
                        "1、室内设计、环境艺术设计等相关专业。\n" +
                        "\n" +
                        "2、二年以上家装设计师工作经验，独立完成设计项目。\n" +
                        "\n" +
                        "3、熟练运用绘图软件，有较强的实际操作能力。\n" +
                        "\n" +
                        "岗位福利：\n" +
                        "\n" +
                        "1.每个月到店客流保证300户以上.\n" +
                        "\n" +
                        "2.上班时间9:00-18:00午休2个小时。\n" +
                        "\n" +
                        "3.公司所有岗位提供住宿。\n" +
                        "\n" +
                        "4.每月举办员工生日会、部门团建、销冠奖励",
                    company: {
                        introduce: '太子家居创始于1999年。在昆明起步，始终致力于打造具有国际视野的民族品牌。发展至今，公司在成都天邛工业园已拥有1300余亩家居智造基地，总部员工近3000人，1000多家专卖店遍布全国。多年来，太子家居全心投入创造舒适居家生活，以更加开阔的眼界，时刻洞悉未来“家”的趋势。现',
                        business: '太子家居有限公司',
                        address: '中国上海',
                        logo: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
                        name: '北燕',
                        stage: '已上市',
                        scale: '10000人以上',
                        industry: '互联网',
                        net: 'http://chugang.net'

                    },
                    update_time: '2020-09-09'
                },
                job3: {
                    job_id: 3,
                    job_status: '招聘中',
                    title: 'C++工程师 初中级3',
                    salary: '7-10K',
                    salary_num: '13薪',
                    city: '武汉',
                    experience: '1-3年',
                    degree: '本科',
                    benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
                    employee: {name: '孙悟空', title: '创意总监---CTO', status: '刚刚在线', avatar: '头像'},
                    job_description: "岗位职责：\n" +
                        "\n" +
                        "1、负责和客户沟通设计方案、促成签单。\n" +
                        "\n" +
                        "2、量房、效果图及整套施工图的绘制工作。\n" +
                        "\n" +
                        "3、维护和客户之间的关系，挖掘潜在客户，促进公司与客户的长期合作。\n" +
                        "\n" +
                        "4、完成部门经理及公司领导交办的其他相关性工作。\n" +
                        "\n" +
                        "任职资格：\n" +
                        "\n" +
                        "1、室内设计、环境艺术设计等相关专业。\n" +
                        "\n" +
                        "2、二年以上家装设计师工作经验，独立完成设计项目。\n" +
                        "\n" +
                        "3、熟练运用绘图软件，有较强的实际操作能力。\n" +
                        "\n" +
                        "岗位福利：\n" +
                        "\n" +
                        "1.每个月到店客流保证300户以上.\n" +
                        "\n" +
                        "2.上班时间9:00-18:00午休2个小时。\n" +
                        "\n" +
                        "3.公司所有岗位提供住宿。\n" +
                        "\n" +
                        "4.每月举办员工生日会、部门团建、销冠奖励",
                    company: {
                        introduce: '太子家居创始于1999年。在昆明起步，始终致力于打造具有国际视野的民族品牌。发展至今，公司在成都天邛工业园已拥有1300余亩家居智造基地，总部员工近3000人，1000多家专卖店遍布全国。多年来，太子家居全心投入创造舒适居家生活，以更加开阔的眼界，时刻洞悉未来“家”的趋势。现',
                        business: '太子家居有限公司',
                        address: '中国上海',
                        logo: 'http://127.0.0.1:8080/static/JobDetail/company-log.png',
                        name: '北燕',
                        stage: '已上市',
                        scale: '10000人以上',
                        industry: '互联网',
                        net: 'http://chugang.net'

                    },
                    update_time: '2020-09-09'
                },
                job4: {
                    job_id: 4,
                    job_status: '招聘中',
                    title: 'C++工程师 初中级4',
                    salary: '7-10K',
                    salary_num: '13薪',
                    city: '武汉',
                    experience: '1-3年',
                    degree: '本科',
                    benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
                    employee: {name: '孙悟空', title: '创意总监', status: '刚刚在线', avatar: '头像'},
                    job_description: "岗位职责：\n" +
                        "\n" +
                        "1、负责和客户沟通设计方案、促成签单。\n" +
                        "\n" +
                        "2、量房、效果图及整套施工图的绘制工作。\n" +
                        "\n" +
                        "3、维护和客户之间的关系，挖掘潜在客户，促进公司与客户的长期合作。\n" +
                        "\n" +
                        "4、完成部门经理及公司领导交办的其他相关性工作。\n" +
                        "\n" +
                        "任职资格：\n" +
                        "\n" +
                        "1、室内设计、环境艺术设计等相关专业。\n" +
                        "\n" +
                        "2、二年以上家装设计师工作经验，独立完成设计项目。\n" +
                        "\n" +
                        "3、熟练运用绘图软件，有较强的实际操作能力。\n" +
                        "\n" +
                        "岗位福利：\n" +
                        "\n" +
                        "1.每个月到店客流保证300户以上.\n" +
                        "\n" +
                        "2.上班时间9:00-18:00午休2个小时。\n" +
                        "\n" +
                        "3.公司所有岗位提供住宿。\n" +
                        "\n" +
                        "4.每月举办员工生日会、部门团建、销冠奖励",
                    company: {
                        introduce: '太子家居创始于1999年。在昆明起步，始终致力于打造具有国际视野的民族品牌。发展至今，公司在成都天邛工业园已拥有1300余亩家居智造基地，总部员工近3000人，1000多家专卖店遍布全国。多年来，太子家居全心投入创造舒适居家生活，以更加开阔的眼界，时刻洞悉未来“家”的趋势。现',
                        business: '太子家居有限公司',
                        address: '中国上海',
                        logo: 'http://127.0.0.1:8080/static/JobDetail/company-log.png',
                        name: '北燕',
                        stage: '已上市',
                        scale: '10000人以上',
                        industry: '互联网',
                        net: 'http://chugang.net'

                    },
                    update_time: '2020-09-09'
                },
                job5: {
                    job_id: 5,
                    job_status: '招聘中',
                    title: 'C++工程师 初中级5',
                    salary: '7-10K',
                    salary_num: '13薪',
                    city: '武汉',
                    experience: '1-3年',
                    degree: '本科',
                    benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
                    employee: {name: '孙悟空', title: '创意总监', status: '刚刚在线', avatar: '头像'},
                    job_description: "岗位职责：\n" +
                        "\n" +
                        "1、负责和客户沟通设计方案、促成签单。\n" +
                        "\n" +
                        "2、量房、效果图及整套施工图的绘制工作。\n" +
                        "\n" +
                        "3、维护和客户之间的关系，挖掘潜在客户，促进公司与客户的长期合作。\n" +
                        "\n" +
                        "4、完成部门经理及公司领导交办的其他相关性工作。\n" +
                        "\n" +
                        "任职资格：\n" +
                        "\n" +
                        "1、室内设计、环境艺术设计等相关专业。\n" +
                        "\n" +
                        "2、二年以上家装设计师工作经验，独立完成设计项目。\n" +
                        "\n" +
                        "3、熟练运用绘图软件，有较强的实际操作能力。\n" +
                        "\n" +
                        "岗位福利：\n" +
                        "\n" +
                        "1.每个月到店客流保证300户以上.\n" +
                        "\n" +
                        "2.上班时间9:00-18:00午休2个小时。\n" +
                        "\n" +
                        "3.公司所有岗位提供住宿。\n" +
                        "\n" +
                        "4.每月举办员工生日会、部门团建、销冠奖励",
                    company: {
                        introduce: '太子家居创始于1999年。在昆明起步，始终致力于打造具有国际视野的民族品牌。发展至今，公司在成都天邛工业园已拥有1300余亩家居智造基地，总部员工近3000人，1000多家专卖店遍布全国。多年来，太子家居全心投入创造舒适居家生活，以更加开阔的眼界，时刻洞悉未来“家”的趋势。现',
                        business: '太子家居有限公司',
                        address: '中国上海',
                        logo: 'http://127.0.0.1:8080/static/JobDetail/company-log.png',
                        name: '北燕',
                        stage: '已上市',
                        scale: '10000人以上',
                        industry: '互联网',
                        net: 'http://chugang.net'

                    },
                    update_time: '2020-09-09'
                },

                jobs: [
                    // {
                    //     job_id: 1,
                    //     title: 'IOS高级开发工程师1',
                    //     salary: '13-25K',
                    //     salary_num: '14薪',
                    //     company: '今日头条',
                    //     logo: 'http://127.0.0.1:8080/static/JobDetail/company-log.png',
                    //     city: '武汉'
                    // },
                    // {
                    //     job_id: 2,
                    //     title: 'IOS高级开发工程师2',
                    //     salary: '13-25K',
                    //     salary_num: '14薪',
                    //     company: '今日头条',
                    //     logo: 'http://127.0.0.1:8080/static/JobDetail/company-log.png',
                    //     city: '武汉'
                    // },
                    // {
                    //     job_id: 3,
                    //     title: 'IOS高级开发工程师3',
                    //     salary: '13-25K',
                    //     salary_num: '14薪',
                    //     company: '今日头条',
                    //     logo: 'http://127.0.0.1:8080/static/JobDetail/company-log.png',
                    //     city: '广州'
                    // },
                    // {
                    //     job_id: 4,
                    //     title: 'IOS高级开发工程师4',
                    //     salary: '13-25K',
                    //     salary_num: '14薪',
                    //     company: '今日头条',
                    //     logo: 'http://127.0.0.1:8080/static/JobDetail/company-log.png',
                    //     city: '武汉'
                    // },
                    // {
                    //     job_id: 5,
                    //     title: 'IOS高级开发工程师5',
                    //     salary: '13-25K',
                    //     salary_num: '14薪',
                    //     company: '今日头条',
                    //     logo: 'http://127.0.0.1:8080/static/JobDetail/company-log.png',
                    //     city: '武汉'
                    // }
                ],
                related_jobs: null,
                recommend_jobs: null,
                history_jobs: null
            }
        },
        mounted() {
            this.related_jobs = this.jobs
            this.recommend_jobs = this.jobs
            this.history_jobs = this.jobs
        },
        // vue 路由参数变化，页面不刷新（数据不更新）解决方法 start
        watch: {
            '$route'(to, from) { //监听路由是否变化
                if (to.query.job_id != from.query.job_id) {
                    this.job = to.query.job_id;
                    this.getJobDetail();//重新加载数据
                }
            }
        },
        created() {
            if (this.$route.query) {
                this.job_id = this.$route.query.job_id;
                this.getJobDetail();
            }
        },
        // vue 路由参数变化，页面不刷新（数据不更新）解决方法 end
        methods: {
            // 微信二维码
            switchMiniAppBox: function () {
                if (this.$refs.miniApp.style.display == 'none') {
                    this.$refs.miniApp.style.display = 'block';
                    this.$refs.qrBtn.style.cursor = 'default';
                } else {
                    this.$refs.miniApp.style.display = 'none';
                    this.$refs.qrBtn.style.cursor = 'pointer';
                }
            },
            showReportListBox: function () {
                this.$refs.reportTypeListBox.style.display = 'block';
            },
            hideReportListBox: function () {
                this.$refs.reportTypeListBox.style.display = 'none';
            },
            goToReportFormBox: function () {
                this.$refs.reportTypeListBox.style.display = 'none';
                // 打开举报表单
                this.$refs.reportForm.style.display = 'block';
            },
            // 关闭举报表单
            hideReportForm: function () {
                this.$refs.reportForm.style.display = 'none';
            },
            // 回到举报列表
            returnReportList: function () {
                this.$refs.reportForm.style.display = 'none';
                this.$refs.reportTypeListBox.style.display = 'block';
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
            // 搜索框地址--关闭
            closeCityBox: function () {
                this.$refs.cityBox.style.display = 'none'
            },
            // 立即沟通
            chat: function () {
                this.$router.push("/chat")
            },
            // 获取工作详情
            getJobDetail: function () {
                let job_id = this.$route.query.job_id
                // 需与<router-link :to="{path:'job-detail', query:{job_id:job.job_id}}">中的query一致
                // 等待进一步验证
                // let job_id = this.$route.params.job_id  // 不能用
                this.jobs = [this.job1, this.job2, this.job3, this.job4, this.job5]
                this.job = this.jobs[job_id - 1]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/JobDetail/index.css";
</style>
