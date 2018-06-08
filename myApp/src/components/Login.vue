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
            <input type="text"  placeholder="这里输入登录名"  v-model="userName" class="name_inp">
          </div>
          <div class="name">
            <label>
              <i class="sublist-icon glyphicon glyphicon-pencil"></i>
            </label>
            <input type="text"  placeholder="这里输入登录密码" v-model="userPwd" class="name_inp">
          </div>
          <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
          <button type="button" class="btn btn-primary" @click="getUser">登录</button>
        <router-link to="{name:'Home'}"></router-link>
          <!-- Indicates a successful or positive action --><router-link to="/register">
            <button type="button" class="btn btn-success">注册</button>
          </router-link>
        </form>
      </div>
    </div>

    <div style="text-align:center;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '登录界面',
      userName:'',
      userPwd:''
    }
  },
  methods:{
    getUser:function () {
        var _that=this;
      var layer = layui.layer;
      var name = this.userName;
      var pwd  = this.userPwd;
      if(!name){
        layer.msg('请输入用户名');
        return;
      }
      if(!pwd){
        layer.msg('请输入登录密码');
        return;
      }
      this.$http.post('/api/user/getUser', {
        username: name,
        pwd: pwd
      },{}).then((res) => {
          console.log(res)
        var userList= res.body;
        var msg ='';
        var flag =false;
        for(var i in userList){
          if(name!= userList[i].userName){
            msg = '用户名不存在';
            return false;
          }
          if(name == userList[i].userName && pwd ==userList[i].userPwd){
            msg = '登录成功,准备跳转...';
            flag = true;
          }else{
            msg='用户名或密码不正确，请重新输入...'
          }
        }
        if(flag){
            layer.msg(msg,{time:2000})
          setTimeout(function () {
            _that.$router.push({name: 'Home'})
          },2000)
        }else{
          layer.msg(msg,{time:2000})
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
    margin: 15% auto;
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
