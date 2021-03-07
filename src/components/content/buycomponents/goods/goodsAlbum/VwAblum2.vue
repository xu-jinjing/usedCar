<template>
  <div class="box">
      <h1>3D外观展示</h1>
        <ul>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW2img/1.jpg"></li>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW2img/2.jpg"></li>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW2img/3.jpg"></li>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW2img/4.jpg"></li>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW2img/5.jpg"></li>
            <li><img src="../../../../../assets/img/goodsimg/VW/VW2img/6.jpg"></li>
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
   img{display: block; width: 300px;height: 300px;}
    .box{width: 800px; height: 800px;background-color: rgb(232, 216, 247);margin: 50px auto;position: relative;
    perspective: 1200px;}
    .box ul{width: 300px;height: 300px;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;
    transform-style: preserve-3d;transition: all 25s;transform: rotateX(-35deg) rotateY(0deg);}
    .box ul:hover{transform: rotateX(-35deg) rotateY(360deg);}
    .box ul li{position: absolute;list-style-type: none;}
    .box ul li:nth-child(1) {transform: translateZ(260px);}
    .box ul li:nth-child(2) {transform: rotateY(60deg) translateZ(260px);}
    .box ul li:nth-child(3) {transform: rotateY(120deg) translateZ(260px);}
    .box ul li:nth-child(4) {transform: rotateY(180deg) translateZ(260px);}
    .box ul li:nth-child(5) {transform: rotateY(240deg) translateZ(260px);}
    .box ul li:nth-child(6) {transform: rotateY(300deg) translateZ(260px);}
</style>