<template>
  <div class="waist" id="waist">
    <p><h1>热卖车型</h1></p>
        <ul>
            <li id="one" @click="oneClick">全部</li>
            <li id="two" @click="twoClick">付三成</li>
            <li id="three" @click="threeClick">严选车</li>
        </ul>
        <div id="d2">
            <div class="box" id="box">
                <dl>
                    <dt><router-link to="/HMC1"><img src="../../../../assets/img/goodsimg/HMC/1/1.jpg"/></router-link></dt>
                    <dd>
                       <h3>本田XR-V 2015款 ￥8.20万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/nj/af5e718a189ab04ex.htm#fr_page=list&fr_pos=city&fr_no=1">
                        <img src="../../../../assets/img/goodsimg/HMC/2/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 雅阁 2014款 ￥10.21万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/sjz/d37628a1d65874c4x.htm#fr_page=list&fr_pos=city&fr_no=4">
                        <img src="../../../../assets/img/goodsimg/HMC/3/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 缤智 2015款 ￥8.92万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/sz/29b3094ed8745921x.htm#fr_page=list&fr_pos=city&fr_no=6">
                        <img src="../../../../assets/img/goodsimg/HMC/4/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田CR-V 2013款 ￥11.93万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/changzhou/f808b97e17307f9bx.htm#fr_page=list&fr_pos=city&fr_no=8">
                    <img src="../../../../assets/img/goodsimg/HMC/5/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 杰德 2016款 ￥8.96万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/yichang/2782231afc3e8625x.htm#fr_page=list&fr_pos=city&fr_no=10">
                        <img src="../../../../assets/img/goodsimg/HMC/6/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 缤智 2015款 ￥9.45万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/hz/56cd7a5dc6a6ef88x.htm#fr_page=list&fr_pos=city&fr_no=14">
                        <img src="../../../../assets/img/goodsimg/HMC/7/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 思域 2016款 ￥10.88万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/nj/99d49e765a226818x.htm#fr_page=list&fr_pos=city&fr_no=16">
                        <img src="../../../../assets/img/goodsimg/HMC/8/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田XR-V 2017款 ￥9.00万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/cq/0c0e1bb4ce2b3860x.htm#fr_page=list&fr_pos=city&fr_no=26">
                        <img src="../../../../assets/img/goodsimg/HMC/9/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 思域 2016款 ￥11.00万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/cd/15672646039ca3efx.htm#fr_page=list&fr_pos=city&fr_no=30">
                        <img src="../../../../assets/img/goodsimg/HMC/10/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 思域 2016款 220TURBO CVT尊贵版 ￥11.11万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/nj/ab32378460b80955x.htm#fr_page=list&fr_pos=city&fr_no=39">
                        <img src="../../../../assets/img/goodsimg/HMC/11/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 飞度 2014款 ￥4.50万</h3>
                        <br/>
                        </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/foshan/012460337fd4dabbx.htm#fr_page=list&fr_pos=city&fr_no=9">
                        <img src="../../../../assets/img/goodsimg/HMC/12/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 艾力绅 2016款 ￥22.23万</h3>
                        <br/>
                        </dd>
                </dl>
            </div>
        </div>
        <div id="d1">
            <div class="box" id="box">
                <dl>
                    <dt><router-link to="/HMC21"><img src="../../../../assets/img/goodsimg/HMC/13/1.jpg"/></router-link>
                        </dt>
                    <dd>
                       <h3>本田 思域 2016款 ￥9.98万</h3>
                        <br/>
                        </dd>
                </dl>
            </div>
           <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/sjz/d37628a1d65874c4x.htm#fr_page=list&fr_pos=city&fr_no=4">
                        <img src="../../../../assets/img/goodsimg/HMC/3/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 缤智 2015款 ￥8.92万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
             <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/nj/99d49e765a226818x.htm#fr_page=list&fr_pos=city&fr_no=16">
                        <img src="../../../../assets/img/goodsimg/HMC/8/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田XR-V 2017款 ￥9.00万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/cq/0c0e1bb4ce2b3860x.htm#fr_page=list&fr_pos=city&fr_no=26">
                        <img src="../../../../assets/img/goodsimg/HMC/9/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 思域 2016款 ￥11.00万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/cd/15672646039ca3efx.htm#fr_page=list&fr_pos=city&fr_no=30">
                        <img src="../../../../assets/img/goodsimg/HMC/10/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 思域 2016款 220TURBO CVT尊贵版 ￥11.11万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><router-link to="/HMC31"><img src="../../../../assets/img/goodsimg/HMC/25/1.jpg"/></router-link></dt>
                    <dd>
                       <h3>本田UR-V 2017款 ￥21.76万</h3>
                        <br/>
                        </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/yichang/2782231afc3e8625x.htm#fr_page=list&fr_pos=city&fr_no=10">
                        <img src="../../../../assets/img/goodsimg/HMC/6/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 缤智 2015款 ￥9.45万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/hz/56cd7a5dc6a6ef88x.htm#fr_page=list&fr_pos=city&fr_no=14">
                        <img src="../../../../assets/img/goodsimg/HMC/7/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 思域 2016款 ￥10.88万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/nj/99d49e765a226818x.htm#fr_page=list&fr_pos=city&fr_no=16">
                        <img src="../../../../assets/img/goodsimg/HMC/8/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田XR-V 2017款 ￥9.00万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
           <div class="box" id="box">
                <dl>
                    <dt><router-link to="/HMC1"><img src="../../../../assets/img/goodsimg/HMC/1/1.jpg"/></router-link></dt>
                    <dd>
                       <h3>本田XR-V 2015款 ￥8.20万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
           <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/nj/99d49e765a226818x.htm#fr_page=list&fr_pos=city&fr_no=16">
                        <img src="../../../../assets/img/goodsimg/HMC/8/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田XR-V 2017款 ￥9.00万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/cq/0c0e1bb4ce2b3860x.htm#fr_page=list&fr_pos=city&fr_no=26">
                        <img src="../../../../assets/img/goodsimg/HMC/9/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 思域 2016款 ￥11.00万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
        </div>
        <div id="d3">
            <div class="box" id="box">
                <dl>
                    <dt><router-link to="/HMC31"><img src="../../../../assets/img/goodsimg/HMC/25/1.jpg"/></router-link></dt>
                    <dd>
                       <h3>本田UR-V 2017款 ￥21.76万</h3>
                        <br/>
                        </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/yichang/2782231afc3e8625x.htm#fr_page=list&fr_pos=city&fr_no=10">
                        <img src="../../../../assets/img/goodsimg/HMC/6/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 缤智 2015款 ￥9.45万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/hz/56cd7a5dc6a6ef88x.htm#fr_page=list&fr_pos=city&fr_no=14">
                        <img src="../../../../assets/img/goodsimg/HMC/7/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 思域 2016款 ￥10.88万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/nj/99d49e765a226818x.htm#fr_page=list&fr_pos=city&fr_no=16">
                        <img src="../../../../assets/img/goodsimg/HMC/8/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田XR-V 2017款 ￥9.00万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
             <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/nj/99d49e765a226818x.htm#fr_page=list&fr_pos=city&fr_no=16">
                        <img src="../../../../assets/img/goodsimg/HMC/8/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田XR-V 2017款 ￥9.00万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/cq/0c0e1bb4ce2b3860x.htm#fr_page=list&fr_pos=city&fr_no=26">
                        <img src="../../../../assets/img/goodsimg/HMC/9/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 思域 2016款 ￥11.00万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/cd/15672646039ca3efx.htm#fr_page=list&fr_pos=city&fr_no=30">
                        <img src="../../../../assets/img/goodsimg/HMC/10/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 思域 2016款 220TURBO CVT尊贵版 ￥11.11万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/nj/ab32378460b80955x.htm#fr_page=list&fr_pos=city&fr_no=39">
                        <img src="../../../../assets/img/goodsimg/HMC/11/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 飞度 2014款 ￥4.50万</h3>
                        <br/>
                        </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/foshan/012460337fd4dabbx.htm#fr_page=list&fr_pos=city&fr_no=9">
                        <img src="../../../../assets/img/goodsimg/HMC/12/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 艾力绅 2016款 ￥22.23万</h3>
                        <br/>
                        </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><router-link to="/HMC1"><img src="../../../../assets/img/goodsimg/HMC/1/1.jpg"/></router-link></dt>
                    <dd>
                       <h3>本田XR-V 2015款 ￥8.20万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/nj/af5e718a189ab04ex.htm#fr_page=list&fr_pos=city&fr_no=1">
                        <img src="../../../../assets/img/goodsimg/HMC/2/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 雅阁 2014款 ￥10.21万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
            <div class="box" id="box">
                <dl>
                    <dt><a href="https://www.guazi.com/sjz/d37628a1d65874c4x.htm#fr_page=list&fr_pos=city&fr_no=4">
                        <img src="../../../../assets/img/goodsimg/HMC/3/1.jpg"/></a></dt>
                    <dd>
                       <h3>本田 缤智 2015款 ￥8.92万</h3>
                        <br/>
                    </dd>
                </dl>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name:"BottomBar", 
    methods: {
      oneClick(){
        
        document.getElementById("d1").style.display="block";
        document.getElementById("d2").style.display="none";
        document.getElementById("d3").style.display="none";
      },
      twoClick(){
        document.getElementById("d2").style.display="block";
        document.getElementById("d1").style.display="none";
        document.getElementById("d3").style.display="none";
      },
      threeClick(){
        document.getElementById("d3").style.display="block";
        document.getElementById("d1").style.display="none";
        document.getElementById("d2").style.display="none";
      },
    }
  }
</script>
<style scoped>

    *{list-style-type: none;}
    a{text-decoration: none;color: black;}
  .waist{margin-top: 50px;background-color: rgb(241, 238, 234);width: 1309px;height: 1100px;padding-left: 40px;
            padding-top: 38px;overflow: hidden;}
            .waist ul{height: 50px;margin-top: 20px;}
            .waist ul li{float: left;width: 100px;margin: 10px;}
            .waist ul li a{color: gray;}
            .waist ul li a:hover{color: black;}
            .box dt img{margin-top: 0; width: 280px; height: 190px;}
            .box dd{margin: 0 1px; text-align: center;}
            .box{width: 280px;height: 260px;margin: 15px;float: left;}
            #d2 .box{width: 280px;height: 260px;margin: 15px;float: left;}
            #d3 .box{width: 280px;height: 260px;margin: 15px;float: left;}
            #d2,#d3{display: none;}
</style>
