export default {
  methods:{
    alert:function ( msg ) {
        layui.layer.alert(msg);
      return false;
    },
    msg:function ( msg ) {
      layui.layer.open(
        {
          type:1,
          content:msg,
          shade:[0,3,'#393D49']
        }
      );
      return false;
    },
    checkPhone:function ( phone ) {
        var reg = /^1{1}\d{10}$/;
        if(!reg.test( phone )){
          return false;
        }else {
          return true;
        }
    },
    gotoPage:function ( page_name ) {
      this.$router.push({name:page_name});
    }
  }
}
