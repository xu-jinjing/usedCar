<template>
  <div class="TabBar">
    <div class="h1">
      <h1>花生三手车，三手车圈开拓者</h1>
    </div>
    <div class="button">
      <input type="text" placeholder="请输入手机号码，14628车主已提交" id="txt">
      <!-- <input type="button" value="高价卖车" id="btn"> -->
      <button id="btn" @click="btn1Click">高价卖车</button>
      <button id="btn" @click="btn2Click">爱车估价</button>
    </div>
    <modal v-show="isShow" :title="title"  @hideModal="hideModal" @submit="submit">
          <h3 v-show="errShow">请输入正确手机号</h3>
          <h3 v-show="wordShow">预约成功，正在通知最近工作人员与您联系验车</h3>
          <h4 v-show="countShow">您的爱车预估价为{{price}}元</h4>
    </modal>
  </div>
</template>

<script>
  import Modal from '@/components/common/Modal'
  export default {
    name:"TabBar", 
    components: {
      Modal
    },
    data () {
      return {
        title:'提示页面',
        isShow: false,
        wordShow: true,
        countShow: false,
        errShow: false,
        price: 0
      }
    },
    
    methods: {
      btn1Click(){
        this.isShow = true
        if(document.getElementById("txt").value >= 10000000000 && document.getElementById("txt").value <= 100000000000){
          this.wordShow = true
          this.errShow = false
        }else{
          this.errShow = true
          this.wordShow = false
        }
      },
      btn2Click(){
        this.isShow = true
        if(document.getElementById("txt").value >= 10000000000 && document.getElementById("txt").value <= 100000000000){
          this.price = parseInt(document.getElementById("txt").value/360000);
          this.countShow = true
          this.errShow = false
          this.wordShow = false
        }else{
          this.errShow = true
          this.countShow = false
        }
      },
      hideModal() {
            // 取消弹窗回调
            this.isShow = false
            this.wordShow = false
            this.countShow = false
        },

        submit() {
            // 确认弹窗回调
            this.isShow = false
            this.wordShow = false
            this.countShow = false
        },
    }
  }
</script>
<style scoped>
  .TabBar{
    width: 100%;
    height: 460px;
    background: url('https://wallpaperm.cmcm.com/b6fa4e1721ac2dcf5b5f1be3cfdc68e3.jpg') no-repeat;
    background-size: cover;
  }

  .h1{
    text-align: center;
    font-size: 24px;
  }
  .button{
    text-align: center;
  }

  .button #txt{
    width: 500px;
    height: 50px;
    line-height: 50px;
    margin-top: 100px;
    font-size: 20px;
  }

  #txt placeholder{
    line-height: 50px;
  }

  .button #btn{
    width: 100px;
    height: 52px;
    color: white;
    background-color: rgb(26, 235, 60);
    font-size: 18px;
  }
</style>