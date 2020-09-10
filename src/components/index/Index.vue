<template>
  <div class="micronews">
    <my-header></my-header>




   <div class="layui-fulid micronews-banner w1000">
     <div class="layui-carousel imgbox" id="micronews-carouse">
       <div carousel-item>
         <div>
           <p class="title">去南非旅行需要做什么准备</p>
           <a href="list.html" ><img src="@/assets/static/images/news_img1.jpg"></a>
         </div>
         <div>
           <p class="title">去南非旅行需要做什么准备</p>
           <a href="list.html"><img src="@/assets/static/images/news_img1.jpg"></a>
         </div>
       </div>
     </div>
   </div>


   <div class="micronews-container w1000">
     <div class="layui-fluid">
       <div class="layui-row">
         <div class="layui-col-xs12 layui-col-sm12 layui-col-md8">
           <div class="main">
             <div class="list-item" id="LAY_demo2">

               <div class="item">
                 <a href="details.html">
                   <img :src="studentImg"  style="width:100px; height:130px">
                 </a>
                 <div class="item-info" v-for="(v,k) in new_list">
                   <h4><a href="details.html">{{v.name}}</a></h4>
                   <div class="b-txt">
                     <span class="label">娱乐</span>
                     <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <a href="details.html">
                    <img src="@/assets/static/images/204542.jpg" width="100px" height="30px">
                  </a>
                  <div class="item-info">
                    <h4><a href="details.html">渝广快速一车上万件快递全被烧光，双11战果泡汤</a></h4>
                    <div class="b-txt">
                      <span class="label">娱乐</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a href="details.html">
                    <img src="@/assets/static/images/news_img13.jpg">
                  </a>
                  <div class="item-info">
                    <h4><a href="details.html">教育部发布教师职业行为十项准则</a></h4>
                    <div class="b-txt">
                      <span class="label">财经</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a href="details.html">
                    <img src="@/assets/static/images/news_img14.jpg">
                  </a>
                  <div class="item-info">
                    <h4><a href="details.html">赵丽颖婚后首部电视剧开播！刚开场剧情相当惊险谍战大片的感觉！</a></h4>
                    <div class="b-txt">
                      <span class="label">娱乐</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-info">
                    <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                    <div class="b-txt">
                      <span class="label">娱乐</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a href="details.html">
                    <img src="@/assets/static/images/news_img7.jpg">
                  </a>
                  <div class="item-info">
                    <h4><a href="details.html">独居女孩防身用利器！</a></h4>
                    <div class="b-txt">
                      <span class="label">生活</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a href="details.html">
                    <img src="@/assets/static/images/news_img8.jpg">
                  </a>
                  <div class="item-info">
                    <h4><a href="details.html">女司机刚拿车”！女司机刚拿驾照就撞车，老公“敢怒不敢言”贴8张纸提醒</a></h4>
                    <div class="b-txt">
                      <span class="label">娱乐</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a href="details.html">
                    <img src="@/assets/static/images/news_img9.jpg">
                  </a>
                  <div class="item-info">
                    <h4><a href="details.html">教育部发布教师职业行为十项准则</a></h4>
                    <div class="b-txt">
                      <span class="label">生活</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a href="details.html">
                    <img src="@/assets/static/images/news_img3.jpg">
                  </a>
                  <div class="item-info">
                    <h4><a href="details.html">赵丽颖婚后首部电视剧开播！刚开场剧情相当惊险谍战大片的感觉！</a></h4>
                    <div class="b-txt">
                      <span class="label">娱乐</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a href="details.html">
                    <img src="@/assets/static/images/news_img11.jpg">
                  </a>
                  <div class="item-info">
                    <h4><a href="details.html">想要头发好只要不洗头？ 英国女子留1.83米长发自爆近20年没洗过</a></h4>
                    <div class="b-txt">
                      <span class="label">娱乐</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a href="details.html">
                    <img src="@/assets/static/images/news_img10.jpg">
                  </a>
                  <div class="item-info">
                    <h4><a href="details.html">牛油果吃的对身体的好处</a></h4>
                    <div class="b-txt">
                      <span class="label">生活</span>
                      <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      500条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="layui-col-xs12 layui-col-sm12 layui-col-md4">
            <div class="popular-info">
              <div class="layui-card">
                <div class="layui-card-header">
                  <h3>热门资讯</h3>
                </div>
                <div class="layui-card-body">
                  <ul class="list-box">
                    <li class="list">

                      <a href="list.html">你和我的倾城时光</a><i class="heat-icon"></i>

                    </li>
                    <li class="list">

                      <a href="list.html">顶级酒店内幕被曝光</a><i class="heat-icon"></i>

                    </li>
                    <li class="list">

                      <a href="list.html">王思聪抽奖</a><i class="heat-icon"></i>

                    </li>
                    <li class="list">

                      <a href="list.html">王者荣耀上官婉儿</a>

                    </li>
                    <li class="list">

                      <a href="list.html">妻子的浪漫旅行</a>

                    </li>
                    <li class="list">

                      <a href="list.html">海底捞回应员工偷拍</a>

                    </li>
                    <li class="list">

                      <a href="list.html">扎克伯格禁止高管用iPhone</a>

                    </li>
                    <li class="list">

                      <a href="list.html">王思聪抽手机壳送手机</a>

                    </li>
                    <li class="list">

                      <a href="list.html">每天闹钟20次提醒男友抽奖 </a>

                    </li>
                    <li class="list">

                      <a href=list.html#">詹姆斯收藏比赛用球</a>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  <my-footer></my-footer>
  </div>

</template>


<script>
  import "@/assets/layui/css/layui.css";
  import "@/assets/static/css/main.css";
  import MyHeader from "@/components/Header";
  import MyFooter from "@/components/Footer.vue";
  import Common from "@/mixin/Common";
  export default {
    name: "Index",
    data () {
      return {
        // 图片路径
        studentImg: require('@/assets/static/images/11111.jpg'),
        new_list:[],
      }
    },
    components:{
      MyHeader:MyHeader,
      MyFooter:MyFooter
     },
    mixins:[ Common ],
    methods:{

    },

    mounted(){
      this.$http.post('/api/aa').then((response) => {
        // this.new_list=respnose.res;
        console.log(respnose.body.data);
        // console.log('success')
      }, (error) => {
        console.log(error)
      })
      layui.use('index',function(){
        var index = layui.index;
        index.banner()
        index.seachBtn()
        index.arrowutil()
      });
    }
  }
</script>

<style scoped>

</style>
