<template>
  <div class="enter">
    <div class="login">
    <!--    账号登录页面-->
      <AccountLogin v-if="accountShow" @logincode="code" @forgetPassword="forgetPassword"
                    @registration="login" @otherLogin="otherLogin"></AccountLogin>
    <!--    验证码登录-->
      <CodeLogin v-if="loginCode" @loginAccount="account" @registration="login" @otherLogin="otherLogin"></CodeLogin>
    <!--    注册页面-->
      <Registration v-if="registration" @register="record"></Registration>
    <!--    找回密码-->
      <GetBackPassword v-if="getback" @nextStep="nextStep" @getBackPasswordBack="getBackPasswordBack"></GetBackPassword>
    <!--    重置密码-->
      <SetNewPassword v-if="setnew" @setNewBack="setNewBack"></SetNewPassword>
    <!--    其他登录方式-->
      <OtherLogin v-if="other" @otherAccountBack="otherAccountBack"></OtherLogin>
    </div>
  </div>
</template>

<script>

import AccountLogin from '@/components/LoginComponents/AccountLogin/AccountLogin.vue'
import Registration from '@/components/LoginComponents/Registration/Registration.vue'
import CodeLogin from '@/components/LoginComponents/CodeLogin/CodeLogin.vue'
import GetBackPassword from '@/components/LoginComponents/GetBackPassword/GetBackPassword.vue'
import SetNewPassword from '@/components/LoginComponents/SetNewPassword/SetNewPassword.vue'
import OtherLogin from '@/components/LoginComponents/OtherLogin/OtherLogin.vue'

export default{
  name:"Enter",
  components:{
    AccountLogin,
    CodeLogin,
    GetBackPassword,
    OtherLogin,
    Registration,
    SetNewPassword
  },
  data() {
    return {
      accountShow : true,     // 控制账号密码登录页面显示隐藏
      loginCode : false,     // 控制验证码登录页面显示隐藏
      registration: false,   // 控制注册页面显示隐藏
      getback: false,         // 控制点击忘记密码时修改密码页面显示隐藏
      setnew: false,         // 控制设置新密码页面显示隐藏
      other: false,          // 控制其他登录方式页显示隐藏
    }
  },
  methods:{
    // 账号密码登录页面中点击验证码登录
    code() {
      this.accountShow = false;
      this.loginCode = true;
    },

    // 验证码登录页面中点击账号密码登录
    account() {
      this.accountShow = true;
      this.loginCode = false;
    },

    // 账号密码登录页面中点击忘记密码
    forgetPassword() {
      this.getback = true;
      this.accountShow = false;
    },

    // 账号密码和验证码登录页中点击其他登录方式
    otherLogin() {
      this.other = true;
      this.accountShow = false;
      this.loginCode = false;
    },

    // 账号密码和验证码登录页中点击注册
    login() {
      this.registration = true;
      this.accountShow = false;
      this.loginCode = false;
    },

    // 注册页中点击登录
    record() {
      this.registration = false;
      this.accountShow = true;
    },

    // 修改密码页中点击下一步
    nextStep() {
      this.getback = false;
      this.setnew = true;
    },
    // 其他账号登录中点击返回
    otherAccountBack() {
      this.other = false;
      this.accountShow = true;
    },

    // 找回密码页中点击返回
    getBackPasswordBack() {
      this.accountShow = true;
      this.getback = false;
    },

    // 重置密码中点击返回
    setNewBack() {
      this.setnew = false;
      this.getback = true;
    }
  }
}
</script>

<style scoped>
  .login{
    width: 100%;
    height: 800px;
    background-image: url("../../assets/img/enter/enter.jpg");
  }
</style>
