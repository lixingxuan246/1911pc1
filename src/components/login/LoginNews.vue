<template>
  <div class="micronews micronews-login">

    <my-header></my-header>

    <div class="micronews-login-container">
      <div class="form-box">
        <h3>登录</h3>
        <div class="wrap">
          <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="" lay-verify="required|phone"  v-model="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="password" name="" lay-verify="required|phone"  v-model="password" placeholder="请输入密码" autocomplete="off" class="layui-input">

              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="*" onclick="return false" @click="login">登录</button>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="*" onclick="return false" @click="gotoPage('Red')">去注册</button>
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
  import "@/assets/layui/css/layui.css"
  import "@/assets/static/css/main.css"
  import Common from '@/mixins/common.js'
  import MyHeader from "@/components/Header"
  import MyFooter from "@/components/Footer.vue"
  export default {
  name: 'LoginNews',
  data () {
    return {
      phone:'12345678900',
      password:'',
    }
  },
 mixins:[Common],
 components:{
   MyHeader:MyHeader,
   MyFooter:MyFooter
 },
  methods:{
    login:function () {
      if(this.phone == ''){
        alert('请输入手机号')
        // this.alert('请输入手机号');
        return false;
      }
      let reg = /^1{1}\d{10}$/;
      if(!reg.test(this.phone)){
        alert('手机号码格式不正确');
        return false;
      }
      // if( this.(this.phone)){
        // this.msg('手机号码格式不正确');
        // return false;
      // }
      if(this.password == ''){
        alert('请输入密码');
        // this.msg('请输入密码');
        return false;
      }
      if(this.password.length < 6){
        alert('密码长度少于6位');
        return false;
      }
      let api_login = {
        phone:this.phone,
        password:this.password,
        tt:2
      };
      this.$http.post('/api/logins',api_login).then(success=>{
        alert(success.body.msg);
      },error=>{
        alert('登录失败，请重试');
        // this.msg('登录失败，请重试');

      })
    }
  },
  mounted(){

  }
}
</script>
