<template>
    <div>
        <div id="wrap">
            <!--头部菜单-->
            <!--<router-view></router-view>-->
            <Header></Header>
            <div id="filter-box">
                <div class="inner home-inner">
                    <div class="search-box">
                        <div class="search-form-con">
                            <div class="city" v-on:click="switchCityBox">
                                <i class="line"></i>
                                <span class="label-text">
                            <b>{{searchKeyWordCity.city_name}}</b>
                            <i class="icon-arrow-down"></i>
                        </span>
                            </div>
                            <div class="company" tabindex="-1" v-on:click="showIndustryBox" @blur="hideIndustryBox">
                                <i class="line"></i>
                                <span class="label-text">
                            <b>{{industry.text}}</b>
                            <i class="icon-arrow-down"></i>
                        </span>
                            </div>
                            <div class="industry-box" ref="industryBox" style="display: none">
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
                            <div class="position" tabindex="-1" v-on:click="switchPositionTypeBox">
                                <i class="line"></i>
                                <span class="label-text key-word-position-type">
                            <b>{{positionType.text}}</b>
                            <i class="icon-arrow-down"></i>
                        </span>
                            </div>
                            <div class="position-type-list" ref="positionType" style="display: none">
                                <ul class="position-list-tree1" ref="position_list_tree1" style="display: none">
                                    <li data-id="0" class="">不限</li>
                                    <li
                                            v-for="(category,index) in firstPositionTypes"
                                            v-bind:code=category.code
                                            v-bind:index=index
                                            :class="firstPositionTypeIsActive == index ? 'selected':''"
                                            @mouseover="selectFirstPositionType($event)"
                                    >
                                        {{category.name}}
                                    </li>
                                </ul>
                                <ul class="position-list-tree2" ref="position_list_tree2" style="display: none">
                                    <li
                                            v-for="(category,index) in secondPositionTypes"
                                            v-bind:code=category.code
                                            v-bind:index=index
                                            :class="secondPositionTypeIsActive == index ? 'selected':''"
                                            @mouseover="selectSecondPositionType($event)"
                                    >
                                        {{category.name}}
                                    </li>
                                </ul>
                                <ul class="position-list-tree3" ref="position_list_tree3" style="display: none">
                                    <li
                                            v-for="(category,index) in thirdPositionTypes"
                                            v-bind:code=category.code
                                            v-bind:index=index
                                            :class="thirdPositionTypeIsActive == index ? 'selected':''"
                                            v-on:click="setSearchConditionPositionType($event)"
                                    >
                                        {{category.name}}
                                    </li>
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
                                <a href="/c101200100/b_%E4%B8%9C%E8%A5%BF%E6%B9%96%E5%8C%BA/"
                                   ka="sel-business-7">东西湖区</a>
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
                <span class="dropdown-select first" @mouseenter="showExperience" @mouseleave="hideExperience">
                    <input type="text" placeholder="工作经验" class="ipt" readonly>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list" ref="experienceBox" style="display: none">
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
                        <span class="dropdown-select" @mouseenter="showDegree" @mouseleave="hideDegree">
                    <input type="text" placeholder="学历要求" class="ipt" readonly>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list" style="display: none" ref="degreeBox">
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
                        <span class="dropdown-select" @mouseenter="showSalaryBox" @mouseleave="hideSalaryBox">
                    <input type="text" placeholder="薪资要求" class="ipt" readonly>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list" style="display: none" ref="salaryBox">
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
                        <span class="dropdown-select" @mouseenter="showFinancingStageBox"
                              @mouseleave="hideFinancingStageBox">
                    <input type="text" placeholder="融资阶段" class="ipt" readonly>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list" style="display: none" ref="financingStage">
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
                        <span class="dropdown-select" @mouseenter="showCompanyScaleBox"
                              @mouseleave="hideCompanyScaleBox">
                    <input type="text" placeholder="公司规模" class="ipt" readonly>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list" style="display: none" ref="companyScaleBox">
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
                        <!--<a class="last" href="#">清空筛选条件</a>-->
                        <router-link :to="{path: 'job-list'}" class="last">清空筛选条件</router-link>
                    </div>
                </div>
            </div>
            <div id="main-content" class="inner home-inner">
                <div class="job-box">
                    <div class="side-bar">
                        <div class="history">
                            <div class="history-title-wapper">
                                <div class="history-title">看过的职位</div>
                                <!--<h3>看过的职位</h3>-->
                            </div>
                            <div class="history-list">
                                <ul>
                                    <li v-for="job in jobs">
                                        <!--<a href="#">-->
                                        <!--<h4 class="job.title">-->
                                        <!--{{job.title}}-->
                                        <!--<span class="salary">{{job.salary}}·{{job.salary_num}}</span>-->
                                        <!--</h4>-->
                                        <!--<p>{{job.company}}</p>-->
                                        <!--</a>-->
                                        <router-link :to="{path:'job-detail',query:{job_id:job.job_id}}">
                                            <h4 class="job.title">
                                                {{job.title}}
                                                <span class="salary">{{job.salary}}·{{job.salary_num}}</span>
                                            </h4>
                                            <p>{{job.company}}</p>
                                        </router-link>
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
                            <li v-for="jobDetail in jobDetailList">
                                <div class="primary-job-info">
                                    <div class="job-info-wrapper">
                                        <div class="job-info">
                                    <span class="job-name">
                                        <!--<a href="#">-->
                                        <!--室内设计师-->
                                        <!--<span class="job-area">武汉·硚口区·古田</span>-->
                                        <!--</a>-->
                                        <router-link :to="{path:'job-detail',query:{job_id: jobDetail.jobId}}">
                                            {{jobDetail.job.name}}
                                            <span class="job-area">
                                                {{jobDetail.job.city}}·
                                                {{jobDetail.job.area}}·
                                                {{jobDetail.job.address}}
                                            </span>
                                        </router-link>
                                    </span>
                                            <span class="job-jd">
                                        <span class="salary">{{jobDetail.job.salary}}</span>
                                        <span class="ages">{{jobDetail.job.experience}}<i class="line"></i></span>
                                        <span class="grade">
                                            {{jobDetail.job.degree}}
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">{{jobDetail.employee.name}}</span>
                                            <i class="line"></i>
                                            <span class="title">{{jobDetail.employee.title}}</span>
                                        </span>
                                    </span>
                                        </div>
                                    </div>
                                    <div class="company-wrapper">
                                        <div class="company-info">
                                            <span class="company-name">{{jobDetail.company.name}}</span>
                                            <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                {{jobDetail.company.industry}}
                                                <i class="line"></i>
                                            </span>
                                            <span>{{jobDetail.company.financingStage}}<i class="line"></i></span>
                                            <span>{{jobDetail.company.scale}}</span>
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
                                        <span v-for="tag in jobDetail.tags" class="tag-item">
                                            {{tag}}
                                        </span>
                                        <!--<span class="tag-item">全屋定制设计</span>-->
                                        <!--<span class="tag-item">装饰装修</span>-->
                                        <!--<span class="tag-item">设计师</span>-->
                                        <!--<span class="tag-item">整套施工图</span>-->
                                        <!--<span class="tag-item">签单</span>-->
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
        <CityPopWindow ref="cityPopWindow" @selectCity="setSearchKeyWordCity($event)"></CityPopWindow>
    </div>
</template>

<script>
    import Header from '../plugin/header'
    import CityPopWindow from '../plugin/city-pop-window'

    export default {
        name: 'JobList',
        components: {
            Header: Header,
            CityPopWindow: CityPopWindow
        },
        data() {
            return {
                jobs: [
                    {job_id: 1, title: 'IOS高级开发工程师', salary: '13-25K', salary_num: '14薪', company: '今日头条'},
                    {job_id: 2, title: 'IOS高级开发工程师', salary: '13-25K', salary_num: '14薪', company: '今日头条'},
                    {job_id: 3, title: 'IOS高级开发工程师', salary: '13-25K', salary_num: '14薪', company: '今日头条'},
                    {job_id: 4, title: 'IOS高级开发工程师', salary: '13-25K', salary_num: '14薪', company: '今日头条'},
                    {job_id: 5, title: 'IOS高级开发工程师', salary: '13-25K', salary_num: '14薪', company: '今日头条'}
                ],
                jobDetailList: [
                    {
                        jobId: 3,
                        tags: ['全屋定制设计', '装饰装修', '设计师', '整套施工图'],
                        benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
                        job:
                            {
                                name: 'PHP研发工程师',
                                city: '杭州',
                                area: '萧山区',
                                address: '五角大楼',
                                salary: '5-10K',
                                experience: '3-5年',
                                degree: '大专'
                            },
                        company: {name: '小码教育', industry: '在线教育', financingStage: 'C轮', scale: '100-99人'},
                        employee: {name: '孙悟空', title: '创意总监'}
                    },
                    {
                        jobId: 3,
                        tags: ['全屋定制设计', '装饰装修', '设计师', '整套施工图'],
                        benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
                        job:
                            {
                                name: 'PHP研发工程师',
                                city: '杭州',
                                area: '萧山区',
                                address: '五角大楼',
                                salary: '5-10K',
                                experience: '3-5年',
                                degree: '大专'
                            },
                        company: {name: '小码教育', industry: '在线教育', financingStage: 'C轮', scale: '100-99人'},
                        employee: {name: '孙悟空', title: '创意总监'}
                    },
                    {
                        jobId: 3,
                        tags: ['全屋定制设计', '装饰装修', '设计师', '整套施工图'],
                        benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
                        job:
                            {
                                name: 'PHP研发工程师',
                                city: '杭州',
                                area: '萧山区',
                                address: '五角大楼',
                                salary: '5-10K',
                                experience: '3-5年',
                                degree: '大专'
                            },
                        company: {name: '小码教育', industry: '在线教育', financingStage: 'C轮', scale: '100-99人'},
                        employee: {name: '孙悟空', title: '创意总监'}
                    },
                    {
                        jobId: 3,
                        tags: ['全屋定制设计', '装饰装修', '设计师', '整套施工图'],
                        benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
                        job:
                            {
                                name: 'PHP研发工程师',
                                city: '杭州',
                                area: '萧山区',
                                address: '五角大楼',
                                salary: '5-10K',
                                experience: '3-5年',
                                degree: '大专'
                            },
                        company: {name: '小码教育', industry: '在线教育', financingStage: 'C轮', scale: '100-99人'},
                        employee: {name: '孙悟空', title: '创意总监'}
                    },
                ],
                // 搜索框，城市，{city_code:1000,city_name:'北京'}
                searchKeyWordCity: {},       // 不能写成null，否则网页不能显示
                // 与mounted中的this.searchKeyWordCity任选其一
                // searchKeyWordCity: {city_code: '0000', city_name: '城市'}
                // 搜索框关键词
                keyWord: '',     // 搜索职位、公司
                positionType: {code: 0, text: '职位类型移动web前端'},
                industry: {code: 0, text: '公司行业'},

                // 职位类型
                firstPositionTypes: [],      // 职位类型一级分类
                secondPositionTypes: [],    // 职位类型二级分类
                thirdPositionTypes: [],      // 职位类型三级分类

                firstPositionTypeIsActive: false,
                secondPositionTypeIsActive: false,
                thirdPositionTypeIsActive: false,
            }
        },
        mounted() {
            console.log("===========start===========")
            console.log(this.$refs.industryBox.style.display)
            // this.$refs.industryBox.style.display = 'block'
            console.log("===========end===========")
            this.searchKeyWordCity = {city_code: '1000', city_name: '北京'}

            this.firstPositionTypes = [{code310000: 310000, name: '高级管理'},
                {code: 100000, name: '技术'},
                {code: 110000, name: '产品'},
                {code: 120000, name: '设计'},
                {code: 130000, name: '运营'},
                {code: 140000, name: '市场'},
                {code: 150000, name: '人事/财务/行政'},
                {code: 160000, name: '销售'},
                {code: 170000, name: '传媒'},
                {code: 180000, name: '金融'},
                {code: 190000, name: '教育培训'},
                {code: 210000, name: '医疗健康'},
                {code: 250000, name: '采购/贸易'},
                {code: 240000, name: '供应链/物流'},
                {code: 220000, name: '房地产/建筑'},
                {code: 260000, name: '咨询/翻译/法律'},
                {code: 280000, name: '旅游'},
                {code: 290000, name: '服务业'},
                {code: 300000, name: '生产制造'},
                {code: 200000, name: '其他'},]

            this.secondPositionTypes = [{code: 110100, name: '产品经理2'},
                {code: 110300, name: '高端产品职位'},
                {code: 110400, name: '其他产品职位'},]

            this.thirdPositionTypes = [{code: 100211, name: 'UE4'},
                {code: 100299, name: '移动开发'},
                {code: 100201, name: 'HTML5'},
                {code: 100202, name: 'Android'},
                {code: 100203, name: 'iOS'},
                {code: 100205, name: '移动web前端'},
                {code: 100206, name: 'Flash开发'},
                {code: 100208, name: 'JavaScript'},
                {code: 100209, name: 'U3D'},
                {code: 100210, name: 'COCOS2DX'},]
        },
        methods: {
            showIndustryBox: function () {
                if (this.$refs.industryBox.style.display == 'none') {
                    this.$refs.industryBox.style.display = 'block'
                } else {
                    this.$refs.industryBox.style.display = 'none'
                }
            },
            hideIndustryBox: function () {
                this.$refs.industryBox.style.display = 'none'
            },
            switchPositionTypeBox: function () {
                if (this.$refs.positionType.style.display == 'none') {
                    this.$refs.positionType.style.display = 'block'
                    this.$refs.position_list_tree1.style.display = 'block'
                    this.$refs.position_list_tree2.style.display = 'block'
                } else {
                    this.$refs.positionType.style.display = 'none'
                }
            },
            hidePositionBox: function () {
                this.$refs.positionType.style.display = 'none'
            },
            // 搜索框地址
            switchCityBox: function () {
                this.$refs.cityPopWindow.switchCityBox()
            },
            showExperience() {
                console.log("hello")
                this.$refs.experienceBox.style.display = 'block'
            },
            hideExperience() {
                console.log("hello")
                this.$refs.experienceBox.style.display = 'none'
            },
            showDegree() {
                this.$refs.degreeBox.style.display = 'block';
            },
            hideDegree() {
                this.$refs.degreeBox.style.display = 'none';
            },
            showSalaryBox() {
                this.$refs.salaryBox.style.display = 'block';
            },
            hideSalaryBox() {
                this.$refs.salaryBox.style.display = 'none';
            },
            showFinancingStageBox() {
                this.$refs.financingStage.style.display = 'block';
            },
            hideFinancingStageBox() {
                this.$refs.financingStage.style.display = 'none';
            },
            showCompanyScaleBox() {
                this.$refs.companyScaleBox.style.display = 'block';
            },
            hideCompanyScaleBox() {
                this.$refs.companyScaleBox.style.display = 'none';
            },
            // 设置搜索关键词，城市
            setSearchKeyWordCity(e) {
                console.log(e)
                var cityCode = e.city_code
                var cityName = e.city_name
                this.searchKeyWordCity = {city_code: cityCode, city_name: cityName}
            },
            // 第一级职位类型分类
            selectFirstPositionType(e) {
                console.log(e)
                var target = e.currentTarget
                var index = target.getAttribute('index')
                var code = target.getAttribute('code')
                var name = target.innerText
                this.firstPositionTypeIsActive = index
                // 获取parentId是code的二级分类

            },
            // 第二级职位类型分类
            selectSecondPositionType(e) {
                console.log(e)
                var target = e.currentTarget
                var index = target.getAttribute('index')
                var code = target.getAttribute('code')
                var name = target.innerText
                this.secondPositionTypeIsActive = index
                // 获取parentId是code的三级分类
                // 显示三级分类列表
                this.$refs.position_list_tree3.style.display = 'block'
            },
            // 设置职位类型
            setSearchConditionPositionType(e) {
                var target = e.currentTarget
                var code = target.getAttribute('code')
                var name = target.innerText
                // 设置搜索条件--职位类型--vue的双向绑定，确实方便
                this.positionType.code = code
                this.positionType.text = name
                // 第三级分类选中状态
                var index = target.getAttribute('index')
                this.thirdPositionTypeIsActive = index
                // 隐藏职位类型列表。仿照boss直聘，再次显示该列表时，保留上次的选中状态。子元素是否隐藏不影响效果。
                this.$refs.positionType.style.display = 'none'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/JobList/index.css";
</style>
