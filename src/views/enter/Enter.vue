<template>
  <div class="enter">
    <div class="login">
        <h2>二手车</h2>
        手机号码：<input type="text" id="name"><span id="pan"></span></body><br>
        验证码：<input type="text" id="password"><button>获取验证码</button><span id="pa"></span><br>
        
        
        <button class="sub-btn js-checkcode" type="submit">一键注册并登录</button>
        <p class="free-phone">免费咨询8888-8888</p>
        <p class="agree-text">登录即视为同意<a href="https://image.guazistatic.com/gz01190926/17/21/21c7f57e0f6b77e4b7dd3b608e44d04f.pdf" target="_blank" data-gzlog="92392518">《用户使用协议》</a>及<a href="https://image1.guazistatic.com/qn2011191641497e29ffcf00a1edc1fec8a5e4b33af28c.pdf" target="_blank" data-gzlog="92392518">《隐私权条款》</a></p>
        <input type="hidden" name="source" value="12">
        <input type="hidden" name="staticPage" value="//www.guazi.com/ssoJump.php">
        <input type="hidden" name="callBack" value="parent.web_login_callback">
    </div>
</div>
</template>

<script>
  export default {
    name:"Enter", 
    components: {

    }
  }
</script>
<style scoped>
  .enter{
    width: 100%;
    height: 100%;
  }
  .login{
    width: 50%;
    height: 60%;
    margin: 0 auto;
    font-family: '微软雅黑';
    font-size: 22px;
  }
</style>