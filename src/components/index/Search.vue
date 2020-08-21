<template>
    <div class="micronews">
<<<<<<< HEAD
      <div class="micronews-header-wrap">
        <div class="micronews-header w1000 layui-clear">
          <h1 class="logo">
            <a href="index.html">
              <img src="@/assets/static/images/LOGO.png" alt="logo">
              <span class="layui-hide">LOGO</span>
            </a>
          </h1>
          <p class="nav">
<!--            <a href="index.html" class="active">最新</a>-->
<!--            <a href="list.html">娱乐</a>-->
<!--            <a href="list.html">生活</a>-->
<!--            <a href="list.html">财经</a>-->
<!--            <a href="list.html">科技</a>-->
<!--            <a href="list.html">军事</a>-->

            <a @click="shouye()">首页</a>
            <a @click="yule()">娱乐</a>
            <a @click="shenghuo()">生活</a>
            <a @click="caijing()">财经</a>

            <!--         <a href="list.html">科技</a>-->
            <a @click="keji()">科技</a>
            <a @click="junshi()">军事</a>
          </p>
          <div class="search-bar">
            <form class="layui-form" action="">
              <div class="layui-form-item">
                <div class="layui-input-block">
                  <input type="text" name="title"  placeholder="搜索你要的内容" autocomplete="off" class="layui-input">
                  <button class="layui-btn search-btn"  formnovalidate><i class="layui-icon layui-icon-search"></i></button>
                </div>
              </div>
            </form>
          </div>
          <div class="login">
            <a href="login.html">
              登录
            </a>
            <!-- <a href="login.html"> -->
            <!-- <img src="@/assets/static/images/header.png" style="width: 36px; height: 36px;"> -->
            <!-- </a> -->
          </div>
          <div class="menu-icon">
            <i class="layui-icon layui-icon-more-vertical"></i>
          </div>
          <div class="mobile-nav">
            <ul class="layui-nav" lay-filter="">
              <li class="layui-nav-item layui-this"><a href="index.html">最新</a></li>
              <li class="layui-nav-item"><a href="list.html">娱乐</a></li>
              <li class="layui-nav-item"><a href="list.html">生活</a></li>
              <li class="layui-nav-item"><a href="list.html">财经</a></li>
              <li class="layui-nav-item"><a href="list.html">科技</a></li>
              <li class="layui-nav-item"><a href="list.html">军事</a></li>
            </ul>
          </div>
        </div>
      </div>
=======
      <my-header></my-header>
>>>>>>> sjp

      <div class="micronews-container micronews-search-container w1000">
        <div class="layui-fluid">
          <p class="num">为您找到相关结果为<span> &nbsp;1770000&nbsp; </span>个</p>
          <div class="item-list">
            <div class="item">
              <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元 </a><span class="time">3小时前</span></h4>
              <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
            </div>
            <div class="item">
              <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元</a> <span class="time">3小时前</span></h4>
              <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
            </div>
            <div class="item">
              <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元</a> <span class="time">3小时前</span></h4>
              <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
            </div>
            <div class="item">
              <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元</a> <span class="time">3小时前</span></h4>
              <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
            </div>
            <div class="item">
              <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元 </a> <span class="time">3小时前</span></h4>
              <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
            </div>
            <div class="item">
              <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元 </a> <span class="time">3小时前</span></h4>
              <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
            </div>
          </div>
          <div id="micronews-search-test" style="text-align: center; padding:30px 0"></div>
        </div>
      </div>
     <my-footer></my-footer>
<!--      <script type="text/javascript" src="@/assets/layui/layui.js"></script>-->
    </div>
</template>

<script>
  import "@/assets/layui/css/layui.css";
  import "@/assets/static/css/main.css";
  import MyHeader from "@/components/Header"
  import MyFooter from "@/components/Footer.vue";
    export default {
        name: "Search.vue",
<<<<<<< HEAD
      data(){
          return {

          }
      },
      methods:{
        keji: function () {
          // 通过路由跳转的方式实现页面跳转
          this.$router.push({name: 'Search'})
        },
        yule: function(){
          this.$router.push({name: 'ListNews'})
        },
        shenghuo:function(){
          this.$router.push({name: 'PersinfoNews'})
        },
        junshi:function(){
          this.$router.push({name: 'PersinfoNews'})
        },
        caijing:function(){
          this.$router.push({name: 'Details'})
        },
   shouye:function(){
     this.$router.push({name:'Index'})
   },


=======
      components:{
        MyHeader:MyHeader,
        MyFooter:MyFooter
>>>>>>> sjp
      },
    }
</script>

<style scoped>

</style>
