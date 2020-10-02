<template>
    <!--搜索框地址弹出-->
    <div id="dialog-wrap-detail" style="display: none" ref="cityBox">
        <!--css实现关闭弹窗-->
        <!--<div id="dialog-container-close" tabindex="-1">-->
        <!--<i></i>-->
        <!--</div>-->
        <div id="dialog-container-layer"></div>
        <div id="dialog-container">
            <div id="dialog-container-close" v-on:click="closeCityBox">
                <i></i>
            </div>
            <div id="dialog-con">
                <div id="dialog-title"><h3>请选择城市</h3></div>
                <div id="city">
                    <ul id="section-province">
                        <div v-on:click="selectCityCategory($event, index)"
                             v-for="(cityCategory,index) in cityCategories">
                            <li
                                    v-bind:index="index"
                                    v-bind:cityCategoryStr="cityCategory.join()"
                                    :class="index == isActive ? 'city-active city-category' : 'city-category'"
                            >
                                <span v-for="item in cityCategory">{{item}}</span>
                            </li>
                        </div>
                    </ul>
                    <ul id="section-city">
                        <li class="classify-city"
                            v-for="city in selectedCities"
                        >
                            <div class="city-title">{{city.category}}</div>
                            <ul class="city-main">
                                <li class="city"
                                    v-for="cityItem in city.city_items"
                                    v-bind:city-code=cityItem.city_code
                                    v-on:click="selectCity($event)"
                                >
                                    {{cityItem.city_name}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "city-pop-window",
        data() {
            return {
                cityCategories: [
                    ['A', 'B', 'C', 'D', 'E'],
                    ['F', 'G', 'H', 'I', 'J'],
                    ['K', 'L', 'M', 'N', 'O'],
                    ['P', 'Q', 'R', 'S', 'T'],
                    ['U', 'W', 'X', 'Y', 'Z'],
                ],

                isActive: false,
                city1: [
                    {city_code: '1000', city_name: '北京'},
                    {city_code: '1001', city_name: '天津'},
                    {city_code: '1002', city_name: '武汉'},
                    {city_code: '1003', city_name: '长沙'},
                    {city_code: '1004', city_name: '上海'},
                ],
                city2: [
                    {city_code: '1000', city_name: '北京'},
                    {city_code: '1001', city_name: '天津'},
                    {city_code: '1002', city_name: '武汉'},
                    {city_code: '1003', city_name: '长沙'},
                    {city_code: '1004', city_name: '上海'},
                ],
                city3: [
                    {city_code: '1000', city_name: '北京'},
                    {city_code: '1001', city_name: '天津'},
                    {city_code: '1002', city_name: '武汉'},
                    {city_code: '1003', city_name: '长沙'},
                    {city_code: '1004', city_name: '上海'},
                ],
                city4: [
                    {city_code: '1000', city_name: '北京'},
                    {city_code: '1001', city_name: '天津'},
                    {city_code: '1002', city_name: '武汉'},
                    {city_code: '1003', city_name: '长沙'},
                    {city_code: '1004', city_name: '上海'},
                ],

                cities: [
                    // 在这里设置了，在下面的JS中使用，仍然是无数据
                    // {category: 'A', city_items: city1},
                    // {category: 'B', city_items: city2},
                    // {category: 'C', city_items: city3},
                    // {category: 'D', city_items: city4},
                ],
                // 当前分类下的城市
                selectedCities: [],
            }
        },

        mounted() {
            // this.cities = [
            //     {category: 'A', city_items: this.city1},
            //     {category: 'B', city_items: this.city2},
            //     {category: 'C', city_items: this.city3},
            //     {category: 'D', city_items: this.city4},
            // ]
            // // this.cities = []
            // // this.getCityList('A,B,C,D,E')
            // //
            // this.selectedCities = this.cities
        },
        created(){
            this.cities = []
            this.getCityList('A,B,C,D,E')
            this.selectedCities = this.cities
        },

        methods: {
            // 搜索框地址--关闭
            closeCityBox: function () {
                this.$refs.cityBox.style.display = 'none'
            },
            // 搜索框地址
            switchCityBox: function () {
                if (this.$refs.cityBox.style.display == 'none') {
                    this.$refs.cityBox.style.display = 'block'
                } else {
                    // this.$refs.cityBox.style.display == 'none'
                    this.closeCityBox();
                }
            },
            // 选择城市分类
            selectCityCategory: function (e, index) {
                // 将当前点击的分类名C设置为选中效果
                var targetParent = e.currentTarget;
                var target = targetParent.firstElementChild
                var currentIndex = target.getAttribute('index')
                // 获取C的html文本
                var category = target.innerText
                console.log('category = ' + category)
                // 设置C的class
                this.isActive = index
                // debug start
                console.log('index = ' + index + ', isActive = ' + this.isActive)
                if (this.isActive == false) {
                    console.log('0 is false')
                }
                // debug end
                var className = 'city-category'
                // 无效语法 start
                target.style.className = className + ' city-active';
                target.className = className + ' city-active';
                // 无效语法 end
                console.log(target)
                // 将C之外的分类元素的class清除
                // var cityCategories = document.getElementsByClassName(className)
                // for (var i = 0; i < cityCategories.length; i++) {
                //     if (i == currentIndex) {
                //         continue;
                //     }
                //     cityCategories[i].style.className = className
                // }

                // 展示该分类下的数据
                // 替换成从接口中请求数据
                var cityCategoryStr = target.getAttribute('cityCategoryStr')
                console.log('cityCategoryStr=' + cityCategoryStr)
                this.getCityList(cityCategoryStr)
                this.selectedCities = this.cities
            },

            // 选择城市
            selectCity: function (e) {
                var target = e.currentTarget;
                // 获取C的html文本
                var cityName = target.innerText
                console.log('cityName = ' + cityName)

                // 将父组件中的地址设置为当前选中地址
                var cityCode = target.getAttribute('city-code')     // vue 自定义属性能用中划线
                var cityName = cityName
                var selectedCity = {city_code: cityCode, city_name: cityName}
                this.$emit("selectCity", selectedCity)

                console.log('emit')
            },

            // 获取城市列表
            getCityList: function (cityCategoryStr) {
                let recommend_jobs_list_api = 'http://boss.api-cg.com/api/city/list/first-letter'
                this.$http.get((recommend_jobs_list_api), {params: {first_letter: cityCategoryStr}}).then(response => {
                    this.cities = response.body.data;
                    this.selectedCities = this.cities
                    console.log('==========this.recommend_jobs 222 start')
                    console.log(this.cities)
                    console.log('==========this.recommend_jobs end')
                    // alert("提交成功")
                }, response => {
                    console.log(response)
                    // alert("出问题啦")
                }).finally(
                    response => {
                        // alert('over')
                        // this.reload()
                    }
                )
            },
        }
    }
</script>

<style scoped>

    a {
        text-decoration: none;
        color: #414a60;
    }

    div, ul, li, a, p, dl, dd, span, img, dt {
        margin: 0px;
        padding: 0px;
    }

    ul {
        list-style: none;
    }

    /*搜索框地址弹出*/
    #dialog-wrap-detail {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1000;
        top: 0;
        left: 0;

        /*border: 1px solid red;*/
    }

    #dialog-container-layer {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1001;
        top: 0;
        left: 0;

        /*background-color: rgba(151, 154, 145, 0.51);*/

        background: rgba(37, 40, 48, .7); /*这组数值，效果更好*/

        opacity: 1.2;
    }

    #dialog-container {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 786px;
        height: 527px;
        z-index: 1002;
        margin: -243px 0 0 -393px;

        /*background-color: rgba(151, 154, 145, 0.51);*/
        /*opacity: 1.2;*/

        /*border: 1px solid red;*/
        background-color: #fff;
    }

    #dialog-container-close {
        width: 16px;
        height: 16px;

        position: absolute;
        right: 30px;
        top: 14px;

        cursor: pointer;
    }

    /*能使父元素隐藏，但失去焦点后，父元素又出现了，不好用*/
    /*#dialog-container-close:focus-within ~ div{*/
    /*display: none;*/
    /*}*/

    #dialog-container-close i::before {
        content: "\00D7";
        font-size: 21px;
    }

    #dialog-con {
        margin-top: 20px;
    }

    #dialog-con #city {
        padding: 10px 30px;
    }

    #dialog-con #dialog-title {
        padding-left: 30px;
        padding-right: 30px;
    }

    #dialog-con #city #section-province {
        width: 100%;
        height: 30px;


        background-color: #f9fafb;

        border: 1px solid #f9fafb;
    }

    #dialog-con #city #section-province li {
        width: 131px;
        height: 39px;
        line-height: 39px;
        text-align: center;

        float: left;

        cursor: pointer;

        font-size: 14px;

        padding: unset;

        position: relative;

        /*padding-left: 10px;*/
        /*padding-right: 10px;*/

        /*border: 1px solid green;*/
    }

    .city-active {
        background-color: #f9fafb;
        color: #5dd5c8;
    }

    /*实现下划线。用border不能实现下划线与文字等长。*/
    .city-active::before {
        content: "";
        position: absolute;
        top: unset;
        bottom: 0px;

        width: 35%;
        height: 2px;
        background-color: #5dd5c8;
    }


    #dialog-con #city #section-province li:hover {
        /*border-bottom: 1px solid #f9fafb;*/
        color: #5dd5c8;
    }

    #section-city {
        margin: 20px 0px; /*没这句，这个元素只会显示左边很少一部分。原因不知*/
        height: 378px;
        overflow: auto; /*与下面这句好像效果相同*/
        /*overflow-x: hidden;*/
        /*overflow-y: scroll;*/
    }

    #section-city .classify-city {
        width: 100%;
        /*height: 100%;*/

        /*border: 1px solid red;*/
    }

    #section-city .city-title {
        float: left;
        width: 11.2%;
        font-size: 15px;
        /*font-weight: 500;*/
        color: #5dd5c8;
        /*width: 40px;*/
        /*height: auto;*/
    }

    #section-city .city-main {
        float: left;
        width: 88.8%;
        /*width: 600px;!*746px;*!*/
        /*height: auto;*/
    }

    #section-city .city-main li {
        width: 100px;
        height: 30px;
        line-height: 30px;
        float: left;
        margin-bottom: 10px;
        font-size: 14px;
        cursor: pointer;

        /*border: 1px solid red;*/
    }

    #section-city .city-main li:hover {
        color: #5dd5c8;
    }
</style>
