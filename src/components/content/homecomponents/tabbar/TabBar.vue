<template>
      <div class="nav" id="nav">
        <div class="box1">
            <p id="p1"><router-link to="/buy"><a href="">我要买车</a></router-link></p>
            <ul>
                <li><router-link to="/buy"><a href="">大众</a></router-link></li>
                <li><router-link to="/buy"><a href="">本田</a></router-link></li>
                <li><router-link to="/buy"><a href="">别克</a></router-link></li>
                <li><router-link to="/buy"><a href="">丰田</a></router-link></li>
                <li><router-link to="/buy"><a href="">福特</a></router-link></li>
                <li><router-link to="/buy"><a href="">日产</a></router-link></li>
                <li><router-link to="/buy"><a href="">宝马</a></router-link></li>
                <li><router-link to="/buy"><a href="">奔驰</a></router-link></li>
                <li><router-link to="/buy"><a href="">现代</a></router-link></li>
                <li><router-link to="/buy"><a href="">奥迪</a></router-link></li>
                <li><router-link to="/buy"><a href="">雪佛兰</a></router-link></li>
                <li><router-link to="/buy"><a href="">吉利</a></router-link></li>
                <li><router-link to="/buy"><a href="">哈弗</a></router-link></li>
                <li><router-link to="/buy"><a href="">比亚迪</a></router-link></li>
                <li><router-link to="/buy"><a href="">3万以下</a></router-link></li>
                <li><router-link to="/buy"><a href="">3-5万</a></router-link></li>
                <li><router-link to="/buy"><a href="">5-7万</a></router-link></li>
                <li><router-link to="/buy"><a href="">7-9万</a></router-link></li>
                <li><router-link to="/buy"><a href="">9-12万</a></router-link></li>
                <li><router-link to="/buy"><a href="">12-15万</a></router-link></li>
                <li><router-link to="/buy"><a href="">15万以上</a></router-link></li>
            </ul>
        </div>
        <div class="box2">
            <p id="p1"><router-link to="/sell"><a href="">我要卖车</a></router-link></p>
            <div class="s"><input type="text" placeholder="请输入您的手机号" id="t">
                <input type="button" value="预约卖车" id="btn2" @click="btnClick"></div>
                <ul id="u1">
                    <li id="l1"><router-link to="/sell"><a href="">爱车估价</a></router-link></li>
                    <li ><router-link to="/sell"><a href="">保卖服务</a></router-link></li>
                </ul>
        </div>
        <modal v-show="isShow" :title="title"  @hideModal="hideModal" @submit="submit">
          <h3>预约成功，正在通知最近工作人员与您联系验车</h3>
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
      }
    },
    methods: {
      btnClick(){
        this.isShow = true
      },
      hideModal() {
            // 取消弹窗回调
            this.isShow = false
        },

        submit() {
            // 确认弹窗回调
            this.isShow = false
        },
    }
  }
</script>
<style scoped>
    *{margin: 0;padding: 0;}
    *{list-style-type: none;}
    a{text-decoration: none;color: black;}
  .nav{margin-left: 40px;margin-right: 20px;height: 260px;}
    .nav .box1{width: 70%;height: 260px;float: left;background-color: aliceblue;}
        #p1{font-size: 28px;font-weight: bold;padding: 10px;}
        #p1 a:hover{color: green;}
        .box1 ul{margin-top: 20px;}
        .box1 ul li{float: left;margin: 0 20px 20px 20px;width: 80px;} 
        .box1 ul li a:hover{color: coral;}
    .nav .box2{width: 30%;height: 260px;float: left;background-color: aliceblue;position: relative;}
        .box2 .s{position: absolute;left: 10px;top: 80px;}
        #t{width: 250px;height: 40px;}
        #btn2{height: 42px;width: 100px;background-color: rgb(26, 235, 60);font-size: 16px;}
        #u1{position: absolute;top: 180px;left: 100px;border: 1px rgb(14, 173, 9) solid;
        background-color: rgb(210, 226, 210);}
        #u1 li{float: left;width: 80px;margin: 10px;}
        #u1 li a{color: green;}
        #u1 li a:hover{font-weight: bold;}
        #u1 #l1{border-right: 1px rgb(14, 173, 9) solid;}
        #t{
          font-size: 18px;
        }
</style>