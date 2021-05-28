<template>
<!--  账号密码登录-->
  <div class="account-login">
<!--    右上角关闭-->
    <div class="close" v-on:click="close()">
    </div>
<!--    logo-->
    <div class="huohuaschool-img">
      <img class="huohua-icon" src="../../../assets/img/login/logo.png"/>
      <h2>花生三手车</h2>
    </div>
<!--    账号输入框-->
    <input class="input" :class="{accountActive: accountActive}" 
    id="phone-text" type="text" placeholder="请输入手机号" v-on:blur="phoneBlur()" 
    :maxlength="13" v-on:focus="phoneFocus()" autocomplete="off"
    onkeyup="this.value=this.value.replace(/\s+/g,'')">
<!--    密码输入框-->
    <input class="input" :class="{passwordActive: passwordActive}" 
    id="password-text" type="password" placeholder="请输入登录密码" 
    v-on:blur="passwordBlur()" v-on:focus="passwordFocus()">
<!--    图形验证码-->
    <div v-show="imgcodeShow">
      <input class="input" :class="{imgcodeActive: imgcodeActive}" 
      id="imgcode-text" type="text" placeholder="请输入图形验证码" 
      v-on:blur="imgCodeBlur()" v-on:focus="imgCodeFoucs()" autocomplete="off">
      <img :src=imgUrl class="code-img" @click="imgCode()">
    </div>
<!--    转忘记密码页面-->
    <span class="forget-password" v-on:click="forgetPassword()">忘记密码</span>
<!--    该span用来存放错误信息-->
    <span id="checkonline"></span>
<!--    登录按钮-->
    <button class="login-button"  v-on:click="login()">登录</button>
<!--    转验证码登录页面-->
    <div class="code-login" v-on:click="loginCode()">验证码登录</div>
<!--    转注册页面-->
    <div class="go-registration"><span class="registration" v-on:click="registration()">立即注册</span></div>
<!--    转其他账号登录页面-->
    <div class="other-login" v-on:click="otherLogin()">其他账号登录</div>
  </div>
</template>

<script>

export default {
  name:"Account",
  data() {
    return {
      // 控制图片验证码
      imgcodeShow: false,
      // 密码框失焦次数
      count: 0,
      // 焦点在账号框中样式
      accountActive: false,
      // 焦点在密码框中样式
      passwordActive: false,
      // 焦点在图形验证码框中样式
      imgcodeActive: false,
       imgUrl : require('../../../assets/img/login/codeImg.jpg')
    }
  },
  methods:{
    // 点击忘记密码
    forgetPassword() {
      this.$emit('forgetPassword');
    },

    // 点击验证码登录
    loginCode() {
      this.$emit('logincode');
    },

    // 焦点在账号框中时，边框颜色变化
    phoneFocus() {
      this.accountActive = true;
    },

    // 焦点在密码框中
    passwordFocus() {
      this.passwordActive = true;
    },

    // 焦点在图形验证码框中
    imgCodeFoucs() {
      this.imgcodeActive = true;
    },

    // 账号框失去焦点时，将手机号格式改为344格式
    phoneBlur() {
      const phone = document.getElementById('phone-text');
      this.accountActive = false;
      if (phone.value.length === 11) {
        const newphone = phone.value.split('');
        newphone.splice(3, 0, ' ');
        newphone.splice(8, 0, ' ');
        phone.value = newphone.join('');
      } else {
      }
    },
    // 密码框失焦五次，图片验证码出现
    passwordBlur() {
      this.passwordActive = false;
    },

    // 图形验证码框失焦
    imgCodeBlur() {
      this.imgcodeActive = false;
    },

    // 点击登录按钮
    login() {
      //    调用账号验证，若返回为false，则结束整个方法,若返回的是true，则继续执行下一步
      if (this.accountVerify() === false) {
        return;
      }
      //     调用密码验证，若返回false，则结束整个方法，返回true，则继续执行下一步
      if (this.passwordVerify() === false) {
        this.count++;
        if (this.count < 5) {
          return;
        }
        if ( this.count >= 5) {
          this.imgcodeShow = true;
          if (this.imgCodeVerify() === false) {
            return;
          }
        }
      }

      this.$router.push('/home')

      //    满足所有条件，触发登录按钮点击事件，跳转页面
    },

    //    1.账号验证
    accountVerify() {
      const checkonline = document.getElementById('checkonline');
      const phone = document.getElementById('phone-text');


      // (1)判断账号框是否为空，若为空，提示“请输入手机号”
      if (phone.value === '') {
        checkonline.innerHTML = '请输入手机号';
        return false;
      }
      // (2)若不为空判断输入的手机号首字符是否为1 或 手机号是否为11位，若不满足要求，提示“请输入正确手机号”
      if (phone.value.length !== 13 || phone.value.charAt(0) !== '1') {
        checkonline.innerHTML = '请输入正确手机号';
        return false ;
      }
      // (3)验证手机号,判断输入的手机号是否为纯数字
      if (!phone.value.match(/^((13[0-9])|(14[5-9])|(15([0-3]|[5-9]))|(16[6-7])|(17[1-8])|(18[0-9])|(19[1|3])|(19[5|6])|(19[8|9]))\s\d{4}\s\d{4}$/)) {
        checkonline.innerHTML = '请输入正确手机号';
        return false;
      }
      // （4）判断账号是否已经注册，若没有注册，提示“账号密码输入错误”

      // (5)都不满足以上条件时，提示位置为空
      checkonline.innerHTML = '';
      return true;
    },

    //    2.密码验证
    passwordVerify() {
      const checkonline = document.getElementById('checkonline');
      const password = document.getElementById('password-text');


      //    （1）if语句判断密码框是否为空，若为空，提示“请输入密码”
      if (password.value === '') {
        checkonline.innerHTML = '请输入密码';
        return false;
      }

      // （2）判断密码是否是6-16位字母和数字，若不是，提示“请输入6-16位密码”
      if (password.value.length < 6 || password.value.length > 16) {
        checkonline.innerHTML = '请输入6-16位密码';
        return false;
      }
      // （3)判断密码是否包含特殊字符，若包含，提示“请不要输入特殊字符”
      if (!password.value.match(/^[a-z0-9A-Z]+$/)) {
        checkonline.innerHTML = '请不要输入特殊字符';
        return false;
      }
      //   ( 4)判断密码是否已经注册，若没有注册，提示“密码输入错误”

      // (5) 都不满足以上条件，则密码验证成功
      checkonline.innerHTML = '';
      return true;

    },

    imgCodeVerify() {
      const imgCode = document.getElementById('imgcode-text');
      const checkonline = document.getElementById('checkonline');

      // (1) 图形验证码为空
      if (imgCode.value === '') {
        checkonline.innerHTML = '请输入图形验证码';
        return false;
      }

      // (2) 四位验证码
      if (imgCode.value.length !== 4) {
        checkonline.innerHTML = '请输入正确图形验证码';
        return false;
      }
      // 不满足以上条件，验证成功
      checkonline.innerHTML = '';
      return true;
    },

    //  点击图形验证码
    imgCode() {
      this.imgUrl = require('../../../assets/img/login/codeImg2.jpg')
    },

    // 点击还没有账号注册
    registration() {
      this.$emit('registration');
    },

    // 点击右上角叉号退出
    close() {
      this.$router.push('/home')
      console.log('退出');
    },

    // 点击其他登录方式21154
    otherLogin() {
      console.log('qita' );
      this.$emit('otherLogin');
    }
  }
}
</script>

<style scoped>


  input::-webkit-input-placeholder{
    font-size: 16px;
    color: #C4C4C4;
    line-height: 16px;
  }
  input::-moz-placeholder{
    font-size: 16px;
    color: #C4C4C4;
    line-height: 16px;
  }
  input:-moz-placeholder{
    font-size: 16px;
    color: #C4C4C4;
    line-height: 16px;
  }
  input:-ms-input-placeholder{
    font-size: 16px;
    color: #C4C4C4;
    line-height: 16px;
  }

  button:focus,
  button:active:focus,
  button.active:focus,
  button:active.focus,
  button.active.focus {
    outline: none;
    border: none;
    box-shadow:none;
  }

  .account-login{
    width: 320px;
    position: absolute;
    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,0.06);
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.08);
    border-radius: 6px;
    top: 50%;
    left: 50%;
    margin-top: -13%;
    margin-left: -10%;
  }
  .huohuaschool-img{
    width: 284px;
    margin-left: 18px;
    margin-bottom: 24px;
    text-align: center;
  }

  .huohua-icon{
    width: 100px;
    height: 80px;
  }

  .close {
    width: 24px;
    height: 24px;
    margin-left: 284px;
    margin-top: 12px;
    background: url("../../../assets/img/login/close.png");
  }
  .close:hover{
    background-image: url("../../../assets/img/login/close-active.png");
  }

  .input{
    display: block;
    width: 264px;
    height: 44px;
    margin-bottom: 12px;
    margin-left: 18px;
    background: #F7F7F7;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    padding-left: 18px;
  }

  .accountActive,.passwordActive,.imgcodeActive{
    border: 1px solid #FE5702 !important;
    background-color: #FFFFFF !important;
  }

  #imgcode-text{
    display: inline-block;
  }

  .code-img{
    width: 58px;
    height: 32px;
    background-color: #D8D8D8;
    position: absolute;
    right: 36px;
    margin-top: 6px;
  }
  .forget-password{
    font-size: 12px;
    color: #8A8A8A;
    text-align: right;
    line-height: 12px;
    margin-right: 18px;
    margin-bottom: 12px;
    float: right;
  }

  #checkonline{
    font-size: 12px;
    color: #FE5702;
    text-align: right;
    line-height: 12px;
    margin-left: 18px;
    margin-bottom: 12px;
    float: left;
  }

  .code-login{
    width: 70px;
    font-size: 12px;
    color: #8A8A8A;
    text-align: center;
    line-height: 12px;
    margin-left: 18px;
    float: left;
  }

  .login-button{
    width: 284px;
    height: 44px;
    font-size: 16px;
    color: #FFFFFF;
    text-align:center;
    line-height: 16px;
    background: #FE5702;
    border-radius: 6px;
    margin-left: 18px;
    margin-bottom: 13px;
    border: none;
  }

  .go-registration{
    font-size: 12px;
    text-align: center;
    line-height: 12px;
    float: right;
    color: #FE5702;
    margin-right: 18px;
  }

  .login-button:hover{
    background:#FE5702;
    opacity: 0.8;
  }

  .other-login{
    font-size: 12px;
    color: #8A8A8A;
    line-height: 12px;
    margin: 35px 0 24px 20px;
  }

  .forget-password,.code-login,.close,.registration,.other-login,.code-img:hover{
    cursor: pointer;
  }
</style>
