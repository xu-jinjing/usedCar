<template>
  <div class="home">
    <home-swiper></home-swiper>
    <tab-bar></tab-bar>
    <bottom-bar></bottom-bar>
    
  </div>
</template>

<script>
// @ is an alias to /src

import HomeSwiper from '@/components/common/homecomponents/swiper/Swiper'

import TabBar from '@/components/content/homecomponents/tabbar/TabBar'
import BottomBar from '@/components/content/homecomponents/bottombar/BottomBar'


export default {
  name: 'Home',
  components: {
    
    HomeSwiper,
    TabBar,
    BottomBar
  }
}
</script>
