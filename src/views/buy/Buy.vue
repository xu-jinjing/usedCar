<template>
<div>
  <div class="nav" id="nav">
    <div class="box1">
        <ul>
            <li>品牌</li>
            <li><a href="">不限</a></li>
            <li><a href="">大众</a></li>
            <li><a href="">本田</a></li>
            <li><a href="">别克</a></li>
            <li><a href="">丰田</a></li>
            <li><a href="">福特</a></li>
            <li><a href="">日产</a></li>
            <li><a href="">宝马</a></li>
            <li><a href="">奔驰</a></li>
            <li><a href="">现代</a></li>
            <li></li>
            <li><a href="">奥迪</a></li>
            <li><a href="">雪佛兰</a></li>
            <li><a href="">吉利</a></li>
            <li><a href="">哈弗</a></li>
            <li><a href="">比亚迪</a></li>
        </ul>
    </div>
        <div class="box2">
            <ul>
                <li>价格</li>
                <li><a href="">不限</a></li>
                <li><a href="">3万以下</a></li>
                <li><a href="">3-5万</a></li>
                <li><a href="">5-7万</a></li>
                <li><a href="">7-9万</a></li>
                <li><a href="">9-12万</a></li>
                <li><a href="">12-15万</a></li>
                <li><a href="">15万以上</a></li>
            </ul>
        </div>
        <div class="box3">
            <ul>
                <li>车系</li>
                <li><a href="">不限</a></li>
                <li><a href="">大众</a></li>
                <li><a href="">本田</a></li>
                <li><a href="">别克</a></li>
                <li><a href="">丰田</a></li>
                <li><a href="">福特</a></li>
                <li><a href="">日产</a></li>
                <li><a href="">宝马</a></li>
                <li><a href="">奔驰</a></li>
                <li><a href="">现代</a></li>
            </ul>
        </div>
   </div>
   
<bottom-bar></bottom-bar>
</div>
</template>

<script>

  import BottomBar from '../../components/content/buycomponents/bottombar/BottomBar'

  export default {
    name:"Buy", 
    components: {
      BottomBar,
    }
  }
</script>
<style scoped>
 *{margin: 0;padding: 0;}
    *{list-style-type: none;}
    a{text-decoration: none;color: black;}
  .nav{margin-left: 40px;margin-right: 20px;height: 260px;}
    .nav .box1{width: 100%;float: left;background-color: aliceblue;}
        .box1 ul{margin-top: 10px;}
        .box1 ul li{float: left;margin: 0 20px 20px 20px;width: 70px;} 
        .box1 ul li a:hover{color: coral;}
    .nav .box2{width: 100%;float: left;background-color: aliceblue;}
        .box2 ul{margin-top: 10px;}
        .box2 ul li{float: left;margin: 0 20px 20px 20px;width: 70px;} 
        .box2 ul li a:hover{color: coral;}
    .nav .box3{width: 100%;float: left;background-color: aliceblue;}
        .box3 ul{margin-top: 10px;}
        .box3 ul li{float: left;margin: 0 20px 20px 20px;width: 70px;} 
        .box3 ul li a:hover{color: coral;}
</style>