<template>
  <div class="micronews micronews-login">
    <my-header></my-header>

    <div class="micronews-login-container">
      <div class="form-box">
        <h3>注册</h3>
        <div class="wrap">
          <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="" lay-verify="required|phone" id="phone"  placeholder="请输入手机号" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required" id="imgCode"  placeholder="验证码" autocomplete="off" class="layui-input">
                <img :src=img_code >
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required"  placeholder="请输入短信验证码" autocomplete="off" class="layui-input">
                <input type="button"  id="veriCodeBtn" name="" value="验证码"  class="obtain layui-btn">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="password" name="" lay-verify="required|phone"   placeholder="请输入密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="password" name="" lay-verify="required|phone"   placeholder="确认密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item agreement">
              <div class="layui-input-block">
                <input type="checkbox" name="like1[write]" lay-verify="required" lay-skin="primary" title="我已阅读并同意" checked="">
                <span class="txt"><a href="#">用户协议</a>和<a  href="#">隐私条款</a></span>

              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="*" onclick="return false" >注册 </button>
              </div>
            </div>
            <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
          </form>
          <div class="other-login">
            <a href="#">
              <img src="@/assets/static/images/load1.png">
            </a>
            <a href="#">
              <img src="@/assets/static/images/load2.png">
            </a>
          </div>
        </div>



      </div>
    </div>

  </div>
</template>


<script>

  import "@/assets/layui/layui.js"
  import "@/assets/layui/css/layui.css"
  import "@/assets/static/css/main.css"
  import MyHeader from "@/components/Header"
  import MyFooter from "@/components/Footer.vue";
  export default {
    name: 'LoginNews',
    data () {
      return {
          img_code:'http://api4.mazhanliang.top/reg/imgcode',
      }
    },
    components:{
      MyHeader:MyHeader,
      MyFooter:MyFooter
    },
    methods:{
    },
    mounted() {

    }
  }
</script>
