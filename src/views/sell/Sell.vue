<template>
  <div class="Sell">
    <tab-bar></tab-bar>
    <div class="Text">
      <h1>保卖服务</h1>
    </div>
    <div class="centerTopImg">
      <img src="../../assets/img/sellimg/centerTop.png" alt="">
    </div>
    <div class="Text">
      <h1>保卖流程</h1>
    </div>
    <div class="centerImg"> 
      <img src="../../assets/img/sellimg/center.png" alt="">
    </div>
    <div class="Text">
      <h1>最近成交</h1>
    </div>
    <div class="centerBottomImg">
      <img src="../../assets/img/sellimg/centerBottom.png" alt="">
    </div>
    <div class="Text">
      <h1>花生问答</h1>
    </div>
    <div class="centerBottomImg">
      <img src="../../assets/img/sellimg/bottom.png" alt="">
    </div>
  </div>
</template>

<script>

  import TabBar from '../../components/content/sellcomponents/tabbar/TabBar'

  export default {
    name:"Sell", 
    components: {
      TabBar,
    }
  }
</script>
<style scoped>
  .centerTopImg,.centerImg,.centerBottomImg{
    width: 100%;
  }
  .sell img {
    width: 100%;
  }
  .Text{
    text-align: center;
    color: rgb(6, 202, 6);
  }
</style>
