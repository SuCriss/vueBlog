<template>
  <div class="hello">
    <div style="height:1px;"></div>
    <div class="login">
      <header>
        <h1>{{msg}}</h1>
      </header>
      <div class="sr">
        <form>
          <div class="name">
            <label>
              <i class="sublist-icon glyphicon glyphicon-user"></i>
            </label>
            <input type="text"  placeholder="这里输入用户名" required id="name" v-model="userName" class="name_inp">
          </div>
          <div class="name">
            <label>
              <i class="sublist-icon glyphicon glyphicon-pencil"></i>
            </label>
            <input type="password"  placeholder="这里输入登录密码" required id="pwd" v-model="userPwd" class="name_inp">
          </div>
          <div class="name">
            <label>
              <i class="sublist-icon glyphicon glyphicon-pencil"></i>
            </label>
            <input type="password"  placeholder="这里输入确认密码" id="repwd" required class="name_inp">
          </div>
            <button type="button" class="btn btn-success" @click="register">注册</button>
        </form>
      </div>
    </div>

    <div style="text-align:center;">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        msg: '注册界面',
        userName:'',
        userPwd:''
      }
    },
    methods:{
      register:function () {
        var layer = layui.layer;
        var name = this.userName;
        var pwd  = this.userPwd;
        var repwd = $('#repwd').val();
        if(!name){
            layer.msg('请输入用户名');
            return;
        }
        if(!pwd){
          layer.msg('请输入登录密码');
          return;
        }
        if(!repwd){
          layer.msg('请确认登录密码');
          return;
        }
        if(pwd !=repwd){
          layer.msg('两次密码输入不一致，请重新输入!');
          return;
        }
        this.$http.post('/api/user/addUser', {
          username: name,
          pwd: pwd
        },{}).then((res) => {
          if(res.status==200){
              location.href='/'
          }else{
              layer.msg('注册失败...')
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  @keyframes cc{
    0%{opacity: 0.4;transform: scale(0.1) ;top: -500px;}
    50%{opacity: 0.4;transform: scale(0.1) rotateX(90deg);top: -50px;}
    100%{opacity: 1;transform: scale(1) rotateX(0deg);top: 0;}
  }
  @media only screen and (max-width: 500px) {
    .login{
      width: 95%!important;
    }
    .sr{
      padding:30px 70px!important;
    }
  }
  form{
    text-align: center;
  }
  html,body{
    height:100%;
    width:100%;
    background: url(../assets/loginbg1.jpg) no-repeat center center;
    background-size:100% 100%;
    overflow: hidden;
    perspective:500px;
  }
  *{
    font-family:"仿宋";
  }
  .login{
    width:450px;
    position: relative;
    top: 0;
    margin: 10% auto;
    background:rgba(255,255,255,1);
    border-radius: 10px;
    color: #27d;
    animation: cc 4s ease-in-out ;
  }
  .login header{

    padding: 10px;
    border-bottom: 1px solid #27d;
  }
  .login header h1{
    margin:0;
    padding:0;
    text-align: center;
    font-size: 25px;
    line-height: 40px;
  }
  .sr{
    padding:30px 90px;
  }
  .name{
    position:relative;
    margin-bottom:20px;
    clear:both;
    border:1px solid #27d;
    width: 100%;
    height: 40px;
  }
  .name label{
    position: absolute;
    color: #27d;
    top: 10px;
    left: 10px;
  }
  .name_inp{
    padding-left: 34px;
    height: 38px;
    line-height: 38px;
    line-height: 36px\9;
    border: none;
    background-color: #fff;
    width:100%;
    outline:none;
  }
</style>
