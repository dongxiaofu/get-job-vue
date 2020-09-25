<template>
    <div class="file_box ">
			<span class='upload'>
				<input type="file" name="" id="" value="" name="saveFile" @change="tirggerFile($event)"/>
         	    <img :src="form.imgURL" alt=""/>
				<i>添加图片</i>
			</span>
        <i class='title_dec' style="position: absolute;left: 4rem;top:3rem;">您可以上传1张图片</i>
        <form v-bind:action="api" enctype="multipart/form-data" method="post">
            <input type="file" name="file"/>
            <input type="submit"></input>
        </form>
    </div>
</template>


<script>
    export default {
        name: "upload-file",
        data() {
            return {
                form: {imgURL: 'http://localhost:8080/static/JobDetail/pro-1.png', img: true},
                api: 'http://dev.cg.com/tool/upload.php',
            }
        },
        methods: {
            tirggerFile(event) {
                alert(3333)
                let self = this;
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
                let api = this.api
                this.$http.post(api, param, config).then(response => {
                    var body = response.body;
                    console.log('body start')
                    console.log(body)
                    console.log('body end')
                    self.form.img = body.img;
                    self.form.imgURL = body.imgURL;
                }, response => {
                    console.log(response)
                    alert("出问题啦")
                });

                // 添加请求头
                // self.$openapi.$axios.post('upload/upImg', param, config)
                //     .then(response => {
                //         if (response.data.status == 200) {
                //             self.form.img = response.data.data.img;
                //             self.form.imgURL = 'http://www.baidu.com/' + response.data.data.img;
                //         }
                //     })
            },
        }
    }
</script>
¬
<style scoped>
    .upload[data-v-ddcf96a0] {
        width: 3rem;
        height: 3rem;
        display: inline-block;
        border-radius: 0.2rem;
        position: relative;
        margin-left: 1.12rem;
        margin-top: 0.78rem;
        /*background: #E5E5E5 url(‘1.png’) center center no-repeat;*/
        background-size: 0.72rem 0.72rem;
    }

    .upload input {
        /*position: absolute;*/
        width: 3rem;
        height: 3rem;
        top: 0;
        left: 0;
        /*opacity: 0;*/
    }

    .file_box img {
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        display: block;
        float: left;
        border: 0.02rem solid #aad5cb;
    }

    .upload i {
        position: absolute;
        bottom: 0.36rem;
        left: 0.72rem;
        color: #ff1819;
        font-size: 0.4rem;
    }
</style>

