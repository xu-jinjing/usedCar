<template>
  <div class="box">
    <h1>3D外观展示</h1>
        <div class="p1">
            <img src="../../../../../assets/img/goodsimg/VW/VW13img/1.jpg" >
            <p><img src="../../../../../assets/img/goodsimg/VW/VW13img/2.jpg"></p>
        </div>
        <div class="p1">
            <img src="../../../../../assets/img/goodsimg/VW/VW13img/3.jpg" >
            <p><img src="../../../../../assets/img/goodsimg/VW/VW13img/4.jpg"></p>
        </div>
        <div class="p1">
            <img src="../../../../../assets/img/goodsimg/VW/VW13img/5.jpg" >
            <p><img src="../../../../../assets/img/goodsimg/VW/VW13img/6.jpg"></p>
        </div>
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
  img{display: block; width: 300px; height: 150px;}
    .box{width: 1100px;height: 400px;background-color:rgb(241, 233, 248);margin: 50px auto;padding-top: 30px;}
    .p1{width: 300px;height: 150px;float: left;margin: 20px;position: relative;transform-style: preserve-3d;
    transition: all 2S;}
    .p1:hover{transform: rotateX(90deg);}
    .p1 img{box-shadow: 0px 5px 10px rgb(124, 115, 115);border-radius: 10px;position: absolute;
    transform: translateZ(75px);}
    .p1 p img{box-shadow: 0px 5px 10px rgb(124, 115, 115);border-radius: 10px;
    position: absolute;transform:translateY(75px) rotateX(-90deg);}
</style>