<template>
  <div class="VW1">
    <div class="top">
      <div class="top-left">
        <vw22-swiper></vw22-swiper>
      </div>
      <div class="top-right">
        <img src="../../../../assets/img/goodsimg/VW/VW13img/top-right.png" alt="">
        <img src="../../../../assets/img/goodsimg/VW/VW13img/right-bottom.png" alt="">
        <button id="btn" @click="btn1Click()">我要预约</button>
        <button id="btn" @click="btn2Click()">免费咨询</button>
        <modal v-show="isShow" :title="title"  @hideModal="hideModal" @submit="submit">
          <h3 v-show="btn1Show">预约成功，稍后工作人员会与您联系。或者您可以直接拨打车主电话（王先生：12548856428）</h3>
          <h3 v-show="btn2Show">欢迎拨打热线电话8888-8888咨询该车详细信息</h3>
        </modal>
      </div>
    </div>
    
    <div class="center">
      <img src="../../../../assets/img/goodsimg/center.png" alt="">
    </div>

    <div class="bottom">
      <h1>大众 捷达 2017款 1.5L 手动时尚型 基本信息</h1>
      <img src="../../../../assets/img/goodsimg/VW/VW1img/bottom.png" alt="">
      <img src="../../../../assets/img/goodsimg/VW/VW1img/bottom2.png" alt="">
    </div>
  </div>
</template>

<script>

  import Vw22Swiper from '../goods/goodSwiper/VW22swiper'
  import Modal from '@/components/common/Modal'

  export default {
    name:"VW2", 
    components: {
      Vw22Swiper,
      Modal
    },
    data () {
      return {
        isShow: false,
        btn1Show: false,
        btn2Show: false,
      }
    },
    methods: {
      btn1Click(){
        this.isShow = true
        this.btn1Show = true
        this.btn2Show = false
      },
      btn2Click(){
        this.isShow = true
        this.btn1Show = false
        this.btn2Show = true
      },
      hideModal() {
            // 取消弹窗回调
            this.isShow = false
            this.btn1Show = false
            this.btn2Show = false
        },

        submit() {
            // 确认弹窗回调
            this.isShow = false
            this.btn1Show = false
            this.btn2Show = false
        },
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