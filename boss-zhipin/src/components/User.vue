<template>
  <div>
    <div id="wrap">
      <!--登录状态头部-->
      <LoginHeader ref="loginHeader" @showUploadBoxEvent="showUploadBox($event)"></LoginHeader>
      <div id="main-content" class="inner home-inner">
        <div class="job-box">
          <div class="side-bar">
            <div class="resume-attachment">
              <h3>附件管理</h3>
              <ul>
                <li v-for="(attachment,index) in resume_attachments">
                  <!--<div class="annex-item" tabindex="0" v-bind:current_index=index-->
                  <!--@mouseover="showAnnexCard($event)"-->
                  <!--@blur="hideCurrentAnnexCardLeaveAnnexItem($event)"-->
                  <!--&gt;-->
                  <div class="annex-item" tabindex="0" v-bind:current_index=index
                  >
                    <i class="icon-delete"></i>
                    <img src="/static/User/icon-file.png" class="icon-file">
                    <span class="resume-name"
                          v-on:click="download($event)"
                          v-bind:attachment_id=index
                    >
                                            {{ attachment.name }}
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
                        <div class="resume-name">{{ attachment.name }}</div>
                        <div class="upload-date">{{ attachment.size }} {{ attachment.upload_time }}
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
                      <h3>{{ user_profile.name }}<i class="gender"></i></h3>
                      <p>
                                            <span class="before-line-first"><i
                                              class="icon-experience"></i>{{ experience_value }}</span>
                        <span class="before-line"><i class="icon-degree"></i>{{ degree_value }}</span>
                        <span class="before-line"><i class="icon-status"></i>{{ job_search_status_value }}</span>
                      </p>
                      <p>
                        <span class="before-line-first"><i class="icon-phone"></i>{{ user_profile.telephone }}</span>
                        <span class="before-line"><i class="icon-min-wechat"></i>{{ user_profile.weixin }}</span>
                        <span class="before-line"><i
                          class="icon-email"></i>{{ user_profile.email }}</span>
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
                                            {{ job_search_status_value }}
                                            <i class="icon-arrow-right"></i>
                                        </span>
                      <div class="ui-dropdown-list" ref="ui_dropdown_list">
                        <ul>
                          <div v-for="option in job_search_status_options">
                            <li
                              v-bind:class="job_search_status_value == option.value ? 'ui-select-item ui-select-item-selected': 'ui-select-item'"
                              v-bind:job_search_status_key=option.key
                              v-on:click="selectJobSearchStatus($event)"
                            >
                              {{ option.value }}
                            </li>
                          </div>
                        </ul>
                        <input type="hidden" v-model="user_profile.job_search_status.code">
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
                      <!--<input name="birthday" type="text" v-model="user_profile.birthday">-->
                      <select id="input-s" class="select-option"
                              v-model="user_profile.birthday_year">
                        <option v-for="option in birthday_year_options"
                                :value="option.key">{{ option.value }}
                        </option>
                      </select>
                      <select id="input-sm" class="select-option"
                              v-model="user_profile.birthday_month">
                        <option v-for="option in birthday_month_options"
                                :value="option.key">{{ option.value }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="form-item">
                    <div class="item-label">
                      微信号（选填）
                    </div>
                    <div class="item-content">
                      <input name="wechat" type="text" v-model="user_profile.weixin">
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

                  <div class="form-item">
                    <div class="item-label">
                      学历
                    </div>
                    <div class="item-content job-status-dropdown">
                                        <span class="job-status" v-on:click="showUiDropdownListDegree">
                                            {{ degree_value }}
                                            <i class="icon-arrow-right"></i>
                                        </span>
                      <div class="ui-dropdown-list" ref="ui_dropdown_list_degree">
                        <ul>
                          <div v-for="option in degree_options">
                            <li
                              v-bind:class="degree_value == option.value ? 'ui-select-item ui-select-item-selected': 'ui-select-item'"
                              v-bind:degree_key=option.key
                              v-on:click="selectDegree($event)"
                            >
                              {{ option.value }}
                            </li>
                          </div>
                        </ul>
                        <input type="hidden" v-model="user_profile.degree.value">
                      </div>
                    </div>
                  </div>

                  <div class="form-item">
                    <div class="item-label">
                      工作经验
                    </div>
                    <div class="item-content job-status-dropdown">
                                        <span class="job-status" v-on:click="showUiDropdownListExperience">
                                            {{ experience_value }}
                                            <i class="icon-arrow-right"></i>
                                        </span>
                      <div class="ui-dropdown-list" ref="ui_dropdown_list_experience">
                        <ul>
                          <div v-for="option in experience_options">
                            <li
                              v-bind:class="experience_value == option.value ? 'ui-select-item ui-select-item-selected': 'ui-select-item'"
                              v-bind:experience_key=option.key
                              v-on:click="selectExperience($event)"
                            >
                              {{ option.value }}
                            </li>
                          </div>
                        </ul>
                        <input type="hidden" v-model="user_profile.experience.value">
                      </div>
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
                      {{ user_advantage.advantage }}
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
                  <h4 class="title" ref="experience_title">工作经历</h4>
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
                                <!--<input type="text" name="compnay"-->
                                <!--v-model="experience.working_hours">-->
                                <div class="date-picker">
                                  <select id="working-year-start"
                                          class="select-option-small"
                                          v-model="experience.working_year_start"
                                          @change="getWorkingHours">
                                    <option v-for="option in birthday_year_options"
                                            :value="option.key">{{ option.value }}
                                    </option>
                                  </select>
                                  <select id="working-month-start"
                                          class="select-option-small"
                                          v-model="experience.working_month_start"
                                          @change="getWorkingHours">
                                    <option v-for="option in birthday_month_options"
                                            :value="option.key">{{ option.value }}
                                    </option>
                                  </select>
                                </div>
                                <span>--</span>
                                <div class="date-picker">
                                  <select id="working-year-end"
                                          class="select-option-small"
                                          v-model="experience.working_year_end"
                                          @change="getWorkingHours">
                                    <option v-for="option in birthday_year_options"
                                            :value="option.key">{{ option.value }}
                                    </option>
                                  </select>
                                  <select id="working-month-end"
                                          class="select-option-small"
                                          v-model="experience.working_month_end"
                                          @change="getWorkingHours">
                                    <option v-for="option in birthday_month_options"
                                            :value="option.key">{{ option.value }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--todo 暂时隐藏技能标签-->
                          <div class="one-line form-item-all" style="display: none">
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
                    <div ref="experience_box">
                      <div v-for="experience in experiences">
                        <li class="experience" v-bind:li-index="experience.id" v-bind:li-type="2">
                          <div class="item-info">
                            <div class="item-txt">
                              <span class="title">{{ experience.company_name }}</span>
                              <span class="work-period">{{ experience.start_time }}-{{ experience.end_time }}</span>
                            </div>
                            <div class="position-name">{{ experience.position_name }}</div>
                            <div class="item-txt pre-line">
                              <span class="txt-type">内容</span>
                              {{ experience.job_content }}
                            </div>
                            <div class="item-txt pre-line">
                              <span class="txt-type">业绩</span>
                              {{ experience.performance }}
                            </div>
                            <!--                          todo 技能标签隐藏，暂不实现-->
                            <div class="keywords" style="display: none">
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
                    </div>
                    <div
                      style="width: 100%;margin-top: 40px" ref="add_experience_btn"
                      @click="hideExperienceBox"
                    >
                      <div id="add-experience-btn">新增工作经历</div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--footer-->
      <PageFooter></PageFooter>
      <!--<div id="side-bar">Side Bar</div>难度比较大，不实现-->
    </div>
    <!--上传附件简历弹窗-->
    <DragUploadFile ref="dialogWrap"></DragUploadFile>
  </div>
</template>

<script>
import DragUploadFile from '../plugin/drag-upload-file';
import LoginHeader from '../plugin/login-header';
import PageFooter from '../plugin/page-footer';


export default {
  inject: ['reload'],
  name: 'HelloWorld',
  components: {
    DragUploadFile: DragUploadFile,
    LoginHeader: LoginHeader,
    PageFooter: PageFooter,
  },
  data() {
    return {
      isLogin: false,   //是否登录
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
        type: '',
      },

      user_profile: {
        user_id: '',
        name: '姓名2',
        job_search_status: {},//{code:'',text:''},
        gender: 2,
        birthday: '',
        birthday_year: '0',
        birthday_month: '0',
        telephone: '-',
        weixin: '-',
        email: '-',
        identity: '',
        degree: {},
        experience: {},
        advantage: '',
      },

      user_advantage: {
        user_id: 0,
        advantage: '',
      },

      experience: {
        id: 0,
        user_id: 0,
        company_name: '',
        department: '',
        position_type: '',
        // tags: ['后端开发', 'PHP', '系统架构'],
        industry: '',
        position_name: '',
        working_year_start: '0',
        working_month_start: '0',
        working_year_end: '0',
        working_month_end: '0',
        job_content: '',
        performance: '',
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
          '4. 使用简单的SQL语句，通过在PHP中处理业务逻辑拼装数据，完成复杂的统计需求。',
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
          '4. 使用简单的SQL语句，通过在PHP中处理业务逻辑拼装数据，完成复杂的统计需求。',
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
          '5. Test。',
      },

      experiences: [],
      apiHostDev: 'http://boss.api-cg.com',
      apiHostProd: 'http://boss-api.chugang.net',
      apiHost: '',
      // 获取工作经验列表
      experienceListApi: '/api/user/experience-list',
      // 工作经验更新、新增、删除
      experienceApi: '/api/user/experience',
      // 用户信息：查询、更新
      userProfileApi: '/api/user',
      // 个人优势
      userAdvantageApi: '/api/user/advantage',

      job_search_status_options:
        [
          {key: 1, value: '离职-随时到岗'},
          {key: 2, value: '在职-暂不考虑'},
          {key: 3, value: '在职-考虑机会'},
          {key: 4, value: '在职-月内到岗'},
        ],
      // 工作经历，编辑个人资料使用
      experience_options:
        [{key: 0, value: '不限'}, {key: 1, value: '在校生'}, {key: 2, value: '应届生'}, {key: 3, value: '1年以内'}, {
          key: 4,
          value: '1-3年',
        }, {key: 5, value: '3-5年'}, {key: 6, value: '5-10年'}, {key: 7, value: '10年以上'}],

      // 学历，编辑个人资料使用
      degree_options:
        [{key: 0, value: '不限'}, {key: 1, value: '初中及以下'}, {key: 2, value: '中专/中技'}, {key: 3, value: '高中'}, {
          key: 4,
          value: '大专',
        }, {key: 5, value: '本科'}, {key: 6, value: '硕士'}, {key: 7, value: '博士'}],

      job_search_status_value:
        '不限',
      experience_value: '不限',
      degree_value: '不限',

      // 简历附件管理
      attachment1:
        {
          name: '小明的简历1.pdf', size:
            '32KB', update_time:
            '2020-08-23 17:54',
        }
      ,
      attachment2: {
        name: '小明的简历2.pdf', size:
          '32KB', update_time:
          '2020-08-23 17:54',
      }
      ,
      attachment3: {
        name: '小明的简历3.pdf', size:
          '32KB', update_time:
          '2020-08-23 17:54',
      }
      ,
      attachment4: {
        name: '小明的简历4.pdf', size:
          '32KB', update_time:
          '2020-08-23 17:54',
      }
      ,
      resume_attachments: [],

      // 个人资料--生日
      birthday_year_options_boundary_value:
        [1970, 2000],
      birthday_month_options_boundary_value:
        [1, 12],
      birthday_year_options:
        [],
      birthday_month_options:
        [],
      // birthday_year: '',
      // birthday_month: '',
      // 用户资料
      userObject: null,
    };
  },
  mounted() {
    let apiHost = process.env.NODE_ENV == 'development' ? this.apiHostDev : this.apiHostProd;
    this.apiHost = apiHost;
    let userObject = this.$cookies.get('user');
    console.log('==============userObject start');
    console.log(userObject);
    console.log('==============userObject end');
    if (userObject != null) {
      this.isLogin = true;
    }

    if (this.isLogin == false) {
      this.$router.push({path: 'job-list'});
      return;
    }
    this.userObject = userObject;
    let user_id = userObject.id;
    console.log('================user_id start');
    console.log(user_id);
    console.log('================user_id end');
    // 获取用户信息
    // 用户ID不能简单地从路由中获得，避免A用户恶意修改B用户资料
    this.getUserProfile(user_id);
    // 获取工作经验
    this.getExperienceList(user_id);
    // var job_search_status_index = this.user_profile.job_search_status - 1
    // var job_search_status = this.job_search_status_options[job_search_status_index]
    // this.job_search_status_value = job_search_status.value
    // console.log("===========start============")
    // console.log(this.job_search_status_value)
    // console.log("===========end============")
    // this.item.user_name = 'hello'
    // this.user_profile.email = 'chuganghong@qq.com'
    // this.user_advantage.advantage = 'I am rich';
    // this.experience.performance = 'well done!';
    // 从API获取工作经验数据
    this.experiences = [this.experience1, this.experience2, this.experience3];
    // 从API获取简历附件
    this.resume_attachments = [this.attachment1, this.attachment2, this.attachment3];
    this.birthday_year_options.push({key: 0, value: '请选择年份'});
    for (var i = 1970; i <= 2000; i++) {
      this.birthday_year_options.push({key: i, value: i});
    }
    this.birthday_month_options.push({key: 0, value: '请选择月份'});
    for (var i = 1; i <= 12; i++) {
      if (i < 10) {
        i = '0' + i;
      }
      this.birthday_month_options.push({key: i, value: i});
    }

    // 调试tool start
    this.getDatabaseComment(this.job_search_status_options, true);
    // 调试end end

  },
  methods: {
    // 获取工作经验
    getExperienceList: function (userId) {
      let params = {'user_id': userId};
      let experienceListApi = this.apiHost + this.experienceListApi
      this.$http.get((experienceListApi), {params: params}, {emulateJSON: true}).then(response => {
        this.experiences = response.body.data;
        console.log('==========this.getExperienceList start');
        this.experiences.map(function (experience, index) {
          let startTime = experience.start_time.split('-');
          experience.working_year_start = startTime[0];
          experience.working_month_start = startTime[1];

          let endTime = experience.end_time.split('-');
          experience.working_year_end = endTime[0];
          experience.working_month_end = endTime[1];
        });
        console.log(this.experiences);
        console.log('==========this.getExperienceList end');
      }, response => {
        // console.log(response)
        // alert("出问题啦")
      }).finally(
        response => {
          // alert('over')
          // this.reload()
        },
      );
    },
    // 获取用户信息
    getUserProfile: function (userId) {
      let params = {'user_id': userId};
      let userProfileApi = this.apiHost + this.userProfileApi;
      this.$http.get((userProfileApi), {params: params}, {emulateJSON: true}).then(response => {
        this.user_profile = response.body.data;
        console.log('==========this.user_profile start');
        console.log(this.user_profile);
        console.log('==========this.user_profile end');
        this.job_search_status_value = this.user_profile.job_search_status.text;
        this.degree_value = this.user_profile.degree.name;
        this.experience_value = this.user_profile.experience.name;
        this.user_advantage.advantage = this.user_profile.advantage;
        this.user_advantage.user_id = this.user_profile.user_id;

        // var job_search_status_index = this.user_profile.job_search_status - 1
        // var job_search_status = this.job_search_status_options[job_search_status_index]
        // this.job_search_status_value = job_search_status.value
        console.log('===========start============');
        console.log(this.job_search_status_value);
        console.log('===========end============');
        this.item.user_name = 'hello';
        this.user_profile.email = 'chuganghong@qq.com';
        // this.user_profile.degree = this.user_profile.degree.name;

      }, response => {
        // console.log(response)
        // alert("出问题啦")
      }).finally(
        response => {
          // alert('over')
          // this.reload()
        },
      );
    },
    // 调试tool start
    getDatabaseComment(collection, flag) {
      console.log('debug start');
      var comment = '';
      for (var i = 0; i < collection.length; i++) {
        var salary = collection[i];
        var key = flag ? salary.key : i;
        comment += key + '.' + salary.value + '；';
      }
      console.log(comment);
      console.log('debug start');
    },
    // 调试end end
    // // 头部组件触发事件--》本父组件--》上传简历附件组件
    // showUploadBox: function (e) {
    //     alert(888888888)
    //     this.$refs.dialogWrap.showUploadBox()
    // },
    // 用户信息
    SubUserProfile: function () {
      if (this.user_profile.birthday_year * this.user_profile.birthday_month == 0) {
        console.log('请选择年份和月份');
      }
      var birthday = this.user_profile.birthday_year + '-' + this.user_profile.birthday_month;
      this.user_profile.birthday = birthday;
      console.log(this.user_profile);
      var data = this.user_profile;
      console.log('data ========= start');
      data.job_search_status = data.job_search_status.code;
      console.log(data);
      data.degree = data.degree.code;
      data.experience = data.experience.code;

      console.log('data ========= end');
      let userProfileApi = this.apiHost + this.userProfileApi;
      this.$http.post((userProfileApi), data, {emulateJSON: true}, {
        headers: {
          Authorization: 'Bearer ',
          'Content-Type': 'multipart/form-data',
        },
      }).then(response => {
        let result = response.body;
        console.log('用户信息 提交成功 start');
        console.log(result);
        console.log('用户信息 提交成功 end');
        // 隐藏本编辑框
        this.$refs.user_profile_form.style.display = 'none';
        this.$refs.user_profile_text.style.display = 'block';
      }, response => {
        console.log(response);
        this.$message({
          message: '出问题啦',
          type: 'error',
        });
      });
    },

    // 个人优势
    SubUserAdvantage: function () {
      console.log(this.user_advantage);
      // let data = {
      //     advantage: '',
      //     user_id: 0
      // }
      // data.advantage = this.user_advantage.advantage
      // data.user_id = 1
      this.user_advantage.user_id = this.userObject.id;     // 测试
      let data = this.user_advantage;
      let userAdvantageApi = this.apiHost + this.userAdvantageApi;
      this.$http.put((userAdvantageApi), data, {emulateJSON: true}).then(response => {
        let result = response.body;
        console.log('---------SubUserAdvantage start------');
        console.log(result);
        console.log('---------SubUserAdvantage end------');
      }, response => {
        console.log(response);
        alert('出问题啦');
      }).finally(response => {
        this.reload();
      });
    },

    // 工作经验
    SubExperience: function () {
      if (this.checkWorkingHoursIsValid() == false) {
        alert('开始时间必须小于结束时间');
        return;
      }
      console.log(this.experience);
      // this.experience.id =
      this.experience.user_id = this.user_profile.user_id;
      var data = this.experience;

      console.log('sub EditExperience start');
      console.log(this.experience);
      console.log('sub EditExperience end');
      let experienceApi = this.apiHost + this.experienceApi;
      this.$http.post((experienceApi), data, {emulateJSON: true}).then(response => {
        this.grouplist = response.body;
        this.$message({
          message: '提交成功',
          type: 'success',
        });
        // 隐藏编辑框
        this.$refs.experienceForm.style.display = 'none';
        this.reload();
      }, response => {
        console.log(response);
        this.$message({
          message: '出问题啦',
          type: 'error',
        });
      }).finally(
        response => {
          // alert('over');
          // this.reload()
        },
      );
    },

    // 编辑工作经验
    EditExperience: function (e) {
      // 隐藏内容展示区
      // e.currentTarget.parentElement.parentElement.style.display = 'none'
      // 显示编辑框
      var target = e.currentTarget.parentElement.parentElement.parentElement;
      this.$refs.experienceForm.style.display = 'block';
      // 获取工作经验ID
      var experienceId = target.getAttribute('li-index');
      // 获取被编辑的工作经验数据
      this.experience = (this.experiences)[experienceId];
      // console.log(this.experience)
      // console.log(e.currentTarget.parentElement.parentElement.parentElement.getAttribute('li-type'))
      // location.reload()    // 整个页面重新加载，闪屏
      // this.reload()

      var curLiIndex = target.getAttribute('li-index');

      // 隐藏所有经验，只显示编辑
      let lis = document.querySelectorAll('.experience');
      for (let i = 0; i < lis.length; i++) {
        var li = lis[i];
        var liType = li.getAttribute('li-type');
        if (liType == 1) {
          continue;
        }
        li.style.display = 'none';
      }

      console.log(this.$refs.experience_title.style.display);
      this.$refs.experience_title.style.display = 'none';
      console.log(this.$refs.experience_title.style.display);


      // 隐藏其他编辑框
      this.$refs.advantage_text.style.display = 'block';
      this.$refs.advantage_form.style.display = 'none';
      // 隐藏其他编辑框
      this.$refs.user_profile_text.style.display = 'block';
      this.$refs.user_profile_form.style.display = 'none';
      // 隐藏新增按钮
      this.$refs.add_experience_btn.style.display = 'none';

      // 设置当前编辑的用户经验
      // 不能使用this.experiences的元素索引Index，它与经验ID并非总是一一对应的关系
      for (let index = 0; index < this.experiences.length; index++) {
        let experience = this.experiences[index];
        if (experience.id == curLiIndex) {
          this.experience = this.experiences[index];
          break;
        }
      }

      console.log('EditExperience start');
      console.log(this.experience);
      console.log('EditExperience end');

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
      var target = e.currentTarget.parentElement.parentElement.parentElement;
      var experienceId = target.getAttribute('li-index');
      let data = {'id': experienceId};
      console.log('删除工作经验 data');
      console.log(target);
      console.log(data);
      console.log('删除工作经验 data');
      let experienceApi = this.apiHost + this.experienceApi;
      this.$http.delete((experienceApi), {params: data}, {emulateJSON: true}).then(response => {
        let result = response.body;
        this.$message({
          message: '删除成功',
          type: 'success',
        });
        console.log('删除工作经验 start');
        console.log(result);
        console.log('删除工作经验 end');
      }, response => {
        console.log(response);
        // alert('出问题啦');
        this.$message({
          message: '出问题啦',
          type: 'error',
        });
      }).finally(
        response => {
          // alert('over');
          // this.reload()
        },
      );


      target.style.display = 'none';
    },

    // 编辑个人优势
    editAdvantage: function () {
      // 其他编辑消失
      // this.reload()
      this.$refs.advantage_text.style.display = 'none';
      this.$refs.advantage_form.style.display = 'block';
      // 隐藏其他编辑框
      this.$refs.user_profile_text.style.display = 'block';
      this.$refs.user_profile_form.style.display = 'none';

      var lis = document.querySelectorAll('.experience');
      for (var i = 0; i < lis.length; i++) {
        var li = lis[i];
        var liType = li.getAttribute('li-type');
        if (liType == 1) {
          continue;
        }
        li.style.display = 'block';
      }
    },

    // 编辑个人资料
    editUserProfile: function () {
      // // 其他编辑框消失 ===》 达不到预期效果，原因不明
      // this.reload()
      this.$refs.user_profile_text.style.display = 'none';
      this.$refs.user_profile_form.style.display = 'block';
      // 隐藏其他编辑框
      this.$refs.advantage_text.style.display = 'block';
      this.$refs.advantage_form.style.display = 'none';

      var lis = document.querySelectorAll('.experience');
      for (var i = 0; i < lis.length; i++) {
        var li = lis[i];
        var liType = li.getAttribute('li-type');
        if (liType == 1) {
          continue;
        }
        li.style.display = 'block';
      }

    },

    // 取消编辑操作
    cancelEvent: function () {
      this.reload();
    },

    // 选择求职状态
    selectJobSearchStatus: function (e) {
      let key = e.currentTarget.getAttribute('job_search_status_key');
      let job_search_status = this.job_search_status_options[key - 1];
      console.log('=========== selectJobSearchStatus start');
      console.log(key);
      console.log(job_search_status);
      console.log('=========== selectJobSearchStatus end');
      this.job_search_status_value = job_search_status.value;
      this.$refs.ui_dropdown_list.style.display = 'none';
      // 设置隐藏input的值，非必要
      // 设置当前求职状态
      this.user_profile.job_search_status.code = key;
    },

    // 选择工作经验
    selectExperience: function (e) {
      let key = e.currentTarget.getAttribute('experience_key');
      let experience = this.experience_options[key];
      this.experience_value = experience.value;
      this.$refs.ui_dropdown_list_experience.style.display = 'none';
      // 设置隐藏input的值，非必要
      // 设置当工作经验
      this.user_profile.experience.code = key;
    },

    // 选择学历
    selectDegree: function (e) {
      let key = e.currentTarget.getAttribute('degree_key');
      console.log('key start==============');
      console.log(key);
      console.log(this.degree_options);
      console.log('key end==============');
      let degree = this.degree_options[key];
      this.degree_value = degree.value;
      this.$refs.ui_dropdown_list_degree.style.display = 'none';
      // 设置隐藏input的值，非必要
      // 设置当前学历
      this.user_profile.degree.code = key;
    },

    // 显示求职状态选择框
    showUiDropdownList: function () {
      this.$refs.ui_dropdown_list.style.display = 'block';
    },

    // 显示学历选择框
    showUiDropdownListDegree: function () {
      this.$refs.ui_dropdown_list_degree.style.display = 'block';
    },

    // 显示工作经验选择框
    showUiDropdownListExperience: function () {
      this.$refs.ui_dropdown_list_experience.style.display = 'block';
    },

    // 性别选中
    selectGender: function (e) {
      var target = e.currentTarget;
      console.log(target);
      target.style.className = 'radio radio-checked2';
      var genderValue = target.getAttribute('gender-value');
      console.log(genderValue);
      this.user_profile.gender = genderValue;
      console.log(this.user_profile);
    },
    // 上传简历附件弹窗
    showUploadBox: function () {
      this.$refs.dialogWrap.showUploadBox();
      console.log(7777);
    },
    // 简历附件显示
    showAnnexCard: function (e) {
      var target = e.currentTarget;
      // console.log(target)
      // var temp = e.currentTarget.firstElementChild
      // var target = temp.nextElementSibling.nextElementSibling.nextElementSibling
      // var annexCard = target.nextElementSibling
      // console.log(annexCard)
      var current_index = target.getAttribute('current_index');
      console.log('current_index = ' + current_index);
      // 非当前附件框隐藏
      var annexCards = document.querySelectorAll('.annex-card');
      console.log(annexCards);
      for (var i = 0; i < annexCards.length; i++) {
        var annexCard = annexCards[i];
        var index = annexCard.getAttribute('annex-card-index');
        console.log('index=' + index + ',cur = ' + current_index);
        if (index == current_index) {
          annexCard.style.display = 'block';
        } else {
          annexCard.style.display = 'none';
        }
      }
    },
    // 简历附件显示
    showCurrentAnnexCard: function (e) {
      var target = e.currentTarget.parentElement;
      target.style.display = 'block';
    },
    hideCurrentAnnexCard: function (e) {
      var target = e.currentTarget;
      target.style.display = 'none';
    },
    hideCurrentAnnexCardLeaveAnnexItem: function (e) {
      var target = e.currentTarget.firstElementChild;
      var annexCard = target.nextElementSibling.nextElementSibling.nextElementSibling;
      console.log(annexCard);
      annexCard.style.display = 'none';
    },
    // 下载附件
    download: function (e) {
      var target = e.currentTarget;
      var attachmentId = target.getAttribute('attachment_id');
      console.log(attachmentId);
      // href是文件地址
      var href = 'http://chugang.net';
      window.open(href, '_blank');
    },
    // 获取工作时间
    getWorkingHours() {
      // do nothing
      console.log(this.experience);
    },
    // 检测工作时间是否合法
    checkWorkingHoursIsValid() {
      var working_year_start = this.experience.working_year_start;
      var working_month_start = this.experience.working_month_start;

      var working_year_end = this.experience.working_year_end;
      var working_month_end = this.experience.working_month_end;

      if (parseInt(working_year_start) > parseInt(working_year_end)) {
        // alert('开始时间必须小于结束时间')
        return false;
      }
      if (parseInt(working_year_start) == parseInt(working_year_end)) {
        if (parseInt(working_month_start) > parseInt(working_month_end)) {
          // alert('开始时间必须小于结束时间')
          return false;
        }
      }
      return true;
    },
    // 隐藏新增工作经历按钮
    hideExperienceBox() {
      this.$refs.add_experience_btn.style.display = 'none';
      this.$refs.experienceForm.style.display = 'block';
      this.$refs.experience_box.style.display = 'none';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/User/index.css";
</style>
