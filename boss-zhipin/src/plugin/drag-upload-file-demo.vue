<template>
    <div>
        <div id="leftContain" style="width: 1000px;height: 300px">
            <!--<img id="img" class="img" align="center" src="">-->
            <input type="file" @change="uploadImg($event)" ref="img" style="opacity: 50"/>
        </div>
        <div style="float: right;margin-right: 8%">
            <span class="imgName" style="font-size: 5px">未选择图片</span>
            <button size="medium" type="primary" @click="toCheck" round>提交识别</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'drag-upload-file',
        // components: {
        //     'el-button': 'el-button'
        // },
        data() {
            return {};
        },
        methods: {
            onDrag: function (e) {
                e.stopPropagation();
                e.preventDefault();
                console.log('1')
            },
            onDrop: function (e) {
                // e.stopPropagation();
                // e.preventDefault();
                // let dt = e.dataTransfer;
                // document.querySelector('.imgName').innerHTML = imgfile.files[0].name;
                // let reader = new FileReader();
                // reader.readAsDataURL(dt.files[0]);
                // reader.onload = function () {
                //     document.querySelector('img').src = this.result;
                // };
                // this.file = e.target.files;
                //
                // console.log('onDrop start')
                // console.log(e)
                // console.log(e.target)
                // console.log(this.file)
                // console.log('onDrop end')
            },
            uploadImg(e) {
                let imgfile = this.$refs.img;
                let reader = new FileReader();
                reader.readAsDataURL(imgfile.files[0]);
                document.querySelector('.imgName').innerHTML = imgfile.files[0].name;
                reader.onload = function () {
                    document.querySelector('img').src = this.result;
                };
                this.file = e.target.files;
                console.log('onDrop2 start')
                console.log(e)
                console.log(e.target)
                console.log(this.file)
                console.log('onDrop end')
            },
            toCheck() {

            },


        },
        mounted() {
            // let dropbox = document.querySelector('.img');
            // dropbox.addEventListener('dragenter', this.onDrag, false);
            // dropbox.addEventListener('dragover', this.onDrag, false);
            // dropbox.addEventListener('drop', this.onDrop, false);

        },

    };
</script>

<style scoped>
    #leftContain {
        border: 1px solid #DCDCDC;
        box-shadow: 0px 0px 4px 3px rgb(245, 245, 245);
        width: 900px;
        height: 100px;
        display: inline-block;
        margin-top: 2.5%;
        margin-left: 20px;
        float: left;
        position: relative;
    }

    #leftContain img {
        width: 400px;
        height: 85px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -55%);
    }

    #leftContain input { /*与#leftContain img一样*/
        width: 400px;
        height: 85px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -55%);
    }

</style>
