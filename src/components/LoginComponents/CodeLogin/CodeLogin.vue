<template>
<!--  验证码登录-->
  <div class="LoginCode" >
<!--    右上角关闭-->
    <div class="close" v-on:click="close()">
    </div>
<!--    火花logo-->
    <div class="huohuaschool-img">
      <img class="huohua-icon" src="../../../assets/img/login/logo.png"/>
    </div>
<!--    账号输入框-->
    <input class="input" :class="{accountActive: accountActive}" id="phone-text" type="text" placeholder="请输入手机号" v-on:blur="phoneBlur()" :maxlength="13" v-on:focus="phoneFocus()" onkeyup="this.value=this.value.replace(/\s+/g,'')">
<!--    图形验证码输入框-->
    <div v-show="imgcodeShow">
      <input class="input" :class="{imgcodeActive: imgcodeActive}" id="imgcode-text" type="text" placeholder="请输入图形验证码" v-on:blur="imgCodeBlur()" v-on:focus="imgCodeFoucs()">
      <img src="" class="code-img" v-on:click="imgCode()">
    </div>
<!--    四位数字验证码输入框-->
    <input class="input" :class="{codeActive: codeActive}" id="code-text" type="text" placeholder="请输入验证码" v-on:blur="codeBlur()" v-on:focus="codeFocus()">
<!--    获取验证码-->
    <span class="get-vi-code" id="fetch-code" v-on:click="getVlCode()">获取验证码</span>
<!--    该span用来存放错误信息-->
    <span id="checkonline"></span>
<!--    登录按钮-->
    <button class="login-button" v-on:click="login()">登录</button>
<!--    转账号密码登录-->
    <div class="password-login" v-on:click="passwordLogin()">账号密码登录</div>
<!--    转注册页-->
    <div class="go-registration"><span class="login" v-on:click="goLogin()">注册</span></div>
<!--    转其他账号登录页-->
    <div class="other-login" @click="otherLogin()">其他账号登录</div>
  </div>
</template>

  <script>
    export default{
      name:"CodeLogin",
      data() {
        return{
          // 焦点在账号框中样式
          accountActive: false,
          // 焦点在图形验证码框中样式
          imgcodeActive: false,
          // 焦点在四位数字验证码中样式
          codeActive: false,
          // 图形验证码的显示隐藏
          imgcodeShow :false
        }
      },
      methods:{
        // 焦点在账号框中时，边框颜色变化
        phoneFocus() {
          this.accountActive = true;
        },

        // 焦点在图形验证码框中
        imgCodeFoucs() {
          this.imgcodeActive = true;
        },

        // 焦点在验证码框时
        codeFocus() {
          this.codeActive = true;

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
          }
          if (this.accountVerify() === true) {
            this.imgcodeShow = true;
          }
        },

        // 图形验证码框失焦
        imgCodeBlur() {
          this.imgcodeActive = false;
        },

        // 点击图形验证码
        imgCode() {
          console.log('验证码');
        },

        // 验证码框失去焦点时
        codeBlur() {
          this.codeActive = false;
        },



        // 点击获取验证码
        getVlCode() {
          if (this.accountVerify() === true && this.imgCodeVerify() === true) {
            this.imgcodeShow = true;
            let second = 60;
            const getViCode = document.getElementById('fetch-code');
            getViCode.innerHTML = second + '秒后可重发';
            getViCode.style.color = '#999999';
            const timeKeeping = setInterval(function () {
              second--;
              if (second > 0) {
                getViCode.innerHTML = second + '秒后可重发';
                getViCode.style.pointerEvents = 'none';
              } else {
                clearInterval(timeKeeping);
                getViCode.innerHTML = '重新获取验证码';
                getViCode.style.pointerEvents = 'auto';
                getViCode.style.color = '#FE5702';
                second = 60;
              }
            }, 1000);
          } else {
            const error = document.getElementById('checkonline');
            error.innerHTML = '请按顺序操作';
          }

        },

        // 点击账号密码登录
        passwordLogin() {
          this.$emit('loginAccount');
        },

        login() {

          // 调用账号验证
          if (this.accountVerify() === false) {
            return;
          }
          this.imgcodeShow = true;
          // 调用图形验证码验证
          if (this.imgCodeVerify() === false) {
            return;
          }

          // 调用验证码验证
          if (this.codeVerity() === false) {
            return;
          }
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
          // tslint:disable-next-line:max-line-length
          if (!phone.value.match(/^((13[0-9])|(14[5-9])|(15([0-3]|[5-9]))|(16[6-7])|(17[1-8])|(18[0-9])|(19[1|3])|(19[5|6])|(19[8|9]))\s\d{4}\s\d{4}$/)) {
            checkonline.innerHTML = '请输入正确手机号';
            return false;
          }
          // （4）判断账号是否已经注册，若没有注册，提示“账号密码输入错误”

          // (5)都不满足以上条件时，提示位置为空
          checkonline.innerHTML = '';
          return true;
        },

        //    2.验证码验证
        codeVerity() {
          const code = document.getElementById('code-text');
          const checkonline = document.getElementById('checkonline');

          // （1）判断验证码框是否为空，若为空，提示请输入验证码
          if (code.value === '' || code.value.length !== 4) {
            checkonline.innerHTML = '请输入正确验证码';
            return false;
          }

          //  （2)  判断输入的验证码是否与收到的验证码相等，若不相等，提示验证码输入错误

          // （3）判断验证码是否已经过期，若过期，提示验证码已过期，请重新获取

          //  （4）都不满足以上条件，提示为空
          checkonline.innerHTML = '';
          return true;

        },

        // 3 图片验证码验证
        imgCodeVerify() {
          const imgCode = document.getElementById('imgcode-text');
          const error = document.getElementById('checkonline');

          // (1) 图形验证码为空
          if (imgCode.value === '') {
            error.innerHTML = '请输入图形验证码';
            return false;
          }

          // (2) 四位验证码
          if (imgCode.value.length !== 4) {
            error.innerHTML = '请输入正确图形验证码';
            return false;
          }
          // 不满足以上条件，验证成功
          error.innerHTML = '';
          return true;
        },

        // 点击还没有账号，注册
        goLogin() {
          this.$emit('registration');
        },

        // 点击右上角叉号退出
        close() {
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
      color: #BFBFBF;
      line-height: 16px;
    }
    input::-moz-placeholder{
      font-size: 16px;
      color: #BFBFBF;
      line-height: 16px;
    }
    input:-moz-placeholder{
      font-size: 16px;
      color: #BFBFBF;
      line-height: 16px;
    }
    input:-ms-input-placeholder{
      font-size: 16px;
      color: #BFBFBF;
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

    .LoginCode{
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

    .accountActive,.imgcodeActive,.codeActive{
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

    #checkonline{
      height: 12px;
      font-size: 12px;
      color: #FE5702;
      text-align: right;
      line-height: 12px;
      margin-left: 18px;
      margin-bottom: 12px;
      /*float: left;*/
    }

    #code-text{
      display: inline-block;
    }

    .get-vi-code{
      position: absolute;
      z-index: 99;
      font-size: 13px;
      color: #FE5702;
      text-align: right;
      line-height: 14px;
      margin-top: 16px;
      right: 18px;
    }

    .password-login{
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
      opacity: 0.8;
    }

    .other-login{
      font-size: 12px;
      color: #8A8A8A;
      line-height: 12px;
      margin: 36px 0 24px 20px;
    }

    .get-vi-code,.password-login,.close,.login,.other-login,.code-img:hover{
      cursor: pointer;
    }
  </style>

