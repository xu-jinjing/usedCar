<template>
  <div id="app">
      <div class="nav-bar">
      <div class="header" id="header">
         <ul>
            <li class="login"><router-link to="/enter">|  登录</router-link></li>
            <li class="dh">热线电话：8888-8888</li> 
            <li><router-link to="/service">服务</router-link></li>
             <li><router-link to="/sell">我要卖车</router-link></li>
             <li><router-link to="/buy">我要买车</router-link></li>
             <li><router-link to="/home">首页</router-link></li>
         </ul>
    </div>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style scoped>
   *{margin: 0;padding: 0;}
    *{list-style-type: none;}
    a{text-decoration: none;color: white;}
    .header{width: 100%;height:80px ;background-color:rgb(15, 15, 15);position: relative;}
    .header li{float: left;height: 80px; line-height: 80px;padding-left: 10px;
    padding-right:10px;margin-right: 25px;} 
    .header a:hover{font-weight: bold;color: blueviolet;}
    .header .dh{width: 230px;}
    .header ul li{float: right; color: white;}

    .router-link-active{color: blueviolet ;}

    .login{
      width: 80px;
    }
</style>
