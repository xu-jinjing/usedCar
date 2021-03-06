<template>
  <div class="VW1">
    <div class="top">
      <div class="top-left">
        <hmc-swiper></hmc-swiper>
      </div>
      <div class="top-right">
        <img src="../../../../assets/img/goodsimg/HMC/1/top-right.png" alt="">
        <img src="../../../../assets/img/goodsimg/HMC/1/right-bottom.png" alt="">
        <button id="btn" @click="btn1Click()">我要预约</button>
        <button id="btn" @click="btn2Click()">免费咨询</button>
      </div>
    </div>
    
    <div class="center">
      <img src="../../../../assets/img/goodsimg/center.png" alt="">
    </div>

    <div class="bottom">
      <h1>本田XR-V 2015款 1.8L EXi CVT舒适版 基本信息</h1>
      <img src="../../../../assets/img/goodsimg/VW/VW1img/bottom.png" alt="">
      <img src="../../../../assets/img/goodsimg/VW/VW1img/bottom2.png" alt="">
    </div>
  </div>
</template>

<script>

  import HmcSwiper from '../goods/goodSwiper/HMC1swiper'

  export default {
    name:"HMC", 
    components: {
      HmcSwiper
    },
    methods: {
      btn1Click(){
        alert("预约成功，稍后工作人员会与您联系。或者您可以直接拨打车主电话（王先生：12548856428）")
      },
      btn2Click(){
        alert("欢迎致电8888-8888咨询该车详细信息")
      }
    }
  }
</script>
<style scoped>
  .top{
    width: 100%;
    height: 520px;
    background-color: rgba(248, 239, 239, 0.637);
  }
  .top-left{
    width: 700px;
    height: 520px;
    float: left;
    margin-top:10px ;
  }
  .top-right{
    width: 47%;
    height: 520px;
    float:left;
    
  }

  .top-right img{
    width: 100%;
    margin-top: 10px;
  }

  .center img{
    width: 100%;
  }

  #btn{
    margin-left: 120px;
    width: 120px;
    height: 52px;
    color: white;
    background-color: rgb(26, 235, 60);
    font-size: 18px;
  }

  .bottom h1{
    text-align: center;
  }
</style>