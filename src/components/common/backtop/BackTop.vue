<template>
  <div class="footer" id="footer">
    <div class="back-top" @click ="backClick" v-show="isShowBackTop">
      <img src="../../../assets/img/backtop/backTop.jpg" alt="">
    </div>
  </div>
  
</template>

<script>
  export default {
    name:"BackTop",
     data() {
    return {
      isShowBackTop: false
    };
  },
  mounted() {
　　// 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
       let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 260 ? (this.isShowBackTop = true) : (this.isShowBackTop = false);
    },
    backClick() {
      
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  }

  }
</script>
<style scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
    z-index: 99999;
  }

  .back-top img{
    width: 60px;
    height: 80px;
  }
</style>
