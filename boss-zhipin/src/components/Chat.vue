<template>
  <div>
    <div id="wrap">
      <LoginHeader ref="loginHeader" @showUploadBoxEvent="showUploadBox($event)" :username="{username}"></LoginHeader>
      <div id="main-content" class="inner home-inner">
        <div class="chat-wrap">
          <div class="user-list">
            <div class="text">30天内联系人</div>
            <div class="users">
              <ul>
                <li v-for="friend in friends">
                  <div class="avatar">
                    <img :src="friend.avatar">
                  </div>
                  <div class="employee-info">
                    <span class="time">{{ friend.last_chat_time }}</span>
                    <span class="name">{{ friend.name }}</span>
                    <p>
                      <span>{{ friend.company }}</span>
                      <i class="vline"></i>
                      <span>{{ friend.title }}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="chat">
            <div class="text">
              <span class="icon-collect"></span>
              <span>张先生</span>
              <span>小米</span>
              <i class="vline"></i>
              <span>软件工程师</span>
            </div>
            <div class="job-info">
                    <span class="job">
                        沟通职位
                        <span class="job-name">PHP开发</span>
                        15-30k 武汉
                    </span>
              <span class="download-text">
                        <i class="download-icon"></i>
                        下载App, 不错过Boss每一条消息
                    </span>
            </div>
            <div class="message-record">
              <ul class="im-list">
                <!--li的class要动态设置，不能作为循环标签，所以加了层span-->
                <span v-for="message in messages">
                                    <!--根据条件设置html元素的class-->
                                    <li :class="message.author == 2 ? 'message myself' : 'message' ">
                                    <div class="avatar"><img :src="message.avatar"></div>
                                      <!--背景图的值：-112px 0&#45;&#45;送达；-75px 0&#45;&#45;已读;0px 0&#45;&#45;失败-->
                                        <i class="message-status"></i>
                                    <div class="words">
                                        {{ message.words }}
                                    </div>
                                </li>
                                <div style="clear: both"></div>
                                </span>
              </ul>
            </div>
            <div class="chat-message-editor">
              <div class="chat-message-editor-inner">
                <div class="css-arrow-down-words"></div>
                <!--表情选择框和常用语选择框 start-->
                <div style="display: none" ref="emojBox">
                  <div class="css-arrow-down-emoj"></div>
                  <div class="emoj-box">
                    <div class="emoj-list">
                      <ul>
                        <li>
                          <button class="default-emoj-01"></button>
                        </li>
                        <li>
                          <button class="default-emoj-02"></button>
                        </li>
                        <li>
                          <button class="default-emoj-03"></button>
                        </li>
                        <li>
                          <button class="default-emoj-04"></button>
                        </li>
                        <li>
                          <button class="default-emoj-05"></button>
                        </li>
                        <li>
                          <button class="default-emoj-06"></button>
                        </li>
                        <li>
                          <button class="default-emoj-07"></button>
                        </li>
                        <li>
                          <button class="default-emoj-08"></button>
                        </li>
                        <li>
                          <button class="default-emoj-09"></button>
                        </li>
                        <li>
                          <button class="default-emoj-10"></button>
                        </li>
                        <li>
                          <button class="default-emoj-11"></button>
                        </li>
                        <li>
                          <button class="default-emoj-12"></button>
                        </li>
                        <li>
                          <button class="default-emoj-13"></button>
                        </li>
                        <li>
                          <button class="default-emoj-14"></button>
                        </li>
                        <li>
                          <button class="default-emoj-15"></button>
                        </li>
                        <li>
                          <button class="default-emoj-16"></button>
                        </li>
                        <li>
                          <button class="default-emoj-17"></button>
                        </li>
                        <li>
                          <button class="default-emoj-18"></button>
                        </li>
                        <li>
                          <button class="default-emoj-19"></button>
                        </li>
                        <li>
                          <button class="default-emoj-20"></button>
                        </li>
                        <li>
                          <button class="default-emoj-21"></button>
                        </li>
                        <li>
                          <button class="default-emoj-22"></button>
                        </li>
                        <li>
                          <button class="default-emoj-23"></button>
                        </li>
                        <li>
                          <button class="default-emoj-24"></button>
                        </li>
                        <li>
                          <button class="default-emoj-25"></button>
                        </li>
                        <li>
                          <button class="default-emoj-26"></button>
                        </li>
                        <li>
                          <button class="default-emoj-27"></button>
                        </li>
                        <li>
                          <button class="default-emoj-28"></button>
                        </li>
                        <li>
                          <button class="default-emoj-29"></button>
                        </li>
                        <li>
                          <button class="default-emoj-30"></button>
                        </li>
                        <li>
                          <button class="default-emoj-31"></button>
                        </li>
                        <li>
                          <button class="default-emoj-32"></button>
                        </li>
                        <li>
                          <button class="default-emoj-33"></button>
                        </li>
                        <li>
                          <button class="default-emoj-34"></button>
                        </li>
                        <li>
                          <button class="default-emoj-35"></button>
                        </li>
                        <li>
                          <button class="default-emoj-36"></button>
                        </li>
                        <li>
                          <button class="default-emoj-37"></button>
                        </li>
                        <li>
                          <button class="default-emoj-38"></button>
                        </li>
                        <li>
                          <button class="default-emoj-39"></button>
                        </li>
                        <li>
                          <button class="default-emoj-40"></button>
                        </li>
                        <li>
                          <button class="default-emoj-41"></button>
                        </li>
                        <!---->


                        <!--<li>-->
                        <!--<button class="default-emoj-42"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-43"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-44"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-45"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-46"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-47"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-48"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-49"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-50"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-51"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-52"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-53"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-54"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-55"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-56"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-57"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-58"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-59"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-60"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-61"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-62"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-63"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-64"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-65"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-66"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-67"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-68"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-69"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-70"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-71"></button>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<button class="default-emoj-72"></button>-->
                        <!--</li>-->
                      </ul>
                    </div>
                    <div class="emoj-tab">
                      <span><i class="emoj-smile"></i></span>
                      <span><i class="emoj-like"></i></span>
                      <span><i class="emoj-dark"></i></span>
                      <span><i class="emoj-bear"></i></span>
                    </div>
                  </div>
                </div>
                <div class="words-box">
                  <h3>常用语</h3>
                  <ul>
                    <li>对不起，我觉得该职位不太适合我，祝您早日找到满意的工作人选</li>
                    <li>我可以去贵公司面试吗？</li>
                    <li>我可以把我的简历发给您看看吗？</li>
                    <li>对不起，我觉得该职位不太适合我，祝您早日找到满意的工作人选</li>
                    <li>我可以去贵公司面试吗？</li>
                    <li>我可以把我的简历发给您看看吗？</li>
                  </ul>
                </div>
                <!--表情选择框和常用语选择框 end-->
                <div class="control-panel">
                  <div class="control-icons">
                    <a class="icon-emoj" v-on:click="switchEmojBox"></a>
                    <a class="icon-words"></a>
                    <a class="icon-resume"></a>
                    <a class="icon-phone"></a>
                    <a class="icon-wechat"></a>
                  </div>
                </div>
                <div class="message-box" contenteditable="true"></div>
              </div>
              <div class="btn-send-sms">
                <span class="tip">按Enter键发送，按Ctrl+Enter键换行</span>
                <button>发送</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--上传附件简历弹窗-->
    <DragUploadFile ref="dialogWrap"></DragUploadFile>
  </div>
</template>

<script>
import DragUploadFile from '../plugin/drag-upload-file';
import LoginHeader from '../plugin/login-header';

export default {
  name: 'HelloWorld',
  components: {
    LoginHeader: LoginHeader,
    DragUploadFile: DragUploadFile,
  },
  data() {
    return {
      username: '',
      friends: [
        {
          user_id: 2,
          name: '大霞',
          avatar: 'http://localhost:8080/static/Chat/avatar1.jpeg',
          company: '小米公司',
          title: '软件工程师',
          last_chat_time: '昨天',
        },
        {
          user_id: 2,
          name: '大霞',
          avatar: 'http://localhost:8080/static/Chat/avatar2.jpeg',
          company: '小米公司',
          title: '软件工程师',
          last_chat_time: '昨天',
        },
        {
          user_id: 2,
          name: '大霞',
          avatar: 'http://localhost:8080/static/Chat/avatar1.jpeg',
          company: '小米公司',
          title: '软件工程师',
          last_chat_time: '昨天',
        },
        {
          user_id: 2,
          name: '大霞',
          avatar: 'http://localhost:8080/static/Chat/avatar2.jpeg',
          company: '小米公司',
          title: '软件工程师',
          last_chat_time: '昨天',
        },

      ],
      messages: [
        {
          'author': 1,
          'read_status': '已读',
          'user_id': 3,
          'avatar': 'http://localhost:8080/static/Chat/avatar1.jpeg',
          'words': '您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解',
        },
        {
          'author': 2,
          'read_status': '已读',
          'user_id': 1,
          'avatar': '',
          'words': '您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解',
        },
        {
          'author': 1,
          'read_status': '已读',
          'user_id': 3,
          'avatar': 'http://localhost:8080/static/Chat/avatar1.jpeg',
          'words': '您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解',
        },
        {
          'author': 1,
          'read_status': '已读',
          'user_id': 3,
          'avatar': 'http://localhost:8080/static/Chat/avatar1.jpeg',
          'words': '您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解',
        },
        {
          'author': 2,
          'read_status': '已读',
          'user_id': 1,
          'avatar': '',
          'words': '您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解',
        },
        {
          'author': 1,
          'read_status': '已读',
          'user_id': 3,
          'avatar': 'http://localhost:8080/static/Chat/avatar1.jpeg',
          'words': '您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解',
        },
        {
          'author': 1,
          'read_status': '已读',
          'user_id': 3,
          'avatar': 'http://localhost:8080/static/Chat/avatar1.jpeg',
          'words': '您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解',
        },
        {
          'author': 2,
          'read_status': '已读',
          'user_id': 1,
          'avatar': '',
          'words': '您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解',
        },
        {
          'author': 1,
          'read_status': '已读',
          'user_id': 3,
          'avatar': 'http://localhost:8080/static/Chat/avatar1.jpeg',
          'words': '您好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解',
        },
      ],
    };
  },
  mounted() {
    let userObject = this.$cookies.get('user');
    console.log('==============userObject start');
    console.log(userObject);
    console.log('==============userObject end');
    if (userObject != null) {
      this.isLogin = true;
      this.username = userObject.name;
    }
  },
  methods: {
    // 头部组件触发事件--》本父组件--》上传简历附件组件
    showUploadBox: function (e) {
      alert(888888888);
      this.$refs.dialogWrap.showUploadBox();
    },
    showEmojBox: function () {
      this.$refs.emojBox.style.display = 'block';
    },
    hideEmojBox: function () {
      this.$refs.emojBox.style.display = 'none';
    },
    switchEmojBox: function () {
      if (this.$refs.emojBox.style.display == 'none') {
        this.showEmojBox();
      } else {
        this.hideEmojBox();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/Chat/index.css";
</style>
