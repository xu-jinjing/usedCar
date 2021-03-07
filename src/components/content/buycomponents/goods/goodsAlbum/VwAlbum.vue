<template>
  <div class="box">
      <h1>3D外观展示</h1>
        <ul>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW1img/1.jpg"></li>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW1img/2.jpg"></li>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW1img/3.jpg"></li>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW1img/4.jpg"></li>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW1img/5.jpg"></li>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW1img/6.jpg"></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name:"", 
    components: {

    }
  }
</script>
<style scoped>
  ul li{list-style: none;}
        .box{width:800px;height: 500px;background-color: rgb(247, 241, 233);margin: 50px auto;position: relative;
        perspective: 1200px;}
        .box ul{width: 300px;height: 300px;position: absolute;left: 0;right: 0;top: 0;
        bottom: 0;margin: auto;transform-style: preserve-3d;transition: all 16s;}
        .box ul:hover{transform: rotateY(360deg) rotateX(90deg);}
        .box ul li {width: 300px;height: 300px;font-size: 72px;text-align: center;line-height: 300px;
        position: absolute;}
        .box ul li img{width: 300px;height:300px;}
        .box ul li:nth-child(1){transform: translateZ(150px);}
        .box ul li:nth-child(2){transform: translateZ(-150px);}
        .box ul li:nth-child(3){transform: translateX(-150px) rotateY(-90deg);}
        .box ul li:nth-child(4){transform: translateX(150px) rotateY(90deg);}
        .box ul li:nth-child(5){transform: translateY(-150px) rotateX(90deg);}
        .box ul li:nth-child(6){transform: translateY(150px) rotateX(-90deg);}

        .box ul:hover li:nth-child(1){transform: translateZ(250px);}
        .box ul:hover li:nth-child(2){transform: translateZ(-250px);}
        .box ul:hover li:nth-child(3){transform: translateX(-150px) rotateY(-90deg) translateZ(100px);}
        .box ul:hover li:nth-child(4){transform: translateX(150px) rotateY(90deg) translateZ(100px);;}
        .box ul:hover li:nth-child(5){transform: translateY(-150px) rotateX(90deg) translateZ(100px);;}
        .box ul:hover li:nth-child(6){transform: translateY(150px) rotateX(-90deg) translateZ(100px);;}
</style>