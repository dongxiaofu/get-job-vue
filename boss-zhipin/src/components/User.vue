<template>
    <div>
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
            <div id="main-content" class="inner home-inner">
                <div class="job-box">
                    <div class="side-bar">
                        <div class="resume-attachment">
                            <h3>附件管理</h3>
                            <ul>
                                <li v-for="(attachment,index) in resume_attachments">
                                    <div class="annex-item" tabindex="0" v-bind:current_index=index
                                         @mouseover="showAnnexCard($event)"
                                         @blur="hideCurrentAnnexCardLeaveAnnexItem($event)"
                                    >
                                        <i class="icon-delete"></i>
                                        <img src="/static/User/icon-file.png" class="icon-file">
                                        <span class="resume-name"
                                              v-on:click="download($event)"
                                              v-bind:attachment_id=index
                                        >
                                            {{attachment.name}}
                                        </span>
                                        <div class="annex-card"
                                             style="display: none"
                                             v-bind:annex-card-index=index
                                             @mouseover="showCurrentAnnexCard($event)"
                                             @mouseleave="hideCurrentAnnexCard($event)"
                                        >
                                            <div class="card-body">
                                                <div class="card-img"><img src="/static/User/icon-pdf.d2b22d86.png">
                                                </div>
                                                <div class="resume-name">{{attachment.name}}</div>
                                                <div class="upload-date">{{attachment.size}} {{attachment.upload_time}}
                                                    上传
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <span>下载</span>
                                                <span>重命名</span>
                                                <span>附件解析</span>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                            <div class="upload-resume-btn" v-on:click="showUploadBox">上传简历</div>
                        </div>
                        <div class="ads">
                            <ul>
                                <li><a href="#"> <img src="/static/User/pro-1.png"></a></li>
                                <li><a href="#"> <img src="/static/User/pro-2.png"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-content">
                        <div class="last-update">
                            <span class="update-time">最后更新 2020.07.30 09:11</span>
                            <span class="review">预览简历</span>
                        </div>
                        <div class="resume-box">
                            <div class="user-profile" ref="user_profile_text">
                                <div class="user-profile-inner">
                                    <div class="user-info">
                                        <div class="user-info-text">
                                            <h3>{{user_profile.name}}<i class="gender"></i></h3>
                                            <p>
                                            <span class="before-line-first"><i
                                                    class="icon-experience"></i>{{user_profile.experience}}</span>
                                                <span class="before-line"><i class="icon-degree"></i>{{user_profile.degree}}</span>
                                                <span class="before-line"><i class="icon-status"></i>{{job_search_status_value}}</span>
                                            </p>
                                            <p>
                                                <span class="before-line-first"><i class="icon-phone"></i>{{user_profile.telephone}}</span>
                                                <span class="before-line"><i class="icon-min-wechat"></i>{{user_profile.wechat}}</span>
                                                <span class="before-line"><i
                                                        class="icon-email"></i>{{user_profile.email}}</span>
                                            </p>
                                        </div>
                                        <div class="user-info-avatar">
                                            <img src="/static/User/avatar_default.png"/>
                                        </div>
                                    </div>
                                    <div class="opt" v-on:click="editUserProfile"><i class="icon-edit"></i>编辑</div>
                                </div>
                            </div>
                            <!--编辑个人信息 start-->
                            <div class="edit-user-info" ref="user_profile_form" style="display: none">
                                <div class="edit-user-info-wrapper">
                                    <h3 style="padding: 0px 30px">编辑个人信息</h3>
                                    <!--<form action="#">-->
                                    <div class="form-item">
                                        <div class="item-label">
                                            姓名
                                        </div>
                                        <div class="item-content">
                                            <input name="fname" type="text" v-model="user_profile.name">
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <div class="item-label">
                                            当前求职状态
                                        </div>
                                        <div class="item-content job-status-dropdown">
                                        <span class="job-status" v-on:click="showUiDropdownList">
                                            {{job_search_status_value}}
                                            <i class="icon-arrow-right"></i>
                                        </span>
                                            <div class="ui-dropdown-list" ref="ui_dropdown_list">
                                                <ul>
                                                    <div v-for="option in job_search_status_options">
                                                        <li v-bind:class="job_search_status_value == option.value ? 'ui-select-item ui-select-item-selected': 'ui-select-item'"
                                                            v-bind:job_search_status_key=option.key
                                                            v-on:click="selectJobSearchStatus($event)"
                                                        >
                                                            {{option.value}}
                                                        </li>
                                                    </div>
                                                </ul>
                                                <input type="hidden" v-model="user_profile.job_search_status">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <div class="item-label">
                                            性别
                                        </div>
                                        <div class="item-content" id="gender">
                                        <span>
                                            <!--<label v-on:click="selectGender($event)" v-bind:class="user_profile.gender == 1 ? 'radio radio-checked' : 'radio'" id="gender-man">-->
                                           <label v-on:click="selectGender($event)"
                                                  :class="[{ 'radio-checked':user_profile.gender == 1}, 'radio']"
                                                  v-bind:gender-value="1"
                                                  id="gender-man">
                                                <span>
                                                    <input type="radio" value="1" name="gender"
                                                           v-model="user_profile.gender">
                                                    <i class="beauty-radio"></i>
                                                </span>
                                                男
                                            </label>
                                            <label v-on:click="selectGender($event)"
                                                   v-bind:class="user_profile.gender == 2 ? 'radio radio-checked' : 'radio'"
                                                   v-bind:gender-value="2"
                                                   id="gender-woman">
                                                <span>
                                                    <input type="radio" value="2" name="gender"
                                                           v-model="user_profile.gender">
                                                    <i class="beauty-radio"></i>
                                                </span>
                                                女
                                            </label>
                                        </span>
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <div class="item-label">
                                            我的牛人身份
                                        </div>
                                        <div class="item-content">
                                            <!--<input>-->
                                            <span class="role">职场人</span>
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <div class="item-label">
                                            生日
                                        </div>
                                        <div class="item-content">
                                            <input name="birthday" type="text" v-model="user_profile.birthday">
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <div class="item-label">
                                            微信号（选填）
                                        </div>
                                        <div class="item-content">
                                            <input name="wechat" type="text" v-model="user_profile.wechat">
                                        </div>
                                    </div>

                                    <div class="form-item">
                                        <div class="item-label">
                                            电话
                                        </div>
                                        <div class="item-content">
                                            <input name="phone" type="text" v-model="user_profile.telephone">
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <div class="item-label">
                                            邮箱
                                        </div>
                                        <div class="item-content">
                                            <input name="email" type="text" v-model="user_profile.email">
                                        </div>
                                    </div>
                                    <div class="form-btn">
                                        <button class="cancel-btn" v-on:click="cancelEvent">取消</button>
                                        <button class="submit-btn" v-on:click="SubUserProfile">完成</button>
                                    </div>
                                    <!--</form>-->
                                </div>
                            </div>
                            <!--编辑个人信息 end-->
                            <div id="advantage">
                                <div class="item-primary" ref="advantage_text">
                                    <h4 class="title">个人优势</h4>
                                    <div class="item-info">
                                        <div class="item-txt pre-line">
                                            1.6年PHP开发经验，两次从零开始开发项目至上线。
                                            2.自学能力强；能拆分开发任务、胜任全部常规开发，懂架构，有初步的技术管理能力。
                                        </div>
                                        <div class="op" v-on:click="editAdvantage">
                                            <i class="icon-edit"></i>
                                            编辑
                                        </div>
                                    </div>
                                </div>
                                <div class="item-form" ref="advantage_form" style="display: none">
                                    <div class="item-textarea">
                                        <h4>编辑个人优势</h4>
                                        <textarea name="advantage" v-model="user_advantage.advantage"></textarea>
                                    </div>
                                    <div class="btns">
                                        <button class="cancel-btn" v-on:click="cancelEvent">取消</button>
                                        <button class="submit-btn" v-on:click="SubUserAdvantage">完成</button>
                                    </div>
                                </div>
                            </div>
                            <div id="history">
                                <div class="item-primary">
                                    <h3 class="title" ref="experience_title">工作经历</h3>
                                    <ul>
                                        <li class="experience" v-bind:li-type="1">
                                            <div class="item-form" ref="experienceForm" style="display: none">
                                                <h3 style="padding:0px 30px">编辑工作经历</h3>
                                                <div class="ipts">
                                                    <div class="one-line form-item">
                                                        <div class="ipt">
                                                            <div class="item-label">公司名称</div>
                                                            <div class="item-content">
                                                                <input type="text" name="compnay" value="XX公司"
                                                                       v-model="experience.company_name">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="one-line form-item">
                                                        <div class="ipt">
                                                            <div class="item-label">所属行业</div>
                                                            <div class="item-content">
                                                                <input type="text" name="compnay" value="游戏"
                                                                       v-model="experience.industry">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="one-line form-item">
                                                        <div class="ipt">
                                                            <div class="item-label">所属部门（选填）</div>
                                                            <div class="item-content">
                                                                <input type="text" name="compnay" placeholder="技术部"
                                                                       v-model="experience.department">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="one-line form-item">
                                                        <div class="ipt">
                                                            <div class="item-label">职位名称（选填）</div>
                                                            <div class="item-content">
                                                                <input type="text" name="compnay" value="PHP高级开发工程师"
                                                                       v-model="experience.position_name">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="one-line form-item">
                                                        <div class="ipt">
                                                            <div class="item-label">职位类型</div>
                                                            <div class="item-content">
                                                                <input type="text" name="compnay" value="硬件产品经理"
                                                                       v-model="experience.position_type">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="one-line form-item">
                                                        <div class="ipt">
                                                            <div class="item-label">在职时间</div>
                                                            <div class="item-content">
                                                                <input type="text" name="compnay"
                                                                       value="2019.05-2022.10"
                                                                       v-model="experience.working_hours">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="one-line form-item-all">
                                                        <div class="ipt all">
                                                            <div class="item-label">技能标签</div>
                                                            <div class="item-content">
                                                                <div class="select-ui" tabindex="-1">
                                                                    <div class="select-tag">
                                                                        <span>C端产品</span>
                                                                        <i class="ui-icon-close"></i>
                                                                    </div>
                                                                    <div class="select-tag">
                                                                        <span>PHP开发</span>
                                                                        <i class="ui-icon-close"></i>
                                                                    </div>
                                                                    <div class="select-tag">
                                                                        <span>系统架构</span>
                                                                        <i class="ui-icon-close"></i>
                                                                    </div>
                                                                    <div class="select-ipt">
                                                                        <input type="text" name="compnay">
                                                                    </div>
                                                                    <i class="icon-arrow-down"></i>
                                                                </div>
                                                                <div class="ui-select-dropdown ui-select-multiple">
                                                                    <ul>
                                                                        <li class="ui-select-item ui-select-item-selected"><span
                                                                                class="ui-tag">Java</span></li>
                                                                        <li class="ui-select-item ui-select-item-selected"><span
                                                                                class="ui-tag">Javascript</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">后端开发</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Linux</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">数据库</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">C/C++</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">PHP</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">系统架构</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Python</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">需求分析</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">HTML5</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Android</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">HTML/CSS</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Web前端</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">前端开发</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">C#</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">.NET</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">iOS</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">解决方案</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Node.js</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">JS</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">数据挖掘</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">机器学习</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">移动开发</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Hadoop</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Shell</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">游戏开发</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Flash</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Golang</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Unity3D</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">GO</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Swift</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">ERP</span></li>
                                                                        <li class="ui-select-item"><span class="ui-tag">Cocos2d-X</span>
                                                                        </li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">系统集成</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">全栈</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">通信</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">中间件</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">推荐算法</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">ASP</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">企业软件</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">自然语言处理</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">python爬虫</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">图像算法</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">数据采集</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">项目实施</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">java爬虫</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">NLP</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">图像识别</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">搜索算法</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">搜索</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">SAP</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">视频编解码</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">人脸识别</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Ruby</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">数据抓取</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">网络优化</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">网络爬虫</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">计算机视觉</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">广告算法</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">视频算法</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">图像编程</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">音频编解码</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">VB</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">爬虫工程师</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">语音算法</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">音频处理</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Delphi</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">erlang</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">光通信</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">Perl</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">模式识别</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">信息检索</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">爬虫架构</span></li>
                                                                        <li class="ui-select-item"><span class="ui-tag">分布式视频编解码系统</span>
                                                                        </li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">语音处理</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">视频流转码</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">抓取</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">VOIP</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">流媒体转封装</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">视频预处理</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">数字信号处理</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">计算广告</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">目标检测</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">视频识别</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">WP</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">纠错编码</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">数字音频水印</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">后端开发</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">PHP</span></li>
                                                                        <li class="ui-select-item"><span
                                                                                class="ui-tag">系统架构</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="textareas form-item-all">
                                                    <div class="big-ipt">
                                                        <div class="item-label">工作内容</div>
                                                        <div class="item-content">
                                                        <textarea name="experience"
                                                                  v-model="experience.job_content"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="textareas form-item-all">
                                                    <div class="big-ipt">
                                                        <div class="item-label">工作业绩（选填)</div>
                                                        <div class="item-content">
                                                        <textarea name="achievement"
                                                                  v-model="experience.performance"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="btns">
                                                    <button class="cancel-btn" v-on:click="cancelEvent">取消</button>
                                                    <button class="submit-btn" v-on:click="SubExperience">完成</button>
                                                </div>
                                            </div>
                                        </li>
                                        <div v-for="experience in experiences">
                                            <li class="experience" v-bind:li-index="experience.id" v-bind:li-type="2">
                                                <div class="item-info">
                                                    <div class="item-txt">
                                                        <span class="title">{{experience.company_name}}</span>
                                                        <span class="work-period">2017.05-2019.10</span>
                                                    </div>
                                                    <div class="position-name">{{experience.position_name}}</div>
                                                    <div class="item-txt pre-line">
                                                        <span class="txt-type">内容</span>
                                                        {{experience.job_content}}
                                                    </div>
                                                    <div class="item-txt pre-line">
                                                        <span class="txt-type">业绩</span>
                                                        {{experience.performance}}
                                                    </div>
                                                    <div class="keywords">
                                                        <span class="keyword">后端开发</span>
                                                        <span class="keyword">PHP</span>
                                                        <span class="keyword">系统架构</span>
                                                    </div>
                                                    <div class="op delete-op">
                                        <span class="delete" v-on:click="deleteExperience($event)">
                                            <i class="icon-delete"></i>
                                            删除
                                        </span>
                                                        <span class="edit" v-on:click="EditExperience($event)">
                                            <i class="icon-edit"></i>
                                            编辑
                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
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
                        <img id="footer-logo" src="/static/User/footer-logo.png">
                        <p>企业服务热线和举报投诉 400 065 5799</p>
                        <p>工作日 8:00 - 22:00</p>
                        <p>休息日 9:30 - 18:30</p>
                        <p class="footer-icon">
                            <a href="#"><i class="icon-weibo"></i></a>
                            <a href="#" class="wechat-qr">
                                <i class="icon-wechat"></i>
                                <img class="icon-wechat-img" src="/static/User/we_chat_qr.jpg">
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
                    <a href="#"><img src="/static/User/icon-badge-1.png">电子营业执照</a>
                </span>
                        <span>
                    <a href="#"><img src="/static/User/icon-beian.png">京公网安备11010502032801</a>
                </span>
                        <span><a href="#">首都网警</a></span>
                        <span><a href="#">人力资源服务许可证 </a></span>
                        <span><a href="#">网上有害信息举报专区</a></span>
                    </div>
                </div>
            </div>
            <!--<div id="side-bar">Side Bar</div>难度比较大，不实现-->
        </div>
        <!--上传附件简历弹窗-->
        <div id="dialog-wrap" style="display: none" ref="dialogWrap">
            <!--遮罩层-->
            <div id="layer"></div>
            <div id="dialog-container">
                <div id="container-inner">
                    <div id="close" v-on:click="closeUploadBox"></div>
                    <div id="upload">
                        <p id="tip-first">拖拽文件到这里</p>
                        <p id="tip-second">支持DOC、DOCX、PDF、JPG、PNG格式附件</p>
                    </div>
                    <div id="upload-btn">
                        <span>上传简历附件</span>
                        <input type="file">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        inject: ['reload'],
        name: 'HelloWorld',
        data() {
            return {

                item: {
                    id: '',
                    name: 'cg',
                    title: '',
                    mobile: '12345555',
                    tel: '',
                    sex: '男',
                    qq: '',
                    wx_code: '',
                    addr: '',
                    user_name: '',
                    password: '',
                    memo: '',
                    create_time: '',
                    status: '',
                    type: ''
                },

                user_profile: {
                    user_id: '',
                    name: '姓名',
                    job_search_status: 1,
                    gender: 2,
                    birthday: '',
                    telephone: '-',
                    wechat: '-',
                    email: '-',
                    identity: '',
                    degree: '-',
                    experience: '-'
                },

                user_advantage: {
                    user_id: '',
                    advantage: ''
                },

                experience: {
                    id: 1,
                    user_id: 23,
                    company_name: 'AB',
                    department: 'c',
                    position_type: 'd',
                    tags: ['后端开发', 'PHP', '系统架构'],
                    industry: 'w',
                    position_name: 'w',
                    working_hours: '3',
                    job_content: '1.游戏接口编写和接口性能优化\n' +
                        '2.数据统计功能开发\n' +
                        '3.微信登录、微信支付、微信打款开发\n' +
                        '4.代码版本控制与发布\n' +
                        '5.参与服务器日常维护\n' +
                        '6.指导初级工程师开发',
                    performance: 'wwwww'
                },

                experience1: {
                    id: 1,
                    user_id: 23,
                    company_name: 'AB',
                    department: 'c',
                    position_type: 'd',
                    tags: ['后端开发', 'PHP', '系统架构'],
                    industry: 'w',
                    position_name: 'w',
                    working_hours: '3',
                    job_content: '1.游戏接口编写和接口性能优化\n' +
                        '2.数据统计功能开发\n' +
                        '3.微信登录、微信支付、微信打款开发\n' +
                        '4.代码版本控制与发布\n' +
                        '5.参与服务器日常维护\n' +
                        '6.指导初级工程师开发',
                    performance: '1.使用docker在单机上建立压测环境，使用XHProf查找PHP接口性能瓶颈，优化php-fpm.conf\n' +
                        '配置项，使部分接口的压测速度由23秒下降至1秒。\n' +
                        '2.使用 “shell + 软链接” 简化项目发布过程，使代码发布与回退非常平滑和快速。\n' +
                        '3. 建立微信openId和用户ID的映射表，来加快用户数据的查询速度。\n' +
                        '4. 使用简单的SQL语句，通过在PHP中处理业务逻辑拼装数据，完成复杂的统计需求。'
                },

                experience2: {
                    id: 1,
                    user_id: 23,
                    company_name: 'AB2',
                    department: 'c',
                    position_type: 'd',
                    tags: ['后端开发', 'PHP', '系统架构'],
                    industry: 'w',
                    position_name: 'w',
                    working_hours: '3',
                    job_content: '1.游戏接口编写和接口性能优化\n' +
                        '2.数据统计功能开发\n' +
                        '3.微信登录、微信支付、微信打款开发\n' +
                        '4.代码版本控制与发布\n' +
                        '5.参与服务器日常维护\n' +
                        '6.指导初级工程师开发',
                    performance: '1.使用docker在单机上建立压测环境，使用XHProf查找PHP接口性能瓶颈，优化php-fpm.conf\n' +
                        '配置项，使部分接口的压测速度由23秒下降至1秒。\n' +
                        '2.使用 “shell + 软链接” 简化项目发布过程，使代码发布与回退非常平滑和快速。\n' +
                        '3. 建立微信openId和用户ID的映射表，来加快用户数据的查询速度。\n' +
                        '4. 使用简单的SQL语句，通过在PHP中处理业务逻辑拼装数据，完成复杂的统计需求。'
                },

                experience3: {
                    id: 1,
                    user_id: 23,
                    company_name: 'AB3',
                    department: 'c',
                    position_type: 'd',
                    tags: ['后端开发', 'PHP', '系统架构'],
                    industry: 'w',
                    position_name: 'w',
                    working_hours: '3',
                    job_content: '1.游戏接口编写和接口性能优化\n' +
                        '2.数据统计功能开发\n' +
                        '3.微信登录、微信支付、微信打款开发\n' +
                        '4.代码版本控制与发布\n' +
                        '5.参与服务器日常维护\n' +
                        '6.指导初级工程师开发',
                    performance: '1.使用docker在单机上建立压测环境，使用XHProf查找PHP接口性能瓶颈，优化php-fpm.conf\n' +
                        '配置项，使部分接口的压测速度由23秒下降至1秒。\n' +
                        '2.使用 “shell + 软链接” 简化项目发布过程，使代码发布与回退非常平滑和快速。\n' +
                        '3. 建立微信openId和用户ID的映射表，来加快用户数据的查询速度。\n' +
                        '4. 使用简单的SQL语句，通过在PHP中处理业务逻辑拼装数据，完成复杂的统计需求。\n' +
                        '5. Test。'
                },

                experiences: [],

                experienceApi: '/api/insert',
                userProfileApi: '/api/insert222',
                userAdvantageApi: '/api/insert',

                job_search_status_options: [
                    {key: 1, value: '离职-随时到岗'},
                    {key: 2, value: '在职-暂不考虑'},
                    {key: 3, value: '在职-考虑机会'},
                    {key: 4, value: '在职-月内到岗'}
                ],

                job_search_status_value: 'qq',

                // 简历附件管理
                attachment1: {name: '小明的简历1.pdf', size: '32KB', update_time: '2020-08-23 17:54'},
                attachment2: {name: '小明的简历2.pdf', size: '32KB', update_time: '2020-08-23 17:54'},
                attachment3: {name: '小明的简历3.pdf', size: '32KB', update_time: '2020-08-23 17:54'},
                attachment4: {name: '小明的简历4.pdf', size: '32KB', update_time: '2020-08-23 17:54'},
                resume_attachments: [],
            }
        },
        mounted() {
            var job_search_status_index = this.user_profile.job_search_status - 1
            var job_search_status = this.job_search_status_options[job_search_status_index]
            this.job_search_status_value = job_search_status.value
            console.log("===========start============")
            console.log(this.job_search_status_value)
            console.log("===========end============")
            this.item.user_name = 'hello'
            this.user_profile.email = 'chuganghong@qq.com'
            this.user_advantage.advantage = 'I am rich'
            this.experience.performance = 'well done!'
            // 从API获取工作经验数据
            this.experiences = [this.experience1, this.experience2, this.experience3]
            // 从API获取简历附件
            this.resume_attachments = [this.attachment1, this.attachment2, this.attachment3]
        },
        methods: {
            // 用户信息
            SubUserProfile: function () {
                console.log(this.user_profile);
                var data = this.user_profile
                this.$http.post((this.userProfileApi), data, {
                    headers: {
                        Authorization: "Bearer ",
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    this.grouplist = response.body;
                    alert("提交成功")
                }, response => {
                    console.log(response)
                    alert("出问题啦")
                });
            },

            // 个人优势
            SubUserAdvantage: function () {
                console.log(this.user_advantage);
                var data = this.user_advantage
                this.$http.post((this.userAdvantageApi), data, {emulateJSON: false}).then(response => {
                    this.grouplist = response.body;
                    alert("提交成功")
                }, response => {
                    console.log(response)
                    alert("出问题啦")
                }).finally(response => {
                    this.reload()
                })
            },

            // 工作经验
            SubExperience: function () {
                console.log(this.experience);
                var data = this.experience
                this.$http.post((this.experienceApi), data, {emulateJSON: false}).then(response => {
                    this.grouplist = response.body;
                    alert("提交成功")
                }, response => {
                    console.log(response)
                    alert("出问题啦")
                }).finally(
                    response => {
                        alert('over')
                        this.reload()
                    }
                )
            },

            // 编辑工作经验
            EditExperience: function (e) {
                // 隐藏内容展示区
                // e.currentTarget.parentElement.parentElement.style.display = 'none'
                // 显示编辑框
                var target = e.currentTarget.parentElement.parentElement.parentElement
                this.$refs.experienceForm.style.display = 'block'
                // 获取工作经验ID
                var experienceId = target.getAttribute('li-index')
                // 获取被编辑的工作经验数据
                this.experience = (this.experiences)[experienceId]
                // console.log(this.experience)
                // console.log(e.currentTarget.parentElement.parentElement.parentElement.getAttribute('li-type'))
                // location.reload()    // 整个页面重新加载，闪屏
                // this.reload()

                var curLiIndex = target.getAttribute('li-index')

                // 隐藏所有经验，只显示编辑
                var lis = document.querySelectorAll('.experience')
                for (var i = 0; i < lis.length; i++) {
                    var li = lis[i]
                    var liType = li.getAttribute('li-type')
                    if (liType == 1) {
                        continue
                    }
                    li.style.display = 'none'
                }

                console.log(this.$refs.experience_title.style.display)
                this.$refs.experience_title.style.display = 'none'
                console.log(this.$refs.experience_title.style.display)


                // 隐藏其他编辑框
                this.$refs.advantage_text.style.display = 'block'
                this.$refs.advantage_form.style.display = 'none'
                // 隐藏其他编辑框
                this.$refs.user_profile_text.style.display = 'block'
                this.$refs.user_profile_form.style.display = 'none'

                // 隐藏当前经验，显示所有其他经验
                // var lis = document.querySelectorAll('.experience')
                // for (var i = 0; i < lis.length; i++) {
                //     var li = lis[i]
                //     var liType = li.getAttribute('li-type')
                //     if (liType == 1) {
                //         continue
                //     }
                //     var liIndex = li.getAttribute('li-index')
                //     if (liIndex == curLiIndex) {
                //         li.style.display = 'none'
                //     } else {
                //         li.style.display = 'block'
                //     }
                // }
            },

            // 删除工作经验
            deleteExperience: function (e) {
                var target = e.currentTarget.parentElement.parentElement
                var data = target.getAttribute('li-index')
                this.$http.delete((this.experienceApi), data, {emulateJSON: false}).then(response => {
                    this.grouplist = response.body;
                    alert("提交成功")
                }, response => {
                    console.log(response)
                    alert("出问题啦")
                }).finally(
                    response => {
                        alert('over')
                        // this.reload()
                    }
                )


                target.style.display = 'none'
            },

            // 编辑个人优势
            editAdvantage: function () {
                // 其他编辑消失
                // this.reload()
                this.$refs.advantage_text.style.display = 'none'
                this.$refs.advantage_form.style.display = 'block'
                // 隐藏其他编辑框
                this.$refs.user_profile_text.style.display = 'block'
                this.$refs.user_profile_form.style.display = 'none'

                var lis = document.querySelectorAll('.experience')
                for (var i = 0; i < lis.length; i++) {
                    var li = lis[i]
                    var liType = li.getAttribute('li-type')
                    if (liType == 1) {
                        continue
                    }
                    li.style.display = 'block'
                }
            },

            // 编辑个人资料
            editUserProfile: function () {
                // // 其他编辑框消失 ===》 达不到预期效果，原因不明
                // this.reload()
                this.$refs.user_profile_text.style.display = 'none'
                this.$refs.user_profile_form.style.display = 'block'
                // 隐藏其他编辑框
                this.$refs.advantage_text.style.display = 'block'
                this.$refs.advantage_form.style.display = 'none'

                var lis = document.querySelectorAll('.experience')
                for (var i = 0; i < lis.length; i++) {
                    var li = lis[i]
                    var liType = li.getAttribute('li-type')
                    if (liType == 1) {
                        continue
                    }
                    li.style.display = 'block'
                }

            },

            // 取消编辑操作
            cancelEvent: function () {
                this.reload()
            },

            // 选择求职状态
            selectJobSearchStatus: function (e) {
                var key = e.currentTarget.getAttribute('job_search_status_key')
                var job_search_status = this.job_search_status_options[key - 1]
                this.job_search_status_value = job_search_status.value
                this.$refs.ui_dropdown_list.style.display = 'none'
                // 设置隐藏input的值，非必要
                // 设置当前求职状态
                this.user_profile.job_search_status = key
            },

            // 显示求职状态选择框
            showUiDropdownList: function () {
                this.$refs.ui_dropdown_list.style.display = 'block'
            },

            // 性别选中
            selectGender: function (e) {
                var target = e.currentTarget
                console.log(target)
                target.style.className = 'radio radio-checked2'
                var genderValue = target.getAttribute('gender-value')
                console.log(genderValue)
                this.user_profile.gender = genderValue
                console.log(this.user_profile)
            },
            // 上传简历附件弹窗
            showUploadBox: function () {
                this.$refs.dialogWrap.style.display = 'block'
                console.log(7777)
            },
            closeUploadBox: function () {
                this.$refs.dialogWrap.style.display = 'none'
            },
            // 简历附件显示
            showAnnexCard: function (e) {
                var target = e.currentTarget
                // console.log(target)
                // var temp = e.currentTarget.firstElementChild
                // var target = temp.nextElementSibling.nextElementSibling.nextElementSibling
                // var annexCard = target.nextElementSibling
                // console.log(annexCard)
                var current_index = target.getAttribute('current_index')
                console.log('current_index = ' + current_index)
                // 非当前附件框隐藏
                var annexCards = document.querySelectorAll('.annex-card')
                console.log(annexCards)
                for (var i = 0; i < annexCards.length; i++) {
                    var annexCard = annexCards[i]
                    var index = annexCard.getAttribute('annex-card-index')
                    console.log('index=' + index + ',cur = ' + current_index)
                    if (index == current_index) {
                        annexCard.style.display = 'block'
                    } else {
                        annexCard.style.display = 'none'
                    }
                }
            },
            // 简历附件显示
            showCurrentAnnexCard: function (e) {
                var target = e.currentTarget.parentElement
                target.style.display = 'block'
            },
            hideCurrentAnnexCard: function (e) {
                var target = e.currentTarget
                target.style.display = 'none'
            },
            hideCurrentAnnexCardLeaveAnnexItem: function (e) {
                var target = e.currentTarget.firstElementChild
                var annexCard = target.nextElementSibling.nextElementSibling.nextElementSibling
                console.log(annexCard)
                annexCard.style.display = 'none'
            },
            // 下载附件
            download: function (e) {
                var target = e.currentTarget
                var attachmentId = target.getAttribute('attachment_id')
                console.log(attachmentId)
                // href是文件地址
                var href = 'http://chugang.net'
                window.open(href, '_blank');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/User/index.css";
</style>
