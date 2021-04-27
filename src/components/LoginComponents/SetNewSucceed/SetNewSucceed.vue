<template>
  <!--    新密码设置成功-->
  <div class="succeed">
    <img src="../../../assets/img/login/succeed.png"/>
    <span class="set-succeed">新密码设置成功</span>
    <span class="jump" id="jump"></span>
  </div>
</template>

<script>

export default {
  name: "SetNewSucceed",
  mounted() {
    let second = 3;
    const jump = document.getElementById('jump');
    jump.innerHTML = second + '秒后跳转登录页';
    const checkTime = setInterval(function () {
      second--;
      if (second >= 0) {
        jump.innerHTML = second + '秒后跳转登录页';
      } else {
        clearInterval(checkTime);
        second = 3;
      }
    }, 1000);
  }
}
</script>

<style scoped>
.succeed{
  width: 420px;
  height: 300px;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
  border-radius: 8px;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -210px;
}

.succeed img{
  margin-left: 174px;
  margin-top: 72px;
}

.set-succeed{
  width: 140px;
  height: 24px;
  display: block;
  font-size: 20px;
  color: #1A1A1A;
  text-align: center;
  line-height: 24px;
  margin-top: 20px;
  margin-left: 140px;
}

.jump{
  width: 122px;
  height: 16px;
  display: block;
  font-size: 16px;
  color: #8A8A8A;
  text-align: center;
  line-height: 16px;
  margin-top: 12px;
  margin-left: 149px;
}
</style>
