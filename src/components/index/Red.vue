<template>
  <div class="micronews micronews-login">
    <div class="micronews-header-wrap">
      <div class="micronews-header w1000 layui-clear">
        <h1 class="logo">
          <a href="index.html">
            <img src="@/assets/static/images/LOGO.png" alt="logo">
            <span class="layui-hide">LOGO</span>
          </a>
        </h1>
        <p class="nav">
          <a href="index.html" class="active">最新</a>
          <a href="list.html">娱乐</a>
          <a href="list.html">生活</a>
          <a href="list.html">财经</a>
          <a href="list.html">科技</a>
          <a href="list.html">军事</a>
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

    <div class="micronews-login-container">
      <div class="form-box">
        <h3>注册</h3>
        <div class="wrap">
          <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="" lay-verify="required|phone" id="phone" v-model="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required" id="imgCode" v-model="user_img_code" placeholder="验证码" autocomplete="off" class="layui-input">
<!--                <img src="https://fly.layui.com/auth/imagecode?t=1542856673772">-->
                <img :src="img_code" @click="changeImgCode()">

              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required"  placeholder="请输入短信验证码" autocomplete="off" class="layui-input">
                <input type="button"  id="veriCodeBtn" name=""
                       v-if="sendMark"
                       @click="getMsgCode"  class="obtain layui-btn" :value="Timecode">
                <input type="button" name=""
                    :value="Timecode"
                       v-else
                       class="obtain layui-btn"
                >
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="password" name="" lay-verify="required|phone"  v-model="pwd" placeholder="请输入密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="password" name="" lay-verify="required|phone"  v-model="pwd1" placeholder="确认密码" autocomplete="off" class="layui-input">
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
                <button class="layui-btn" lay-submit lay-filter="*" onclick="return false" @click="login">注册 </button>
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
  export default {
    name: 'LoginNews',
    data () {
      return {
        img_code:"",
        phone:'',
        user_img_code:'',
        dxyzm:'',
        sendMark:1,
        Timecode:'验证码',
        user_code:'',
        MsgCode:'验证码',
        pwd:'',
        pwd1:''
      }
    },
    methods:{
      login:function () {
        if(this.phone ==''){
          alert('手机号不能为空');
          return false
        }
        if(this.yzm ==''){
          alert('验证码不能为空');
          return false
        }
        if(this.user_code ==''){
          alert('短信验证码不能为空');
          return false
        }
        this.$http.post('/api/login',{
          phone:this.phone,
          yzm:this.yzm,
          dxyzm:this.dxyzm
        }).then(response=>{
          if(response.body.status == 200 ){
            sessionStorage.setItem('user_id',response.body.data.id);
            sessionStorage.setItem('token',response.body.data.token);
            this.$router.push({name:'ListNews'});
          }else{
            alert(response.data.msg);
          }
          console.log('success');
          console.log('response');
        },error=>{
          console.log(error);
        })


      },
      changeImgCode:function(){
        this.img_code = this.img_code + '?rand=' +Math.random();
      },
      getMsgCode:function(){
        if(this.phone==''){
          alert('请输入你的手机号');
          return false;
        }
        var reg=/^1{1}\d{10}$/;
        if(!reg.test(this.phone)){

          alert('手机号不正确');
          return false;
        }
        if(this.user_img_code==''){
          alert('请输入图片验证码');
          return false;
        }
        let api_req={
          sid:this.sid,
          user_img_code:this.user_img_code,
          phone:this.phone,
          type:1
        }

        //调用短信发送接口
        this.$http.post('/api/sendMsgCode',api_req).then(success=>{
          // alert('成功');
          if(success.body.status!=200){
            alert(success.body.msg);
          }else{
            this.changeImgCode();
            this.countDown();
          }
        },error=>{
          alert('短信发送失败，请重试');
          return false;
        });
      },
      CountDown:function(){
        this.sendMark=0;
        this.TimeCode=59;
        let _this=this;
        let int_val=setInterval(function(){
          _this.TimeCode--;
          if(_this.TimeCode<1){
            _this.TimeCode='验证码';
            _this.sendMark=1;
            clearInterval(int_val)
          }
        },1000)
      },
      dx:function () {
        if(this.phone ==''){
          alert('手机号不能为空');
          return false
        }
        this.$http.post('/api/dx',{
          phone:this.phone,
        }).then(response=>{
          if(response.body.status == 200 ){
            alert('666');
          }else{
            alert(response.data.msg);
          }
        },error=>{
          console.log(error);
        })
      }
    },
    mounted(){
        this.$http.get('/api/getImgUrl').then(success=>{

            console.log(success);
            this.img_code = success.body.data.url;
            this.sid = success.body.data.sid;
        },error=>{
          alert("请求失败，请重试")
        })
    },
  }
</script>
