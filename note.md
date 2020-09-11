## 创建vue项目

cnpm install --global vue-cli
vue init webpack boss-zhipin
cd boss-zhipin
cnpm install
cnpm run dev

## 基本问题


1.vue 文件中的src路径

<img class="icon-wechat-img" src="/static/JobList/we_chat_qr.jpg">

2.引入外部CSS文件

boss-zhipin/src/components/JobList.vue

<style scoped>
    @import "../../static/JobList/index.css";
</style>

3.设置全局CSS

在 /Users/cg/data/www/get-job-vue/boss-zhipin/src/App.vue 中添加如下代码：

<style>
    html, body {
        margin: 0px;
        padding: 0px;
        color: #414a60;
        font-size: 14px;
    }

    body {
        background-color: #f6f6f8;
        min-width: 1184px; /*很重要，使header的背景在网页缩小时不会出现不能横向覆盖整个宽度的状况*/
    }

    em {
        font-style: normal;
    }
</style>

## 其他笔记

eslint是一个JavaScript的校验插件，通常用来校验语法或代码的书写风格。

官方文档：https://eslint.org

这篇文章总结了eslint的规则：Eslint规则说明

有了eslint的校验，可以来规范开发人员的代码，是挺好的。但是有些像缩进、空格、空白行之类的规范，在开发过程中一直报错，未免太过于苛刻了。所以，我还是会选择关闭eslint校验。


- Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.
