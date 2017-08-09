<template>
	<div class="bind">
		<ul class="bind-list">
			<li>已成功绑定，您可以使用QQ帐号直接登录Fly社区，当然，您也可以 <a href="">解除绑定</a></li>
			<li> <a href="">立即绑定</a> ，即可使用微博帐号登录Fly社区</li>
		</ul>
	</div>
</template>


<script type="text/javascript">
	export default{
		name:"bind",
		data(){
			return {

			}
		}
	}
</script>


<style type="text/css" lang="less">
	.bind{
		.bind-list{
			li{
				height:50px;
				line-height: 50px;
				font-size: 15px;
				color:#666;
				background-color: #f8f8f8;
				margin:15px 0;
				border-radius: 8px;
				
				box-sizing:border-box;
				padding:0 10px;
			}
		}
	}
</style>