<template>
  <div>
    <div id="wrapper">
      <div id="container-inner">
        <div id="title" style="text-align: center;margin-bottom: 30px;">
          <h1>我的个人作品</h1>
        </div>
        <div id="my-works">
          <ul>
            <li class="item">
              <div class="picture" @mouseenter="showTipLayout($event)" @mouseleave="hideTipLayout($event)">
                <img :src="boss.picture">
                <div class="tip-layout"><span class="tip" @click="showPopWindow">点击查看大图</span></div>
              </div>
              <div class="introduce">
                <div class="line">
                  <span class="label">名称:</span>
                  {{ boss.bossTitle }}
                </div>
                <div class="line">
                  <span class="label">网址:</span>
                  <a :href="boss.bossHost" target="_blank">{{ boss.bossHost }}</a>
                </div>
                <div class="content">
                  1.使用<span class="keywords">vue + laravel + mysql</span>开发，运行在<span class="keywords">linux + mysql + php + nginx</span> 架构上。

                  2.已完成功能：

                  &nbsp;&nbsp;&nbsp;&nbsp;A 登录、注册、工作列表、工作详情、求职者中心

                  &nbsp;&nbsp;&nbsp;&nbsp;B 上传简历、举报不良工作信息、求职者和招聘聊天的前端效果，没有完成后端功能

                  4.从前端到后端的所有功能，服务器上的lnmp搭建、项目部署，都是我一人完成。
                </div>
              </div>
            </li>
            <li class="item">
              <div class="picture" @mouseenter="showTipLayout($event)" @mouseleave="hideTipLayout($event)">
                <img :src="meeting.picture">
                <div class="tip-layout"><span class="tip" @click="showPopWindow">点击查看大图</span></div>
              </div>
              <div class="introduce">
                <div class="line">
                  <span class="label">名称:</span>
                  {{ meeting.title }}
                </div>
                <div class="line">
                  <span class="label">网址:</span>
                  <a :href="meeting.host" target="_blank">{{ meeting.host }}</a>
                </div>
                <div class="content">
                  1.使用<span class="keywords">vue + koa2 + mongodb</span>开发，运行在<span class="keywords">linux + mongodb + nginx + node.js</span>架构上。

                  2.已完成的功能：

                  &nbsp;&nbsp;&nbsp;&nbsp;A 登录、注册、创建会议、邀请参加会议

                  &nbsp;&nbsp;&nbsp;&nbsp;B 参加会议、视频、文字聊天、共享画板

                  3.由于时间关系，未完成的功能：视频录像（使用静态数据）、画板的样式、清屏等。

                  4.整个项目由我一人完成并部署到服务器上。
                </div>
              </div>
            </li>
            <li class="item">
              <div class="picture" @mouseenter="showTipLayout($event)" @mouseleave="hideTipLayout($event)">
                <img :src="im.picture">
                <div class="tip-layout"><span class="tip" @click="showPopWindow($event)">点击查看大图</span></div>
              </div>
              <div class="introduce">
                <div class="line">
                  <span class="label">名称:</span>
                  {{ im.title }}
                </div>
                <div class="line">
                  <span class="label">下载地址:</span>
                  <a :href="im.host" target="_blank">点击下载</a>
                </div>
                <div class="content">
                  1.使用<span class="keywords">React Native</span>模仿微信实现了部分页面。

                  2.完成的页面有：

                  &nbsp;&nbsp;&nbsp;&nbsp;A 注册页面、登录页面、一对一聊天页面、微信群聊天页面、用户朋友圈页面

                  &nbsp;&nbsp;&nbsp;&nbsp;B 用户个人信息简介页面、用户相册页面、用户朋友圈详情页面

                  3.由于时间关系，未完成后端功能。

                  4.这些页面由我一人完成。
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="pop-window" ref="popWindow">
      <div id="layout">
        <div id="window">
          <img :src="picture" style="width: 1184px;height: auto;">
          <span id="close" @click="closePopWindow">关闭</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      picture: this.GLOBAL.webHost + '/static/my-works/boss.png',
      boss: {
        bossHost: this.GLOBAL.webHost,
        bossTitle: '简化版的boss直聘',
        picture: this.GLOBAL.webHost + '/static/my-works/boss.png',
      },
      meeting: {
        host: 'https://meeting.chugang.net',
        title: '简单的视频会议系统',
        picture: this.GLOBAL.webHost + '/static/my-works/meeting.png',
      },
      im: {
        host: '',
        title: '简化版微信',
        picture: this.GLOBAL.webHost + '/static/my-works/boss.png',
      }
    }
  },
  methods: {
    closePopWindow() {
      this.$refs.popWindow.style.display = 'none';
    },
    showPopWindow(e) {
      this.$refs.popWindow.style.display = 'block';
      let target = e.currentTarget.parentElement.parentElement.firstElementChild;
      console.log(target)
      let imgSrc = target.getAttribute('src');
      console.log(imgSrc)
      this.picture = imgSrc
    },
    showTipLayout(e) {
      let target = e.currentTarget.firstElementChild.nextElementSibling;
      console.log(target)
      target.style.display = 'block';
    },
    hideTipLayout(e) {
      let target = e.currentTarget.firstElementChild.nextElementSibling;
      console.log(target)
      target.style.display = 'none';
    },

  },
}
</script>

<style scoped>
body {
  background-color: #f6f6f8;
  color: #414a60;
}

#wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
}

div {
  margin: 0;
  padding: 0;
}

#wrapper ul {
  margin: 0;
  padding: 0;
}

.item {
  list-style: none;
  margin-bottom: 10px;
  width: 100%;
  height: 460px;

  border: 1px solid green;
}

#container-inner {
  padding: 0;
  max-width: 1184px;
  height: auto;
  margin: 0 auto;
  background-color: #fff;
  /*border: 1px solid red;*/
}

.picture {
  float: left;
  width: 30%;
  position: relative;
}

.picture img {
  width: 300px;
  height: 450px;
}

.introduce {
  float: left;
  width: 70%;
}

.line {
  margin-top: 10px;
  font-size: 20px;
}

.label {
  display: inline-block;
  margin-bottom: 15px;
  margin-right: 15px;
}

.line a {
  text-decoration: none;
  color: #5dd5c8;
}

.content {
  margin: 0;
  padding: 0;
  white-space: pre-line;
  font-size: 18px;
}

.keywords{
  font-weight: 500;
  font-family: "Arial Hebrew";
  margin: 0 10px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul li {
  margin: 20px 0px;
  padding: 0;

  font-size: 20px;
  line-height: 20px;
}


/*弹窗*/
#pop-window {
  position: fixed;
  width: 100%;
  /*height: 100%;*/
  z-index: 1000;
  top: 0;
  left: 0;
  display: none;
}

#layout {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1001;
  top: 0;
  left: 0;

  /*background-color: rgba(151, 154, 145, 0.51);*/

  background: rgba(37, 40, 48, .7); /*这组数值，效果更好*/

  opacity: 1.5;
}

#window {
  position: absolute;
  left: 15%;
  /*height: 50%;*/
  width: 1184px;
  height: auto;
  /*overflow-y: auto;*/
  /*height: 600px;*/
}

#window img {
  margin: 0;
  padding: 0;
}

#close {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  width: 40px;
  font-size: 20px;
  color: #c10b35;
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
}

/*点击查看大图*/
.tip-layout {
  position: absolute;
  top: 0;
  width: 300px;
  height: 100%;
  background: rgba(37, 40, 48, .7); /*这组数值，效果更好*/
  opacity: 1.5;
  z-index: 1000;
  display: none;
  /*text-align: center;*/
}

.tip {
  display: inline-block;
  width: 120px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  position: absolute;
  /*background-color: rgba(37, 40, 48, .7);*/
  color: red;
  left: 32%;
  top: 40%;
  z-index: 10;
  margin: 0 auto;
  opacity: 2;
  cursor: pointer;
}
</style>
