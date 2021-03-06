<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide :key="item.id" v-for="item in swiperList" class="swiper-slide">
      <img :src="item.imgUrl" alt="">
      <span></span>
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
  </div>
</template>

<script>
  export default {
    name:"HomeSwiper", 
    data () {
      return {
        swiperOptions:{
          pagination:'.swiper-pagination',
          loop:true,
          autoplay:2000,
          effect:'coverflow',
        },
        swiperList:[
          {
            id:'001',
            imgUrl: require('../../../../../assets/img/goodsimg/VW//VW2img/1.jpg')
          },
          {
            id:'002',
            imgUrl: require('../../../../../assets/img/goodsimg/VW//VW2img/2.jpg')
          },
          {
            id:'003',
            imgUrl: require('../../../../../assets/img/goodsimg/VW//VW2img/3.jpg')
          },
          {
            id:'004',
            imgUrl: require('../../../../../assets/img/goodsimg/VW//VW2img/4.jpg')
          },
          {
            id:'005',
            imgUrl: require('../../../../../assets/img/goodsimg/VW//VW2img/5.jpg')
          },
          {
            id:'006',
            imgUrl: require('../../../../../assets/img/goodsimg/VW//VW2img/6.jpg')
          },
        ]
      }
    }
  }
</script>
<style scoped>
  .swiper{
    overflow: hidden;
    width: 100%;
    float: left;
  }

  /* .swiper-slide{text-align:center;} */

  .swiper-slide img{
    vertical-align:middle;
    width: 100%;
    height: 420px;
  }

  .swiper-slide span{width:0;height:100%;vertical-align:middle;display:inline-block;}


</style>