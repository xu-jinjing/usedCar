<template>
    <div id="app">
    <div v-if="books.length" >
    <table>
      <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in books">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.date}}</td>
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
 <h2>总价格：{{totalPrice | showPrice}}</h2>
    </div>
    <h2 v-else>购物车为空</h2>
  </div>
</template>

<script>
  export default {
    name:"", 
    data () {
      return {
        books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price:85.50,
        count:0,
      },
      {
        id:2,
        name:'《Unix编程艺术》',
        date:'2008-9',
        price:98.00,
        count:0,
      },
      {
        id:3,
        name:'《编程珠玑》',
        date:'2003-9',
        price:59.00,
        count:0,
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2002-9',
        price:39.00,
        count:0,
      },
      {
        id:1,
        name:'《算法导论》',
        date:'2004-9',
        price:128.00,
        count:0,
      },
    ],
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
const num=[12,456,23,78,878,223,55,88,99,]

let total=num.filter(n => n<100).map(n => n*2).reduce((pre,n) => pre+n)
console.log(total);
  
</script>
<style scoped>
  table{
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;

}
th,td{
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
}

th{
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}

</style>