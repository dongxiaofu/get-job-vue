<script>
const serverSrc = 'www.baidu.com';
const apiHost = process.env.NODE_ENV == 'development' ? 'http://localhost:8001' : 'http://boss-api.chugang.net';
const webHost = process.env.NODE_ENV == 'development' ? location.origin : 'http://boss.chugang.net';
const token = '12345678';
const hasEnter = false;
const userSite = '中国钓鱼岛';
export default {
  userSite,//用户地址
  token,//用户token身份
  serverSrc,//服务器地址
  apiHost,  // api地址
  webHost,  // 本网站地址
  hasEnter,//用户登录状态
};
</script>
