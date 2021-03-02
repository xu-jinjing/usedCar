<template>
  <div class="enter">
    <div class="login">
        <h2>花生三手车</h2>
        <p>用户名：<input type="text" id="name" placeholder="用户名首字母不为数字"><span id="pan"></span></body><br></p>
        <p>密**码：<input type="text" id="password" placeholder="请输入8位密码"><span id="pa"></span><br></p>
        <p>验证码：<input type="text" id="txt"> <button class="btn" @click="btnClick" >获取验证码</button></p>
        
        
        <p class="sub-btn"><button class="btn2"  type="submit" @click="btn2Click">一键注册并登录</button></p>
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
      btnClick(){
        const arr=[];
        for(let i=0;i<4;i++){
          let code=Math.floor(Math.random()*(122-48+1)+48);
          while(code>=58&&code<=64||code>=91&&code>=96){
              code=Math.floor(Math.random()*(122-48+1)+48);
          }
          arr[i]=String.fromCharCode(code);
        }
      document.getElementById("txt").value=arr.join("");
      },

      btn2Click(){
        let name=document.getElementById("name").value;
        if(name.length<6||name.length>20){
            document.getElementById("pan").innerHTML = "用户名只能6-20字符";
            document.getElementById("pan").style.color = "red";
            return;
        }
        if(name.charAt(0)>='0'&&name.charAt(0)<='9'){
            document.getElementById("pan").innerHTML = "用户名首字母不能为数字";
            document.getElementById("pan").style.color = "red";
            return;
        }
        let count=0;
        for(let i=0;i<name.length;i++){
            let ch=name.charAt(i);
            if(ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch >= '0' && ch <= '9' || ch == '_'){
                count++;
            }
        }
        if(count!=name.length){
            document.getElementById("pan").innerHTML = "用户名输入错误，必须由字母数字和下划线组成";
            document.getElementById("pan").style.color = "red";
           
        }else{
            document.getElementById("pan").innerHTML = "用户名输入正确";
            document.getElementById("pan").style.color = "green";
            
        }
        let password=document.getElementById("password").value;
        if(password.length!=8){
            document.getElementById("pa").innerHTML = "密码必须为8位数";
            document.getElementById("pa").style.color = "red";
            return;
        }else{
            document.getElementById("pa").innerHTML = "密码输入正确";
            document.getElementById("pa").style.color = "green";
            
        }

        let yzm = document.getElementById("txt").value;
        if(yzm.length != 0){
          document.getElementById("txt").style.color = "black";
          return;
        }else{
          document.getElementById("txt").value = "请输入四位验证码";
          document.getElementById("txt").style.color = "red";
        }
      }
     
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