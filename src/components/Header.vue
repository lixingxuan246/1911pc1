<template>
  <div class="micronews-header-wrap">
    <div class="micronews-header w1000 layui-clear">
      <h1 class="logo">
        <a href="index.html">
          <img src="@/assets/static/images/LOGO.png" alt="logo">
          <span class="layui-hide">LOGO</span>
        </a>
      </h1>
      <p class="nav">
<!--        <a href="index.html" class="active">最新</a>-->
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
              <input type="text" name="title" placeholder="搜索你要的内容" autocomplete="off" class="layui-input">
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
</template>

<script>
    export default {
        name: "Header",
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


      },
    }
</script>

<style scoped>

</style>
