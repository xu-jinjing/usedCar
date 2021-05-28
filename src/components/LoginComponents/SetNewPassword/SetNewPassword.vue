<template>
  <div>
<!--    设置新密码-->
  <div class="set-new" v-if="isShow">
<!--    左上角返回-->
      <div class="back" v-on:click="back()">
      </div>
<!--    右上角关闭-->
      <div class="close" v-on:click="close()">
      </div>
<!--    重置密码页标题-->
      <div class="title">重置密码</div>
<!--    输入密码框-->
    <input class="input" :class="{passwordActive: passwordActive}" id="password-text" type="password" 
    placeholder="请输入密码" v-on:blur="passwordBlur()" v-on:focus="passwordFocus()" autocomplete="off">
<!--    再次输入密码框-->
    <input class="input" :class="{passwordAgain: passwordAgain}" id="input-again" type="password" 
    placeholder="请再次输入密码" v-on:blur="passwordAgainBlur()" 
    v-on:focus="passwordAgainFocus()" autocomplete="off">
<!--    该div用于存放验证不通过时的提示文字-->
    <div id="checkonline"></div>
<!--    完成按钮-->
    <button class="finish-button"  v-on:click="finish()">完成</button>
  </div>

<!--    新密码设置成功-->
    <SetNewSucceed v-if="!isShow"></SetNewSucceed>

  </div>
</template>

<script>

import SetNewSucceed from '@/components/LoginComponents/SetNewSucceed/SetNewSucceed.vue'


export default  {
  name: "SetNewPassword",
  components:{
    SetNewSucceed
  },
  data() {
    return{
      // 控制修改密码成功的显示隐藏
      isShow : true,
      // 焦点在密码框中样式
      passwordActive : false,
      // 焦点在二次密码框中样式；
      passwordAgain : false
    }
  },
  methods:{
    // 点击完成按钮
    finish() {

      // 调用密码验证
      if (this.passwordVerify() === false) {
        return;
      }
      // 再次输入密码
      if (this.inputAgain() === false) {
        return;
      }

      // 控制修改密码成功的显示隐藏
      this.isShow = false;
    },

    // 焦点在密码框中
    passwordFocus() {
      this.passwordActive = true;
    },

    // 焦点在二次密码框中
    passwordAgainFocus() {
      this.passwordAgain = true;
    },

    // 密码框失焦
    passwordBlur() {
      this.passwordActive = false;
    },

    // 二次密码框失焦
    passwordAgainBlur() {
      this.passwordAgain = false;
    },

    //    1.密码验证
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
      // （3)判断密码框中值的长度是否等于characterCountVrify()for循环中返回的count，不等于即表示含特殊字符，判断密码是否包含特殊字符，若包含，提示“请不要输入特殊字符”
      if (!password.value.match(/^[a-z0-9A-Z]+$/)) {
        checkonline.innerHTML = '请不要输入特殊字符';
        return false;
      }
      //   ( 4)判断密码是否已经注册，若没有注册，提示“密码输入错误”

      // (5) 都不满足以上条件，则密码验证成功
      checkonline.innerHTML = '';
      return true;
    },

    // 2.再次输入密码
    inputAgain() {
      const password = document.getElementById('password-text');
      const again = document.getElementById('input-again');
      const checkonline = document.getElementById('checkonline');
      // 再次输入密码框为空
      if (again.value === '') {
        checkonline.innerHTML = '请再次输入密码';
        return false;
      }
      // 两次输入密码不同
      if (again.value !== password.value) {
        checkonline.innerHTML = '两次密码输入不同';
        return false;
      }
      checkonline.innerHTML = '';
      return true;
    },

    // 点击返回箭头
    back() {
      console.log('返回');
      this.$emit('setNewBack');
    },

    // 点击右上角叉号退出
    close() {
      location.reload()
      console.log('退出');
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

.set-new{
  width: 320px;
  height: 345px;
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.08);
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -12%;
  margin-left: -10%;
}
.back{
  width: 24px;
  height: 24px;
  float: left;
  margin-top: 12px;
  margin-left: 12px;
  background-image: url("../../../assets/img/login/back.png");
}

.back:hover{
  background-image: url("../../../assets/img/login/back-active.png");
  cursor: pointer;
}

.title{
  width: 320px;
  height: 46px;
  font-size: 18px;
  color: #6B6B6B;
  text-align: center;
  line-height: 46px;
  margin-top: 35px;
  margin-bottom: 25px;
}

.close {
  width: 24px;
  height: 24px;
  float: right;
  margin-right: 12px;
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

.passwordActive,.passwordAgain{
  border: 1px solid #FE5702 !important;
  background-color: #FFFFFF !important;
}

#checkonline{
  width: 220px;
  height:14px;
  font-size: 14px;
  color: #FE5702;
  text-align: left;
  line-height: 14px;
  margin-left: 24px;
}

.finish-button{
  width: 284px;
  height: 44px;
  font-size: 16px;
  color: #FFFFFF;
  text-align:center;
  line-height: 16px;
  background: #FE5702;
  border-radius: 6px;
  margin-left: 18px;
  margin-top: 22px;
  border: none;
}

.finish-button:hover{
  background:#FE5702;
  opacity: 0.8;
}

.close:hover{
  cursor: pointer;
}

</style>
