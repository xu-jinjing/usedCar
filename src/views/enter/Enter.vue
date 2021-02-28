<template>
  <div class="enter">
    <div class="login">
        <h2>花生三手车</h2>
        <p>用户名：<input type="text" id="name"><span id="pan"></span></body><br></p>
        <p>密码：<input type="text" id="password"><span id="pa"></span><br></p>
        <p>验证码：<input type="text" id="txt"> <button class="btn" @click="btnClick" >获取验证码</button></p>
        
        
        <p class="sub-btn"><button class="btn2"  type="submit" >一键注册并登录</button></p>
        <p class="free-phone">免费咨询8888-8888</p>
        <p class="agree-text">登录即视为同意<a href="https://image.guazistatic.com/gz01190926/17/21/21c7f57e0f6b77e4b7dd3b608e44d04f.pdf" target="_blank" data-gzlog="92392518">《用户使用协议》</a>及<a href="https://image1.guazistatic.com/qn2011191641497e29ffcf00a1edc1fec8a5e4b33af28c.pdf" target="_blank" data-gzlog="92392518">《隐私权条款》</a></p>
        <!-- <input type="hidden" name="source" value="12">
        <input type="hidden" name="staticPage" value="//www.guazi.com/ssoJump.php">
        <input type="hidden" name="callBack" value="parent.web_login_callback"> -->
    </div>
</div>
</template>

<script>

  import rand from '../enter/enter'

  export default {
    name:"Enter", 
      computed: {
     
    },
    methods: {
    //    rand: function(min,max){
    //      return Math.floor(Math.random()*(max-min+1)+min);
    //    },
    //        btnClick(){
    //     const arr=[];
    //   for(let i=0;i<4;i++){
    //       let code=rand(48,122);
    //       while(code>=58&&code<=64||code>=91&&code>=96){
    //           code=rand(48,122);
    //       }
    //       arr[i]=String.fromCharCode(code);
    //   }
    //   document.getElementById("txt").value=arr.join("");
    //   }
     
    },
  
    }
</script>
<style scoped>
  
  .enter{
    width: 100%;
    height: 480px;
    background-color:aquamarine;
    padding: 50px;
  }
  .login{
    width: 50%;
    height: 70%;
    margin: 0 auto;
    margin-top: 50px;
    font-family: '微软雅黑';
    font-size: 22px;
    background-color: rgb(107, 138, 224);
    padding-left: 26px;
    padding-bottom: 50px;
  }
  .btn{
    margin-left: 10px;
  }

  .sub-btn{
    padding-left: 120px;
  }

  .btn2{
    width: 140px;
    height: 36px;
    font-size: 17px;
  }
</style>