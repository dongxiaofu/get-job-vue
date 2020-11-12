<template>
  <div>
    <div id="wrapper">
      <div id="container-inner">
        <div id="title" style="text-align: center;margin-bottom: 30px;">
          <h1>简化版微信App视频</h1>
        </div>
        <div id="my-works">
          <video width="350" height="650" controls autoplay style="position: relative;left: 36%;">
<!--            <source src="movie.ogg" type="video/ogg">-->
            <source :src="videoSrc" type="video/mp4">
<!--            <source src="movie.webm" type="video/webm">-->
            <object :data="videoSrc" width="350" height="650">
              <embed width="350" height="650" :src="videoSrc">
            </object>
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "video",
  data() {
    return {
      videoSrc: 'http://chugang.net/my-works/react-im.mp4',
    }
  },
  methods: {},
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

  border: 1px solid mediumspringgreen;
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
