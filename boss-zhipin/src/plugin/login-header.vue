<template>
  <div id="header">
    <div class="inner home-inner">
      <div id="logo">
        <a href="#">
          <span>BOSS直聘</span></a>
      </div>
      <div id="nav">
        <ul>
          <li><a href="#">首页</a></li>
          <!--<li><a href="#">职位</a></li>-->
          <li>
            <router-link :to="{path:'job-list'}">职位</router-link>
          </li>
          <li><a class="nav-school-new" href="#">校园</a></li>
          <li><a href="#">公司</a></li>
          <li><a href="#">APP</a></li>
          <li><a href="#">资讯</a></li>
        </ul>
      </div>
      <div id="user-nav">
        <ul>
          <li>
            <a href="#">消息</a>
          </li>
          <li class="resume" @click="showUploadBox">
            <a>简历</a>
          </li>
          <li class="nav-dot">.</li>
          <li class="file" v-on:click="showUploadBox"><a href="javascript:;">上传</a></li>
          <li class="user-info" @click="showUploadBox">
            <!--                      todo 不能用prop传递对象-->
            <!--                        <span class="label-text">{{userObject.id}}</span>-->
            <span class="label-text">{{ username.username }}</span>
            <a href="#" class="avatar"><img src="/static/Chat/avatar_5.png"></a>
          </li>
          <li>
            <span class="logout" @click="logout">退出</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  name: 'login-header',
  data() {
    return {
      // userObject:{},
      logoutApi: '/api/auth/logout',
    };
  },
  // todo 不能传递对象？
  // props:['userObject'],
  props: ['username', 'apiHost'],

  mounted() {
    // let userObject = this.$cookies.get('user');
    // console.log('==============head userObject start');
    // console.log(userObject);
    // console.log('==============head userObject end');
    // this.userObject = userObject;
  },

  methods: {
    showUploadBox: function () {
      // todo 改为跳转到求职者中心
      // this.$emit('showUploadBoxEvent', 'hello');
      console.log('============= showUploadBox start');
      console.log('url--info', this.$route.path);
      console.log('============= showUploadBox end');
      // 当前页面跳转到当前页面会报错
      let routePath = this.$route.path;
      if (routePath == '/user') {
        return;
      }
      this.$router.push({path: 'user'});
    },

    logout: function () {
      // 还是需要调用接口
      let logoutApi = this.apiHost.apiHost + this.logoutApi;
      console.log('================= logoutApi start');
      console.log(logoutApi);
      console.log('================= logoutApi end');
      this.$cookies.remove('user');
      // todo 不需要，本子组件加载即可重新加载整个页面。
      // this.$emit('logout', {});
      this.reload();
      return;
      // todo 暂不调用接口退出
      let data = {};
      this.$http.post((logoutApi), data, {emulateJSON: true}, {
        headers: {
          Authorization: 'Bearer ',
          'Content-Type': 'multipart/form-data',
        },
      }).then(response => {
        let result = response.body;
        console.log('退出成功 start');
        console.log(result);
        console.log('退出成功 提交成功 end');
        this.$cookies.set('user', null);
      }, response => {
        console.log(response);
        this.$message({
          message: '出问题啦',
          type: 'error',
        });
      });
    },
  },
};
</script>

<style scoped>

a {
  text-decoration: none;
  color: #414a60;
}

div, ul, li, a, p, dl, dd, span, img, dt，label {
  margin: 0px;
  padding: 0px;
}

ul {
  list-style: none;
}

#wrap {
  min-width: 100%;
  position: relative;
  overflow: visible;
}

#header {
  background: #202329;
  width: 100%;
  height: 49px;
  position: relative;
}

#header a {
  color: #fff;
}

#header a:hover {
  color: #00c2b3;
}

#header a:active {
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
  background: url("header/logo-2x.png") no-repeat 5px 14px;
  background-size: 105px 19px;
}

#logo span {
  display: none;
}

#nav {
  float: left;
  height: 49px;
  margin-left: 15px;
  line-height: 49px; /*为什么会有上下居中功能呢？*/
  font-size: 0;

}

#user-nav {
  float: right;
  height: 49px;
  margin-left: 15px;
  line-height: 49px;
  font-size: 0;
}

#nav ul, #user-nav ul {
  display: inline-block;
  vertical-align: top;
}

/*登录状态用户导航栏 start*/
#user-nav .avatar img {
  width: 26px;
  height: 26px;
  border-radius: 100%;
  vertical-align: middle; /*有效*/
  margin-left: 20px;
}

#user-nav li {
  color: #fff;
}

#user-nav .nav-dot {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  width: 1px;
  margin-left: 0px;
  margin-right: 0px;

  position: relative;
  top: -3px;
}

#user-nav .resume {
  margin-right: 5px;
}

#user-nav .file {
  margin-left: 6px;
}

#user-nav li:hover {
  color: #5dd5c8;
}

/*登录状态用户导航栏 end*/

#nav li, #user-nav li {
  position: relative;
  display: inline-block;
  font-size: 14px;
  margin: 0px 14px;
  cursor: pointer;
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
