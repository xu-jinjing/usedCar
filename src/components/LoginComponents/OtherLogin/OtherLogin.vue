<template>
<!--  其他登录方式-->
  <div class="other-login">
      <!--    左上角返回-->
      <div class="back" v-on:click="back()">
      </div>
      <!--    右上角关闭-->
      <div class="close" v-on:click="close()">
      </div>
      <!--    火花logo-->
      <div class="huohuaschool-img">
        <img class="huohua-icon" src="../../../assets/img/login/logo.png"/>
      </div>

<!--    其他账号列表-->
    <div  class="all-account">
      <div class="account-list" v-for="(item,index) in accountListData" :key="index">
        <img class="list-img" :src= item.img >
        <div class="title">{{item.title}}</div>
        <div class="subtitle">{{item.subtitle}}</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "OtherLogin",
  data() {
    return{
      accountListData : [
        {
          img: require('../../../assets/img/login/huohuaIcon.png'),
          title: '南京江别新区',
          subtitle: '南京智慧教育云服务认证中心'
        },
        {
          img: require('../../../assets/img/login/huohuaIcon.png'),
          title: '芜湖智慧教育云',
          subtitle: '芜湖智慧教育云服务认证中心'
        },
        {
          img: require('../../../assets/img/login/huohuaIcon.png'),
          title: '芜湖智慧教育云',
          subtitle: '芜湖智慧教育云服务认证中心'
        },
        {
          img: require('../../../assets/img/login/huohuaIcon.png'),
          title: '芜湖智慧教育云',
          subtitle: '芜湖智慧教育云服务认证中心'
        },
        {
          img: require('../../../assets/img/login/huohuaIcon.png'),
          title: '芜湖智慧教育云',
          subtitle: '芜湖智慧教育云服务认证中心'
        },
        {
          img: require('../../../assets/img/login/huohuaIcon.png'),
          title: '芜湖智慧教育云',
          subtitle: '芜湖智慧教育云服务认证中心'
        },
        {
          img: require('../../../assets/img/login/huohuaIcon.png'),
          title: '芜湖智慧教育云',
          subtitle: '芜湖智慧教育云服务认证中心'
        },
      ]
    }
  },
  methods:{
    // 点击左上角返回
    back() {
      this.$emit('otherAccountBack');
    },

    // 点击右上角关闭
    close() {
      console.log('关闭');
    }
  }
}
</script>

<style scoped>
  ul li{
    list-style-type: none;
  }

  .other-login{
    width: 320px;
    height: 382px;
    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,0.06);
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.08);
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -191px;
    margin-left: -160px;
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

  .huohuaschool-img{
    width: 284px;
    margin-left: 18px;
    margin-top: 36px;
    margin-bottom: 24px;
    text-align: center;
  }

  .huohua-icon{
    width: 100px;
    height: 80px;
  }

  .all-account{
    width: 320px;
    height: 253px;
    overflow: scroll;
  }
  .account-list{
    width: 284px;
    height: 64px;
    margin-left: 18px;
  }

  .account-list:hover{
    cursor: pointer;
  }

  .list-img{
    width: 32px;
    height: 32px;
    margin: 16px;
    float: left;
  }

  .title{
    font-size: 15px;
    color: #6B6B6B;
    letter-spacing: 0;
    line-height: 16px;
    float: left;
    margin-top: 15px;
  }

  .subtitle{
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    line-height: 12px;
    float: left;
    margin-top: 6px;
  }
</style>
