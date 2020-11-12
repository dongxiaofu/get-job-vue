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
                <div class="tip-layout"><span class="tip" @click="showPopWindow" v-bind:dataType="1">点击查看大图</span></div>
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
                  1.使用<span class="keywords">vue + laravel + mysql</span>开发，运行在<span class="keywords">linux + mysql + php + nginx</span>
                  架构上。

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
                <div class="tip-layout"><span class="tip" @click="showPopWindow" v-bind:dataType="2">点击查看大图</span></div>
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
                <div class="tip-layout"><span class="tip" @click="showPopWindow($event)"
                                              v-bind:dataType="3">点击查看大图</span></div>
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
          <img :src="picture.imgSrc" :style="{width:picture.imgW,left:picture.positionLeft}" @load="setPictureSize"
               ref="picture">
          <div id="pop-window-btns" ref="popWindowBtns">
            <span id="preview" @click="openNewTab">预览</span>
            <span id="close" @click="closePopWindow">关闭</span>
          </div>
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
      // picture: this.GLOBAL.webHost + '/static/my-works/boss.png',
      // pictureSize: {imgH: 0, imgW: 0},
      picture: {imgSrc: '', imgH: '', imgW: '', positionLeft: '', type: ''},
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
        host: 'http://chugang.net/my-works/app-release.apk',
        title: '简化版微信',
        picture: this.GLOBAL.webHost + '/static/my-works/WechatIMG45.jpeg',
      }
    }
  },
  methods: {
    closePopWindow() {
      this.$refs.popWindow.style.display = 'none';
    },
    openNewTab() {
      // react native app，则打开视频页面
      if (this.picture.type == 3) {
        // todo 用 name 不行
        let routeData = this.$router.resolve({
          path: "video",
          query: {},
        });
        window.open(routeData.href, '_blank');
      } else {
        window.open(this.picture.imgSrc);
      }
    },
    // https://www.coder.work/article/1331070
    setPictureSize() {
      let picture = this.picture;
      console.log('promise===============start')
      console.log(picture)
      console.log('promise===============end')
      // this.pictureSize.imgH = picture.height;
      // this.pictureSize.imgW = picture.width;
      // this.pictureSizeX = picture.width;
      // this.picture = picture.imgSrc;

    },
    async showPopWindow(e) {
      // this.$refs.popWindow.style.display = 'block';

      // return;

      // let target = e.currentTarget.parentElement.parentElement.firstElementChild;
      // console.log(target)
      // let imgSrc = target.getAttribute('src');
      // let realWidth = target.naturalWidth;//获取图片真实宽度
      // let realHeight = target.naturalHeight;//获取图片真实高度
      // console.log('img size==============start')
      // console.log(realHeight,realWidth)
      // console.log('img size==============end')
      // let scale = realHeight/realWidth;
      // target.width = realWidth * 0.8;
      // console.log('target.width = ' + target.width)
      // target.height = target.width * scale;
      // console.log('target size==============start')
      // console.log(target)
      // console.log('target size==============end')

      let picture = await new Promise(function (resolve) {
        let dataType = e.currentTarget.getAttribute('dataType');
        console.log('let dataType ===============start')
        console.log(e.currentTarget)
        console.log(dataType)
        console.log('let dataType ===============end')
        let target = e.currentTarget.parentElement.parentElement.firstElementChild;
        console.log(target)
        let imgSrc = target.getAttribute('src');
        let realWidth = target.naturalWidth;//获取图片真实宽度
        let realHeight = target.naturalHeight;//获取图片真实高度
        console.log('img0 size==============start')
        console.log(realHeight, realWidth)
        console.log('img0 size==============end')
        resolve({width: realWidth, height: realHeight, imgSrc: imgSrc, target: target, type: dataType})
      }).then(function (value) {
        let realHeight = value.height;
        let realWidth = value.width;
        let imgSrc = value.imgSrc;
        let target = value.target;
        let scale = Math.ceil(realHeight / realWidth);
        let screenWidth = document.body.clientWidth;
        let scale2 = Math.ceil(realWidth / screenWidth);
        let newWidth = screenWidth;
        let positionLeft = 0;
        if (screenWidth > realWidth) {
          newWidth = realWidth * 0.5;
          positionLeft = screenWidth / 2.5;
        }
        let newHeight = realHeight * scale;
        target.width = newWidth;
        console.log('target.width = ' + target.width)
        // target.height = newHeight;
        console.log('target size==============start')
        console.log(target)
        console.log('target size==============end')
        // positionLeft 的值，'px'不可少，否则，不能设置left属性。
        let picture = {
          imgSrc: imgSrc,
          imgW: newWidth + 'px',
          imgH: newHeight + 'px',
          positionLeft: positionLeft + 'px',

          imgWN: newWidth,
          imgHN: newHeight,
          positionLeftN: positionLeft,
          type: value.type
        };
        // let picture = {imgSrc: imgSrc, imgW: newWidth + 'px', imgH: newHeight + 'px', positionLeft: positionLeft + 'px'};

        console.log(picture)
        return picture;
      });
      this.picture = picture;
      this.$refs.popWindow.style.display = 'block';
      // return picture;
      let closeButtonX = picture.positionLeftN + picture.imgWN - 90;
      this.$refs.popWindowBtns.style.left = closeButtonX + 'px';
      console.log('left=' + closeButtonX + 'px');
      console.log('left-40=' + closeButtonX + 'px');
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

  computed: {
    pictureSizeX: {
      get: function () {
        return this.pictureSize.imgW;
      },
      set: async function () {
        let picture = await new Promise(function (resolve) {
          let e = this.$refs.picture;
          let target = e;//e.currentTarget.parentElement.parentElement.firstElementChild;
          console.log(target)
          let imgSrc = target.getAttribute('src');
          let realWidth = target.naturalWidth;//获取图片真实宽度
          let realHeight = target.naturalHeight;//获取图片真实高度
          console.log('img0 size==============start')
          console.log(realHeight, realWidth)
          console.log('img0 size==============end')
          resolve({width: realWidth, height: realHeight, imgSrc: imgSrc, target: target})
        }).then(function (value) {
          let realHeight = value.height;
          let realWidth = value.width;
          let imgSrc = value.imgSrc;
          let target = value.target;
          let scale = Math.ceil(realHeight / realWidth);
          let newWidth = realWidth * 0.8;
          let newHeight = newWidth * scale;
          target.width = newWidth;
          console.log('target.width = ' + target.width)
          // target.height = newHeight;
          console.log('target size==============start')
          console.log(target)
          console.log('target size==============end')

          let picture = {imgSrc: imgSrc, width: newWidth, height: newHeight};

          console.log(picture)
          return picture;
        });
        console.log('promise===============start')
        console.log(picture)
        console.log('promise===============end')
        this.pictureSize.imgH = picture.height;
        this.pictureSize.imgW = picture.width;
        this.pictureSizeX = picture.width;
        this.picture = picture.imgSrc;
        this.$refs.popWindow.style.display = 'block';
      },
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
  padding: 0;
  margin: 0;
  float: left;
  width: 30%;
  position: relative;
}

.picture img {
  padding: 0;
  margin: 0;
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

.keywords {
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
  height: 100%;
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
  position: relative;
  padding: 0;
  margin: 0;
  /*left: 50%;*/
  /*height: 50%;*/
  /*width: 100%;*/
  /*height: 100%;*/

  /*height: 600px;*/
  height: auto;
  width: auto;
  border: 1px solid green;
}

#window img {
  padding: 0;
  margin: 0;
  position: fixed;
  /*left: 50%;*/
  /*width: 100%;*/
  height: 100%;
  /*width: auto;*/
  /*height: 100%;*/
  /*margin: 0;*/
  /*padding: 0;*/
  /*width: 80%;*/
  /*height: 100%;*/
  /*max-width: 50%;*/
  /*max-height: 3000px;*/
}

#pop-window-btns {
  position: absolute;
  top: 20px;

  /*border: 1px solid mediumspringgreen;*/
}

#close {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  width: 40px;
  font-size: 20px;
  color: red;
  /*position: absolute;*/
  top: 20px;
  /*margin-left: 0;*/
  cursor: pointer;
}

#preview {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  width: 40px;
  font-size: 20px;
  color: red;
  /*position: absolute;*/
  top: 20px;
  /*margin-left: 0;*/
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
