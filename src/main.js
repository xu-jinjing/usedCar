import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import { Button, Form, FormItem, Input, Checkbox, Image } from 'element-ui'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

// Vue.use(Button)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Input)
// Vue.use(Checkbox)
// Vue.use(Image)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
