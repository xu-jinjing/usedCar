<template>
<div class="Buy">
  <div class="nav" id="nav">
    <div class="box1">
        <ul>
            <li>品牌</li>
            <li><router-link to="/buy/every">不限</router-link></li>
            <li><router-link to="/buy/VW">大众</router-link></li>
            <li><router-link to="/buy/HMC">本田</router-link></li>
            <li><router-link to="/buy/Buick">别克</router-link></li>
            <li><router-link to="/buy/Toyota">丰田</router-link></li>
            <li><router-link to="/buy/Ford">福特</router-link></li>
            <li><router-link to="/buy/BMW">宝马</router-link></li>
            <li><router-link to="/buy/Benz">奔驰</router-link></li>
            <li><router-link to="/buy/Modern">现代</router-link></li>
            <li><router-link to="/buy/Audi">奥迪</router-link></li>
            <li></li>
            <li><router-link to="/buy/Chevy">雪佛兰</router-link></li>
            <li><router-link to="/buy/Geely">吉利</router-link></li>
            <li><router-link to="/buy/Lincoln">林肯</router-link></li>
            <li><router-link to="/buy/BYD">比亚迪</router-link></li>
        </ul>
        
    </div>
        <div class="box2">
            <ul>
                <li>价格</li>
                <li><router-link to="/buy/every">不限</router-link></li>
                <li><router-link to="/buy/3万以下">3万以下</router-link></li>
                <li><router-link to="/buy/3-5万">3-5万</router-link></li>
                <li><router-link to="/buy/5-7万">5-7万</router-link></li>
                <li><router-link to="/buy/7-9万">7-9万</router-link></li>
                <li><router-link to="/buy/9-12万">9-12万</router-link></li>
                <li><router-link to="/buy/12-15万">12-15万</router-link></li>
                <li><router-link to="/buy/15万以上">15万以上</router-link></li>
            </ul>
        </div>
        <router-view></router-view>
   </div>
</div>
</template>

<script>

  export default {
    name:"Buy", 
    components: {
    },
     activated () {
    this.$router.push(this.path)
  },
  // //组件内守卫
  beforeRouteLeave (to, from, next) {
  this.path = this.$route.path
  next()
}
  }
</script>
<style scoped>
 *{margin: 0;padding: 0;}
    *{list-style-type: none;}
    a{text-decoration: none;color: black;}
  .nav{margin-left: 20px;margin-right: 20px;height: 160px;}
    .nav .box1{width: 100%;float: left;background-color: aliceblue;}
        .box1 ul{margin-top: 10px; width: 1300px}
        .box1 ul li{float: left;margin: 0 20px 20px 20px;width: 70px;} 
        .box1 ul li a:hover{color: coral;}
    .nav .box2{width: 100%;float: left;background-color: aliceblue;}
        .box2 ul{margin-top: 10px;}
        .box2 ul li{float: left;margin: 0 20px 20px 20px;width: 70px;} 
        .box2 ul li a:hover{color: coral;}

    .router-link-active{color: coral ;}

</style>
