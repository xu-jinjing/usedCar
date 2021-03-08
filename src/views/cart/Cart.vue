<template>
    <div id="app">
      <div  id="goods">
        <div v-for="(good,index) in goods" id="good">
          <dl>
          <dt><img :src="good.imgUrl"></dt>
          <dd>
            <span id="p1">{{good.name}}</span>
            <span id="p2">￥{{good.price}}</span>
            <button id="btn" @click="pushHandel(index)">加入购物车</button>
          </dd>
        </dl>
        
        </div>

      </div>
    <div v-if="books.length" class="cart">
      <h1>购物车</h1>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>商品名称</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in books">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price | showPrice}}</td>
          <td>
            <button @click="decrement(index)" v-bind:disabled="item.count <=0">-</button>
            {{item.count}}
            <button @click="increment(index)">+</button>
          </td>
          <td><button @click="removeHandel(index)">移除</button></td>
        </tr>
      </tbody>
  </table>
    <div id="allPrice">
      <h1>总价格：{{totalPrice | showPrice}}</h1><button id="btn2">立即结算</button>
    </div>

    </div>
    <div v-else class="null">
      <h1>购物车</h1>
      <h2 >购物车为空</h2>
    </div>
      
  </div>
</template>

<script>
  export default {
    name:"Cart", 
    data () {
      return {
        books:[],
        goods:[
          {
            id:1,
            imgUrl:'https://tse2-mm.cn.bing.net/th/id/OIP.wI3t0kHCYZsuDXJ42R7afQHaHa?w=176&h=180&c=7&o=5&pid=1.7',
            name:'车载吸尘器',
            price:19.9,
            count:1,
          },
          {
            id:2,
            imgUrl:'https://tse1-mm.cn.bing.net/th/id/OIP.LwfzciSVbIKintaxs1-nVQHaE2?w=274&h=180&c=7&o=5&pid=1.7',
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:3,
            imgUrl:'../../assets/img/cartimg/1.jpg',
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:4,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:5,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:6,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:7,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:8,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:9,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:10,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:11,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:12,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:13,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:14,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
          {
            id:15,
            imgUrl:"../../assets/img/backtop/backTop.jpg",
            name:'汽车盖布',
            price:12.82,
            count:1,
          },
        ]
      }
    },
  methods: {
    increment(index){
     this.books[index].count++
    },
    decrement(index){
     this.books[index].count--
    },
    removeHandel(index){
     this.books.splice(index,1)
    },
    pushHandel(index){
      this.books.push(this.goods[index]) 
    }
  },
  computed: {
    totalPrice(){
      return this.books.reduce(function(pre,book){
        return pre +book.price*book.count
      },0)
    },
  },
  filters: {
    showPrice(price){
      return '¥'+price.toFixed(2)
    }
  } 
  
}

  
</script>
<style scoped>
  
  table{
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
  width: 900px;
  margin: 0 auto;
  }

  #allPrice{
    margin-left: 300px;
    margin-bottom: 200px;
  }
  th,td{
  padding: 8px 55px;
  border: 1px solid #e9e9e9;
  }

  th{
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  }

  #goods{
  width: 100%;
  height: 800px;
  display: flex;
  flex-flow: wrap;
  }

  dl{
  width: 180px;
  height: 200px;
  background-color: rgb(231, 225, 225);
  flex: 1;
  border: 1px black solid;
  margin-left: 70px;
  padding: 10px 0;
  position: relative;
  }
  dl img{
    width: 180px;
    height: 130px;
  }

  dl #p1{
    position: absolute;
    left: 10px;
    font-weight: 400;
  }
  dl #p2{
    position: absolute;
    right: 20px;
    color: orangered;
  }
  #btn{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 180px;
    height: 40px;
  }

  .cart{
    width: 1000px;
    margin: 100px auto;
    position: relative;
    padding-bottom: 300px;
  }
  .cart h1{
    font-size: 36px;
    text-align: center;
  }
  .null{
    width: 900px;
    height: 500px;
    margin: 100px auto;
  }
  .null h1{
    font-size: 36px;
    text-align: center;
  }
  #allPrice{
    position: absolute;
    right: 50px;
  }
  #btn2{
    position: absolute;
    width: 150px;
    height: 40px;
    right: 60px;
    background-color:rgb(214, 66, 8);
    color: white;
    font-size: 18px;
    border-radius: 10px;
  }
</style>