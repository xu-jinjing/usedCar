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

  </div>
</template>

<script>
  export default {
    name:"TabBar", 
    methods: {
      btn1Click(){
        alert("预约成功，正在通知最近工作人员与您联系验车")
      },
      btn2Click(){
        let price = 0;
        price = parseInt(document.getElementById("txt").value/200000);
        alert("您的爱车预估价为"+price +"元")
      }
    }
  }
</script>
<style scoped>
  .TabBar{
    width: 100%;
    height: 360px;
    background-color:aqua;
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
  }

  #txt placeholder{
    line-height: 50px;
  }

  .button #btn{
    width: 100px;
    height: 52px;
    color: white;
    background-color: rgb(26, 235, 60);
  }
</style>