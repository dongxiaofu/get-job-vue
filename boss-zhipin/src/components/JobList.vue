<template>
  <div>
    <div id="wrap">
      <!--头部菜单-->
      <!--<router-view></router-view>-->
      <Header v-show="!isLogin"></Header>
      <LoginHeader v-show="isLogin" :username={username} :apiHost={apiHost} @logout="logout"></LoginHeader>
      <div id="filter-box">
        <div class="inner home-inner">
          <div class="search-box">
            <div class="search-form-con">
              <div class="city" v-on:click="switchCityBox">
                <i class="line"></i>
                <span class="label-text">
                            <b>{{ searchKeyWordCity.city_name }}</b>
                            <i class="icon-arrow-down"></i>
                        </span>
              </div>
              <div class="company" tabindex="-1" v-on:click="showIndustryBox">
                <i class="line"></i>
                <span class="label-text">
                            <b class="key-word-industry">{{ industry.text }}</b>
                            <i class="icon-arrow-down"></i>
                        </span>
              </div>
              <div class="industry-box" ref="industryBox" style="display: none">
                <ul>
                  <li data-val="" class="industry-box-li">不限</li>
                  <!--<li data-val="100001" ka="sel-industry-1" class="industry-box-li">电子商务</li>-->
                  <li
                    v-for="(industry, index) in industryCollection"
                    v-bind:index=index
                    v-bind:code=industry.code
                    v-on:click="setSearchKeyWordIndustry($event)"
                    v-bind:class="[{'industry-li-visited':industryIsActive == index},'industry-box-li']"
                  >
                    {{ industry.name }}
                  </li>
                </ul>
              </div>
              <div class="position" tabindex="-1" v-on:click="switchPositionTypeBox">
                <i class="line"></i>
                <span class="label-text key-word-position-type">
                            <b>{{ positionType.text }}</b>
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
                    {{ category.name }}
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
                    {{ category.name }}
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
                    {{ category.name }}
                  </li>
                </ul>
              </div>
              <p class="ipt-wrap">
                <input class="ipt-search" type="text" placeholder="搜索职位、公司" v-model="keyWord">
              </p>
            </div>
            <button class="btn btn-search" v-on:click="search">搜索</button>
          </div>
          <div class="condition-box">
            <dl class="condition-city">
              <dd class="city-wrapper">
                <a class="disabled" href="javascript:;">{{ searchConditionCity.city_name }}</a>
                <em class="icon-arrow-right"></em>
                <a class="link-city selected"
                   href="javascript:;">{{ searchConditionCityArea.area_name }}</a>
                <em class="icon-arrow-right"></em>
                <span class="hot-text">热门城市：</span>
                <a
                  v-for="city in cityCollection"
                  v-bind:city-code=city.city_code
                  v-on:click="setSearchConditionCity($event)"
                >
                  {{ city.city_name }}
                </a>
              </dd>
            </dl>
            <dl class="condition-district" v-show="areaCollection.length">
              <dd class="district-wrapper">
                <!--<a class="first" href="/c101200100/" ka="sel-business-0">不限</a>-->
                <a
                  v-for="(area,index) in areaCollection"
                  v-on:click="setSearchConditionCityArea($event)"
                  v-bind:area-code=area.city_code
                  v-bind:index=index
                  :class="[{'first':index == 0},{'condition-district-select':searchConditionCityAreaIsActive == index}, '']"
                >
                  {{ area.city_name }}
                </a>
              </dd>
            </dl>
          </div>
          <div class="filter-select-box">
                <span class="dropdown-select first" @mouseenter="showExperience" @mouseleave="hideExperience">
                    <!--<input type="text" placeholder="{{experienceQuery}}" class="ipt" readonly>-->
                    <span :class="[{'selected':experienceQueryIsActive == true},'ipt']">
                        {{ experienceQuery.name }}
                    </span>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list" ref="experienceBox" style="display: none">
                        <ul>
                            <li
                              v-for="experience in experienceCollection"
                              v-bind:code=experience.code
                              v-on:click="setSearchKeyWordExperience($event)"
                            >
                                {{ experience.name }}
                            </li>
                        </ul>
                    </div>
                </span>
            <span class="dropdown-select" @mouseenter="showDegree" @mouseleave="hideDegree">
                            <span :class="[{'selected':degreeQueryIsActive == true},'ipt']">
                                {{ degreeQuery.name }}
                            </span>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list" style="display: none" ref="degreeBox">
                        <ul>
                            <li
                              v-for="degree in degreeCollection"
                              v-bind:code=degree.code
                              v-on:click="setSearchKeyWordDegree($event)"
                            >
                            {{ degree.name }}
                            </li>
                        </ul>
                    </div>
                </span>
            <span class="dropdown-select" @mouseenter="showSalaryBox" @mouseleave="hideSalaryBox">
                            <span :class="[{'selected':salaryQueryIsActive == true},'ipt']">
                                {{ salaryQuery.name }}
                            </span>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list" style="display: none" ref="salaryBox">
                        <ul>
                            <li
                              v-for="salary in salaryCollection"
                              v-bind:code=salary.code
                              v-on:click="setSearchKeyWordSalary($event)"
                            >
                            {{ salary.name }}
                            </li>
                        </ul>
                    </div>
                </span>
            <span class="dropdown-select" @mouseenter="showFinancingStageBox"
                  @mouseleave="hideFinancingStageBox">
                            <span :class="[{'selected':stageQueryIsActive == true},'ipt']">
                                {{ stageQuery.name }}
                            </span>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list" style="display: none" ref="financingStage">
                        <ul>
                            <li
                              v-for="stage in stageCollection"
                              v-bind:code=stage.code
                              v-on:click="setSearchKeyWordStage($event)"
                            >
                            {{ stage.name }}
                            </li>
                        </ul>
                    </div>
                </span>
            <span class="dropdown-select" @mouseenter="showCompanyScaleBox"
                  @mouseleave="hideCompanyScaleBox">
                        <span :class="[{'selected':scaleQueryIsActive == true},'ipt']">
                                {{ scaleQuery.name }}
                        </span>
                    <i class="icon-arrow-down"></i>
                    <div class="require-list" style="display: none" ref="companyScaleBox">
                        <ul>
                            <li
                              v-for="scale in scaleCollection"
                              v-bind:code=scale.code
                              v-on:click="setSearchKeyWordScale($event)"
                            >
                            {{ scale.name }}
                            </li>
                        </ul>
                    </div>
                </span>
            <!--<a class="last" href="javascript:;" @click="resetSearchCondition">清空筛选条件</a>-->
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
                  <li v-for="job in history_jobs">
                    <!--<a href="#">-->
                    <!--<h4 class="job.title">-->
                    <!--{{job.title}}-->
                    <!--<span class="salary">{{job.salary}}·{{job.salary_num}}</span>-->
                    <!--</h4>-->
                    <!--<p>{{job.company}}</p>-->
                    <!--</a>-->
                    <router-link :to="{path:'job-detail',query:{job_id:job.job_id}}">
                      <h4 class="job.title">
                        {{ job.title }}
                        <span class="salary">{{ job.salary }}·{{ job.salary_num }}</span>
                      </h4>
                      <p>{{ job.company.name }}</p>
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
                                        <router-link :to="{path:'job-detail',query:{job_id: jobDetail.job_id}}">
                                            {{ jobDetail.title }}
                                            <span class="job-area">
                                                {{ jobDetail.city }}·
                                                {{ jobDetail.area }}·
                                                {{ jobDetail.company.address }}
                                            </span>
                                        </router-link>
                                    </span>
                      <span class="job-jd">
                                        <span class="salary">{{ jobDetail.salary }}</span>
                                        <span class="ages">{{ jobDetail.experience }}<i class="line"></i></span>
                                        <span class="grade">
                                            {{ jobDetail.degree }}
                                        </span>
                                        <span class="employer">
                                            <img src="/static/JobList/icon-chat-v2.png">
                                            <span class="person">{{ jobDetail.employee.name }}</span>
                                            <i class="line"></i>
                                            <span class="title">{{ jobDetail.employee.title }}</span>
                                        </span>
                                    </span>
                    </div>
                  </div>
                  <div class="company-wrapper">
                    <div class="company-info">
                      <span class="company-name">{{ jobDetail.company.name }}</span>
                      <span class="company-append-info">
                                        <a href="#">
                                            <span>
                                                {{ jobDetail.company.industry }}
                                                <i class="line"></i>
                                            </span>
                                            <span>{{ jobDetail.company.stage }}<i class="line"></i></span>
                                            <span>{{ jobDetail.company.scale }}</span>
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
                                            {{ tag }}
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
                <div @click="setFeedBackAttitude($event)" v-bind:code="1"><i
                  :class="['emoj-not-statisfy',{'emoj-not-statisfy-selected':emojNotStatisfyIsActive == true}]"></i>不满意
                </div>
                <div @click="setFeedBackAttitude($event)" v-bind:code="2"><i
                  :class="['emoj-just-so-so', {'emoj-just-so-so-selected':emojJustSoSoIsActive == true}]"></i>一般
                </div>
                <div @click="setFeedBackAttitude($event)" v-bind:code="3">
                  <i :class="['emoj-ok', {'emoj-ok-selected':emojOkIsActive == true}]"></i>满意
                </div>
              </div>
              <div class="feedback-textarea">
                <div class="feedback-textarea-wrapper">
                                    <textarea @input="writeFeedBackContent" class="txt" placeholder="请填写更多反馈建议"
                                              ref="feedBackContent"></textarea>
                  <button :class="['btn', {'btn-disabled':feedBackDisabled == true}]"
                          @click="submitFeedBack">提交
                  </button>
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
      <!--<div id="side-bar">Side Bar</div>难度比较大，不实现-->
      <!--footer-->
      <PageFooter></PageFooter>
    </div>
    <!--搜索框地址弹出-->
    <CityPopWindow ref="cityPopWindow" @selectCity="setSearchKeyWordCity($event)"></CityPopWindow>
  </div>
</template>

<script>
import merge from 'webpack-merge';
import Header from '../plugin/header';
import LoginHeader from '../plugin/login-header';
import CityPopWindow from '../plugin/city-pop-window';
import PageFooter from '../plugin/page-footer';

export default {
  name: 'JobList',
  inject: ['reload'],
  components: {
    Header: Header,
    LoginHeader: LoginHeader,
    CityPopWindow: CityPopWindow,
    PageFooter: PageFooter,
  },
  data() {
    return {
      // 查询工作列表的查询参数
      searchJobsParams: new Object(),
      jobs: [
        {job_id: 1, title: 'IOS高级开发工程师', salary: '13-25K', salary_num: '14薪', company: '今日头条'},
        {job_id: 2, title: 'IOS高级开发工程师', salary: '13-25K', salary_num: '14薪', company: '今日头条'},
        {job_id: 3, title: 'IOS高级开发工程师', salary: '13-25K', salary_num: '14薪', company: '今日头条'},
        {job_id: 4, title: 'IOS高级开发工程师', salary: '13-25K', salary_num: '14薪', company: '今日头条'},
        {job_id: 5, title: 'IOS高级开发工程师', salary: '13-25K', salary_num: '14薪', company: '今日头条'},
      ],
      // 看过的职位
      history_jobs: [],
      jobDetailList: [],
      // jobDetailList: [
      //     {
      //         jobId: 3,
      //         tags: ['全屋定制设计', '装饰装修', '设计师', '整套施工图'],
      //         benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
      //         title: 'PHP研发工程师',
      //         city: '杭州',
      //         area: '萧山区',
      //         address: '五角大楼',
      //         salary: '5-10K',
      //         experience: '3-5年',
      //         degree: '大专',
      //         company: {name: '小码教育', industry: '在线教育', financingStage: 'C轮', scale: '100-99人'},
      //         employee: {name: '孙悟空', title: '创意总监'}
      //     },
      //     {
      //         jobId: 3,
      //         tags: ['全屋定制设计', '装饰装修', '设计师', '整套施工图'],
      //         benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
      //         name: 'PHP研发工程师',
      //         city: '杭州',
      //         area: '萧山区',
      //         address: '五角大楼',
      //         salary: '5-10K',
      //         experience: '3-5年',
      //         degree: '大专',
      //         company: {name: '小码教育', industry: '在线教育', financingStage: 'C轮', scale: '100-99人'},
      //         employee: {name: '孙悟空', title: '创意总监'}
      //     },
      //     {
      //         jobId: 3,
      //         tags: ['全屋定制设计', '装饰装修', '设计师', '整套施工图'],
      //         benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
      //         name: 'PHP研发工程师',
      //         city: '杭州',
      //         area: '萧山区',
      //         address: '五角大楼',
      //         salary: '5-10K',
      //         experience: '3-5年',
      //         degree: '大专',
      //         company: {name: '小码教育', industry: '在线教育', financingStage: 'C轮', scale: '100-99人'},
      //         employee: {name: '孙悟空', title: '创意总监'}
      //     },
      //     {
      //         jobId: 3,
      //         tags: ['全屋定制设计', '装饰装修', '设计师', '整套施工图'],
      //         benefits: ['全屋定制设计', ' 装饰装修', ' 设计师', ' 整套施工图'],
      //         name: 'PHP研发工程师',
      //         city: '杭州',
      //         area: '萧山区',
      //         address: '五角大楼',
      //         salary: '5-10K',
      //         experience: '3-5年',
      //         degree: '大专',
      //         company: {name: '小码教育', industry: '在线教育', financingStage: 'C轮', scale: '100-99人'},
      //         employee: {name: '孙悟空', title: '创意总监'}
      //     },
      // ],
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

      // 行业
      industryCollection: [],
      industryIsActive: false,

      // 筛选条件:工作经验、学历要求、薪资要求、融资阶段、公司规模
      experienceQuery: {code: '0', name: '工作经验'},
      degreeQuery: {code: '0', name: '学历要求'},
      salaryQuery: {code: '0', name: '薪资要求'},
      stageQuery: {code: '0', name: '融资阶段'},
      scaleQuery: {code: '0', name: '公司规模'},

      experienceCollection: [],
      degreeCollection: [],
      salaryCollection: [],
      stageCollection: [],
      scaleCollection: [],

      experienceQueryIsActive: false,
      degreeQueryIsActive: false,
      salaryQueryIsActive: false,
      stageQueryIsActive: false,
      scaleQueryIsActive: false,

      // 地区:城市、城区（不用代号查询，直接在工作中存储城区名）
      cityCollection: [],
      areaCollection: [],
      searchConditionCity: {city_code: '0', city_name: '不限'},    // 不能有逗号
      searchConditionCityArea: {area_name: '不限'},
      searchConditionCityAreaIsActive: false,

      // 反馈
      username: '',
      isLogin: false,
      feedBackAttitude: '0',   // 对搜索结果是否满意？
      feedBackDisabled: true,  // 反馈按钮是否可用
      feedBackContent: '',      // 反馈内容
      attitudeCode: 0,         //
      // 反馈态度图标是否变为绿色
      emojNotStatisfyIsActive: false,
      emojJustSoSoIsActive: false,
      emojOkIsActive: false,
      emojIsActiveCollection: [false, false, false], // 只有一个图标是绿色。暂未使用。

      // 接口地址
      apiHostDev: 'http://boss.api-cg.com',
      apiHostProd: 'http://boss-api.chugang.net',
      apiHost: '',
      industryListApi: '/api/job/industry-list',
      searchFilterConfigApi: '/api/job/search-filter-config',
      getJobListApi: '/api/job/list',
      recommend_jobs_list_api: '/api/city/list/hot',
      cityListChildrenApi: '/api/city/list/children',
    };
  },
  mounted() {
    let apiHost = process.env.NODE_ENV == 'development' ? this.apiHostDev : this.apiHostProd;
    this.apiHost = apiHost;

    let userObject = this.$cookies.get('user');
    console.log('==============userObject start');
    console.log(userObject);
    console.log('==============userObject end');
    if (!userObject) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
      this.username = userObject.name;
    }
    // 错误的判断是不是等于null的方法
    // if (userObject != null || userObject != 'null') {
    //   alert(1)
    //   this.isLogin = true;
    //   this.username = userObject.name;
    // } else {
    //   this.isLogin = false;
    //   alert('logout')
    // }

    this.searchKeyWordCity = {city_code: '1000', city_name: '北京'};

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
      {code: 200000, name: '其他'}];

    this.secondPositionTypes = [{code: 110100, name: '产品经理2'},
      {code: 110300, name: '高端产品职位'},
      {code: 110400, name: '其他产品职位'}];

    this.thirdPositionTypes = [{code: 100211, name: 'UE4'},
      {code: 100299, name: '移动开发'},
      {code: 100201, name: 'HTML5'},
      {code: 100202, name: 'Android'},
      {code: 100203, name: 'iOS'},
      {code: 100205, name: '移动web前端'},
      {code: 100206, name: 'Flash开发'},
      {code: 100208, name: 'JavaScript'},
      {code: 100209, name: 'U3D'},
      {code: 100210, name: 'COCOS2DX'}];

    this.industryCollection = [{code: 100001, name: '电子商务'},
      {code: 100002, name: '游戏'},
      {code: 100003, name: '媒体'},
      {code: 100004, name: '广告营销'},
      {code: 100005, name: '数据服务'},
      {code: 100006, name: '医疗健康'},
      {code: 100007, name: '生活服务'},
      {code: 100008, name: 'O2O'},
      {code: 100009, name: '旅游'},
      {code: 100010, name: '分类信息'},
      {code: 100011, name: '音乐/视频/阅读'},
      {code: 100012, name: '在线教育'},
      {code: 100013, name: '社交网络'},
      {code: 100014, name: '人力资源服务'},
      {code: 100015, name: '企业服务'},
      {code: 100016, name: '信息安全'},
      {code: 100018, name: '智能硬件'},
      {code: 100019, name: '移动互联网'},
      {code: 100020, name: '互联网'},
      {code: 100021, name: '计算机软件'},
      {code: 100024, name: '通信/网络设备'},
      {code: 100101, name: '广告/公关/会展'},
      {code: 100206, name: '互联网金融'},
      {code: 100502, name: '物流/仓储'},
      {code: 100504, name: '贸易/进出口'},
      {code: 100601, name: '咨询'},
      {code: 100702, name: '工程施工'},
      {code: 100801, name: '汽车生产'},
      {code: 101304, name: '其他行业'}];

    this.experienceCollection = [{code: 0, name: '不限'},
      {code: 0, name: '在校生'},
      {code: 0, name: '应届生'},
      {code: 0, name: '1年以内'},
      {code: 0, name: '1-3年'},
      {code: 0, name: '3-5年'},
      {code: 0, name: '5-10年'},
      {code: 0, name: '10年以上'}];
    this.degreeCollection = [{code: 0, name: '不限'},
      {code: 0, name: '初中及以下'},
      {code: 0, name: '中专/中技'},
      {code: 0, name: '高中'},
      {code: 0, name: '大专'},
      {code: 0, name: '本科'},
      {code: 0, name: '硕士'},
      {code: 0, name: '博士'}];
    this.salaryCollection = [{code: 0, name: '不限'},
      {code: 0, name: '3K以下'},
      {code: 0, name: '3-5K'},
      {code: 0, name: '5-10K'},
      {code: 0, name: '10-15K'},
      {code: 0, name: '15-20K'},
      {code: 0, name: '20-30K'},
      {code: 0, name: '30-50K'},
      {code: 0, name: '50K以上'}];
    this.stageCollection = [{code: 0, name: '不限'},
      {code: 0, name: '未融资'},
      {code: 0, name: '天使轮'},
      {code: 0, name: 'A轮'},
      {code: 0, name: 'B轮'},
      {code: 0, name: 'C轮'},
      {code: 0, name: 'D轮及以上'},
      {code: 0, name: '已上市'},
      {code: 0, name: '不需要融资'}];
    this.scaleCollection = [{code: 0, name: '不限'},
      {code: 0, name: '0-20人'},
      {code: 0, name: '20-99人'},
      {code: 0, name: '100-499人'},
      {code: 0, name: '500-999人'},
      {code: 0, name: '1000-9999人'},
      {code: 0, name: '10000人以上'}];

    this.experienceQuery = {code: '0', name: '工作经验'};
    this.degreeQuery = {code: '0', name: '学历要求'};
    this.salaryQuery = {code: '0', name: '薪资要求'};
    this.stageQuery = {code: '0', name: '融资阶段'};
    this.scaleQuery = {code: '0', name: '公司规模'};

    // this.cityCollection = [{city_code: '100010000', city_name: '全国'},
    //     {city_code: '101010100', city_name: '北京'},
    //     {city_code: '101020100', city_name: '上海'},
    //     {city_code: '101280100', city_name: '广州'},
    //     {city_code: '101280600', city_name: '深圳'},
    //     {city_code: '101210100', city_name: '杭州'},
    //     {city_code: '101030100', city_name: '天津'},
    //     {city_code: '101110100', city_name: '西安'},
    //     {city_code: '101190400', city_name: '苏州'},
    //     {city_code: '101200100', city_name: '武汉'},
    //     {city_code: '101230200', city_name: '厦门'},
    //     {city_code: '101250100', city_name: '长沙'},
    //     {city_code: '101270100', city_name: '成都'},
    //     {city_code: '101180100', city_name: '郑州'},
    //     {city_code: '101040100', city_name: '重庆'},]
    // this.areaCollection = [{area_name: '不限'},
    //     {area_name: '闵行区'},
    //     {area_name: '徐汇区'},
    //     {area_name: '浦东新区 浦东新区浦东新区浦东新区浦东新区浦东新区'},
    //     {area_name: '长宁区'},
    //     {area_name: '杨浦区'},
    //     {area_name: '黄浦区'},
    //     {area_name: '静安区'},
    //     {area_name: '嘉定区'},
    //     {area_name: '青浦区'},
    //     {area_name: '虹口区'},
    //     {area_name: '松江区'},
    //     {area_name: '普陀区'},
    //     {area_name: '宝山区'},]
    this.areaCollection = [];

    this.searchConditionCity = {city_code: '0', city_name: '不限'};    // 不能有逗号
    this.searchConditionCityArea = {area_name: '不限'};

    // 调试tool start
    this.getDatabaseComment(this.salaryCollection);
    this.getDatabaseComment(this.experienceCollection);
    this.getDatabaseComment(this.stageCollection);
    this.getDatabaseComment(this.scaleCollection);
    this.getDatabaseComment(this.degreeCollection);
    // 调试tool end

    this.getHotCity();

    // console.log('tool start')
    var res = '[';
    for (var i = 0; i < this.industryCollection.length; i++) {
      var industry = this.industryCollection[i];
      var item = '[\'code\' => ' + (i + 1) + ',\'name\' => \'' + industry.name + '\'],';
      res += item;
    }
    res += ']';
    // console.log(res)
    // console.log('tool end')


    this.getIndustryList();
    // 获取工作列表搜索筛选配置
    this.getSearchFilterConfig();
    // 获取看过的职位
    var history_jobs = JSON.parse(localStorage.getItem('history_jobs'));
    this.history_jobs = history_jobs.slice(0, 5);
    // console.log('==========history_jobs start============')
    // console.log(this.history_jobs)
    let id = this.$route.query.maxPrice;
    // console.log('id = ' + id)
    // console.log('==========history_jobs start============')

  },
  created() {
    let apiHost = process.env.NODE_ENV == 'development' ? this.apiHostDev : this.apiHostProd;
    this.apiHost = apiHost;
    this.getJobList();
  },
  methods: {
    logout() {
      this.isLogin = false;
      alert(2);
      this.reload();
    },
    // 操作路由的方法
    routerToolDemo() {
      // console.log(this.$route.path)
      // this.$router.push({
      //     query: merge(this.$route.query, {'addParams': '我是新增的一个参数，哈哈哈哈'})
      // })
      // 这些方法，会直接将页面跳转到新路由去
      var url = this.$router.push({path: this.$route.path, query: {page: 3}});
      this.$router.push({
        query: merge(this.$route.query, {'page': '630'}),
      });

      this.$router.push({
        query: merge(this.$route.query, {'addParams': '我是新增的一个参数，哈哈哈哈'}),
      });

      this.$router.push({
        query: merge({}, {'maxPrice': '630'}),
      });
    },
    search() {
      // this.$router.push({
      //     query: merge(this.$route.query, {'key_word': this.keyWord})
      // })
      this.getJobList();
    },
    // 调试tool start
    getDatabaseComment(collection) {
      // console.log('debug start')
      var comment = '[';
      for (var i = 0; i < collection.length; i++) {
        var salary = collection[i];
        // comment += i + '.' + salary.name + ';'
        comment += '[\'code\' => ' + i + ',';
        comment += '\'name\' => \'' + salary.name + '\'],';
      }
      comment += ']';
      // console.log(comment)
      // console.log('debug start')
    },
    // 调试tool end
    showIndustryBox: function () {
      if (this.$refs.industryBox.style.display == 'none') {
        this.$refs.industryBox.style.display = 'block';
      } else {
        this.$refs.industryBox.style.display = 'none';
      }
    },
    hideIndustryBox: function () {
      this.$refs.industryBox.style.display = 'none';
    },
    switchPositionTypeBox: function () {
      if (this.$refs.positionType.style.display == 'none') {
        this.$refs.positionType.style.display = 'block';
        this.$refs.position_list_tree1.style.display = 'block';
        this.$refs.position_list_tree2.style.display = 'block';
      } else {
        this.$refs.positionType.style.display = 'none';
      }
    },
    hidePositionBox: function () {
      this.$refs.positionType.style.display = 'none';
    },
    // 搜索框地址，调用组件的方法，而不是直接设置组件的CSS样式
    switchCityBox: function () {
      this.$refs.cityPopWindow.switchCityBox();
    },
    showExperience() {
      // console.log("hello")
      this.$refs.experienceBox.style.display = 'block';
    },
    hideExperience() {
      // console.log("hello")
      this.$refs.experienceBox.style.display = 'none';
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
      // console.log(e)
      var cityCode = e.city_code;
      var cityName = e.city_name;
      // 设置当前城市--搜索框
      this.searchKeyWordCity = {city_code: cityCode, city_name: cityName};
      // 设置当前城市--筛选
      this.searchConditionCity.city_name = cityName;
      this.searchConditionCity.city_code = cityCode;
      this.getCityArea(cityCode);

      // 改变路由--增加城市参数
      this.addParam('city_code', cityCode);
      // this.searchJobsParams.city_code = 'test';//this.$route.params.city_code
      console.log('======this.searchJobsParams.city_code s');
      console.log(this.searchJobsParams.city_code);
      console.log('======this.searchJobsParams.city_code e');
      // if (this.checkSerachJobsParamExist('city_code') == false) {
      //     this.$router.push({
      //         query: merge(this.$route.query, {'city_code': cityCode})
      //     })
      //
      // }
    },
    // 第一级职位类型分类
    selectFirstPositionType(e) {
      // console.log(e)
      var target = e.currentTarget;
      var index = target.getAttribute('index');
      var code = target.getAttribute('code');
      var name = target.innerText;
      this.firstPositionTypeIsActive = index;
      // 获取parentId是code的二级分类

    },
    // 第二级职位类型分类
    selectSecondPositionType(e) {
      // console.log(e)
      var target = e.currentTarget;
      var index = target.getAttribute('index');
      var code = target.getAttribute('code');
      var name = target.innerText;
      this.secondPositionTypeIsActive = index;
      // 获取parentId是code的三级分类
      // 显示三级分类列表
      this.$refs.position_list_tree3.style.display = 'block';
    },
    // 设置职位类型
    setSearchConditionPositionType(e) {
      var target = e.currentTarget;
      var code = target.getAttribute('code');
      var name = target.innerText;
      // 设置搜索条件--职位类型--vue的双向绑定，确实方便
      this.positionType.code = code;
      this.positionType.text = name;
      // 第三级分类选中状态
      var index = target.getAttribute('index');
      this.thirdPositionTypeIsActive = index;
      // 隐藏职位类型列表。仿照boss直聘，再次显示该列表时，保留上次的选中状态。子元素是否隐藏不影响效果。
      this.$refs.positionType.style.display = 'none';
    },
    // 设置行业
    setSearchKeyWordIndustry(e) {
      var target = e.currentTarget;
      var index = target.getAttribute('index');
      var code = target.getAttribute('code');
      var name = target.innerText;
      // 设置选中的行业
      this.industry = {code: code, text: name};
      // 设置选中状态
      this.industryIsActive = index;
      // 隐藏行业列表
      this.hideIndustryBox();

      // 改变路由--增加行业参数
      this.addParam('industry_code', code);
      //
      // this.$router.push({
      //     query: merge(this.$route.query, {'industry_code': code})
      // })
      // this.reload()
    },
    // 设置筛选条件--经验
    setSearchKeyWordExperience(e) {
      // 设置当前经验
      var target = e.currentTarget;
      var code = target.getAttribute('code');
      var name = target.innerText;
      this.experienceQuery = {code: code, name: name};
      // 当前经验为红色
      this.experienceQueryIsActive = true;
      // 隐藏列表
      this.hideExperience();
      // 改变路由--增加经验参数
      this.addParam('experience_code', code);
      // this.$router.push({
      //     query: merge(this.$route.query, {'experience_code': code})
      // })
    },
    // 设置筛选条件--学历
    setSearchKeyWordDegree(e) {
      // 设置当前学历
      var target = e.currentTarget;
      var code = target.getAttribute('code');
      var name = target.innerText;
      this.degreeQuery = {code: code, name: name};
      // 当前经验为红色
      this.degreeQueryIsActive = true;
      // 隐藏列表
      this.hideDegree();
      // 改变路由--增加学历参数
      this.addParam('degree_code', code);
      // this.$router.push({
      //     query: merge(this.$route.query, {'degree_code': code})
      // })
    },
    // 设置筛选条件--薪资
    setSearchKeyWordSalary(e) {
      // 设置当前学历
      var target = e.currentTarget;
      var code = target.getAttribute('code');
      var name = target.innerText;
      this.salaryQuery = {code: code, name: name};
      // 当前经验为红色
      this.salaryQueryIsActive = true;
      // 隐藏列表
      this.hideSalaryBox();
      // 改变路由--增加薪资参数
      this.addParam('salary_code', code);
      // this.$router.push({
      //     query: merge(this.$route.query, {'salary_code': code})
      // })
    },
    // 设置筛选条件--融资阶段
    setSearchKeyWordStage(e) {
      // 设置当前融资阶段
      var target = e.currentTarget;
      var code = target.getAttribute('code');
      var name = target.innerText;
      this.stageQuery = {code: code, name: name};
      // 当前经验为红色
      this.stageQueryIsActive = true;
      // 隐藏列表
      this.hideFinancingStageBox();
      // 改变路由--增加融资阶段参数
      this.addParam('stage_code', code);
      // this.$router.push({
      //     query: merge(this.$route.query, {'stage_code': code})
      // })
    },
    // 设置筛选条件--公司规模
    setSearchKeyWordScale(e) {
      // 设置当前公司规模
      var target = e.currentTarget;
      var code = target.getAttribute('code');
      var name = target.innerText;
      this.scaleQuery = {code: code, name: name};
      // 当前经验为红色
      this.scaleQueryIsActive = true;
      // 隐藏列表
      this.hideCompanyScaleBox();
      // 改变路由--增加公司规模参数
      this.addParam('scale_code', code);
      // this.$router.push({
      //     query: merge(this.$route.query, {'scale_code': code})
      // })
    },
    // 地区--城市
    setSearchConditionCity(e) {
      var target = e.currentTarget;
      var cityName = target.innerText;
      var cityCode = target.getAttribute('city-code');
      // 设置当前城市--筛选
      this.searchConditionCity.city_name = cityName;
      this.searchConditionCity.city_code = cityCode;
      // 设置当前城市--搜索框
      this.searchKeyWordCity.city_code = cityCode;
      this.searchKeyWordCity.city_name = cityName;
      // 重新获取当前城区
      // console.log('cityCode=' + cityCode)
      this.getCityArea(this.searchConditionCity.city_code);
      this.addParam('city_code', cityCode);
      // 用新的查询条件重新打开页面，或者说，请求工作列表数据--请求接口

    },
    // 地区--城区
    setSearchConditionCityArea(e) {
      // 设置当前城区
      var target = e.currentTarget;
      var index = target.getAttribute('index');
      this.searchConditionCityAreaIsActive = index;
      var areaName = target.innerText;
      this.searchConditionCityArea.area_name = areaName;
      // 用新的查询条件重新打开页面，或者说，请求工作列表数据--请求接口
      // 新的查询条件：已有查询条件 + 当前城区
      var code = target.getAttribute('area-code');
      this.addParam('area_code', code);
    },
    // 清空筛选条件
    resetSearchCondition() {
      // 保留搜索框关键词
      var keyWord = this.$route.query.key_word;
      // console.log('keyWord = ' + keyWord)
      // 带搜索关键词后打开这个页面
      // this.$router.go(0)
      // window.open("http://chugang.net")    // 不管怎样，都会打开在新窗口打开页面
      // location.href = 'http://chugang.net'
      this.reload();
    },
    // 反馈态度
    setFeedBackAttitude(e) {
      // 设置反馈态度
      var target = e.currentTarget;
      // 两个都行
      // var child = target.firstChild
      var child = target.firstElementChild;
      // console.log(child)
      var className = child.className;
      // console.log(className)
      // 本想使用循环的。
      switch (className) {
        case 'emoj-not-statisfy':
          this.emojNotStatisfyIsActive = true;
          this.emojJustSoSoIsActive = false;
          this.emojOkIsActive = false;
          break;
        case 'emoj-just-so-so':
          this.emojNotStatisfyIsActive = false;
          this.emojJustSoSoIsActive = true;
          this.emojOkIsActive = false;
          break;
        case 'emoj-ok':
          this.emojNotStatisfyIsActive = false;
          this.emojJustSoSoIsActive = false;
          this.emojOkIsActive = true;
          break;
      }

      var code = target.getAttribute('code');
      this.attitudeCode = code;
      // 设置反馈按钮
      var content = this.$refs.feedBackContent.value;
      // console.log('content =' + content)
      if (this.checkSubmitFeedBackDisabled()) {
        this.feedBackDisabled = false;
      } else {
        this.feedBackDisabled = true;
      }
    },
    // 提交反馈
    submitFeedBack() {
      if (this.isLogin == false) {
        alert('没有登录，不能提交');
        return;
      }
      // 获取反馈内容
      // var content = this.$refs.feedBackContent.innerText   // 不适用于input、textarea等
      var content = this.$refs.feedBackContent.value;
      // 提交反馈
      if (this.feedBackDisabled == true) {
        // console.log('按钮禁用')
      } else {
        // console.log('反馈内容：' + content)
      }
    },
    // 检测是否能提交反馈
    checkSubmitFeedBackDisabled() {
      var attitudeCode = this.attitudeCode;
      var content = this.$refs.feedBackContent.value;
      if (attitudeCode != 0 && content != '') {
        return true;
      } else {
        return false;
      }
    },
    // 输入反馈内容
    writeFeedBackContent() {
      var content = this.$refs.feedBackContent.value;
      // console.log(content)
      if (this.checkSubmitFeedBackDisabled()) {
        this.feedBackDisabled = false;
      } else {
        this.feedBackDisabled = true;
      }
    },
    // 获取热门城市
    getHotCity: function () {
      let recommend_jobs_list_api = this.apiHost + this.recommend_jobs_list_api;
      this.$http.get((recommend_jobs_list_api), {params: {first_letter: 'A,B,h,t'}}).then(response => {
        this.cityCollection = response.body.data;
        // console.log('==========this.recommend_jobs start')
        // console.log(this.cityCollection)
        // console.log('==========this.recommend_jobs end')
        // alert("提交成功")
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
    // 根据城市ID查询城区列表
    getCityArea: function (parentId) {
      let cityListChildrenApi = this.apiHost + this.cityListChildrenApi;
      this.$http.get((cityListChildrenApi), {params: {parent_id: parentId}}).then(response => {
        this.areaCollection = response.body.data;
        // console.log('==========this.recommend_jobs area start')
        // console.log(this.areaCollection)
        // console.log('==========this.recommend_jobs end')
        // alert("提交成功")
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
    // 获取行业列表
    getIndustryList: function () {
      let recommend_jobs_list_api = this.apiHost + this.industryListApi;
      this.$http.get((recommend_jobs_list_api), {}).then(response => {
        this.industryCollection = response.body.data;
        // console.log('==========this.industryCollection area start')
        // console.log(this.areaCollection)
        // console.log('==========this.industryCollection end')
        // alert("提交成功")
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
    // 获取工作列表搜索筛选配置
    getSearchFilterConfig: function () {
      let recommend_jobs_list_api = this.apiHost + this.searchFilterConfigApi;
      this.$http.get((recommend_jobs_list_api), {}).then(response => {
        var config = response.body.data;
        // console.log('==========config start')
        // console.log(config)
        this.experienceCollection = config.experience;
        // console.log(this.experienceCollection)
        this.degreeCollection = config.degree;
        this.salaryCollection = config.salary;
        this.stageCollection = config.financing_stage;
        this.scaleCollection = config.company_scale;
        // console.log('==========config end')
        // alert("提交成功")
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
    // 获取工作列表
    getJobList: function () {

      // 构造查询参数
      let page = this.$route.query.page;
      let keyWord = this.$route.query.key_word;
      let positionTypeCode = this.$route.position_type_code;
      let industryCode = this.$route.query.industry_code;
      let experienceCode = this.$route.query.experience_code;
      let degreeCode = this.$route.query.degree_code;
      let salaryCode = this.$route.query.salary_code;
      let stageCode = this.$route.query.stage_code;
      let scaleCode = this.$route.query.scale_code;
      let areaCode = this.$route.query.area_code;
      let cityCode = this.$route.query.city_code;

      // console.log('page = ' + page)
      // console.log('keyWord = ' + keyWord)
      // console.log('industryCode = ' + industryCode)

      var params = new Object();
      if (page != null) {
        params.page = page;
      }
      if (keyWord != null) {
        params.key_word = keyWord;
      }
      if (positionTypeCode != null) {
        params.position_type_code = positionTypeCode;
      }
      if (industryCode != null) {
        params.industry_code = industryCode;
      }
      if (experienceCode != null) {
        params.experience_code = experienceCode;
      }
      if (degreeCode != null) {
        params.degree_code = degreeCode;
      }
      if (salaryCode != null) {
        params.salary_code = salaryCode;
      }
      if (stageCode != null) {
        params.stage_code = stageCode;
      }
      if (scaleCode != null) {
        params.scale_code = scaleCode;
      }
      if (areaCode != null) {
        params.area_code = areaCode;
      }
      if (cityCode != null) {
        params.city_code = cityCode;
      }

      let getJobListApi = this.apiHost + this.getJobListApi;
      console.log('====================== this.searchJobsParams start');
      this.searchJobsParams = params;
      console.log(this.searchJobsParams);
      console.log('====================== this.searchJobsParams end');
      this.$http.get((getJobListApi), {params: this.searchJobsParams}).then(response => {
        var jobs = response.body.data;
        console.log('==========getJobListApi start');
        console.log(jobs);
        console.log('==========getJobListApi end');
        this.jobDetailList = jobs;
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
    // 检测是否存在某个参数
    checkSerachJobsParamExist: function (param, value) {
      if (this.searchJobsParams.hasOwnProperty(param) == false) {
        return false;
      }
      if (value == this.searchJobsParams[param]) {
        return true;
      }
      return false;
    },
    // 增加路由参数
    addParam(paramName, value) {
      // 没有 paramName 这个参数
      // if (!this.$route.params.hasOwnProperty(paramName)) {
      //     return
      // }
      console.log('============this.searchJobsParams[paramName] start');
      console.log(value);
      console.log('============this.searchJobsParams[paramName] end');
      // paramName没有加入工作列表查询参数
      if (this.checkSerachJobsParamExist(paramName, value)) {
        return;
      }
      let paramObj = new Object();
      paramObj[paramName] = value;
      this.$router.push({
        query: merge(this.$route.query, paramObj),
      });
      this.searchJobsParams[paramName] = value;
      console.log('============this.searchJobsParams[paramName =] start');
      console.log(this.searchJobsParams[paramName]);
      console.log('============this.searchJobsParams[paramName = ] end');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/JobList/index.css";
</style>
