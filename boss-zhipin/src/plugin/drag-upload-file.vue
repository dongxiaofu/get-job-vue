<template>
    <div id="dialog-wrap" style="display: none" ref="dialogWrap">
        <!--遮罩层-->
        <div id="layer"></div>
        <div id="dialog-container">
            <div id="container-inner">
                <div id="close" v-on:click="closeUploadBox"></div>
                <div id="upload">
                    <div id="tip-first">
                        <ul id="attachments" ref="attachments" style="display: none">
                            <li v-for="(attachment,index) in uploadedAttachments">
                                <span class="attachment-close" v-bind:index=index
                                      @click="removeAttachment($event)"></span>
                                <div><img :src="attachmentDefaultUrl"></div>
                                <div class="attachment-title">{{attachment.filename}}</div>
                            </li>
                        </ul>
                        <span id="upload-tip">拖拽文件到我下面</span>
                        <span><input type="file" name="file" id="upload-button" @change="uploadImg($event)"
                                     ref="img"></input></span>
                    </div>
                    <p id="tip-second">支持DOC、DOCX、PDF、JPG、PNG格式附件</p>
                </div>
                <div id="upload-btn">
                    <span>上传简历附件</span>
                    <input type="submit" @click="submitAttachements">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'drag-upload-file',
        data() {
            return {
                uploadFileApi: 'http://dev.cg.com/tool/upload.php',
                attachmentDefaultUrl: 'http://localhost:8080/static/User/avatar_default.png',
                uploadedAttachments: [
                    // {filename: '小明的简历.pdf', url: '1'},
                    // {filename: '小明的简历.pdf', url: '1'},
                    // {filename: '小明的简历.pdf', url: '1'}
                ]
            };
        },
        methods: {
            // 上传简历附件弹窗
            showUploadBox: function () {
                this.$refs.dialogWrap.style.display = 'block'
                console.log(7777)
            },
            closeUploadBox: function () {
                this.$refs.dialogWrap.style.display = 'none'
            },
            uploadImg(e) {
                let file = event.target.files[0]
                let param = new FormData() // 创建form对象
                param.append('file', file, file.name) // 通过append向form对象添加数据
                param.append('type', '1') // 添加form表单中其他数据
                var filename = file.name
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
                    this.$refs.attachments.style.display = 'block'
                    this.uploadedAttachments.push({filename: filename, url: body.imgURL})
                    console.log('uploadImg-uploadedAttachments-start')
                    console.log(this.uploadedAttachments)
                    console.log('uploadImg-uploadedAttachments-end')
                }, response => {
                    console.log(response)
                    alert("出问题啦")
                });
            },

            // 删除要上传的附件
            removeAttachment(e) {
                var target = e.currentTarget
                var index = e.currentTarget.getAttribute('index')
                console.log(index)
                this.uploadedAttachments.splice(index, 1)
                // // 删除结点。不需要。因为vue的动态双向绑定
                // target.remove()
                if (this.uploadedAttachments.length == 0) {
                    this.$refs.attachments.style.display = 'none'
                }

                console.log('removeAttachment-uploadedAttachments-start')
                console.log(this.uploadedAttachments)
                console.log('removeAttachment-uploadedAttachments-end')
            },

            // 提交数据
            submitAttachements(){
                // 将文件地址提交
                console.log(this.uploadedAttachments)
            }
        },
        mounted() {
            // let dropbox = document.querySelector('#upload-button');
            // dropbox.addEventListener('dragenter', this.onDrag, false);
            // dropbox.addEventListener('dragover', this.onDrag, false);
            // dropbox.addEventListener('drop', this.onDrop, false);

        },

    };
</script>

<style scoped>
    /*上传附件简历弹窗*/
    #dialog-wrap {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1000;
        /*下面的值必须有，才能看到效果*/
        top: 0;
        left: 0;
    }

    #layer {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: #8d92a1;
        opacity: 0.8;
        z-index: 1001;
    }

    #dialog-container {
        width: 350px;
        height: 450px;
        padding: 25px;
        margin: 0 auto;
        position: absolute;
        left: 600px;
        top: 70px;
        z-index: 1008;
        background-color: #ffff;
        color: #979a91;
        text-align: center;
    }

    #tip-first {
        width: 100%;
        height: 80%;
        border: 1px solid red;
    }

    #tip-second {
        padding: 20px 20px;
        text-align: left;
    }

    #container-inner {
        width: 100%;
        height: 100%;

        position: relative;
    }

    #upload {
        height: 370px;
        position: relative;

        border: 1px dashed #979a91;
    }

    #upload-btn {
        display: block;
        height: 40px;
        background-color: #5dd5c8;
        margin-top: 40px;

        position: relative;
    }

    #upload-btn input {
        height: 40px;
        width: 100%;
        background-color: black;
        opacity: 0%;
        cursor: pointer;
    }

    #upload-btn span {
        height: 40px;
        line-height: 40px;
        width: 100%;
        display: inline-block;

        font-size: 14px;
        color: #fff;
        text-align: center;

        position: absolute;
        top: 0px;
    }

    /*关闭按钮 start*/
    #close {
        width: 16px;
        height: 16px;
        line-height: 16px;
        position: absolute;
        right: -22px;
        top: -23px;
        cursor: pointer;
    }

    #close::before {
        content: "\00D7";
        font-size: 21px;
    }

    /*关闭按钮 end*/
    #upload-button {
        width: 100%;
        height: 100%;
        background: greenyellow;
        opacity: 0;
    }

    #upload-tip {
        /*display: block;*/
        /*padding-top: 30px;*/
    }

    ul li {
        list-style: none;
    }

    div, span, ul, li, p, img {
        margin: 0;
        padding: 0;
    }

    #attachments {
        width: 100%;
        height: 50%;
        text-align: left;
        border: 1px solid green;
    }

    #attachments li {
        /*display: inline-block;*/
        width: 85px;
        height: 85px;
        margin-left: 23px;
        margin-top: 10px;
        float: left;

        position: relative;
    }

    .attachment-close {
        position: absolute;
        width: 16px;
        height: 16px;
        line-height: 16px;
        top: 0px;
        right: 0px;
    }

    .attachment-close::before {
        content: '\D7';
        font-size: 21px;
    }

    #attachments img {
        display: inline-block;
        width: 85px;
        height: 85px;
    }

    #attachments p {
        line-height: 20px;
    }

    #attachments .attachment-title {
        width: 85px;
        height: 20px;
        white-space: nowrap;
        overflow: hidden;
    }

</style>
