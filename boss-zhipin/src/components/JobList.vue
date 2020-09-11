<template>
    <div id="wrap">
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
        <div id="filter-box">
            <div class="inner home-inner">
                <div class="search-box">
                    <div class="search-form-con">
                        <div class="city">
                            <i class="line"></i>
                            <span class="label-text">
                            <b>武汉</b>
                            <i class="icon-arrow-down"></i>
                        </span>
                        </div>
                        <div class="company" tabindex="-1">
                            <i class="line"></i>
                            <span class="label-text">
                            <b>公司行业</b>
                            <i class="icon-arrow-down"></i>
                        </span>
                        </div>
                        <div class="industry-box">
                            <ul>
                                <li data-val=""><a href="javascript:;">不限</a></li>
                                <li data-val="100001" ka="sel-industry-1"><a href="javascript:;">电子商务</a></li>
                                <li data-val="100002" ka="sel-industry-2"><a href="javascript:;">游戏</a></li>
                                <li data-val="100003" ka="sel-industry-3"><a href="javascript:;">媒体</a></li>
                                <li data-val="100004" ka="sel-industry-4"><a href="javascript:;">广告营销</a></li>
                                <li data-val="100005" ka="sel-industry-5"><a href="javascript:;">数据服务</a></li>
                                <li data-val="100006" ka="sel-industry-6"><a href="javascript:;">医疗健康</a></li>
                                <li data-val="100007" ka="sel-industry-7"><a href="javascript:;">生活服务</a></li>
                                <li data-val="100008" ka="sel-industry-8"><a href="javascript:;">O2O</a></li>
                                <li data-val="100009" ka="sel-industry-9"><a href="javascript:;">旅游</a></li>
                                <li data-val="100010" ka="sel-industry-10"><a href="javascript:;">分类信息</a></li>
                                <li data-val="100011" ka="sel-industry-11"><a href="javascript:;">音乐/视频/阅读</a></li>
                                <li data-val="100012" ka="sel-industry-12"><a href="javascript:;">在线教育</a></li>
                                <li data-val="100013" ka="sel-industry-13"><a href="javascript:;">社交网络</a></li>
                                <li data-val="100014" ka="sel-industry-14"><a href="javascript:;">人力资源服务</a></li>
                                <li data-val="100015" ka="sel-industry-15"><a href="javascript:;">企业服务</a></li>
                                <li data-val="100016" ka="sel-industry-16"><a href="javascript:;">信息安全</a></li>
                                <li data-val="100018" ka="sel-industry-17"><a href="javascript:;">智能硬件</a></li>
                                <li data-val="100019" ka="sel-industry-18"><a href="javascript:;">移动互联网</a></li>
                                <li data-val="100020" ka="sel-industry-19"><a href="javascript:;">互联网</a></li>
                                <li data-val="100021" ka="sel-industry-20"><a href="javascript:;">计算机软件</a></li>
                                <li data-val="100024" ka="sel-industry-21"><a href="javascript:;">通信/网络设备</a></li>
                                <li data-val="100101" ka="sel-industry-22"><a href="javascript:;">广告/公关/会展</a></li>
                                <li data-val="100206" ka="sel-industry-23"><a href="javascript:;">互联网金融</a></li>
                                <li data-val="100502" ka="sel-industry-24"><a href="javascript:;">物流/仓储</a></li>
                                <li data-val="100504" ka="sel-industry-25"><a href="javascript:;">贸易/进出口</a></li>
                                <li data-val="100601" ka="sel-industry-26"><a href="javascript:;">咨询</a></li>
                                <li data-val="100702" ka="sel-industry-27"><a href="javascript:;">工程施工</a></li>
                                <li data-val="100801" ka="sel-industry-28"><a href="javascript:;">汽车生产</a></li>
                                <li data-val="101304" ka="sel-industry-29"><a href="javascript:;">其他行业</a></li>
                            </ul>
                        </div>
                        <div class="position" tabindex="-1">
                            <i class="line"></i>
                            <span class="label-text">
                            <b>职位类型</b>
                            <i class="icon-arrow-down"></i>
                        </span>
                        </div>
                        <div class="position-type-list">
                            <ul class="position-list-tree1">
                                <li data-id="0" class="">不限</li>
                                <li data-id="310000" class="">高级管理</li>
                                <li data-id="100000" class="">技术</li>
                                <li data-id="110000" class="selected">产品</li>
                                <li data-id="120000" class="">设计</li>
                                <li data-id="130000" class="">运营</li>
                                <li data-id="140000">市场</li>
                                <li data-id="150000">人事/财务/行政</li>
                                <li data-id="160000">销售</li>
                                <li data-id="170000">传媒</li>
                                <li data-id="180000">金融</li>
                                <li data-id="190000">教育培训</li>
                                <li data-id="210000">医疗健康</li>
                                <li data-id="250000">采购/贸易</li>
                                <li data-id="240000">供应链/物流</li>
                                <li data-id="220000">房地产/建筑</li>
                                <li data-id="260000">咨询/翻译/法律</li>
                                <li data-id="280000">旅游</li>
                                <li data-id="290000">服务业</li>
                                <li data-id="300000">生产制造</li>
                                <li data-id="200000">其他</li>
                            </ul>
                            <ul class="position-list-tree2">
                                <li data-id="110100">产品经理</li>
                                <li data-id="110300">高端产品职位</li>
                                <li data-id="110400">其他产品职位</li>
                            </ul>
                            <ul class="position-list-tree3">
                                <li data-val="100211">UE4</li>
                                <li data-val="100299">移动开发</li>
                                <li data-val="100201">HTML5</li>
                                <li data-val="100202">Android</li>
                                <li data-val="100203">iOS</li>
                                <li data-val="100205">移动web前端</li>
                                <li data-val="100206">Flash开发</li>
                                <li data-val="100208">JavaScript</li>
                                <li data-val="100209">U3D</li>
                                <li data-val="100210">COCOS2DX</li>
                            </ul>
                        </div>
                        <p class="ipt-wrap">
                            <input class="ipt-search" type="text" placeholder="搜索职位、公司">
                        </p>
                    </div>
                    <button class="btn btn-search">搜索</button>
                </div>
                <div class="condition-box">
                    <dl class="condition-city">
                        <dd class="city-wrapper">
                            <a class="disabled" href="javascript:;">武汉</a>
                            <em class="icon-arrow-right"></em>
                            <a class="link-city selected" href="javascript:;">不限</a>
                            <em class="icon-arrow-right"></em>
                            <span class="hot-text">热门城市：</span>
                            <a href="/c100010000/" ka="sel-city-100010000">全国</a>
                            <a href="/c100010000/" ka="sel-city-100010000">北京</a>
                            <a href="/c100010000/" ka="sel-city-100010000">上海</a>
                            <a href="/c100010000/" ka="sel-city-100010000">广州</a>
                            <a href="/c100010000/" ka="sel-city-100010000">深圳</a>
                            <a href="/c100010000/" ka="sel-city-100010000">杭州</a>
                            <a href="/c100010000/" ka="sel-city-100010000">天津</a>
                            <a href="/c100010000/" ka="sel-city-100010000">全国</a>
                            <a href="/c100010000/" ka="sel-city-100010000">全国</a>
                        </dd>
                    </dl>
                    <dl class="condition-district">
                        <dd class="district-wrapper">
                            <a class="selected first" href="/c101200100/" ka="sel-business-0">不限</a>
                            <a href="/c101200100/b_%E6%B4%AA%E5%B1%B1%E5%8C%BA/" ka="sel-business-0">洪山区</a>
                            <a href="/c101200100/b_%E6%AD%A6%E6%98%8C%E5%8C%BA/" ka="sel-business-1">武昌区</a>
                            <a href="/c101200100/b_%E6%B1%9F%E5%A4%8F%E5%8C%BA/" ka="sel-business-2">江夏区</a>
                            <a href="/c101200100/b_%E6%B1%9F%E6%B1%89%E5%8C%BA/" ka="sel-business-3">江汉区</a>
                            <a href="/c101200100/b_%E6%B1%9F%E5%B2%B8%E5%8C%BA/" ka="sel-business-4">江岸区</a>
                            <a href="/c101200100/b_%E6%B1%89%E9%98%B3%E5%8C%BA/" ka="sel-business-5">汉阳区</a>
                            <a href="/c101200100/b_%E7%A1%9A%E5%8F%A3%E5%8C%BA/" ka="sel-business-6">硚口区</a>
                            <a href="/c101200100/b_%E4%B8%9C%E8%A5%BF%E6%B9%96%E5%8C%BA/" ka="sel-business-7">东西湖区</a>
                            <a href="/c101200100/b_%E8%94%A1%E7%94%B8%E5%8C%BA/" ka="sel-business-8">蔡甸区</a>
                            <a href="/c101200100/b_%E9%9D%92%E5%B1%B1%E5%8C%BA/" ka="sel-business-9">青山区</a>
                            <a href="/c101200100/b_%E9%BB%84%E9%99%82%E5%8C%BA/" ka="sel-business-10">黄陂区</a>
                            <a href="/c101200100/b_%E4%B8%9C%E8%A5%BF%E6%B9%96%E5%8C%BA/"
                               ka="sel-business-7">湖北武汉东西湖区</a>
                            <a href="/c101200100/b_%E6%96%B0%E6%B4%B2%E5%8C%BA/" ka="sel-business-11">新洲区</a>
                            <a href="/c101200100/b_%E6%B1%89%E5%8D%97%E5%8C%BA/" ka="sel-business-12">汉南区</a>
                        </dd>
                    </dl>
                </div>
                <div class="filter-select-box">
                <span class="dropdown-select first">
                    <input type="text" placeholder="工作经验" class="ipt" readonly>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list">
                        <ul>
                        <li><a href="/c101280600/" ka="sel-exp-0" rel="nofollow">不限</a></li>
                        <li><a href="/c101280600/e_108/" ka="sel-exp-108"
                               rel="nofollow">在校生</a></li>
                        <li><a href="/c101280600/e_102/" ka="sel-exp-102"
                               rel="nofollow">应届生</a></li>
                        <li><a href="/c101280600/e_103/" ka="sel-exp-103"
                               rel="nofollow">1年以内</a></li>
                        <li><a href="/c101280600/e_104/" ka="sel-exp-104"
                               rel="nofollow">1-3年</a></li>
                        <li><a href="/c101280600/e_105/" ka="sel-exp-105"
                               rel="nofollow">3-5年</a></li>
                        <li><a href="/c101280600/e_106/" ka="sel-exp-106"
                               rel="nofollow">5-10年</a></li>
                        <li><a href="/c101280600/e_107/" ka="sel-exp-107"
                               rel="nofollow">10年以上</a></li>
                        </ul>
                    </div>
                </span>
                    <span class="dropdown-select">
                    <input type="text" placeholder="学历要求" class="ipt" readonly>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list">
                        <ul>
                                        <li><a href="/c101280600/" ka="sel-degree-0" rel="nofollow">不限</a></li>
                                        <li><a href="/c101280600/d_209/" ka="sel-degree-209"
                                               rel="nofollow">初中及以下</a></li>
                                        <li><a href="/c101280600/d_208/" ka="sel-degree-208"
                                               rel="nofollow">中专/中技</a></li>
                                        <li><a href="/c101280600/d_206/" ka="sel-degree-206" rel="nofollow">高中</a></li>
                                        <li><a href="/c101280600/d_202/" ka="sel-degree-202" rel="nofollow">大专</a></li>
                                        <li><a href="/c101280600/d_203/" ka="sel-degree-203" rel="nofollow">本科</a></li>
                                        <li><a href="/c101280600/d_204/" ka="sel-degree-204" rel="nofollow">硕士</a></li>
                                        <li><a href="/c101280600/d_205/" ka="sel-degree-205" rel="nofollow">博士</a></li>
                            </ul>
                    </div>
                </span>
                    <span class="dropdown-select">
                    <input type="text" placeholder="薪资要求" class="ipt" readonly>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list">
                        <ul>
                                        <li><a href="/c101280600/" ka="sel-salary-0" rel="nofollow">不限</a></li>
                                        <li><a href="/c101280600/y_1/" ka="sel-salary-1" rel="nofollow">3K以下</a></li>
                                        <li><a href="/c101280600/y_2/" ka="sel-salary-2" rel="nofollow">3-5K</a></li>
                                        <li><a href="/c101280600/y_3/" ka="sel-salary-3" rel="nofollow">5-10K</a></li>
                                        <li><a href="/c101280600/y_4/" ka="sel-salary-4" rel="nofollow">10-15K</a></li>
                                        <li><a href="/c101280600/y_5/" ka="sel-salary-5" rel="nofollow">15-20K</a></li>
                                        <li><a href="/c101280600/y_6/" ka="sel-salary-6" rel="nofollow">20-30K</a></li>
                                        <li><a href="/c101280600/y_7/" ka="sel-salary-7" rel="nofollow">30-50K</a></li>
                                        <li><a href="/c101280600/y_8/" ka="sel-salary-8" rel="nofollow">50K以上</a></li>
                            </ul>
                    </div>
                </span>
                    <span class="dropdown-select">
                    <input type="text" placeholder="融资阶段" class="ipt" readonly>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list">
                        <ul>
                                        <li><a href="/c101280600/" ka="sel-stage-0" rel="nofollow">不限</a></li>
                                        <li><a href="/c101280600/t_801/" ka="sel-stage-801" rel="nofollow">未融资</a></li>
                                        <li><a href="/c101280600/t_802/" ka="sel-stage-802" rel="nofollow">天使轮</a></li>
                                        <li><a href="/c101280600/t_803/" ka="sel-stage-803" rel="nofollow">A轮</a></li>
                                        <li><a href="/c101280600/t_804/" ka="sel-stage-804" rel="nofollow">B轮</a></li>
                                        <li><a href="/c101280600/t_805/" ka="sel-stage-805" rel="nofollow">C轮</a></li>
                                        <li><a href="/c101280600/t_806/" ka="sel-stage-806"
                                               rel="nofollow">D轮及以上</a></li>
                                        <li><a href="/c101280600/t_807/" ka="sel-stage-807" rel="nofollow">已上市</a></li>
                                        <li><a href="/c101280600/t_808/" ka="sel-stage-808"
                                               rel="nofollow">不需要融资</a></li>
                            </ul>
                    </div>
                </span>
                    <span class="dropdown-select">
                    <input type="text" placeholder="公司规模" class="ipt" readonly>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list">
                        <ul>
                                       <li><a href="/c101280600/" ka="sel-scale-0" rel="nofollow">不限</a></li>
                                       <li><a href="/c101280600/s_301/" ka="sel-scale-301" rel="nofollow">0-20人</a></li>
                                       <li><a href="/c101280600/s_302/" ka="sel-scale-302"
                                              rel="nofollow">20-99人</a></li>
                                       <li><a href="/c101280600/s_303/" ka="sel-scale-303"
                                              rel="nofollow">100-499人</a></li>
                                       <li><a href="/c101280600/s_304/" ka="sel-scale-304"
                                              rel="nofollow">500-999人</a></li>
                                       <li><a href="/c101280600/s_305/" ka="sel-scale-305" rel="nofollow">1000-9999人</a></li>
                                       <li><a href="/c101280600/s_306/" ka="sel-scale-306"
                                              rel="nofollow">10000人以上</a></li>
                            </ul>
                    </div>
                </span>
                    <a class="last" href="#">清空筛选条件</a>
                </div>
            </div>
        </div>
        <div id="main-content" class="inner home-inner">
            <div class="job-box">
                <div class="side-bar">
                    <!--<div class="login-box">-->
                    <!--<div class="login-pannel">-->
                    <!--<div class="form-row form-title">各大行业职位任你选</div>-->
                    <!--<div class="form-row">-->
                    <!--<span class="dropdown-select">-->
                    <!--<i class="icon-arrow-down"></i>-->
                    <!--<em>+86</em>-->
                    <!--</span>-->
                    <!--<span class="ipt-phone">-->
                    <!--<i class="icon-phone"></i>-->
                    <!--<input class="ipt-phone-number" type="text"/>-->
                    <!--</span>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;<div class="form-row"></div>&ndash;&gt;-->
                    <!--<div class="form-row">-->
                    <!--<span class="sms-code">-->
                    <!--<i class="icon-sms"></i>-->
                    <!--<input class="ipt-sms" type="text"/>-->
                    <!--</span>-->
                    <!--<span class="btn-send-sms">-->
                    <!--<i class="line"></i>-->
                    <!--<button>发送验证码</button>-->
                    <!--</span>-->
                    <!--</div>-->
                    <!--<div class="form-row login-btn">-->
                    <!--<button class="login-register-btn">登录/注册</button>-->
                    <!--</div>-->
                    <!--<div class="agreement">-->
                    <!--<input type="checkbox">我我已同意<a href="#">用户协议及隐私政策</a>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div class="upload-btn">-->
                    <!--<a>上传简历一键注册</a>-->
                    <!--</div>-->
                    <div class="history">
                        <div class="history-title-wapper">
                            <div class="history-title">看过的职位</div>
                            <!--<h3>看过的职位</h3>-->
                        </div>
                        <div class="history-list">
                            <ul>
                                <li>
                                    <a href="#">
                                        <h4 class="title">iOS高级工程师<span class="salary">13-25K·14薪</span></h4>
                                        <p>今日头条</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h4 class="title">iOS高级工程师<span class="salary">13-25K·14薪</span></h4>
                                        <p>今日头条</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h4 class="title">iOS高级工程师<span class="salary">13-25K·14薪</span></h4>
                                        <p>今日头条</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h4 class="title">iOS高级工程师<span class="salary">13-25K·14薪</span></h4>
                                        <p>今日头条</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h4 class="title">iOS高级工程师<span class="salary">13-25K·14薪</span></h4>
                                        <p>今日头条</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="ads">
                        <ul>
                            <li><a href="#"> <img src="/static/JobList/pro-1.png"></a></li>
                            <li><a href="#"> <img src="/static/JobList/pro-2.png"></a></li>
                        </ul>
                    </div>
                </div>
                <div class="job-list">
                    <ul>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="primary-job-info">
                                <div class="job-info-wrapper">
                                    <div class="job-info">
                                    <span class="job-name">
                                        <a href="#">
                                            室内设计师
                                            <span class="job-area">武汉·硚口区·古田</span>
                                        </a>
                                    </span>
                                        <span class="job-jd">
                                        <span class="salary">5-10K</span>
                                        <span class="ages">3-5年<i class="line"></i></span>
                                        <span class="grade">
                                            大专
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">朱先生</span>
                                            <i class="line"></i>
                                            <span class="title">设计总监</span>
                                        </span>
                                    </span>
                                    </div>
                                </div>
                                <div class="company-wrapper">
                                    <div class="company-info">
                                        <span class="company-name">太子家居</span>
                                        <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                家具/家电/家居
                                                <i class="line"></i>
                                            </span>
                                            <span>不需要融资<i class="line"></i></span>
                                            <span>1000-9999人</span>
                                        </a>
                                    </span>
                                    </div>
                                    <div class="company-logo">
                                        <img src="/static/JobList/company-logo.jpg"/>
                                    </div>
                                </div>
                            </div>
                            <div class="append-job-info">
                                <div class="tags">
                                    <span class="tag-item">全屋定制设计</span>
                                    <span class="tag-item">装饰装修</span>
                                    <span class="tag-item">设计师</span>
                                    <span class="tag-item">整套施工图</span>
                                    <span class="tag-item">签单</span>
                                </div>
                                <div class="prize">
                                    带薪年假，包住，全勤奖，包吃，员工旅游，年终奖
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="page">
                        <ul>
                            <li class="pre"><a href="#"><i class="icon-arrow-left"></i></a></li>
                            <li class="cur"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li>...</li>
                            <li class="next"><a href="#"><i class="icon-arrow-right"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="feedback">
                    <div class="feedback-wrapper">
                        <div class="feedback-emoj">
                            <h4>对搜索结果是否满意？</h4>
                            <div><i class="emoj-not-statisfy"></i>不满意</div>
                            <div><i class="emoj-just-so-so"></i>一般</div>
                            <div><i class="emoj-ok"></i>满意</div>
                        </div>
                        <div class="feedback-textarea">
                            <div class="feedback-textarea-wrapper">
                                <textarea class="txt" placeholder="请填写更多反馈建议"></textarea>
                                <button class="btn">提交</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pos-bread">
                    <a href="#">武汉BOSS直聘招聘</a>>
                    <a href="#">武汉招聘</a>>
                    <a href="#">武汉硚口区招聘</a>>
                </div>
            </div>
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
                        <li><a href="#">十堰招聘信息</a></li>
                        <li><a href="#">随州招聘信息</a></li>
                        <li><a href="#">荆门招聘信息</a></li>
                        <li><a href="#">恩施招聘信息</a></li>
                        <li><a href="#">仙桃招聘信息</a></li>
                        <li><a href="#">潜江招聘信息</a></li>
                        <li><a href="#">天门招聘信息</a></li>
                        <li><a href="#">神农架招聘信息</a></li>
                    </ul>
                </div>
            </div>
            <div class="clear"></div>
            <div class="channel-introduce">
                <h4>武汉招聘频道介绍</h4>
                <p>BOSS直聘武汉招聘频道，展示最新最热武汉招聘信息，百万Boss在线直聘，直接开聊，在线面试，武汉找工作就上BOSS直聘网站或APP！</p>
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
                    <img id="footer-logo" src="/static/JobList/footer-logo.png">
                    <p>企业服务热线和举报投诉 400 065 5799</p>
                    <p>工作日 8:00 - 22:00</p>
                    <p>休息日 9:30 - 18:30</p>
                    <p class="footer-icon">
                        <a href="#"><i class="icon-weibo"></i></a>
                        <a href="#" class="wechat-qr">
                            <i class="icon-wechat"></i>
                            <img class="icon-wechat-img" src="/static/JobList/we_chat_qr.jpg">
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
                    <a href="#"><img src="/static/JobList/icon-badge-1.png">电子营业执照</a>
                </span>
                    <span>
                    <a href="#"><img src="/static/JobList/icon-beian.png">京公网安备11010502032801</a>
                </span>
                    <span><a href="#">首都网警</a></span>
                    <span><a href="#">人力资源服务许可证 </a></span>
                    <span><a href="#">网上有害信息举报专区</a></span>
                </div>
            </div>
        </div>
        <!--<div id="side-bar">Side Bar</div>难度比较大，不实现-->
    </div>
    <!--搜索框地址弹出-->
    <!--<div id="dialog-wrap" style="display: none">-->
    <!--&lt;!&ndash;css实现关闭弹窗&ndash;&gt;-->
    <!--&lt;!&ndash;<div id="dialog-container-close" tabindex="-1">&ndash;&gt;-->
    <!--&lt;!&ndash;<i></i>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--<div id="dialog-container-layer"></div>-->
    <!--<div id="dialog-container">-->
    <!--<div id="dialog-container-close">-->
    <!--<i></i>-->
    <!--</div>-->
    <!--<div id="dialog-con">-->
    <!--<div id="dialog-title"><h3>请选择城市</h3></div>-->
    <!--<div id="city">-->
    <!--<ul id="section-province">-->
    <!--<li>ABCDE</li>-->
    <!--<li>FGHIJ</li>-->
    <!--<li class="active">KLMN</li>-->
    <!--<li>PQRST</li>-->
    <!--<li>WXYZ</li>-->
    <!--</ul>-->
    <!--<ul id="section-city">-->
    <!--<li class="classify-city">-->
    <!--<div class="city-title">A</div>-->
    <!--<ul class="city-main">-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="classify-city">-->
    <!--<div class="city-title">A</div>-->
    <!--<ul class="city-main">-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="classify-city">-->
    <!--<div class="city-title">A</div>-->
    <!--<ul class="city-main">-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="classify-city">-->
    <!--<div class="city-title">A</div>-->
    <!--<ul class="city-main">-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--<li class="classify-city">-->
    <!--<div class="city-title">A</div>-->
    <!--<ul class="city-main">-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--<li class="city">鞍山</li>-->
    <!--</ul>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
</template>

<script>
    // import imgPro1 from '@/static/JobList/pro-1.png'

    export default {
        name: 'JobList',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                // imgPro1: imgPro1
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/JobList/index.css";
</style>
