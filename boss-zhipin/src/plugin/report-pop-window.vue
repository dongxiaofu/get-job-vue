<template>
    <div>
        <!--举报列表弹窗-->
        <div class="dialog-wrap" style="display: none" ref="reportTypeListBox">
            <!--弹窗主体不能放到遮罩层，会模糊不清-->
            <div class="dialog-layer">
            </div>
            <!--@blur="hideReportListBox" 无效。什么原因？是因为它就没有获得焦点。-->
            <div class="dialog-report-type-list-container" tabindex="-1" @blur="hideReportListBox">
                <div class="dialog-report-type-list-container-close" v-on:click="hideReportListBox"></div>
                <div class="dialog-report-type-list-container-con">
                    <div class="dialog-report-type-list-container-con-title">
                        <h3>选择举报类型</h3>
                    </div>
                    <div class="dialog-report-type-list">
                        <div class="list-item" v-on:click="goToReportFormBox($event)"
                             v-for="reportType in reportTypeCollection"
                             v-bind:code=reportType.code
                             v-bind:title=reportType.title
                             v-bind:sub_title=reportType.sub_title
                        >
                            <div class="first-title">
                                {{reportType.title}}
                            </div>
                            <div class="second-title">
                                {{reportType.sub_title}}
                            </div>
                            <div class="icon-right">
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--举报表单-->
        <div class="dialog-wrap" style="display: none" ref="reportForm">
            <!--弹窗主体不能放到遮罩层，会模糊不清-->
            <div class="dialog-layer">
            </div>
            <div class="report-form-container">
                <div class="report-form-inner">
                    <div class="report-form-close" v-on:click="hideReportForm"></div>
                    <div class="report-form-con">
                        <div class="report-form-con-title">
                            <div class="icon-left" v-on:click="returnReportList"><i></i></div>
                            <h3>补充举报证据</h3>
                        </div>
                        <div class="form-row">
                            <span class="item-label">举报原因：</span>
                            <span class="item-content">{{selectedReportType.title}}</span>
                        </div>
                        <div class="form-row">
                    <span class="item-label">
                        <span class="icon-require">*</span>
                        具体情况说明：
                    </span>
                            <span class="item-content">
                        <span
                                :class="reportReason.className"
                                v-for="(reportReason,index) in reportReasonCollection"
                                v-bind:index=index
                                v-on:click="selectReportReason($event)"
                        >
                            {{reportReason.title}}
                        </span>
                    </span>
                        </div>
                        <div class="form-row txt">
                    <span class="item-label">
                        <span class="icon-require">*</span>
                        补充说明：
                    </span>
                            <span class="item-content" id="ipt-textarea">
                        <textarea
                                class="item-txt" placeholder="补充更详细的说明，可帮助工作人员更快定位问题，快速处理"
                                v-model="userObject" maxlength="500"
                                @input="countWordNum"
                        >
                        </textarea>
                        <span class="word-num">{{remainWordNum}}/{{totalWordNum}}</span>
                    </span>
                        </div>
                        <div class="form-row">
                    <span class="item-label">
                        <span class="icon-require">*</span>
                        验证码：
                    </span>
                            <span class="item-content">
                        <input type="text" class="item-ipt" placeholder="请输入验证码" v-model="verifyCode">
                        <img src="/static/JobDetail/verify-code.png" id="verify-code">
                    </span>
                        </div>
                        <div class="form-row upload">
                    <span class="item-label">
                        证据截图：
                    </span>

                            <span class="item-content">
                                <span v-if="isUpload" id="picture-previewer">
                                    <span id="close-picture-previewer" @click="closePicturePreviewer"></span>
                                <img :src="imgURL"/>
                            </span>
                        <span id="pretty-upload-btn" v-else>
                            <input class="upload-btn-none" type="file" @change="tirggerFile($event)">
                            <i class="icon-plus"></i>
                            <span class="upload-txt">上传图片</span>
                        </span>

                            </span>
                        </div>
                    </div>
                    <div class="report-form-footer">
                        <div class="report-form-footer-inner">
                            <button class="button-cancel" @click="hideReportForm">取消</button>
                            <button class="button-confirm" @click="submitReportContent">确定</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "report-pop-window",
        data() {
            return {
                // 举报分类
                reportTypeCollection: [
                    {code: '1', title: '色情骚扰', sub_title: '招聘者发布的信息包含色情低俗内容或存在性骚扰行为'},
                    {code: '2', title: '色情骚扰2', sub_title: '招聘者发布的信息包含色情低俗内容或存在性骚扰行为'},
                    {code: '3', title: '色情骚扰3', sub_title: '招聘者发布的信息包含色情低俗内容或存在性骚扰行为'},
                    {code: '4', title: '色情骚扰4', sub_title: '招聘者发布的信息包含色情低俗内容或存在性骚扰行为'},
                ],
                // 举报具体原因
                reportReasonCollection: [
                    {title: '人身攻击2', className: 'reason'},
                    {title: '言语恐吓', className: 'reason'},
                    {title: '虚假信息', className: 'reason'},
                    {title: '皮包公司', className: 'reason'}
                ],
                // 验证码
                verifyCode: 'ABC',
                // 图片
                evidence: '',
                // 举报内容
                content: '',
                // 选择的举报分类
                selectedReportType: {code: '0', title: '', sub_title: ''},
                // 选中的某分类下的具体原因
                selectedReportReasonCollection: [],
                // 输入框
                userObject: '',
                // 剩余输入字数
                remainWordNum: 500,
                totalWordNum: 500,
                // 是否已经上传图片了
                isUpload: false,
                uploadFileApi: 'http://dev.cg.com/tool/upload.php',
            }
        },
        mounted() {
            // this.isUpload = true
        },
        methods: {
            showReportComponent: function () {
                this.$refs.reportTypeListBox.style.display = 'block';
            },
            hideReportListBox: function () {
                this.$refs.reportTypeListBox.style.display = 'none';
            },
            goToReportFormBox: function (e) {
                this.$refs.reportTypeListBox.style.display = 'none';
                // 打开举报表单
                this.$refs.reportForm.style.display = 'block';

                // 设置选中的举报分类
                var target = e.currentTarget
                var code = target.getAttribute('code')
                console.log('code=' + code)
                var title = target.getAttribute('title')
                console.log('title=' + title)
                this.selectedReportType = {code: code, title: title, sub_title: ''}
                // 根据举报分类获取该分类下的具体原因，还要重设className
                this.reportReasonCollection = this.reportReasonCollection
            },
            // 关闭举报表单
            hideReportForm: function () {
                this.$refs.reportForm.style.display = 'none';
            },
            // 回到举报列表
            returnReportList: function () {
                this.$refs.reportForm.style.display = 'none';
                this.$refs.reportTypeListBox.style.display = 'block';
            },
            // 选择举报原因
            selectReportReason(e) {
                var target = e.currentTarget
                var index = target.getAttribute('index')
                var className = this.reportReasonCollection[index].className
                var unselectedClassName = 'reason'
                var selectedClassName = ' mult-select'
                var complexClassName = className + selectedClassName
                var selectedReason = target.innerText
                // 未选中状态，点击后选中；选中状态，点击后未选中
                // 动态维护选中的举报原因
                if (className == unselectedClassName) {
                    this.reportReasonCollection[index].className = complexClassName
                    this.selectedReportReasonCollection.push(selectedReason)
                } else {
                    this.reportReasonCollection[index].className = unselectedClassName
                    var selectedReportReasonCollection = this.selectedReportReasonCollection
                    // vue 删除数组中的一个元素
                    this.selectedReportReasonCollection.splice(selectedReportReasonCollection.indexOf(selectedReason, 1),1)
                }
                console.info('selectedReasonCollection length = ' + this.selectedReportReasonCollection.length)
                for (var i = 0; i < this.selectedReportReasonCollection.length; i++) {
                    var selectedReason = this.selectedReportReasonCollection[i]
                    console.log(selectedReason)
                }
                console.log("reset selectedReportReasonCollection2 " + this.selectedReportReasonCollection.length)
                // 设置选中的举报原因
                // 上文设置元素element的class是A后，下文马上查询class是A的元素，查询结果不包括element，
                // 所以下面的代码无效
                // console.log("reset selectedReportReasonCollection")
                // this.selectedReportReasonCollection = []
                // console.log("reset selectedReportReasonCollection " + this.selectedReportReasonCollection.length)
                // var selectedReasonCollection = document.getElementsByClassName(complexClassName)
                // console.info('selectedReasonCollection length = ' + selectedReasonCollection.length)
                // for (var i = 0; i < selectedReasonCollection.length; i++) {
                //     var selectedReason = selectedReasonCollection[i]
                //     console.log(selectedReason.innerText)
                //     this.selectedReportReasonCollection.push(selectedReason.innerText)
                // }
                // console.log("reset selectedReportReasonCollection2 " + this.selectedReportReasonCollection.length)
            },
            // 统计输入字数
            // 在vue中，差点忘记使用v-mode，在工作详情页，获取反馈内容，使用了value而不是v-mode
            countWordNum() {
                let txtVal = this.userObject.length
                this.remainWordNum = this.totalWordNum - txtVal
            },
            // 提交反馈内容
            submitReportContent() {
                // 检查是否能符合提交条件：三个必填项是否为空
                if (this.checkCanSubmit() == false) {
                    alert('请填写所有加红星号的内容')
                    return
                }

                let reportContent = {
                    reportReasonType: this.selectedReportType,
                    selectedReportReasonCollection: this.selectedReportReasonCollection,
                    content: this.userObject,
                    verifyCode: this.verifyCode,
                    evidence: this.evidence
                }

                // 请求接口，提交数据
                console.info('提交数据 start')
                console.log(reportContent)
                console.info('提交数据 end')
            },
            // 检查是否能符合提交条件：三个必填项是否为空
            checkCanSubmit() {
                if (this.selectedReportReasonCollection.length != 0 && this.userObject != '' && this.verifyCode != '') {
                    return true
                }
                return false
            },
            // 上传图片
            tirggerFile(event) {
                let file = event.target.files[0]
                let param = new FormData() // 创建form对象
                param.append('file', file, file.name) // 通过append向form对象添加数据
                param.append('type', '1') // 添加form表单中其他数据
                console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',

                    }
                }
                let api = this.uploadFileApi
                this.$http.post(api, param, config).then(response => {
                    var body = response.body;
                    console.log('body start')
                    console.log(body)
                    console.log('body end')
                    this.imgURL = body.imgURL
                    this.isUpload = true
                }, response => {
                    console.log(response)
                    alert("出问题啦")
                });
            },
            // 关闭图片预览
            closePicturePreviewer() {
                this.isUpload = false
            }
        }
    }
</script>

<style scoped>
    /*举报列表弹窗*/
    .dialog-wrap {
        width: 100%;
        height: 100%;

        position: fixed;
        /*很重要。没有top=0,该div会出现在窗口底部*/
        top: 0px;
        left: 0px;
        z-index: 1000;
    }

    .dialog-layer {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: #9fa3af;
        opacity: 0.8;

        z-index: 1001;
    }

    .dialog-report-type-list-container {
        width: 650px;
        height: 350px; /*完整显示每个举报项*/

        position: absolute;
        left: 30%;
        top: 40%;
        z-index: 1020;
        background-color: #fff;
        overflow: auto;
    }

    /*关闭按钮*/
    .dialog-report-type-list-container-close {
        width: 16px;
        height: 16px;
        line-height: 16px;

        position: absolute;
        right: 10px;
        top: 5px;

        cursor: pointer;
    }

    .dialog-report-type-list-container-close::before {
        content: "\00D7";
        font-size: 21px;
    }

    /*这对齐，最好使用一个专门的对齐层来实现，每个元素单独设置，繁琐*/
    .dialog-report-type-list-container-con-title {
        padding-left: 10px;
    }

    /*举报列表*/
    .dialog-report-type-list {
        width: 100%;
        height: 100%;

    }

    .dialog-report-type-list .list-item {

        height: 50px;
        width: 630px;
        padding: 10px 10px;

        position: relative;

        border-bottom: 1px solid #f2f5f9;
        /*border: 1px solid slategray;*/
    }

    .dialog-report-type-list .list-item:hover {
        background-color: #f2f5f9;
    }

    .dialog-report-type-list .list-item .last {
        border: none;
    }

    .dialog-report-type-list .list-item .first-title {
        font-size: 14px;
        color: rgba(65, 74, 96, 1);
    }

    .dialog-report-type-list .list-item .second-title {
        font-size: 12px;
        margin-top: 5px;

        color: rgba(141, 146, 161, 1); /*不懂这种颜色表示方法*/

        /*鸡肋？*/
        /*height: 20px;*/
        /*width: 100%;*/
    }

    /*右箭头*/
    .dialog-report-type-list .list-item .icon-right {
        width: 9px;
        height: 16px;

        position: absolute;
        right: 10px;
        top: 18px;

        cursor: pointer;
    }

    /*又快忘记背景图的使用方法了。使用背景图，而不是直接使用img，好处是，不需要在HTML中多处写img*/
    .dialog-report-type-list .list-item .icon-right i {
        width: 100%;
        height: 100%;
        display: inline-block; /*必须设置*/
        background-image: url("./report/icon-to-right@2x.png");
        background-repeat: no-repeat;
        background-position: center; /*图片居中*/
        background-size: contain; /*图片填充整个区域*/
    }

    /*举报form*/
    .report-form-container {
        width: 600px;
        height: 550px;
        background-color: #ffff;
        /*没有定位和层级，会被遮罩层盖住*/
        z-index: 1005;
        position: relative;
        top: 10%;
        left: 30%;

        padding: 0px 20px;

        /*border: 1px solid red;*/
    }

    .report-form-inner {
        width: 100%;
        height: 100%;
        position: relative;
    }

    /*关闭按钮*/
    .report-form-inner .report-form-close {
        width: 16px;
        height: 16px;
        line-height: 16px;

        position: absolute;
        right: 0px;
        top: 5px;

        cursor: pointer;
    }

    .report-form-inner .report-form-close::before {
        content: "\00D7";
        font-size: 21px;
    }

    /*标题*/
    .report-form-inner .report-form-con-title {
        padding-left: 20px;
        padding-top: 10px;
    }

    /*左箭头*/
    .report-form-inner .report-form-con-title .icon-left {
        width: 9px;
        height: 16px;

        position: absolute;
        top: 29px;
        left: 0px;

        cursor: pointer;
    }

    .report-form-inner .report-form-con-title .icon-left i {
        width: 100%;
        height: 100%;
        display: inline-block; /*必须设置*/
        background-image: url("./report/icon-to-right@2x.png");
        background-repeat: no-repeat;
        background-position: center; /*图片居中*/
        background-size: contain; /*图片填充整个区域*/
        transform: rotate(180deg); /*旋转右箭头图片为左箭头图片*/
    }

    .report-form-inner span {
        display: inline-block;
        margin: 0;
        padding: 0;
        color: #9fa3b0;
    }

    .report-form-inner .form-row {
        height: 40px;
        width: 100%;
        line-height: 40px;
        margin-bottom: 20px;
    }

    .report-form-inner .txt {
        height: 100px;
    }

    .report-form-inner .upload {
        height: 100px;
        padding-top: 20px;
    }

    .report-form-inner .form-row .item-label {
        height: 100%;
        width: 30%;
        float: left;
    }

    .report-form-inner .form-row .item-label .icon-require {
        color: red;
        position: relative;
        width: 4px; /*让星号和文字靠近*/
        /*left: 5px;*/
    }


    .report-form-inner .form-row .item-content {
        margin-left: 20px;
        height: 100%;
        width: 65%;
    }

    .report-form-inner .form-row .item-content .reason {
        width: 70px;
        height: 100%;
        /*display: inline-block;*/
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; /*设置隐藏部分为省略号*/

        margin-right: 20px;
        /*设置了下面两个熟悉，hover时出现闪动。私以为是颜色值的设定方式不同导致。的确如此*/
        background-color: #F8F8F8; /*这个值是下面颜色的另一种表达方式，通过IDE的颜色选择工具获得*/
        border: #F8F8F8;
        /*background-color: rgba(248, 248, 248, 1);*/
        /*border: 1px solid rgba(248, 248, 248, 1);*/

        text-align: center;

        cursor: pointer;

    }

    .report-form-inner .form-row .item-content .reason:hover {
        background-color: #aad5cb;
        border: #aad5cb;
    }

    /*选中多个*/
    .report-form-inner .form-row .item-content .mult-select {
        background-color: #aad5cb;
        border: #aad5cb;
    }

    .report-form-inner .form-row .item-content .item-txt {
        width: 95%;
        height: 78%;
        padding: 10px 10px;
        /*上面的数值，是肉眼观察、要求不超出父元素范围调整出的。私以为这种方式不好，一定存在精确确定这些数值的方法。*/
        margin: 0;
        /*padding: 0; !*会导致光标无法在textarea中闪动*!*/
        resize: none;
        outline: none;
    }

    /*文本输入框字数统计*/
    #ipt-textarea {
        position: relative;
    }

    .report-form-inner .form-row .item-content .word-num {
        /*默认位置，并不是top或bottom等于0，设置位置值，比较靠谱*/
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 48px;
        height: 15px;
        line-height: 15px;
        text-align: center;
        padding: 0;

        font-size: 5px;
    }

    /*设置placeholder的样式*/
    .item-txt::-webkit-input-placeholder {
        /*color: red;*/
        font-size: 10px;
    }

    .report-form-inner .form-row .item-content .item-txt:focus {
        border: 1px solid #aad5cb;
    }

    /*验证码*/
    .report-form-inner .form-row .item-content .item-ipt {
        width: 60%;
        height: 40px;
        margin: 0;
        float: left;
        padding-left: 20px;
        outline: none;
        border: 1px solid;

        background-image: url("./report/icons-sign.png");
        background-repeat: no-repeat;
        background-position-y: -34px;
    }

    #verify-code {
        width: 26%;
        height: 44px;
        cursor: pointer;
    }

    /*上传文件*/
    .upload-btn-none {
        margin: 0; /*设置了也效，上面与父元素存在间隔。原因未知。*/
        width: 70px;
        height: 80px; /*设置为100，超出了父元素界限。原因未知。*/
        /*background: red;*/
        border: 1px solid #5dd5c8;
        opacity: 0;
        /*非常重要。原生按钮虽然透明度为0，隐藏了。但是，必须要让用户能点击到它。*/
        position: absolute;
        z-index: 2; /*曾经必须大于定位于隐藏按钮上的其他元素*/

        cursor: pointer;
    }

    #pretty-upload-btn {
        position: relative;
        width: 70px;
        height: 80px; /*设置为100，超出了父元素界限。原因未知。*/
        /*background: red;*/
        border: 1px solid #5dd5c8;
        cursor: pointer;
    }

    #pretty-upload-btn:hover {
        background-color: #e7fff5;
    }

    #pretty-upload-btn .icon-plus {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url("./report/icon-plus@2x.png");
        background-repeat: no-repeat;
        background-size: contain;

        position: absolute;
        left: 22px;
        top: 15px;
        z-index: 1;
    }

    #pretty-upload-btn .upload-txt {
        position: absolute;
        z-index: 1;
        top: 35px;
        left: 0px;

        width: 70px;
        height: 30px;

        text-align: center;
        color: #5dd5c8;
    }

    .report-form-footer {
        margin-top: 20px;
        width: 100%;
        height: 30px;
    }

    .report-form-footer-inner {
        text-align: right;
    }

    .report-form-footer-inner button {
        width: 80px;
        height: 30px;
        border: 1px solid #5dd5c8;
        background-color: #fff;
        outline: none;
        cursor: pointer;
        margin-left: 20px;
        color: #5dd5c8;
    }

    .report-form-footer-inner button:hover {
        border: 2px solid #5dd5c8;
    }

    .report-form-footer-inner button.button-confirm {
        background-color: #5dd5c8;
        color: #fff;
    }

    .report-form-footer-inner button.button-confirm:hover {
        border: 2px solid #5dd5c8;
    }

    /*图片预览 start*/
    #picture-previewer {
        /*float: right;*/
        display: inline-block;
        width: 95%;
        height: 100px;
        position: relative;

        /*border: 1px solid red;*/
    }

    #picture-previewer img {
        width: 100%;
        height: 100px;
    }

    /*图片预览关闭按钮*/
    #close-picture-previewer {
        position: absolute;
        top: 0px;
        right: 0px;
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        cursor: pointer;
    }

    #close-picture-previewer::before {
        content: "\D7";
        font-size: 21px;
    }

    /*图片预览 end*/
</style>
