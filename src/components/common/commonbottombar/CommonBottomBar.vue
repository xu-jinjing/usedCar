<template>
	<div class="bottom-bar">
		<div class="web-about">
			<div class="center-box">
				<ul class="buy-guide">
					购物指南
					<li>注册与登录</li>
					<li>购买流程</li>
					<li>订货周期</li>
					<li>隐私保护</li>
				</ul>
				<ul class="serve">
					服务保障
					<li>正品保障</li>
					<li>价格优势</li>
					<li>真假鉴别</li>
					<li>预约体验</li>
				</ul>
				<ul class="send">
					授课方式
					<li>授课说明</li>
					<li>时长说明</li>
					<li>课程说明</li>
				</ul>
				<ul class="sale">
					售后服务
					<li>售后咨询</li>
					<li>发票保障</li>
					<li>常见问题</li>
				</ul>
				<ul class="news">
					资讯新闻
					<li>网站新闻</li>
					<li>商品动态</li>
					<li>法律知识</li>
				</ul>
				<ul class="about">
					关于我们
					<li>关于我们</li>
					<li>招贤纳士</li>
					<li>商务合作</li>
				</ul>
				<ul>
					联系我们:
					<li><i class="el-icon-phone"></i>0000000000</li>
					<!-- <li><img src="../../assets/logo.png" alt=""></li> -->
				</ul>
			</div>
		</div>
		<div class="info" :style="{'background':bottomColor}">
			<div class="center-box">
				<p>本站所有产品图片均来自网络以及用户上传，其他可能用到的图片来自网络，如有侵权，请联系我们。</p>
				<p>严正申明，凡盗用官网、公众号、自媒体等平台图片及资料进行虚假宣传，一经发现必追究其法律责任。</p>
				<p>京公网安备 41564654546号 京ICP备25484521555号-2 营业执照</p>
				<p>Copyright © 2021  All rights reserved.</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bottomColor: '',
			}
		},
		methods: {}
	}
</script>

<style scoped="scoped" lang="less">
	.web-about {
		width: 100%;
		height: 200px;
		background-color: #e8e8e8;

		.center-box {
			width: 1200px;
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
			align-items: flex-start;

			ul {
				font-size: 18px;
				font-weight: bold;
				padding: 20px 0 0 0;

				li {
					font-size: 14px;
					padding: 10px 0;
					font-weight: normal;
					cursor: pointer;
				}

				img {
					width: 150px;
					margin-left: -30px;
				}
			}

		}

	}

	.info {

		width: 100%;
		background-color: #181717;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		color: gray;

		.center-box {
			width: 1200px;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>
