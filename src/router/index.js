import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Buy = () => import('../views/buy/Buy.vue')
  const Every = () => import('../components/content/buycomponents/bottombar/Every.vue')
  const VW = () => import('../components/content/buycomponents/bottombar/VWdazhong.vue')
  const HMC = () => import('../components/content/buycomponents/bottombar/HMCbentian.vue')
  const Buick = () => import('../components/content/buycomponents/bottombar/Buick.vue')
  const Toyota = () => import('../components/content/buycomponents/bottombar/ToyotaFengtian.vue')
  const Ford = () => import('../components/content/buycomponents/bottombar/Ford.vue')
  const BMW = () => import('../components/content/buycomponents/bottombar/BMW.vue')
  const Benz = () => import('../components/content/buycomponents/bottombar/Benz.vue')
  const Modern = () => import('../components/content/buycomponents/bottombar/ModernXiandai.vue')
  const Audi = () => import('../components/content/buycomponents/bottombar/Audi.vue')
  const Chevy = () => import('../components/content/buycomponents/bottombar/ChevyXuefulan.vue')
  const Geely = () => import('../components/content/buycomponents/bottombar/Geely.vue')
  const Lincoln = () => import('../components/content/buycomponents/bottombar/Lincoln.vue')
  const BYD = () => import('../components/content/buycomponents/bottombar/BYD.vue')

    const Th = () => import('../components/content/buycomponents/price/Three.vue')
    const TtF = () => import('../components/content/buycomponents/price/ThreeToFive.vue')
    const FtS = () => import('../components/content/buycomponents/price/FiveToSeven.vue')
    const StN = () => import('../components/content/buycomponents/price/SevenToNine.vue')
    const NtT = () => import('../components/content/buycomponents/price/NineToTwelve.vue')
    const TWtFIF = () => import('../components/content/buycomponents/price/TwelveToFifteen.vue')
    const FIF = () => import('../components/content/buycomponents/price/Fifteen.vue')


const Sell = () => import('../views/sell/Sell.vue')
const Service = () => import('../views/service/Service.vue')
const Enter = () => import('../views/enter/Enter.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/buy',
    component: Buy,
    children:[
      {
        path:'/',
        component:Every
      },
      {
        path:'every',
        component: Every,
      },
      {
        path:'VW',
        component: VW,
      },
      {
        path:'HMC',
        component: HMC
      },
      {
        path:'Buick',
        component: Buick
      },
      {
        path:'Toyota',
        component: Toyota
      },
      {
        path:'Ford',
        component: Ford
      },
      {
        path:'BMW',
        component: BMW
      },
      {
        path:'Benz',
        component: Benz
      },
      {
        path:'Modern',
        component: Modern
      },
      {
        path:'Audi',
        component: Audi
      },
      {
        path:'Chevy',
        component: Chevy
      },
      {
        path:'Geely',
        component: Geely
      },
      {
        path:'Lincoln',
        component: Lincoln
      },
      {
        path:'BYD',
        component: BYD
      },
      {
        path:'3万以下',
        component: Th
      },
      {
        path:'3-5万',
        component: TtF
      },
      {
        path:'5-7万',
        component: FtS
      },
      {
        path:'7-9万',
        component: StN
      },
      {
        path:'9-12万',
        component: NtT
      },
      {
        path:'12-15万',
        component: TWtFIF
      },
      {
        path:'15万以上',
        component: FIF
      },
    ]
  },
  {
    path:'/sell',
    component: Sell
  },
  {
    path:'/service',
    component: Service
  },
  {
    path:'/enter',
    component: Enter
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  base: process.env.BASE_URL,
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
