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
        <ul id="advantage">
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
            <span class="cur">我要工作</span>
            <span>我要招聘</span>
          </div>
          <div class="form-row row-select">
                        <span class="ipt-wrap">
                        <i class="icon-sign-phone"></i>
                        <input type="text" class="ipt ipt-phone" placeholder="邮箱地址" v-model="email"/>
                    </span>
          </div>
          <div class="form-row row-select">
                        <span class="ipt-wrap">
                        <i class="icon-password"></i>
                        <input type="password" class="ipt ipt-phone" placeholder="登录密码" v-model="password"/>
                    </span>
          </div>
          <div class="form-btn">
            <button class="btn-register" @click="login">登录</button>
          </div>
          <div class="text-tip">
            <!--<input type="checkbox">我已同意-->
            <a href="javascript:;" class="user-agreement">还没有账号？</a>
            <!--<a href="#" class="link-sign-in">注册一个</a>-->
            <router-link :to="{path:'register'}" class="link-sign-in">注册一个</router-link>
          </div>
        </div>
        <!--<div class="btn-switch">-->
        <!--<div class="switch-tip">-->
        <!--微信极速注册-->
        <!--<i class="icon-triangle"></i>-->
        <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      bodyBgImage: 'url(' + require('../../static/Register/newbg.png') + ')',
      email: '',
      password: '',
      loginApi: 'http://boss.api-cg.com/api/auth/login',
      loginApiProd: 'http://boss-api.chugang.net/api/auth/login',
    };
  },
  methods: {
    // 设置body属性
    setBodyBackGround() {
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.minWidth = '1184px';
      document.body.style.margin = '0';
      document.body.style.fontSize = '14px';
      document.body.style.color = '#414a60';
      document.body.style.backgroundSize = '100%';
      document.body.style.backgroundImage = this.bodyBgImage;
      document.body.style.backgroundColor = '#5dd5c8';
      document.body.style.backgroundRepeat = 'no-repeat';
    },
    // 清除进入该页面时设置的body属性
    clearBodyBackGround() {
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.minWidth = '';
      document.body.style.margin = '';
      document.body.style.fontSize = '';
      document.body.style.color = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundImage = '';
      document.body.style.backgroundColor = '';
      document.body.style.backgroundRepeat = '';
    },

    // 验证邮箱和密码
    validateInput() {
      if (this.password.length < 6) {
        this.$message({
          message: '密码至少6位',
          type: 'error',
        });
        return false;
      }

      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!reg.test(this.email)) {
        this.$message({
          message: '请输入有效的邮箱',
          type: 'error',
        });
        return false;
      }

      return true;
    },

    // 登录
    login() {
      if (this.email == '' || this.password == '') {
        // 弹窗
        this.$message({
          message: '邮箱和密码都必须填写',
          type: 'error',
        });
        return;
      }
      // 验证邮箱和密码
      if (!this.validateInput()) {
        return;
      }

      let data = {
        email: this.email,
        password: this.password,
      };
      let loginApi = process.env.NODE_ENV == 'development' ? this.loginApi : this.loginApiProd;
      console.log(loginApi)
      this.$http.post((loginApi), data, {emulateJSON: true}, {},
      ).then(response => {
        let result = response.body;
        console.log('登录成功 start');
        console.log(result);
        console.log('登录成功 end');
        this.$cookies.set('user', result.data.user);
        this.$router.push({path: 'job-list'});
      }, response => {
        console.log(response);
        this.$message({
          message: '登录失败',
          type: 'error',
        });
      });
    },
  },
  mounted() {
    console.log(process.env.NODE_ENV);
    let loginApi = process.env.NODE_ENV == 'development' ? this.loginApi : this.loginApiProd;
    console.log(loginApi)
    // 进来的时候调用添加
    this.setBodyBackGround();
  },
  beforeDestroy() {
    // 离开页面的时候清除
    this.clearBodyBackGround();
  },
};
</script>

<style scoped>
@import "../../static/Register/index.css";
</style>
