<template>

    <div class="micronews">
    <my-header></my-header>


    <div class="micronews-container micronews-list-container w1000">
      <h3>娱乐资讯</h3>
      <div class="layui-fluid">
        <div class="layui-row">
          <div class="layui-col-xs12 layui-col-sm12 layui-col-md8">
            <div class="main">
              <div class="list-item" id="LAY_demo2">
                <div class="item">

                  <div class="item-info" v-for="(v,k) in new_list">W

                    <p @click="details(v.news_id)" news_id="v.news_id">
                      <img src="@/assets/static/images/news_img11.jpg">
<!--                      <img :src="v.news_image" width="125" height="70">-->
                    </p>
<!--                    <router-link :to="{name:'Details',query:{news_id:v.news_id}}">-->
                    <h4><a @click="details(v.news_id)">{{v.news_title}}</a></h4>
                    <div class="b-txt">
                      <span class="label">{{v.cate_name}}</span>
                      <span class="icon message">
<!--                      <i class="layui-icon layui-icon-dialogue"></i>-->
                            {{v.browse_count}} 条
                    </span>
                      <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      10分钟前  <hr>
                  <hr>
                    </span>
                    </div>
                  </div>
                  <!--分页-->
                  <div class="page-bar">
                    <ul>
                      <li v-if="cur>1"><a v-on:click="cur--,pageClick()">上一页</a></li>
                      <li v-if="cur==1"><a class="banclick">上一页</a></li>
                      <li v-for="index in indexs" v-bind:class="{ 'active': cur == index}">
                        <a v-on:click="btnClick(index)">{{ index }}</a>
                      </li>
                      <li v-if="cur!=all"><a v-on:click="cur++,pageClick()">下一页</a></li>
                      <li v-if="cur == all"><a class="banclick">下一页</a></li>
                      <li><a>共<i>{{all}}</i>页</a></li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
<!--          <div class="layui-col-xs12 layui-col-sm12 layui-col-md4">-->
<!--            <div class="popular-info popular-info-tog">-->
<!--              <div class="layui-card">-->
<!--                <div class="layui-card-header">-->
<!--                  <h3>资讯推荐</h3>-->
<!--                </div>-->
<!--                <div class="layui-card-body">-->
<!--                  <ul class="list-box">-->
<!--                    <a href="details.html"><img src="@/assets/static/images/news_img15.jpg" width="100%"> </a>-->
<!--                    <li class="list">-->

<!--                      <a href="details.html">南非金砖会议再造十年辉煌</a>-->

<!--                    </li>-->
<!--                    <li class="list">-->

<!--                      <a href="details.html">“日销40万”外卖料包厂被曝光，制作过程令人作呕</a>-->

<!--                    </li>-->
<!--                    <a href="details.html"><img src="@/assets/static/images/news_img16.jpg" width="100%"></a>-->
<!--                    <li class="list">-->

<!--                      <a href="details.html">韩国送的200吨橘子该怎么分？</a>-->

<!--                    </li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>

<my-footer></my-footer>

  </div>
</template>

<script>
  import "@/assets/layui/css/layui.css"
  import "@/assets/static/css/main.css"
  import "@/assets/layui/layui.js"
  import MyHeader from "@/components/Header"
  import MyFooter from "@/components/Footer.vue"

  export default {
    name: 'ListNews',

    data () {
      return {
        new_list:[],
        // news_id:news_id,
            all: 10, //总页数
            cur: 1,//当前页码
            totalPage: 0,//当前条数
      }
    },
    // mixins:[Common],
    components:{
      MyHeader:MyHeader,
      MyFooter:MyFooter
    },
    methods: {
    //   news_list:function () {
    //     this.$http.post('api/newsList').then( (response) =>{
    //       if( response.body.status == 200 ){
    //         this.news_list =this.news_list.concat(response.body.data);
    //       }
    //     },(error) => {
    //       alert(error);
    //     })
    //   }
      details: function (news_id) {
        //alert(news_id);
        this.$router.push({path:'/details',query:{news_id:news_id}});
      },

      //请求数据
      dataListFn: function(index){
        this.$axios.get("http://127.0.0.1:8090/demand/selectListByPage",
          {
            params:{
              page: index,
              limit:'10',
              state: 0
            }
          }).then((res) => {
          if(res.data.message == "success"){
            this.dataList=[];
            for(let i=0;i<res.data.data.length;i++){
              this.dataList.push(res.data.data[i])
            }
            this.all = res.data.totalPage;//总页数
            this.cur = res.data.pageNum;
            this.totalPage = res.data.totalPage;
          }

        });
      },
//分页
      btnClick: function(data){//页码点击事件
        if(data != this.cur){
          this.cur = data
        }
//根据点击页数请求数据
        this.dataListFn(this.cur.toString());
      },
      pageClick: function(){
//根据点击页数请求数据
        this.dataListFn(this.cur.toString());
      }
    },

    mounted(){
      this.$http.post('/api/newsList').then(respnose => {
        console.log(respnose.body.data);
        if (respnose.body.status == 200) {
          this.page++;
          this.new_list=respnose.body.data;
        }
      }, error => {
        console.log(error);
      })
    },
    computed: {
//分页
      indexs: function(){
        var left = 1;
        var right = this.all;
        var ar = [];
        if(this.all>= 5){
          if(this.cur > 3 && this.cur < this.all-2){
            left = this.cur - 2
            right = this.cur + 2
          }else{
            if(this.cur<=3){
              left = 1
              right = 5
            }else{
              right = this.all
              left = this.all -4
            }
          }
        }
        while (left <= right){
          ar.push(left)
          left ++
        }
        return ar
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<!--css-->

<style scoped>
  /*分页*/
  .page-bar{
    margin:40px auto;
    margin-top: 150px;
  }
  ul,li{
    margin: 0px;
    padding: 0px;
  }
  li{
    list-style: none
  }
  .page-bar li:first-child>a {
    margin-left: 0px
  }
  .page-bar a{
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #5D6062;
    cursor: pointer;
    margin-right: 20px;
  }
  .page-bar a:hover{
    background-color: #eee;
  }
  .page-bar a.banclick{
    cursor:not-allowed;
  }
  .page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #E96463;
    border-color: #E96463;
  }
  .page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
  }
</style>
